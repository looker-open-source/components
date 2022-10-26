import type { CompatibleHTMLProps } from '@looker/design-tokens';
import type { MouseEvent, ReactNode } from 'react';
import type { SimpleLayoutProps } from '../../../Layout/utils/simple';
import type { IconType } from '../../../Icon';
import type { InputProps, InputTextTypeProps } from '../InputProps';
export declare type DivMouseHandler = (e: MouseEvent<HTMLDivElement>) => void;
export declare type InputTextBaseProps = Omit<SimpleLayoutProps, 'size'> & Omit<InputProps, 'type'> & InputTextTypeProps & Pick<CompatibleHTMLProps<HTMLDivElement>, 'onClick' | 'onMouseDown' | 'onMouseEnter' | 'onMouseLeave' | 'onMouseOver' | 'onMouseOut' | 'onMouseUp'> & {
    /**
     * Allows the input width to resize with the value or placeholder
     * Styles will default to `width: auto` and `display: inline-flex`
     * Do not use with children
     */
    autoResize?: boolean;
    /**
     * Don't show the error icon when validationType is 'error'
     */
    noErrorIcon?: boolean;
};
export declare type InputTextProps = InputTextBaseProps & {
    /**
     * Content to place after the input
     * If a string is used, formatting will be automatically applied
     * If JSX is used, it will displace the built-in validation icon
     */
    after?: ReactNode;
    iconAfter?: IconType;
    /**
     * Content to place before the input
     * If a string is used, formatting will be automatically applied
     */
    before?: ReactNode;
    iconBefore?: IconType;
};
