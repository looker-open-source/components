/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import type { ReactNode } from 'react';
import type { ConfirmationProps } from './ConfirmationDialog';
export interface ConfirmProps extends ConfirmationProps {
    /**
     * Render prop is passed the confirmation opener
     */
    children: (open: () => void) => ReactNode;
}
export declare function useConfirm(props: ConfirmationProps): [ReactNode, () => void];
export declare const Confirm: ({ children, ...props }: ConfirmProps) => JSX.Element;
