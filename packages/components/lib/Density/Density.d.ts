import type { FC } from 'react';
import type { DensityRamp } from '@looker/design-tokens';
export declare type DensityProps = {
    scale: DensityRamp;
};
/**
 * Utility component which alters the default density within the theme.
 * Wrap <Density density={1}> around other components to apply the specified
 * density value to all of the nested components.
 *
 * NOTE: If `density` is explicitly specified on a component within `Density`
 * the explicitly specified value will be used instead.
 */
export declare const Density: FC<DensityProps>;
/**
 * Shortcut to `<Density scale={1} />`
 */
export declare const Density1: FC;
/**
 * Shortcut to `<Density scale={0} />`
 */
export declare const Density0: FC;
/**
 * Shortcut to `<Density scale={-1} />`
 */
export declare const DensityNegative1: FC;
/**
 * Shortcut to `<Density scale={-2} />`
 */
export declare const DensityNegative2: FC;
/**
 * Shortcut to `<Density scale={-3} />`
 */
export declare const DensityNegative3: FC;
