/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import type { ReactNode } from 'react';
import type { PromptBaseProps } from './PromptDialog';
export interface PromptProps extends PromptBaseProps {
    /**
     * Render prop is passed the confirmation opener
     */
    children: (onClick: () => void) => ReactNode;
}
export declare function usePrompt(props: PromptBaseProps): [ReactNode, () => void];
export declare const Prompt: ({ children, ...props }: PromptProps) => JSX.Element;
