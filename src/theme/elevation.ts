export type ElevationLayers = '1' | '2' | '3' | '4' | '5' | '6' | '7' | 'max'

export type Shadows = { [K in ElevationLayers]?: string }

export const shadows: Shadows = {
  1: '0 1px 2px rgba(0, 0, 0, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05)',
  2: '0 3px 4px rgba(0, 0, 0, 0.11), 0 1px 2px rgba(0, 0, 0, 0.04)',
  3: '0 6px 10px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.04)',
  4: '0 9px 18px rgba(0, 0, 0, 0.14), 0 1px 2px rgba(0, 0, 0, 0.04),  0 10px 8px 4px rgba(0, 0, 0, 0.01)',
  5: '0 14px 20px rgba(0, 0, 0,.15), 0 1px 1px rgba(0, 0, 0, 0.04),  0 14px 10px 8px rgba(0, 0, 0, 0.02)',
  6: '0 22px 42px 0px rgba(0, 0, 0,.18),  0 1px 1px rgba(0, 0, 0, 0.05), 0 16px 20px 10px rgba(0, 0, 0, 0.025)',
}
