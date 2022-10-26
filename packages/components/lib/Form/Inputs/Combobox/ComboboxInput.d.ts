import React from 'react';
import type { ComboboxInputProps } from './types';
export declare const ComboboxInputInternal: React.ForwardRefExoticComponent<ComboboxInputProps & React.RefAttributes<HTMLInputElement>>;
export declare const comboboxStyles: import("styled-components").FlattenInterpolation<import("styled-components").ThemedStyledProps<{
    inputReadOnly?: boolean | undefined;
}, import("styled-components").DefaultTheme>>;
export declare const ComboboxInput: import("styled-components").StyledComponent<React.ForwardRefExoticComponent<ComboboxInputProps & React.RefAttributes<HTMLInputElement>>, import("styled-components").DefaultTheme, {
    width: import("styled-system").ResponsiveValue<import("csstype").Property.Width<import("styled-system").TLengthStyledSystem>, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>>;
}, "width">;
