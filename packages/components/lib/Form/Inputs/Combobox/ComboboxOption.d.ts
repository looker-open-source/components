import type { CompatibleHTMLProps } from '@looker/design-tokens';
import React from 'react';
import type { ComboboxOptionProps, HighlightTextProps } from './types';
interface ComboboxOptionWrapperProps extends ComboboxOptionProps {
    isSelected?: boolean;
}
export declare const ComboboxOptionWrapper: import("styled-components").StyledComponent<React.ForwardRefExoticComponent<ComboboxOptionWrapperProps & React.RefAttributes<HTMLLIElement>>, import("styled-components").DefaultTheme, {}, never>;
export declare const comboboxOptionStyle: import("styled-components").FlattenInterpolation<import("styled-components").ThemeProps<import("styled-components").DefaultTheme>>;
export declare const ComboboxOption: import("styled-components").StyledComponent<React.ForwardRefExoticComponent<ComboboxOptionProps & React.RefAttributes<HTMLLIElement>>, import("styled-components").DefaultTheme, {
    color: import("styled-system").ResponsiveValue<string | number | symbol, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>>;
    display: import("styled-system").ResponsiveValue<import("csstype").Property.Display, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>>;
    fontSize: import("styled-system").ResponsiveValue<import("@looker/design-tokens").FontSizes, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>>;
    lineHeight: import("styled-system").ResponsiveValue<import("@looker/design-tokens").FontSizes, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>>;
    px: import("styled-system").ResponsiveValue<string | number | symbol, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>>;
    py: import("styled-system").ResponsiveValue<string | number | symbol, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>>;
}, "color" | "display" | "fontSize" | "lineHeight" | "py" | "px">;
export declare function ComboboxOptionTextInternal({ highlightText, ...props }: CompatibleHTMLProps<HTMLSpanElement> & HighlightTextProps): JSX.Element;
export declare const ComboboxOptionText: import("styled-components").StyledComponent<typeof ComboboxOptionTextInternal, import("styled-components").DefaultTheme, {}, never>;
export {};
