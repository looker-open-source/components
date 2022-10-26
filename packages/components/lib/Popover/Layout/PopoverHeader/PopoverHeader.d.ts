import type { FC, ReactNode } from 'react';
import type { ModalHeaderProps } from '../../../Modal';
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
declare type DetailOptions = WithDetail | WithHideClose;
export declare type PopoverHeaderProps = DetailOptions & {
    children: ReactNode;
    /**
     * Make PopoverHeader visually hidden.
     * @default false
     */
    hidden?: boolean;
};
export declare const PopoverHeader: import("styled-components").StyledComponent<FC<PopoverHeaderProps>, import("styled-components").DefaultTheme, import("packages/design-tokens/src").CompatibleHTMLProps<HTMLDivElement> & import("../../..").SpaceHelperProps & import("packages/design-tokens/src").FontSizeProps & import("packages/design-tokens/src").FontWeightProps & {
    children: ReactNode;
    detail?: ReactNode;
}, never>;
export {};
