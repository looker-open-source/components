/// <reference types="react" />
import type { LayoutProps } from '@looker/design-tokens';
import type { ModalContentProps } from '../../../Modal/ModalContent';
export declare type PopoverContentProps = ModalContentProps & LayoutProps;
export declare const PopoverContent: import("styled-components").StyledComponent<({ children, p, py, px, ...props }: PopoverContentProps) => JSX.Element, import("styled-components").DefaultTheme, import("@looker/design-tokens").CompatibleHTMLProps<HTMLDivElement> & import("styled-system").PaddingProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> & {
    hasFooter?: boolean | undefined;
    hasHeader?: boolean | undefined;
} & LayoutProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>>, never>;
