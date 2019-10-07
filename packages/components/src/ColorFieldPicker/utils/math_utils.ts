/**
 * Utility to convert a numerical value to a percent given the value and a max value.
 */
export const toPerc = (value: number, maxValue: number) =>
  Math.round((value / maxValue) * 100)
