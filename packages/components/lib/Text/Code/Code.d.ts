/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import type { ReactNode } from 'react';
import type { TextBaseProps } from '../Text/TextBase';
export interface CodeProps extends TextBaseProps {
    children?: ReactNode;
}
export declare const Code: import("styled-components").StyledComponent<"span", import("styled-components").DefaultTheme, TextBaseProps & CodeProps, never>;
