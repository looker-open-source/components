/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import type { ReactNode } from 'react';
import type { ModalHeaderProps } from '../../../Modal';
declare type WithDetail = {
    detail?: ModalHeaderProps['detail'];
    hideClose?: never;
};
declare type WithHideClose = {
    detail?: never;
    /**
     * Don't include the "Close" option
     * @default false
     */
    hideClose?: boolean;
};
declare type DetailOptions = WithDetail | WithHideClose;
export declare type PopoverHeaderProps = DetailOptions & {
    children: ReactNode;
    /**
     * Make PopoverHeader visually hidden.
     * @default false
     */
    hidden?: boolean;
};
export declare const PopoverHeader: import("styled-components").StyledComponent<({ children, hideClose, detail, hidden, ...props }: PopoverHeaderProps) => JSX.Element, import("styled-components").DefaultTheme, import("packages/design-tokens/lib").CompatibleHTMLProps<HTMLDivElement> & import("../../..").SpaceHelperProps & import("packages/design-tokens/lib").FontSizeProps & import("packages/design-tokens/lib").FontWeightProps & {
    children: ReactNode;
    detail?: ReactNode;
}, never>;
export {};
