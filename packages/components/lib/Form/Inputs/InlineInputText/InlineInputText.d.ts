import React from 'react';
import type { TypographyProps } from '@looker/design-tokens';
import type { InputProps, InputTextTypeProps } from '../InputProps';
export interface InlineInputTextProps extends TypographyProps, Omit<InputProps, 'type'>, InputTextTypeProps {
    underlineOnlyOnHover?: boolean;
    simple?: boolean;
}
export declare const InlineInputTextBase: import("styled-components").StyledComponent<React.ForwardRefExoticComponent<InlineInputTextProps & React.RefAttributes<HTMLInputElement>>, import("styled-components").DefaultTheme, {}, never>;
export declare const InlineInputText: import("styled-components").StyledComponent<React.ForwardRefExoticComponent<InlineInputTextProps & React.RefAttributes<HTMLInputElement>>, import("styled-components").DefaultTheme, {}, never>;
