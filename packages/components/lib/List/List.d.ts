import React from 'react';
import type { CompatibleHTMLProps, DensityProp, FontFamilies, HeightProps, WidthProps } from '@looker/design-tokens';
export declare type ListColor = 'key' | 'calculation' | 'dimension' | 'measure';
export declare type ListProps = HeightProps & WidthProps & Omit<CompatibleHTMLProps<HTMLUListElement>, 'label'> & DensityProp & {
    /**
     * Replace the normal uiN(1-5) color, when ListItem is selected, with color label passed.
     *
     * List, ListItem, Tree & TreeItem now theme-based color assignments. Supported colors are:
     *
     *  - key
     *  - calculation
     *  - dimension
     *  - measure
     *
     * The color is used a background color (using the `subtle` variant) when the item
     * is `selected` or `current`. Items with `calculation` & `measure` will have a text
     * color applied at all times unless they are `disabled`
     */
    color?: ListColor;
    /**
     * Disables the nested List's keyboard nav capabilities
     * @private
     */
    disableKeyboardNav?: boolean;
    /**
     * If true, all ListItem children without an icon will reserve space for an icon
     * for alignment purposes.
     */
    iconGutter?: boolean;
    /**
     * Specify font-family. Can be specified as `brand`, `code` or `body` to explicitly
     * specify theme-controlled font-family.
     * @default inherit
     */
    fontFamily?: FontFamilies;
    /**
     * Use windowing for long lists (strongly recommended to also define a width on List or its container)
     * Defaults to false with children <= 100 and true for > 100
     */
    windowing?: boolean;
};
export declare const ListInternal: React.ForwardRefExoticComponent<HeightProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, import("csstype").Property.Height<import("styled-system").TLengthStyledSystem>> & WidthProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, import("csstype").Property.Width<import("styled-system").TLengthStyledSystem>> & Omit<CompatibleHTMLProps<HTMLUListElement>, "label"> & DensityProp & {
    /**
     * Replace the normal uiN(1-5) color, when ListItem is selected, with color label passed.
     *
     * List, ListItem, Tree & TreeItem now theme-based color assignments. Supported colors are:
     *
     *  - key
     *  - calculation
     *  - dimension
     *  - measure
     *
     * The color is used a background color (using the `subtle` variant) when the item
     * is `selected` or `current`. Items with `calculation` & `measure` will have a text
     * color applied at all times unless they are `disabled`
     */
    color?: ListColor | undefined;
    /**
     * Disables the nested List's keyboard nav capabilities
     * @private
     */
    disableKeyboardNav?: boolean | undefined;
    /**
     * If true, all ListItem children without an icon will reserve space for an icon
     * for alignment purposes.
     */
    iconGutter?: boolean | undefined;
    /**
     * Specify font-family. Can be specified as `brand`, `code` or `body` to explicitly
     * specify theme-controlled font-family.
     * @default inherit
     */
    fontFamily?: FontFamilies | undefined;
    /**
     * Use windowing for long lists (strongly recommended to also define a width on List or its container)
     * Defaults to false with children <= 100 and true for > 100
     */
    windowing?: boolean | undefined;
} & React.RefAttributes<HTMLUListElement>>;
export declare const List: import("styled-components").StyledComponent<React.ForwardRefExoticComponent<HeightProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, import("csstype").Property.Height<import("styled-system").TLengthStyledSystem>> & WidthProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, import("csstype").Property.Width<import("styled-system").TLengthStyledSystem>> & Omit<CompatibleHTMLProps<HTMLUListElement>, "label"> & DensityProp & {
    /**
     * Replace the normal uiN(1-5) color, when ListItem is selected, with color label passed.
     *
     * List, ListItem, Tree & TreeItem now theme-based color assignments. Supported colors are:
     *
     *  - key
     *  - calculation
     *  - dimension
     *  - measure
     *
     * The color is used a background color (using the `subtle` variant) when the item
     * is `selected` or `current`. Items with `calculation` & `measure` will have a text
     * color applied at all times unless they are `disabled`
     */
    color?: ListColor | undefined;
    /**
     * Disables the nested List's keyboard nav capabilities
     * @private
     */
    disableKeyboardNav?: boolean | undefined;
    /**
     * If true, all ListItem children without an icon will reserve space for an icon
     * for alignment purposes.
     */
    iconGutter?: boolean | undefined;
    /**
     * Specify font-family. Can be specified as `brand`, `code` or `body` to explicitly
     * specify theme-controlled font-family.
     * @default inherit
     */
    fontFamily?: FontFamilies | undefined;
    /**
     * Use windowing for long lists (strongly recommended to also define a width on List or its container)
     * Defaults to false with children <= 100 and true for > 100
     */
    windowing?: boolean | undefined;
} & React.RefAttributes<HTMLUListElement>>, import("styled-components").DefaultTheme, HeightProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, import("csstype").Property.Height<import("styled-system").TLengthStyledSystem>> & WidthProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, import("csstype").Property.Width<import("styled-system").TLengthStyledSystem>> & Omit<CompatibleHTMLProps<HTMLUListElement>, "label"> & DensityProp & {
    /**
     * Replace the normal uiN(1-5) color, when ListItem is selected, with color label passed.
     *
     * List, ListItem, Tree & TreeItem now theme-based color assignments. Supported colors are:
     *
     *  - key
     *  - calculation
     *  - dimension
     *  - measure
     *
     * The color is used a background color (using the `subtle` variant) when the item
     * is `selected` or `current`. Items with `calculation` & `measure` will have a text
     * color applied at all times unless they are `disabled`
     */
    color?: ListColor | undefined;
    /**
     * Disables the nested List's keyboard nav capabilities
     * @private
     */
    disableKeyboardNav?: boolean | undefined;
    /**
     * If true, all ListItem children without an icon will reserve space for an icon
     * for alignment purposes.
     */
    iconGutter?: boolean | undefined;
    /**
     * Specify font-family. Can be specified as `brand`, `code` or `body` to explicitly
     * specify theme-controlled font-family.
     * @default inherit
     */
    fontFamily?: FontFamilies | undefined;
    /**
     * Use windowing for long lists (strongly recommended to also define a width on List or its container)
     * Defaults to false with children <= 100 and true for > 100
     */
    windowing?: boolean | undefined;
}, never>;
