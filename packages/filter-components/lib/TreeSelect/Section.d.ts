import type { BoxProps } from '@looker/components';
import React from 'react';
interface SectionProps extends Omit<BoxProps, 'title' | 'onClick'> {
    title: React.ReactNode;
    isOpen: boolean;
    id: string;
    detail?: string;
    onClick: (updateNode: {
        id: string;
        isOpen: boolean;
    }) => void;
}
export declare const SectionFactory: ({ title, isOpen, onClick, id, detail, ...props }: SectionProps) => JSX.Element;
export declare const SectionLabelName: import("styled-components").StyledComponent<"span", import("styled-components").DefaultTheme, import("@looker/components").TextBaseProps & import("@looker/components").SpanProps & import("@looker/components").TextProps, never>;
export declare const SectionLabelDetail: import("styled-components").StyledComponent<"span", import("styled-components").DefaultTheme, import("@looker/components").TextBaseProps & import("@looker/components").SpanProps & import("@looker/components").TextProps, never>;
export declare const SectionContent: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, import("packages/design-tokens/src").CompatibleHTMLProps<HTMLElement> & import("styled-system").ColorProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, string | number | symbol> & import("@looker/components").SimpleLayoutProps & import("styled-system").BorderRadiusProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, string | number | symbol> & {
    border?: (string | boolean) | undefined;
    borderBottom?: (string | boolean) | undefined;
    borderLeft?: (string | boolean) | undefined;
    borderRight?: (string | boolean) | undefined;
    borderTop?: (string | boolean) | undefined;
    borderX?: (string | boolean) | undefined;
    borderY?: (string | boolean) | undefined;
} & import("packages/design-tokens/src").TypographyProps & {
    color?: string | undefined;
} & import("styled-system").FlexboxProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> & import("packages/design-tokens/src").CursorProps & import("packages/design-tokens/src").UserSelectProps, never>;
export declare const SectionLabel: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, import("@looker/components").FlexProps, never>;
export declare const Section: import("styled-components").StyledComponent<({ title, isOpen, onClick, id, detail, ...props }: SectionProps) => JSX.Element, import("styled-components").DefaultTheme, {}, never>;
export {};
