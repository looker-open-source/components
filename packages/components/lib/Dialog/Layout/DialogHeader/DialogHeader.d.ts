import type { FC } from 'react';
import type { ModalHeaderProps } from '../../../Modal/ModalHeader';
declare type WithDetail = {
    detail?: ModalHeaderProps['detail'];
    hideClose?: never;
};
declare type WithHideClose = {
    detail?: never;
    /**
     * Don't include the "Close" option
     * @default false
     */
    hideClose?: boolean;
};
export declare type DetailOptions = WithDetail | WithHideClose;
export declare type DialogHeaderProps = DetailOptions & Omit<ModalHeaderProps, 'detail'>;
export declare const DialogHeader: import("styled-components").StyledComponent<FC<DialogHeaderProps>, import("styled-components").DefaultTheme, {} & DialogHeaderProps, never>;
export {};
