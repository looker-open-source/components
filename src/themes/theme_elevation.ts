export enum ElevationLayers {
  One = 'one',
  Two = 'two',
  Three = 'three',
  Four = 'four',
  Five = 'five',
  Six = 'six',
  Seven = 'seven',
  Max = 'max'
}

export interface ThemeShadows {
  [ElevationLayers.One]: string
  [ElevationLayers.Two]: string
  [ElevationLayers.Three]: string
  [ElevationLayers.Four]: string
  [ElevationLayers.Five]: string
  [ElevationLayers.Six]: string
}

export const themeShadows: ThemeShadows = {
  [ElevationLayers.One]:
    '0 1px 2px rgba(0, 0, 0, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05)',
  [ElevationLayers.Two]:
    '0 3px 4px rgba(0, 0, 0, 0.11), 0 1px 2px rgba(0, 0, 0, 0.04)',
  [ElevationLayers.Three]:
    '0 6px 10px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.04)',
  [ElevationLayers.Four]:
    '0 9px 18px rgba(0, 0, 0, 0.14), 0 1px 2px rgba(0, 0, 0, 0.04),  0 10px 8px 4px rgba(0, 0, 0, 0.01)',
  [ElevationLayers.Five]:
    '0 14px 20px rgba(0, 0, 0,.15), 0 1px 1px rgba(0, 0, 0, 0.04),  0 14px 10px 8px rgba(0, 0, 0, 0.02)',
  [ElevationLayers.Six]:
    '0 22px 42px 0px rgba(0, 0, 0,.18),  0 1px 1px rgba(0, 0, 0, 0.05), 0 16px 20px 10px rgba(0, 0, 0, 0.025)'
}
