import type { CompatibleHTMLProps, SpaceProps, TextColorProps, TypographyProps, PositionProps, LayoutProps } from '@looker/design-tokens';
export interface OrderedListProps extends CompatibleHTMLProps<HTMLElement>, PositionProps, LayoutProps, SpaceProps, TextColorProps, TypographyProps {
    /**
     * Specify the type of marker to place next to list items.
     *
     * @default none
     */
    type?: 'none' | 'number' | 'letter';
}
/**
 * We hit a weird issue with styled components when trying to use a styled.ol
 *
 * TLDR: The "type" prop only accepts undefined when trying to use a styled.ol
 * so using a styled.div + attrs and as works around this.
 */
export declare const OrderedList: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, OrderedListProps, never>;
