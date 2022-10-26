import React from 'react';
import type { TypographyProps, SpaceProps, CompatibleHTMLProps, LayoutProps } from '@looker/design-tokens';
export interface InlineTextAreaProps extends Omit<LayoutProps, 'size'>, SpaceProps, TypographyProps, CompatibleHTMLProps<HTMLTextAreaElement> {
    underlineOnlyOnHover?: boolean;
    value?: string;
}
export declare const InlineTextAreaLayout: React.ForwardRefExoticComponent<InlineTextAreaProps & React.RefAttributes<HTMLTextAreaElement>>;
export declare const InlineTextArea: import("styled-components").StyledComponent<React.ForwardRefExoticComponent<InlineTextAreaProps & React.RefAttributes<HTMLTextAreaElement>>, import("styled-components").DefaultTheme, {}, never>;
