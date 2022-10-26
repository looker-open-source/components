import type { CArea, CLine } from '../adapters';
import type { ConfigHelper } from '../types';
/**
 * Populate point style from raw api response.
 * Multiple point styles are not supported by the api. Sets all series
 * to match point_style when it's not othrewise set. Works for both array and
 * named series objects.
 */
export declare const seriesPointStyle: ConfigHelper<CLine | CArea>;
