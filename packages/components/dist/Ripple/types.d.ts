import type { ExtendedStatefulColor } from '@looker/design-tokens';
import type { CSSProperties, Ref } from 'react';
export declare type RippleCallbacks = {
    endBG: () => void;
    endFG: () => void;
    startBG: () => void;
    startFG: () => void;
};
export declare type UseRippleBaseProps = {
    /**
     * An existing class name to merge with the ripple class name
     */
    className?: string;
    /**
     * Existing styles to merge with the ripple styles (css vars)
     */
    style?: CSSProperties;
    /**
     * Change the color of the ripple background and foreground
     * @default neutral
     */
    color?: ExtendedStatefulColor | 'background';
    /**
     * Decimal multiplier, e.g. 1.5.
     * Use for unbounded ripple that needs to extend past element dimensions,
     * don't use with overflow: hidden
     * @default 1
     */
    size?: number;
};
export declare type UseBoundedRippleProps<T extends HTMLElement = HTMLElement> = UseRippleBaseProps & {
    /**
     * Existing ref to wrap
     */
    ref?: Ref<T>;
};
export declare type UseRippleProps = UseRippleBaseProps & {
    /**
     * Use for elements where the ripple disappears at the edges of
     * a visible rectangle, e.g. a default Button
     * @default false
     */
    bounded?: boolean;
    /**
     * Internal use only
     * @private
     */
    width?: number;
    /**
     * Internal use only
     * @private
     */
    height?: number;
};
export declare type UseRippleResponse = {
    /**
     * The start and end functions for the background and foreground
     */
    callbacks: RippleCallbacks;
    /**
     * The class names used in rippleStyle to trigger the animations
     */
    className: string;
    /**
     * style contains CSS variables to control the animation
     */
    style: CSSProperties;
};
export declare type UseBoundedRippleResponse<T extends HTMLElement = HTMLElement> = UseRippleResponse & {
    /**
     * ref used for measuring the element for correct ripple sizing
     */
    ref: (node: T | null) => void;
};
