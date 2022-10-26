import type { FC } from 'react';
export interface HoverDisclosureProps {
    visible?: boolean;
    /**
     * In some circumstances it's required to reserve space for the hidden content
     * before it is revealed. Specifying this will reserve a space of the specified
     * width (in pixels)
     */
    width?: number;
}
export declare const HoverDisclosure: FC<HoverDisclosureProps>;
