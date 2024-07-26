const PC_MIN_WIDTH = 1200;
const TABLET_MIN_WIDTH = 768;
const MOBILE_MIN_WIDTH = 375;

export const SCREEN_SIZE = {
  PC_MIN_WIDTH,
  TABLET_MIN_WIDTH,
  TABLET_MAX_WIDTH: PC_MIN_WIDTH - 1,
  MOBILE_MIN_WIDTH,
  MOBILE_MAX_WIDTH: TABLET_MIN_WIDTH - 1,
} as const;

export enum ORDER_TYPE_ENUM {
  recent = "recent",
  like = "like",
}

export const orderTypeKR = {
  [ORDER_TYPE_ENUM.recent]: "최신순",
  [ORDER_TYPE_ENUM.like]: "추천순",
} as const;

export const orderTypeKeys = Object.values(ORDER_TYPE_ENUM);
export const defaultOrderType = ORDER_TYPE_ENUM.recent;
