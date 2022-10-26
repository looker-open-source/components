import type { FC } from 'react';
import type { TypographyProps } from '@looker/design-tokens';
import type { SimpleLayoutProps } from '../Layout/utils/simple';
export declare type AccordionDisclosureProps = SimpleLayoutProps & TypographyProps;
/**
 * @deprecated Use `Accordion2` instead
 */
export declare const AccordionDisclosure: import("styled-components").StyledComponent<FC<AccordionDisclosureProps>, import("styled-components").DefaultTheme, {
    px: import("styled-system").ResponsiveValue<string | number | symbol, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>>;
    py: import("styled-system").ResponsiveValue<string | number | symbol, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>>;
}, "py" | "px">;
