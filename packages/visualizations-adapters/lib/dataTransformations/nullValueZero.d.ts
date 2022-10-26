import type { CLineBase } from '../adapters';
import type { ConfigHelper } from '../types';
/**
 * Data transformation replaces all null values with 0 when
 * config.render_null_values is true.
 */
export declare const nullValueZero: ConfigHelper<CLineBase>;
