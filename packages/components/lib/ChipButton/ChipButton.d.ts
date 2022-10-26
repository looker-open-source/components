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
export declare const ChipButton: import("styled-components").StyledComponent<import("react").ForwardRefExoticComponent<ChipProps & import("react").RefAttributes<HTMLSpanElement>>, import("styled-components").DefaultTheme, {
    role: "button";
} & ChipButtonProps, "role">;
