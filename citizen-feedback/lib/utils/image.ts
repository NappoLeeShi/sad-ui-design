const MAX_DIMENSION = 1280;
const JPEG_QUALITY = 0.82;

export interface PreparedImage {
  dataUrl: string;
  type: string;
  size: number;
}

function readAsDataUrl(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result));
    reader.onerror = () => reject(new Error("Không đọc được tệp ảnh."));
    reader.readAsDataURL(file);
  });
}

function estimateDataUrlBytes(dataUrl: string): number {
  const base64 = dataUrl.split(",")[1] ?? "";
  return Math.round((base64.length * 3) / 4);
}

/**
 * Reads an image and downscales it for `localStorage` persistence.
 * Falls back to the original data URL when canvas/bitmap is unavailable.
 */
export async function prepareImageFile(file: File): Promise<PreparedImage> {
  const original = await readAsDataUrl(file);
  const fallback: PreparedImage = {
    dataUrl: original,
    type: file.type,
    size: estimateDataUrlBytes(original),
  };

  if (typeof createImageBitmap !== "function") return fallback;

  try {
    const bitmap = await createImageBitmap(file);
    const scale = Math.min(
      1,
      MAX_DIMENSION / Math.max(bitmap.width, bitmap.height),
    );

    if (scale === 1 && file.size <= 900_000) {
      bitmap.close();
      return fallback;
    }

    const width = Math.max(1, Math.round(bitmap.width * scale));
    const height = Math.max(1, Math.round(bitmap.height * scale));
    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;

    const context = canvas.getContext("2d");
    if (!context) {
      bitmap.close();
      return fallback;
    }

    context.drawImage(bitmap, 0, 0, width, height);
    bitmap.close();

    const compressed = canvas.toDataURL("image/jpeg", JPEG_QUALITY);
    return {
      dataUrl: compressed,
      type: "image/jpeg",
      size: estimateDataUrlBytes(compressed),
    };
  } catch {
    return fallback;
  }
}
