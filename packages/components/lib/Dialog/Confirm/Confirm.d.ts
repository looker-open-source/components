import type { FC, ReactNode } from 'react';
import type { ConfirmationProps } from './ConfirmationDialog';
export interface ConfirmProps extends ConfirmationProps {
    /**
     * Render prop is passed the confirmation opener
     */
    children: (open: () => void) => ReactNode;
}
export declare function useConfirm(props: ConfirmationProps): [ReactNode, () => void];
export declare const Confirm: FC<ConfirmProps>;
