import type { FC, ReactNode } from 'react';
export interface ModalLayoutProps {
    /**
     * Content to be displayed within Modal
     */
    children?: ReactNode;
    /**
     * Content to be displayed as footer
     */
    footer?: ReactNode;
    /**
     * Content to be displayed as header
     */
    header?: ReactNode;
    /**
     * Display loading spinner instead of the ModalContent
     */
    isLoading?: boolean;
}
export declare const ModalLoading: () => JSX.Element;
export declare const ModalLayout: FC<ModalLayoutProps>;
