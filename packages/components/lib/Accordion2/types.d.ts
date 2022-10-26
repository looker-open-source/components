import type { ReactNode } from 'react';
import type { CompatibleHTMLProps, DensityProp } from '@looker/design-tokens';
import type { IconType } from '../Icon';
import type { GenericClickProps } from '../utils';
import type { ControlledOrUncontrolled } from './controlTypes';
export declare type AccordionIndicatorIcons = {
    close: IconType;
    open: IconType;
};
export declare type AccordionIndicatorPosition = 'left' | 'right';
export declare type Accordion2Props = ControlledOrUncontrolled & AccordionIndicatorProps & GenericClickProps<HTMLElement> & {
    /**
     * label will act as the "trigger" element (i.e. label is always visible, clicking toggles whether children is visible or not)
     */
    label: ReactNode;
    /**
     * A unique ID primarily used to supply aria-controls and aria-labelledby to child AccordionDisclosure and child AccordionContent
     * Note: This will be auto-generated if left undefined
     */
    id?: string;
};
export declare type AccordionIndicatorProps = Omit<CompatibleHTMLProps<HTMLDivElement>, 'content'> & DensityProp & {
    /**
     * Icons for disclosure indicator.
     *
     * indicatorPosition === default / 'right' will default to `ExpandMore` / `ExpandLess`
     * indicatorPosition === 'left' will default to `ArrowRight` / `ArrowDropDown`
     */
    indicatorIcons?: AccordionIndicatorIcons;
    /**
     * Determines where the disclosure indicator will sit on
     * @default right
     */
    indicatorPosition?: AccordionIndicatorPosition;
};
