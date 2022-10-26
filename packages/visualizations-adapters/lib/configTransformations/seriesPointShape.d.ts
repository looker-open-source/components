import type { CArea, CLine } from '../adapters';
import type { ConfigHelper } from '../types';
/**
 * Populate series point shapes from series_point_styles response.
 * Merges with named series settings, and sets all array elements to 'circle' unless already set.
 */
export declare const seriesPointShape: ConfigHelper<CLine | CArea>;
