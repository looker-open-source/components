/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import type { CompatibleHTMLProps, FlexboxProps, LayoutProps, TypographyProps, SpaceProps } from '@looker/design-tokens';
import React from 'react';
export interface ComboboxWrapperProps extends FlexboxProps, Omit<LayoutProps, 'size'>, SpaceProps, TypographyProps, Omit<CompatibleHTMLProps<HTMLDivElement>, 'readOnly' | 'onChange' | 'value' | 'defaultValue'> {
    /**
     * The optional a11y aria label for combobox Wrapper element that has popup
     */
    wrapperAriaLabel?: string;
}
export declare const ComboboxWrapper: React.ForwardRefExoticComponent<ComboboxWrapperProps & {
    isVisible: boolean;
} & React.RefAttributes<HTMLDivElement>>;
