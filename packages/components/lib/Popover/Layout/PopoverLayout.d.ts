/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
/// <reference types="react" />
import type { ModalLayoutProps } from '../../Modal/ModalLayout';
import type { PopoverFooterProps } from './PopoverFooter';
export declare type PopoverLayoutProps = ModalLayoutProps & Pick<PopoverFooterProps, 'closeButton'> & {
    /**
     * Header will not be visually available but it will still properly announced in screen reader scenarios
     * @default false
     */
    hideHeader?: boolean;
};
export declare const PopoverLayout: ({ children, closeButton, footer, header, hideHeader, isLoading, }: PopoverLayoutProps) => JSX.Element;
