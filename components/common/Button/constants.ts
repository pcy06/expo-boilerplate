import { ButtonSizeVariation, ButtonSizeValue } from "./types";

export const ButtonSizeBinding: Record<ButtonSizeVariation, ButtonSizeValue> = {
  xs: {
    height: 28,
    paddingHorizontal: 8,
    fontSize: 12,
    borderRadius: 4,
  },
  s: {
    height: 36,
    paddingHorizontal: 12,
    fontSize: 14,
    borderRadius: 6,
  },
  m: {
    height: 44,
    paddingHorizontal: 16,
    fontSize: 16,
    borderRadius: 8,
  },
  l: {
    height: 52,
    paddingHorizontal: 20,
    fontSize: 18,
    borderRadius: 10,
  },
  xl: {
    height: 60,
    paddingHorizontal: 24,
    fontSize: 20,
    borderRadius: 12,
  },
} as const;