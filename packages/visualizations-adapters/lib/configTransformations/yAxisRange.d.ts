import type { ConfigHelper } from '../types';
import type { CSparkline } from '../adapters';
/**
 * Transformation sets ONLY the range values for y-axis config object.
 * Created for use in Sparkline where the y-axis options are much simpler than
 * other cartesian charts.
 */
export declare const yAxisRange: ConfigHelper<CSparkline>;
