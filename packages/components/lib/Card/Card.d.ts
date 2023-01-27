/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import type { CompatibleHTMLProps, FlexboxProps } from '@looker/design-tokens';
import type { CommonLayoutProps } from '../Layout/utils/common';
export interface CardProps extends CompatibleHTMLProps<HTMLElement>, FlexboxProps, CommonLayoutProps {
    /**
     * Show card with a BoxShadow applied
     * @default false
     */
    raised?: boolean;
}
export declare const Card: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, CardProps, never>;
