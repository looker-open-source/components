/**
 * Utility mixes to colors together in a provided amount of steps
 * @param baseColor initial color (hex code)
 * @param targetColor color (hex code) to blend with baseColor
 * @param steps how many color stops to blend from base to target color
 * @returns an array of hex codes
 */
export declare const deriveColorBlend: (baseColor?: string, targetColor?: string, steps?: number) => string[];
