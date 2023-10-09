/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import type { ReactNode } from 'react';
import type { UseDialogResponse, UseDialogResponseDom } from './useDialog';
export declare type DialogRenderProp = (props: UseDialogResponseDom) => ReactNode;
declare type DialogRenderProps = UseDialogResponse & {
    children?: ReactNode;
};
export declare const DialogRender: ({ children, dialog, domProps, }: DialogRenderProps) => JSX.Element;
export {};
