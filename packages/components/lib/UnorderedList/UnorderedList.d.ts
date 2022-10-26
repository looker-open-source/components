import type { CompatibleHTMLProps, LayoutProps, PositionProps, SpaceProps, TextColorProps, TypographyProps } from '@looker/design-tokens';
export interface UnorderedListProps extends CompatibleHTMLProps<HTMLUListElement>, PositionProps, LayoutProps, SpaceProps, TextColorProps, TypographyProps {
    /**
     * Specify the type of marker to place next to list items.
     *
     * @default none
     */
    type?: 'none' | 'bullet';
}
export declare const UnorderedList: import("styled-components").StyledComponent<"ul", import("styled-components").DefaultTheme, UnorderedListProps, never>;
