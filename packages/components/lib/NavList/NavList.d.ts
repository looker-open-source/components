/// <reference types="react" />
/**
 * `NavList` is a variation of `List` that expects to wrap around a composition of `ListItem`s, `NavTree`s and `NavTreeItem`s
 *   - `ListItem`, `NavTree` and `NavTreeItem`  border-radius circular on the right side
 *   - `ListItem`, `NavTree` and `NavTreeItem` selected or "active"
 *     - text color is `theme.colors.key`
 *     - background color is `keySubtle`
 *   - `ListItem` at the root are indented to align properly with `Tree`(s) at the root as well
 */
export declare const NavList: import("styled-components").StyledComponent<import("react").ForwardRefExoticComponent<import("styled-system").HeightProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, import("csstype").Property.Height<import("styled-system").TLengthStyledSystem>> & import("styled-system").WidthProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, import("csstype").Property.Width<import("styled-system").TLengthStyledSystem>> & Omit<import("packages/design-tokens/src").CompatibleHTMLProps<HTMLUListElement>, "label"> & import("packages/design-tokens/src").DensityProp & {
    color?: import("../List").ListColor | undefined;
    disableKeyboardNav?: boolean | undefined;
    iconGutter?: boolean | undefined;
    fontFamily?: import("packages/design-tokens/src").FontFamilies | undefined;
    windowing?: boolean | undefined;
} & import("react").RefAttributes<HTMLUListElement>>, import("styled-components").DefaultTheme, import("styled-system").HeightProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, import("csstype").Property.Height<import("styled-system").TLengthStyledSystem>> & import("styled-system").WidthProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, import("csstype").Property.Width<import("styled-system").TLengthStyledSystem>> & Omit<import("packages/design-tokens/src").CompatibleHTMLProps<HTMLUListElement>, "label"> & import("packages/design-tokens/src").DensityProp & {
    color?: import("../List").ListColor | undefined;
    disableKeyboardNav?: boolean | undefined;
    iconGutter?: boolean | undefined;
    fontFamily?: import("packages/design-tokens/src").FontFamilies | undefined;
    windowing?: boolean | undefined;
} & {
    color: import("../List").ListColor;
}, "color">;
