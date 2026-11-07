"use client";

import { LocateFixed, MapPin } from "lucide-react";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type KeyboardEvent,
  type PointerEvent,
} from "react";

import { Button } from "@/components/ui/Button";
import { Dialog } from "@/components/ui/Dialog";
import { Notice } from "@/components/ui/Notice";
import {
  DEFAULT_MAP_POINT,
  MOCK_MAP_BOUNDS,
  clampPercent,
  isWithinMockMap,
  latLngToMapPercent,
  mapPercentToLatLng,
  mockReverseGeocode,
} from "@/lib/mock/mockGeocoding";
import type { ReportLocation } from "@/lib/types/report";
import { formatCoordinates } from "@/lib/utils/format";

export interface PickedLocation {
  address: string;
  lat: number;
  lng: number;
  source: "map" | "geolocation";
}

export interface LocationPickerDialogProps {
  open: boolean;
  onClose: () => void;
  onConfirm: (location: PickedLocation) => void;
  initialLocation?: ReportLocation | null;
  /** Only request geolocation when the user explicitly opened it for that. */
  autoLocate?: boolean;
}

type GeolocationState = "idle" | "locating" | "success" | "error";

function toPickedLocation(
  location?: ReportLocation | null,
): PickedLocation | null {
  if (location?.lat === undefined || location.lng === undefined) return null;

  return {
    address: location.address,
    lat: location.lat,
    lng: location.lng,
    source: location.source === "geolocation" ? "geolocation" : "map",
  };
}

function geolocationErrorMessage(error: GeolocationPositionError): string {
  if (error.code === error.PERMISSION_DENIED) {
    return "Bạn đã từ chối quyền truy cập vị trí. Hãy chọn trực tiếp trên bản đồ hoặc nhập địa chỉ.";
  }

  if (error.code === error.POSITION_UNAVAILABLE) {
    return "Không thể xác định vị trí hiện tại. Hãy chọn trực tiếp trên bản đồ.";
  }

  if (error.code === error.TIMEOUT) {
    return "Quá thời gian xác định vị trí. Hãy thử lại hoặc chọn trực tiếp trên bản đồ.";
  }

  return "Không lấy được vị trí hiện tại. Hãy chọn trực tiếp trên bản đồ.";
}

export function LocationPickerDialog({
  open,
  onClose,
  onConfirm,
  initialLocation,
  autoLocate = false,
}: LocationPickerDialogProps) {
  const [pending, setPending] = useState<PickedLocation | null>(() =>
    toPickedLocation(initialLocation),
  );
  const [geoState, setGeoState] = useState<GeolocationState>("idle");
  const [geoMessage, setGeoMessage] = useState<string | null>(null);

  const mapRef = useRef<HTMLDivElement>(null);
  const draggingRef = useRef(false);
  const autoLocateHandledRef = useRef(false);

  // Reset the picker when the dialog opens, following React's documented
  // "adjust state when a prop changes" pattern. Doing it during render keeps
  // the dialog mounted while closed, so the native dialog can restore focus
  // to the button that opened it.
  const [wasOpen, setWasOpen] = useState(open);
  if (open !== wasOpen) {
    setWasOpen(open);
    if (open) {
      setPending(toPickedLocation(initialLocation));
      setGeoState("idle");
      setGeoMessage(null);
    }
  }

  const requestCurrentLocation = useCallback(() => {
    setGeoMessage(null);

    if (
      typeof navigator === "undefined" ||
      !("geolocation" in navigator) ||
      !navigator.geolocation
    ) {
      setGeoState("error");
      setGeoMessage(
        "Trình duyệt không hỗ trợ lấy vị trí hiện tại. Hãy chọn trực tiếp trên bản đồ.",
      );
      return;
    }

    setGeoState("locating");

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude: lat, longitude: lng } = position.coords;
        const withinMap = isWithinMockMap(lat, lng);

        setPending({
          address: withinMap ? mockReverseGeocode(lat, lng) : "",
          lat,
          lng,
          source: "geolocation",
        });
        setGeoState("success");
        setGeoMessage(
          withinMap
            ? "Đã lấy vị trí hiện tại. Bạn có thể kéo ghim để điều chỉnh hoặc sửa địa chỉ sau khi xác nhận."
            : "Đã lấy tọa độ hiện tại, nhưng vị trí nằm ngoài khu vực bản đồ mô phỏng nên chưa có địa chỉ. Vui lòng nhập địa chỉ sau khi xác nhận.",
        );
      },
      (error) => {
        setGeoState("error");
        setGeoMessage(geolocationErrorMessage(error));
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 },
    );
  }, []);

  useEffect(() => {
    if (!open) {
      autoLocateHandledRef.current = false;
      return;
    }

    if (!autoLocate || autoLocateHandledRef.current) return;

    autoLocateHandledRef.current = true;
    requestCurrentLocation();
  }, [open, autoLocate, requestCurrentLocation]);

  function selectPoint(clientX: number, clientY: number) {
    const map = mapRef.current;
    if (!map) return;

    const rect = map.getBoundingClientRect();
    if (rect.width === 0 || rect.height === 0) return;

    const x = clampPercent(((clientX - rect.left) / rect.width) * 100);
    const y = clampPercent(((clientY - rect.top) / rect.height) * 100);
    const { lat, lng } = mapPercentToLatLng(x, y);

    setPending({
      address: mockReverseGeocode(lat, lng),
      lat,
      lng,
      source: "map",
    });
    setGeoState("idle");
    setGeoMessage(null);
  }

  function handlePointerDown(event: PointerEvent<HTMLDivElement>) {
    event.currentTarget.setPointerCapture(event.pointerId);
    draggingRef.current = true;
    mapRef.current?.focus();
    selectPoint(event.clientX, event.clientY);
  }

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    if (!draggingRef.current) return;
    selectPoint(event.clientX, event.clientY);
  }

  function handlePointerUp(event: PointerEvent<HTMLDivElement>) {
    draggingRef.current = false;
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  }

  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    const step = event.shiftKey ? 0.01 : 0.002;
    let deltaLat = 0;
    let deltaLng = 0;

    switch (event.key) {
      case "ArrowUp":
        deltaLat = step;
        break;
      case "ArrowDown":
        deltaLat = -step;
        break;
      case "ArrowLeft":
        deltaLng = -step;
        break;
      case "ArrowRight":
        deltaLng = step;
        break;
      default:
        return;
    }

    event.preventDefault();

    const base = pending ?? DEFAULT_MAP_POINT;
    const lat = Math.min(
      MOCK_MAP_BOUNDS.north,
      Math.max(MOCK_MAP_BOUNDS.south, base.lat + deltaLat),
    );
    const lng = Math.min(
      MOCK_MAP_BOUNDS.east,
      Math.max(MOCK_MAP_BOUNDS.west, base.lng + deltaLng),
    );

    setPending({
      address: mockReverseGeocode(lat, lng),
      lat,
      lng,
      source: "map",
    });
    setGeoState("idle");
    setGeoMessage(null);
  }

  const marker = pending ? latLngToMapPercent(pending.lat, pending.lng) : null;
  const outsideMap = pending ? !isWithinMockMap(pending.lat, pending.lng) : false;

  return (
    <Dialog
      open={open}
      onClose={onClose}
      title="Chọn vị trí trên bản đồ"
      description="Bản đồ mô phỏng dùng trong bài tập. Chạm hoặc kéo để đặt ghim tại vị trí cần phản ánh."
      panelClassName="max-w-[398px]"
      footer={
        <>
          <Button type="button" variant="secondary" onClick={onClose}>
            Hủy
          </Button>
          <Button
            type="button"
            disabled={!pending}
            onClick={() => {
              if (pending) onConfirm(pending);
            }}
          >
            Xác nhận
          </Button>
        </>
      }
    >
      <div className="space-y-3">
        <div
          ref={mapRef}
          role="application"
          tabIndex={0}
          aria-label="Bản đồ mô phỏng để chọn vị trí"
          aria-describedby="location-map-instructions"
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          onKeyDown={handleKeyDown}
          className="relative h-60 w-full cursor-crosshair touch-none select-none overflow-hidden rounded-control border border-outline/30 bg-surface-variant focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          <MockMapArtwork />

          {!pending && (
            <div className="pointer-events-none absolute inset-0 grid place-items-center">
              <span className="rounded-full bg-surface/95 px-3 py-1.5 text-caption font-medium text-on-surface/70 shadow-sm">
                Chạm để chọn vị trí
              </span>
            </div>
          )}

          {pending && marker && (
            <span
              aria-hidden
              style={{ left: `${marker.x}%`, top: `${marker.y}%` }}
              className="pointer-events-none absolute -translate-x-1/2 -translate-y-full text-primary"
            >
              <svg
                viewBox="0 0 24 24"
                className="size-8 drop-shadow-sm"
              >
                <path
                  d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7Z"
                  fill="currentColor"
                />
                <circle cx="12" cy="9" r="2.6" className="fill-surface" />
              </svg>
            </span>
          )}
        </div>

        <p id="location-map-instructions" className="text-caption leading-5 text-on-surface/60">
          Chạm, kéo hoặc dùng phím mũi tên để di chuyển ghim. Giữ Shift để di
          chuyển nhanh hơn.
        </p>

        <div className="rounded-control border border-outline/25 bg-surface-variant/50 p-3.5">
          {pending ? (
            <div className="space-y-1">
              <p className="flex items-center gap-1.5 text-label font-medium text-on-surface">
                <MapPin
                  aria-hidden
                  strokeWidth={1.5}
                  className="size-4 shrink-0 text-primary"
                />
                {pending.source === "geolocation"
                  ? "Vị trí hiện tại"
                  : "Vị trí đã chọn"}
              </p>
              <p className="text-caption tabular-nums text-on-surface/65">
                {formatCoordinates(pending.lat, pending.lng)}
              </p>
              <p className="text-label leading-5 text-on-surface">
                {pending.address || "Chưa xác định được địa chỉ."}
              </p>
              {outsideMap && (
                <p className="text-caption leading-5 text-error">
                  Vị trí này nằm ngoài khu vực bản đồ mô phỏng. Hãy nhập địa chỉ
                  thủ công sau khi xác nhận.
                </p>
              )}
            </div>
          ) : (
            <p className="text-label leading-5 text-on-surface/60">
              Chưa chọn vị trí. Chạm vào bản đồ để đặt ghim.
            </p>
          )}
        </div>

        <Button
          type="button"
          variant="secondary"
          fullWidth
          loading={geoState === "locating"}
          onClick={requestCurrentLocation}
        >
          <LocateFixed aria-hidden strokeWidth={1.5} className="size-4" />
          {geoState === "locating" ? "Đang lấy vị trí" : "Dùng vị trí hiện tại"}
        </Button>

        {geoMessage && (
          <Notice tone={geoState === "success" ? "success" : "warning"}>
            {geoMessage}
          </Notice>
        )}
      </div>
    </Dialog>
  );
}

function MockMapArtwork() {
  return (
    <>
      <svg
        aria-hidden
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="absolute inset-0 size-full text-outline/25"
      >
        <g className="fill-surface" opacity="0.7">
          <rect x="5" y="5" width="21" height="15" rx="1.5" />
          <rect x="31" y="4" width="18" height="16" rx="1.5" />
          <rect x="54" y="6" width="17" height="14" rx="1.5" />
          <rect x="76" y="4" width="19" height="16" rx="1.5" />
          <rect x="4" y="25" width="19" height="16" rx="1.5" />
          <rect x="28" y="24" width="23" height="17" rx="1.5" />
          <rect x="56" y="24" width="16" height="17" rx="1.5" />
          <rect x="77" y="24" width="19" height="17" rx="1.5" />
          <rect x="5" y="47" width="18" height="15" rx="1.5" />
          <rect x="28" y="46" width="21" height="17" rx="1.5" />
          <rect x="54" y="46" width="18" height="16" rx="1.5" />
          <rect x="77" y="46" width="18" height="17" rx="1.5" />
          <rect x="4" y="69" width="20" height="14" rx="1.5" />
          <rect x="29" y="68" width="20" height="16" rx="1.5" />
          <rect x="54" y="68" width="18" height="14" rx="1.5" />
          <rect x="77" y="68" width="18" height="16" rx="1.5" />
          <rect x="5" y="87" width="19" height="10" rx="1.5" />
          <rect x="29" y="88" width="20" height="9" rx="1.5" />
          <rect x="54" y="87" width="18" height="10" rx="1.5" />
          <rect x="77" y="88" width="18" height="9" rx="1.5" />
        </g>

        <g
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M0 22 H100" strokeWidth="2.2" />
          <path d="M0 44 H100" strokeWidth="1.4" />
          <path d="M0 66 H100" strokeWidth="2.2" />
          <path d="M0 85 H100" strokeWidth="1.4" />
          <path d="M27 0 V100" strokeWidth="1.6" />
          <path d="M51 0 V100" strokeWidth="2.4" />
          <path d="M74 0 V100" strokeWidth="1.6" />
          <path d="M-4 100 L104 0" strokeWidth="2.8" />
        </g>
      </svg>

      <span className="pointer-events-none absolute left-[31%] top-[34%] text-caption text-on-surface/35">
        Quận 1
      </span>
      <span className="pointer-events-none absolute left-[55%] top-[53%] text-caption text-on-surface/35">
        Quận 3
      </span>
      <span className="pointer-events-none absolute left-[56%] top-[12%] text-caption text-on-surface/35">
        Bình Thạnh
      </span>
      <span className="pointer-events-none absolute right-3 top-2 rounded-full bg-surface/90 px-2.5 py-1 text-caption text-on-surface/55">
        TP. Hồ Chí Minh
      </span>
    </>
  );
}
