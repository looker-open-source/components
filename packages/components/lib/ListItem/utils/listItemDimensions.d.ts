import type { DensityRamp } from '@looker/design-tokens';
import type { ListItemDimensions } from '../types';
export declare const density0: ListItemDimensions;
export declare const densityPositive1: ListItemDimensions;
export declare const densityNegative1: ListItemDimensions;
export declare const densityNegative2: ListItemDimensions;
export declare const densityNegative3: ListItemDimensions;
export declare const densities: {
    '-1': ListItemDimensions;
    '-2': ListItemDimensions;
    '-3': ListItemDimensions;
    '0': ListItemDimensions;
    '1': ListItemDimensions;
};
/**
 * Returns an object with size and spacing scaled to "density" parameter value
 * @param density Accepts values from -3 (smallest) to 1 (largest)
 */
export declare const listItemDimensions: (density: DensityRamp) => ListItemDimensions;
