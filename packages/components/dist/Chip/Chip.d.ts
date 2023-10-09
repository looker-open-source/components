import type { MaxWidthProps } from '@looker/design-tokens';
import type { KeyboardEvent, MouseEvent } from 'react';
import React from 'react';
import type { GenericClickProps } from '../utils';
export declare type ChipProps = MaxWidthProps & GenericClickProps<HTMLSpanElement> & {
    /**
     * customize the tooltip on the closing icon
     * @default Delete
     */
    iconLabel?: string;
    /**
     * Displays an x icon and is called when the user clicks that or hits the delete key
     */
    onDelete?: (e?: MouseEvent<HTMLSpanElement> | KeyboardEvent<HTMLSpanElement>) => void;
    /**
     * I18n recommended: content that is user visible should be treated for i18n
     */
    prefix?: string;
    readOnly?: boolean;
};
export declare const Chip: import("styled-components").StyledComponent<React.ForwardRefExoticComponent<MaxWidthProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, import("csstype").Property.MaxWidth<import("styled-system").TLengthStyledSystem>> & GenericClickProps<HTMLSpanElement> & {
    /**
     * customize the tooltip on the closing icon
     * @default Delete
     */
    iconLabel?: string | undefined;
    /**
     * Displays an x icon and is called when the user clicks that or hits the delete key
     */
    onDelete?: ((e?: KeyboardEvent<HTMLSpanElement> | MouseEvent<HTMLSpanElement, globalThis.MouseEvent> | undefined) => void) | undefined;
    /**
     * I18n recommended: content that is user visible should be treated for i18n
     */
    prefix?: string | undefined;
    readOnly?: boolean | undefined;
} & React.RefAttributes<HTMLSpanElement>>, import("styled-components").DefaultTheme, {}, never>;
