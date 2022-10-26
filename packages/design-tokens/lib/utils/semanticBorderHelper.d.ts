import type { BorderRadiusProps } from '../system';
import type { Colors } from '../color';
declare type BorderBaseProp = keyof Colors | string;
declare type BorderProp = BorderBaseProp | boolean | 'none';
export declare type SemanticBorderProps = BorderRadiusProps & {
    /**
     * Border can be specified as a boolean or a key of the theme colors object.
     * 1px border is applied to all four sides.
     *
     * `true` - will use theme's `ui2` color
     * `false` - will not apply any border
     * `keyof Colors` - will use the color of the key
     */
    border?: BorderProp;
    /**
     * A 1px border is applied to the bottom.
     * See `border` property for specifics values that can be specified..
     */
    borderBottom?: BorderProp;
    /**
     * A 1px border is applied to the left.
     * See `border` property for specifics values that can be specified..
     */
    borderLeft?: BorderProp;
    /**
     * A 1px border is applied to the right.
     * See `border` property for specifics values that can be specified..
     */
    borderRight?: BorderProp;
    /**
     * A 1px border is applied to the top.
     * See `border` property for specifics values that can be specified..
     */
    borderTop?: BorderProp;
    /**
     * A 1px border is applied to the left & right.
     * See `border` property for specifics values that can be specified..
     */
    borderX?: BorderProp;
    /**
     * A 1px border is applied to the top & bottom.
     * See `border` property for specifics values that can be specified..
     */
    borderY?: BorderProp;
};
export declare const borderHelper: ({ border, borderBottom, borderLeft, borderRight, borderTop, borderX, borderY, }: SemanticBorderProps) => import("styled-components").FlattenInterpolation<import("styled-components").ThemeProps<import("styled-components").DefaultTheme>>;
export {};
