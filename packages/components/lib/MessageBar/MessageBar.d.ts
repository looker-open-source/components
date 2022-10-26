import type { CompatibleHTMLProps, TypographyProps } from '@looker/design-tokens';
import type { ReactElement } from 'react';
import React from 'react';
import type { ButtonProps } from '../Button';
import type { SimpleLayoutProps } from '../Layout/utils/simple';
export declare type MessageBarIntent = 'critical' | 'inform' | 'positive' | 'warn';
export declare type SupportedActionTypes = string | ReactElement<ButtonProps>;
export interface MessageBarProps extends CompatibleHTMLProps<HTMLElement>, SimpleLayoutProps, TypographyProps {
    /**
     * Determines the icon choice and background color
     * @default: 'inform'
     */
    intent?: MessageBarIntent;
    /**
     * Determines whether the MessageBar is rendered or not.
     * @default: true
     */
    visible?: boolean;
    /**
     * Polymorphic prop defines the primary action button to render.
     * @default true (which renders IconButton)
     */
    primaryAction?: SupportedActionTypes;
    /**
     * Polymorphic prop defines the secondary action button to render.
     */
    secondaryAction?: SupportedActionTypes;
    /**
     * Callback fires when primaryAction is clicked
     * @default noop
     */
    onPrimaryClick?: () => void;
    /**
     * Callback fires when secondaryAction is clicked
     * @default noop
     */
    onSecondaryClick?: () => void;
    /**
     * Hide action buttons altogether
     * @default false
     */
    noActions?: boolean;
    className?: string;
}
export declare const MessageBar: import("styled-components").StyledComponent<React.ForwardRefExoticComponent<MessageBarProps & React.RefAttributes<HTMLDivElement>>, import("styled-components").DefaultTheme, {
    intent: MessageBarIntent;
    px: import("styled-system").ResponsiveValue<string | number | symbol, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>>;
    py: import("styled-system").ResponsiveValue<string | number | symbol, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>>;
    width: import("styled-system").ResponsiveValue<import("csstype").Property.Width<import("styled-system").TLengthStyledSystem>, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>>;
}, "width" | "py" | "px" | "intent">;
