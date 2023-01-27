/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import type { CompatibleHTMLProps } from '@looker/design-tokens';
import type { ReactNode } from 'react';
export declare const isLegacyComposition: (children: ReactNode) => boolean;
declare type DomProps = CompatibleHTMLProps<HTMLElement>;
declare type AccordionLegacyProps = DomProps & {
    children: ReactNode;
    contentDomProps: DomProps;
    disclosureProps: DomProps;
    isOpen: boolean;
};
export declare const AccordionLegacy: ({ children, contentDomProps, disclosureProps, isOpen, ...props }: AccordionLegacyProps) => JSX.Element;
export {};
