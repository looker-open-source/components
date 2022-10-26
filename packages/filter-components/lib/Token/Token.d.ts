import React from 'react';
export interface TokenProps {
    label: string;
    subdued?: boolean;
    isHoverTarget?: boolean;
    isEmpty?: boolean;
    maxWidth?: string;
    onClick?: (event: React.SyntheticEvent) => void;
    hasError?: boolean;
    'aria-expanded'?: boolean;
}
interface ChipTokenProps {
    showError?: boolean;
}
/**
 * Builds the text portion of the FilterToken component
 * that displays the summary (label) description of a filter's value
 */
export declare const Token: React.ForwardRefExoticComponent<TokenProps & React.RefAttributes<HTMLDivElement>>;
export declare const SubduedToken: import("styled-components").StyledComponent<React.ForwardRefExoticComponent<import("@looker/components").ChipProps & React.RefAttributes<HTMLSpanElement>>, import("styled-components").DefaultTheme, {
    role: "button";
} & import("@looker/components").ChipButtonProps & ChipTokenProps & {
    maxWidth?: string | undefined;
}, "role">;
export {};
