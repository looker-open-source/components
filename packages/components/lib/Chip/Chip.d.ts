import type { MaxWidthProps } from '@looker/design-tokens';
import type { KeyboardEvent, MouseEvent } from 'react';
import React from 'react';
import type { GenericClickProps } from '../utils';
import type { TruncateCSSProps } from '../Text/truncate';
export interface ChipProps extends MaxWidthProps, TruncateCSSProps, GenericClickProps<HTMLSpanElement> {
    /**
     * customize the tooltip on the closing icon
     * @default Delete
     */
    iconLabel?: string;
    onDelete?: (e?: MouseEvent<HTMLSpanElement> | KeyboardEvent<HTMLSpanElement>) => void;
    /**
     * I18n recommended: content that is user visible should be treated for i18n
     */
    prefix?: string;
    readOnly?: boolean;
}
export declare const Chip: import("styled-components").StyledComponent<React.ForwardRefExoticComponent<ChipProps & React.RefAttributes<HTMLSpanElement>>, import("styled-components").DefaultTheme, {}, never>;
