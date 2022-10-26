/// <reference types="react" />
import type { ModalFooterProps } from '../../../Modal/ModalFooter';
export interface DialogFooterProps extends ModalFooterProps {
}
export declare const DialogFooter: import("styled-components").StyledComponent<import("react").FC<ModalFooterProps>, import("styled-components").DefaultTheme, {
    px: import("styled-system").ResponsiveValue<string | number | symbol, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>>;
    py: import("styled-system").ResponsiveValue<string | number | symbol, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>>;
} & DialogFooterProps, "py" | "px">;
