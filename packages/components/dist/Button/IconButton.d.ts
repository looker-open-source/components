import React from 'react';
import type { IconButtonProps } from './iconButtonTypes';
/**
 * Appears as just an `Icon` but with proper HTML semantics to produce a `button`
 * DOM element that is properly announced to screen-readers as well as providing
 * keyboard tooltip support.
 */
export declare const IconButton: import("styled-components").StyledComponent<React.ForwardRefExoticComponent<IconButtonProps & React.RefAttributes<HTMLButtonElement>>, import("styled-components").DefaultTheme, {
    toggleColor: import("./iconButtonTypes").ToggleColor;
    type: "button" | "reset" | "submit";
} & IconButtonProps, "type" | "toggleColor">;
