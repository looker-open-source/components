import React from 'react';
import type { SpaceProps, TypographyProps, WidthProps } from '@looker/design-tokens';
import type { InputProps } from '../InputProps';
export interface SliderProps extends SpaceProps, WidthProps, Omit<InputProps, 'type'>, TypographyProps {
    'aria-labelledby'?: string;
    'aria-describedby'?: string;
    max?: number;
    min?: number;
    step?: number;
    value?: number | string;
}
export declare const Slider: import("styled-components").StyledComponent<React.ForwardRefExoticComponent<SliderProps & React.RefAttributes<HTMLInputElement>>, import("styled-components").DefaultTheme, {
    fontSize: import("styled-system").ResponsiveValue<import("@looker/design-tokens").FontSizes, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>>;
    lineHeight: import("styled-system").ResponsiveValue<import("@looker/design-tokens").FontSizes, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>>;
    mt: import("styled-system").ResponsiveValue<string | number | symbol, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>>;
    width: import("styled-system").ResponsiveValue<import("csstype").Property.Width<import("styled-system").TLengthStyledSystem>, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>>;
} & SliderProps, "fontSize" | "lineHeight" | "width" | "mt">;
