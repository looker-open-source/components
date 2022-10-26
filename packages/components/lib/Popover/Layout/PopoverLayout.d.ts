import type { FC } from 'react';
import type { ModalLayoutProps } from '../../Modal/ModalLayout';
import type { PopoverFooterProps } from './PopoverFooter';
export declare type PopoverLayoutProps = ModalLayoutProps & Pick<PopoverFooterProps, 'closeButton'> & {
    /**
     * Header will not be visually available but it will still properly announced in screen reader scenarios
     * @default false
     */
    hideHeader?: boolean;
};
export declare const PopoverLayout: FC<PopoverLayoutProps>;
