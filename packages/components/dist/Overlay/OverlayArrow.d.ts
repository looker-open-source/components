/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import type { CompatibleHTMLProps } from '@looker/design-tokens';
export interface OverlayArrowProps extends CompatibleHTMLProps<HTMLDivElement> {
    /**
     *  @default background
     **/
    color?: string;
    ['data-placement']: string;
}
export declare const OverlayArrow: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {
    'data-popper-arrow': boolean;
    'data-testid': string;
} & OverlayArrowProps, "data-testid" | "data-popper-arrow">;
