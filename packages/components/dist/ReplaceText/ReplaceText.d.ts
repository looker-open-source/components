/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import type { ReactNode } from 'react';
export declare type ReplaceProps = {
    /**
     * The text that will be highlighted
     */
    children: string;
};
export declare type ReplaceComponent = (props: ReplaceProps) => ReactNode;
export interface ReplaceTextProps {
    /**
     * Any non-text children will be passed along as-is
     */
    children?: ReactNode | ReactNode[];
    /**
     * A string to search for in the children (case-insensitive, global)
     */
    match?: string;
    /**
     * A component to wrap the matched text. Defaults to a span with semi-bold/underline style.
     */
    replace?: ReplaceComponent;
}
export declare const ReplaceText: ({ children, ...rest }: ReplaceTextProps) => JSX.Element;
