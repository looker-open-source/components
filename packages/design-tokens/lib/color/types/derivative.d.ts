import type { SpecifiableTextColors } from './specifiable';
interface HighlightColors {
    /**
     * Used to highlight / accent  content
     */
    informAccent: string;
    /**
     * Used to highlight / accent content
     */
    positiveAccent: string;
    /**
     * Used to highlight / accent  content
     */
    warnAccent: string;
}
export interface DerivativeColors extends SpecifiableTextColors, HighlightColors {
    /**
     * Default input background
     * Text input, select input
     * @default white
     */
    field: string;
    /**
     * High contrast surface
     * Used for: Tooltip background
     * @default charcoal800
     */
    inverse: string;
    /**
     * Inverse color on high contrast elements
     * Used for: Icons in main nav, Text on primary buttons
     * @default white
     */
    inverseOn: string;
    /**
     * Neutral intent color
     * Used for: Non-destructive cancel actions
     * @note This is can be automatically derived using the background & text colors
     * @default charcoal400
     */
    neutral: string;
    /**
     * Link text color on interaction
     * Used for: Link :active, :focused and :hover states
     */
    linkInteractive: string;
}
export declare const derivativeColors: Array<keyof DerivativeColors>;
export {};
