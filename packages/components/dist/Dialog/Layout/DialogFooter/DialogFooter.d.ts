/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
/// <reference types="react" />
import type { ModalFooterProps } from '../../../Modal/ModalFooter';
export interface DialogFooterProps extends ModalFooterProps {
}
export declare const DialogFooter: import("styled-components").StyledComponent<({ children, secondary, ...props }: ModalFooterProps) => JSX.Element, import("styled-components").DefaultTheme, {
    px: import("styled-system").ResponsiveValue<string | number | symbol, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>>;
    py: import("styled-system").ResponsiveValue<string | number | symbol, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>>;
} & DialogFooterProps, "py" | "px">;
