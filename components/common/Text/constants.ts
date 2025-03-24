import { TextStyleVariation, TextStyleValue } from "./types";

export const TextStyleBinding: Record<TextStyleVariation, TextStyleValue> = {
  'title-l': {
    size: 30,
    weight: 600,
    lineHeight: 0,
  },
  'title-m': {
    size: 25,
    weight: 600,
    lineHeight: 0,
  },
  'title-s': {
    size: 20,
    weight: 600,
    lineHeight: 0,
  },
  'text-l': {
    size: 18,
    weight: 600,
    lineHeight: 0,
  },
  'text-m': {
    size: 18,
    weight: 400,
    lineHeight: 0,
  },
  'text-s': {
    size: 16,
    weight: 400,
    lineHeight: 0,
  },
} as const;

