/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
/// <reference types="react" />
import type { ChipProps } from '../Chip/Chip';
export interface ChipButtonProps extends Omit<ChipProps, 'role'> {
}
/**
   * Activates specialized styling Chip when used as a trigger for a Menu or Overlay

   * NOTE: Please consult with the @looker/components team when using this property
   * as it may be remove or extracted into a unique component in the future.
   *
   */
export declare const ChipButton: import("styled-components").StyledComponent<import("react").ForwardRefExoticComponent<import("styled-system").MaxWidthProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, import("csstype").Property.MaxWidth<import("styled-system").TLengthStyledSystem>> & import("..").GenericClickProps<HTMLSpanElement> & {
    iconLabel?: string | undefined;
    onDelete?: ((e?: import("react").KeyboardEvent<HTMLSpanElement> | import("react").MouseEvent<HTMLSpanElement, MouseEvent> | undefined) => void) | undefined;
    prefix?: string | undefined;
    readOnly?: boolean | undefined;
} & import("react").RefAttributes<HTMLSpanElement>>, import("styled-components").DefaultTheme, {
    role: "button";
} & ChipButtonProps, "role">;
