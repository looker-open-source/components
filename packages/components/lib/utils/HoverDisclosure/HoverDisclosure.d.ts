/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import type { ReactNode } from 'react';
export interface HoverDisclosureProps {
    visible?: boolean;
    /**
     * In some circumstances it's required to reserve space for the hidden content
     * before it is revealed. Specifying this will reserve a space of the specified
     * width (in pixels)
     */
    width?: number;
    children?: ReactNode;
}
export declare const HoverDisclosure: ({ children, width, visible, }: HoverDisclosureProps) => JSX.Element;
