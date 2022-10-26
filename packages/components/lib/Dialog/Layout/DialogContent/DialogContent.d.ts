/// <reference types="react" />
import type { LayoutProps } from '@looker/design-tokens';
import type { ModalContentProps } from '../../../Modal/ModalContent';
export declare type DialogContentProps = ModalContentProps & LayoutProps;
export declare const DialogContent: import("styled-components").StyledComponent<import("react").ForwardRefExoticComponent<import("@looker/design-tokens").CompatibleHTMLProps<HTMLDivElement> & import("styled-system").PaddingProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> & {
    hasFooter?: boolean | undefined;
    hasHeader?: boolean | undefined;
} & {
    overflowVerticalPadding?: import("@looker/design-tokens").SpacingSizes | undefined;
} & import("react").RefAttributes<HTMLDivElement>>, import("styled-components").DefaultTheme, import("@looker/design-tokens").CompatibleHTMLProps<HTMLDivElement> & import("styled-system").PaddingProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> & {
    hasFooter?: boolean | undefined;
    hasHeader?: boolean | undefined;
} & {
    overflowVerticalPadding?: import("@looker/design-tokens").SpacingSizes | undefined;
} & {
    px: string | number | symbol | (string | number | symbol | null)[] | {
        [x: string]: string | number | symbol | undefined;
        [x: number]: string | number | symbol | undefined;
    };
    py: string | number | symbol | (string | number | symbol | null)[] | {
        [x: string]: string | number | symbol | undefined;
        [x: number]: string | number | symbol | undefined;
    };
} & LayoutProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>>, "py" | "px">;
