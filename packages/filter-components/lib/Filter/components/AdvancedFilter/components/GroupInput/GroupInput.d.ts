/// <reference types="react" />
/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import type { InputTextProps } from '@looker/components';
import type { PlacementProps } from '../../../../utils/filter_styles';
export declare type GroupInputProps = InputTextProps & PlacementProps;
export declare const GroupInput: import("styled-components").StyledComponent<({ type, width, ...props }: GroupInputProps) => JSX.Element, import("styled-components").DefaultTheme, {
    placement: "left" | "right" | "middle";
}, "placement">;
