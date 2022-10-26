import type { FC, ReactNode, ReactElement } from 'react';
import type { ModalFooterProps } from '../../../Modal/ModalFooter/ModalFooter';
export interface PopoverFooterProps extends Omit<ModalFooterProps, 'secondary' | 'children'> {
    children?: ReactNode;
    /**
     * Button to close popover
     * I18n recommended: content that is user visible should be treated for i18n
     * @default Done
     */
    closeButton?: ReactElement | string;
}
export declare const PopoverFooter: import("styled-components").StyledComponent<FC<PopoverFooterProps>, import("styled-components").DefaultTheme, PopoverFooterProps, never>;
