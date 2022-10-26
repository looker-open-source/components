import type { FC, ReactNode } from 'react';
import type { TextColorProps, TypographyProps } from '@looker/design-tokens';
import type { SimpleLayoutProps } from '../Layout/utils/simple';
import type { AccordionIndicatorProps } from '../Accordion2/types';
import type { ControlledLoosely } from '../Accordion2/controlTypes';
import type { GenericClickProps } from '../utils';
export declare type AccordionProps = ControlledLoosely & AccordionIndicatorProps & Omit<GenericClickProps<HTMLElement>, 'content'> & SimpleLayoutProps & TextColorProps & TypographyProps & {
    /**
     * We currently support two different compositions for Accordion:
     *  - `Accordion`'s children will act as the "trigger" element (i.e. children always visible, clicking children toggles whether content is visible or not)
     *  - Legacy: `<Accordion>` wrapped around an `<AccordionDisclosure>` and `<AccordionContent>` (NOTE: This composition will be deprecated in a future MAJOR release)
     */
    children: ReactNode;
    /**
     * Determines the content shown or hidden by the Accordion's open state.
     * Note: If using the "Legacy" Accordion composition, provide an `<AccordionContent>` child instead of using the content prop.
     */
    content?: ReactNode;
    /**
     * A unique ID primarily used to supply aria-controls and aria-labelledby to child AccordionDisclosure and child AccordionContent
     * Note: This will be auto-generated if undefined
     */
    id?: string;
};
/**
 * @deprecated Use `Accordion2` instead
 */
export declare const Accordion: import("styled-components").StyledComponent<FC<AccordionProps>, import("styled-components").DefaultTheme, {}, never>;
