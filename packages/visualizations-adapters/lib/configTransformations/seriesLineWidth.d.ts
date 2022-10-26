import type { CArea, CLine } from '../adapters';
import type { ConfigHelper } from '../types';
/**
 * Set default line width when not otherwise set.
 * There is no equivalent value from the api response.
 */
export declare const seriesLineWidth: ConfigHelper<CLine | CArea>;
