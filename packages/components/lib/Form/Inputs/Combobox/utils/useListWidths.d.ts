import type { WidthProps, MinWidthProps } from '@looker/design-tokens';
export interface UseListWidthProps extends MinWidthProps, WidthProps {
    isVisible?: boolean;
    wrapperElement?: HTMLElement | null;
}
export declare function useListWidths({ isVisible, minWidth: propsMinWidth, width: propsWidth, wrapperElement, }: UseListWidthProps): {
    minWidth: import("styled-system").ResponsiveValue<import("csstype").Property.MinWidth<import("styled-system").TLengthStyledSystem>, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> | undefined;
    width: import("styled-system").ResponsiveValue<import("csstype").Property.Width<import("styled-system").TLengthStyledSystem>, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> | undefined;
};
