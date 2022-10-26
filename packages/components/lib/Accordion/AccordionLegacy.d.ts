import type { CompatibleHTMLProps } from '@looker/design-tokens';
import type { FC, ReactNode } from 'react';
export declare const isLegacyComposition: (children: ReactNode) => boolean;
declare type DomProps = CompatibleHTMLProps<HTMLElement>;
declare type AccordionLegacyProps = DomProps & {
    children: ReactNode;
    contentDomProps: DomProps;
    disclosureProps: DomProps;
    isOpen: boolean;
};
export declare const AccordionLegacy: FC<AccordionLegacyProps>;
export {};
