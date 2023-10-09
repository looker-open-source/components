/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import type { ReactNode } from 'react';
import type { TypographyProps } from '@looker/design-tokens';
import type { SimpleLayoutProps } from '../Layout/utils/simple';
export declare type AccordionDisclosureProps = SimpleLayoutProps & TypographyProps & {
    children?: ReactNode;
};
/**
 * @deprecated Use `Accordion2` instead
 */
export declare const AccordionDisclosure: import("styled-components").StyledComponent<(props: AccordionDisclosureProps) => JSX.Element, import("styled-components").DefaultTheme, {
    px: import("styled-system").ResponsiveValue<string | number | symbol, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>>;
    py: import("styled-system").ResponsiveValue<string | number | symbol, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>>;
}, "py" | "px">;
