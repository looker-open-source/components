import type { FC, ReactNode } from 'react';
import type { ModalHeaderProps } from '../../Modal/ModalHeader';
import type { ModalLayoutProps } from '../../Modal/ModalLayout';
declare type WithFooter = {
    /**
     * displays content on the right-side of the DialogFooter, uses
     * Space to add whitespace between each element.
     */
    footer: ModalLayoutProps['footer'];
    /**
     * Secondary content to place in the footer
     * NOTE: `footer` property must be supplied for footer to be displayed. Supplying
     * only `footerSecondary` will prevent `DialogFooter` from being displayed.
     */
    footerSecondary?: ReactNode;
};
declare type WithoutFooter = {
    footer?: undefined;
    footerSecondary?: never;
};
declare type FooterOptions = WithFooter | WithoutFooter;
export declare type DialogLayoutProps = FooterOptions & ModalLayoutProps & {
    children?: ReactNode;
    /**
     * Content in header. If a `string` is supplied the content will be placed in a `<Header />`
     */
    header?: ReactNode;
    /**
     * Replaces the built-in `IconButton` (generally used for close) with an arbitrary ReactNode
     */
    headerDetail?: ModalHeaderProps['detail'];
    /**
     * Display "Close" IconButton in the DialogHeader.
     * NOTE: `true` if no footer is supplied and `headerClose` is not explicitly specified.
     */
    headerCloseButton?: boolean;
};
export declare const DialogLayout: FC<DialogLayoutProps>;
export {};
