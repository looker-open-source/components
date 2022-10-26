import type { DensityRamp, FontSizes, SpacingSizes } from '@looker/design-tokens';
import type { IconSize } from '../Icon';
declare type AccordionDensityDimensions = {
    indicatorGap: SpacingSizes;
    indicatorSize: IconSize;
    fontSize: FontSizes;
};
export declare const densityPositive1: AccordionDensityDimensions;
export declare const density0: AccordionDensityDimensions;
export declare const densityNegative1: AccordionDensityDimensions;
export declare const densityNegative2: AccordionDensityDimensions;
export declare const densityNegative3: AccordionDensityDimensions;
export declare const densities: {
    '-1': AccordionDensityDimensions;
    '-2': AccordionDensityDimensions;
    '-3': AccordionDensityDimensions;
    '0': AccordionDensityDimensions;
    '1': AccordionDensityDimensions;
};
/**
 * Returns an object with size and spacing scaled to "density" parameter value
 * @param density Accepts values from -3 (smallest) to 1 (largest)
 */
export declare const accordionDimensions: (density?: DensityRamp) => AccordionDensityDimensions;
export {};
