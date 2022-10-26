import type { FC, Ref, ReactNode } from 'react';
import type { CompatibleHTMLProps, DensityProp } from '@looker/design-tokens';
import type { FocusVisibleProps } from '../utils';
import type { AccordionIndicatorPosition } from './types';
export declare type Accordion2DisclosureProps = CompatibleHTMLProps<HTMLElement> & DensityProp & FocusVisibleProps & {
    ref?: Ref<HTMLDivElement>;
    indicator: ReactNode;
    indicatorPosition?: AccordionIndicatorPosition;
};
/**
 * This is provided for legacy implementation support within `Tree` & `NavList`
 * The component may be removed without triggering a MAJOR release. Use with caution
 *
 * @private
 * @deprecated Use `useAccordion2` if you need to control styling within an Accordion2
 */
export declare const Accordion2Disclosure: import("styled-components").StyledComponent<FC<Accordion2DisclosureProps>, import("styled-components").DefaultTheme, {}, never>;
