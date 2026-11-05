"use client";

import { ImagePlus, LoaderCircle, RefreshCw, X } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";

import type { ReportEvidence } from "@/lib/types/report";
import { cn } from "@/lib/utils/cn";
import { prepareImageFile } from "@/lib/utils/image";

import { Notice } from "./Notice";

export interface ImageUploaderProps {
  value: ReportEvidence[];
  onChange: (next: ReportEvidence[]) => void;
  maxImages?: number;
  maxSizeMb?: number;
  acceptedTypes?: string[];
  disabled?: boolean;
  className?: string;
}

function createEvidenceId(): string {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }

  return `ev-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

export function ImageUploader({
  value,
  onChange,
  maxImages = 3,
  maxSizeMb = 5,
  acceptedTypes = ["image/jpeg", "image/png", "image/webp"],
  disabled = false,
  className,
}: ImageUploaderProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const replaceTargetRef = useRef<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  const canAdd = value.length < maxImages && !disabled && !busy;

  function openPicker(replaceId: string | null = null) {
    replaceTargetRef.current = replaceId;
    inputRef.current?.click();
  }

  async function handleFiles(
    files: FileList | null,
    replaceId: string | null,
  ) {
    if (!files || files.length === 0) return;

    const selected = Array.from(files);
    const slots = maxImages - value.length + (replaceId ? 1 : 0);

    if (selected.length > slots) {
      setError(
        replaceId
          ? "Mỗi ảnh chỉ thay thế được bằng một ảnh khác."
          : `Chỉ có thể thêm ${slots} ảnh nữa. Tối đa ${maxImages} ảnh.`,
      );
      return;
    }

    for (const file of selected) {
      if (!acceptedTypes.includes(file.type)) {
        setError(
          `"${file.name}" không phải định dạng được hỗ trợ. Chọn ảnh JPG, PNG hoặc WebP.`,
        );
        return;
      }

      if (file.size > maxSizeMb * 1024 * 1024) {
        setError(`"${file.name}" vượt quá ${maxSizeMb} MB.`);
        return;
      }
    }

    setError(null);
    setBusy(true);

    try {
      if (replaceId) {
        const file = selected[0];
        const prepared = await prepareImageFile(file);
        onChange(
          value.map((item) =>
            item.id === replaceId
              ? {
                  id: replaceId,
                  name: file.name,
                  type: prepared.type,
                  size: prepared.size,
                  dataUrl: prepared.dataUrl,
                }
              : item,
          ),
        );
        return;
      }

      const prepared = await Promise.all(
        selected.map(async (file) => ({
          file,
          image: await prepareImageFile(file),
        })),
      );

      onChange([
        ...value,
        ...prepared.map(({ file, image }) => ({
          id: createEvidenceId(),
          name: file.name,
          type: image.type,
          size: image.size,
          dataUrl: image.dataUrl,
        })),
      ]);
    } catch {
      setError("Không thể đọc ảnh đã chọn. Vui lòng thử lại.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className={cn("space-y-3", className)}>
      <input
        ref={inputRef}
        type="file"
        accept={acceptedTypes.join(",")}
        multiple
        className="sr-only"
        onChange={(event) => {
          const files = event.target.files;
          const replaceId = replaceTargetRef.current;
          replaceTargetRef.current = null;
          event.target.value = "";
          void handleFiles(files, replaceId);
        }}
      />

      {value.length === 0 ? (
        <button
          type="button"
          onClick={() => openPicker()}
          disabled={disabled || busy}
          className="flex w-full flex-col items-center gap-1.5 rounded-card border border-dashed border-outline/45 bg-surface px-4 py-7 text-center transition-colors hover:border-primary/50 hover:bg-primary/4 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {busy ? (
            <LoaderCircle
              aria-hidden
              strokeWidth={1.5}
              className="size-6 animate-spin text-primary motion-reduce:animate-none"
            />
          ) : (
            <ImagePlus
              aria-hidden
              strokeWidth={1.5}
              className="size-6 text-primary"
            />
          )}
          <span className="text-body font-medium text-primary">
            Chọn ảnh từ thiết bị
          </span>
          <span className="text-caption text-on-surface/55">
            Tối đa {maxImages} ảnh, mỗi ảnh {maxSizeMb} MB
          </span>
        </button>
      ) : (
        <div className="grid grid-cols-3 gap-2">
          {value.map((image, index) => (
            <div
              key={image.id}
              className="relative aspect-square overflow-hidden rounded-control border border-outline/25 bg-surface-variant"
            >
              <Image
                src={image.dataUrl}
                alt={`Ảnh đính kèm ${index + 1}: ${image.name}`}
                fill
                unoptimized
                sizes="(max-width: 430px) 30vw, 128px"
                className="object-cover"
              />
              <button
                type="button"
                onClick={() => onChange(value.filter((item) => item.id !== image.id))}
                disabled={disabled || busy}
                aria-label={`Xóa ảnh ${index + 1}`}
                className="absolute right-1 top-1 grid size-7 place-items-center rounded-full bg-on-surface/65 text-surface transition-colors hover:bg-on-surface/80 disabled:opacity-50"
              >
                <X aria-hidden strokeWidth={1.5} className="size-3.5" />
              </button>
              <button
                type="button"
                onClick={() => openPicker(image.id)}
                disabled={disabled || busy}
                className="absolute inset-x-1 bottom-1 flex h-7 items-center justify-center gap-1 rounded-full bg-surface/95 text-caption font-medium text-primary transition-colors hover:bg-surface disabled:opacity-50"
              >
                <RefreshCw aria-hidden strokeWidth={1.5} className="size-3" />
                Thay thế
              </button>
            </div>
          ))}

          {canAdd && (
            <button
              type="button"
              onClick={() => openPicker()}
              className="flex aspect-square flex-col items-center justify-center gap-1 rounded-control border border-dashed border-outline/45 bg-surface text-on-surface/55 transition-colors hover:border-primary/50 hover:bg-primary/4 hover:text-primary"
            >
              <ImagePlus aria-hidden strokeWidth={1.5} className="size-5" />
              <span className="text-caption">Thêm ảnh</span>
            </button>
          )}
        </div>
      )}

      <p className="text-caption text-on-surface/55">
        {value.length}/{maxImages} ảnh đã chọn
      </p>

      {error && (
        <Notice tone="error">{error}</Notice>
      )}
    </div>
  );
}
