/**
 * A deliberately small, offline "map" for the prototype.
 *
 * There is no map tile provider or reverse-geocoding API in this project, so
 * the picker works over a fixed Ho Chi Minh City bounding box and turns
 * coordinates into a plausible mock address. Nothing here calls the network.
 */

export interface MockMapBounds {
  north: number;
  south: number;
  west: number;
  east: number;
}

export const MOCK_MAP_BOUNDS: MockMapBounds = {
  north: 10.86,
  south: 10.62,
  west: 106.6,
  east: 106.86,
};

export const DEFAULT_MAP_POINT = {
  lat: 10.7769,
  lng: 106.7009,
};

interface MockAddressAnchor {
  lat: number;
  lng: number;
  road: string;
  ward: string;
  district: string;
}

/** A handful of landmarks used to make mock addresses feel local. */
const ADDRESS_ANCHORS: MockAddressAnchor[] = [
  {
    lat: 10.7769,
    lng: 106.7009,
    road: "đường Lê Lợi",
    ward: "phường Bến Thành",
    district: "Quận 1",
  },
  {
    lat: 10.7845,
    lng: 106.7001,
    road: "đường Nguyễn Thị Minh Khai",
    ward: "phường Đa Kao",
    district: "Quận 1",
  },
  {
    lat: 10.7689,
    lng: 106.6958,
    road: "đường Trần Hưng Đạo",
    ward: "phường Cầu Ông Lãnh",
    district: "Quận 1",
  },
  {
    lat: 10.754,
    lng: 106.668,
    road: "đường Hòa Hảo",
    ward: "phường 5",
    district: "Quận 10",
  },
  {
    lat: 10.7626,
    lng: 106.6602,
    road: "đường Lý Thường Kiệt",
    ward: "phường 7",
    district: "Quận 10",
  },
  {
    lat: 10.8015,
    lng: 106.6528,
    road: "đường Cộng Hòa",
    ward: "phường 13",
    district: "Quận Tân Bình",
  },
  {
    lat: 10.822,
    lng: 106.688,
    road: "đường Phan Văn Trị",
    ward: "phường 11",
    district: "Quận Bình Thạnh",
  },
  {
    lat: 10.8419,
    lng: 106.757,
    road: "đường Võ Nguyên Giáp",
    ward: "phường Thảo Điền",
    district: "TP. Thủ Đức",
  },
  {
    lat: 10.7295,
    lng: 106.7218,
    road: "đường Nguyễn Hữu Thọ",
    ward: "phường Tân Phong",
    district: "Quận 7",
  },
  {
    lat: 10.738,
    lng: 106.68,
    road: "đường Nguyễn Văn Linh",
    ward: "phường Tân Thuận Tây",
    district: "Quận 7",
  },
];

export function clampPercent(value: number): number {
  return Math.min(100, Math.max(0, value));
}

export function isWithinMockMap(lat: number, lng: number): boolean {
  return (
    lat <= MOCK_MAP_BOUNDS.north &&
    lat >= MOCK_MAP_BOUNDS.south &&
    lng >= MOCK_MAP_BOUNDS.west &&
    lng <= MOCK_MAP_BOUNDS.east
  );
}

/** Maps a 0–100 position inside the picker to coordinates. */
export function mapPercentToLatLng(x: number, y: number): {
  lat: number;
  lng: number;
} {
  const safeX = clampPercent(x);
  const safeY = clampPercent(y);
  const { north, south, west, east } = MOCK_MAP_BOUNDS;

  return {
    lat: north - (safeY / 100) * (north - south),
    lng: west + (safeX / 100) * (east - west),
  };
}

/** Maps coordinates to a 0–100 marker position, clamped to the map edges. */
export function latLngToMapPercent(
  lat: number,
  lng: number,
): { x: number; y: number } {
  const { north, south, west, east } = MOCK_MAP_BOUNDS;

  return {
    x: clampPercent(((lng - west) / (east - west)) * 100),
    y: clampPercent(((north - lat) / (north - south)) * 100),
  };
}

/**
 * Returns a stable mock address for a point inside the map bounds, or an
 * empty string when the point is outside the simulated city.
 */
export function mockReverseGeocode(lat: number, lng: number): string {
  if (!isWithinMockMap(lat, lng)) return "";

  const nearest = ADDRESS_ANCHORS.reduce((best, anchor) => {
    const distance =
      (anchor.lat - lat) ** 2 + (anchor.lng - lng) ** 2;
    return distance < best.distance ? { anchor, distance } : best;
  }, { anchor: ADDRESS_ANCHORS[0], distance: Number.POSITIVE_INFINITY }).anchor;

  const houseNumber =
    (Math.abs(Math.round(lat * 10000)) +
      Math.abs(Math.round(lng * 10000))) %
      280 +
    1;

  return `Số ${houseNumber} ${nearest.road}, ${nearest.ward}, ${nearest.district}, TP. Hồ Chí Minh`;
}
