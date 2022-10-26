import type { CompatibleHTMLProps, Transitions } from '@looker/design-tokens';
import type { Placement } from '@popperjs/core';
import type { Property } from 'csstype';
import type { ReactElement, ReactNode, Ref } from 'react';
import type { MenuDomProps } from '../Menu';
export declare type TooltipRenderProp = (props: UseTooltipResponseDom) => ReactNode;
export interface UseTooltipProps {
    /**
     * Specify a callback to be called before trying to close the Tooltip. This allows for
     * use-cases where the user might lose work (think common "Save before closing warning" type flow)
     * Specify a callback to be called each time this Tooltip is closed
     */
    canClose?: () => boolean;
    isOpen?: boolean;
    /**
     * Can be one of: top, bottom, left, right, auto, with the modifiers: start,
     * end. This value comes directly from popperjs. See
     * https://popper.js.org/popper-documentation.html#Popper.placements for more
     * info.
     */
    placement?: Placement;
    /**
     * Content to display inside the tooltip. Can be a string or JSX.
     * If not defined, the Tooltip will not render.
     * I18n recommended: content that is user visible should be treated for i18n
     */
    content?: ReactNode;
    /**
     * Specify a fixed content width.
     * @default auto
     */
    width?: string;
    /**
     * Specify a fixed max-width.
     * @default none
     */
    maxWidth?: string;
    /**
     * Specify the text alignment within tooltips.
     * @default center
     */
    textAlign?: Property.TextAlign;
    /**
     * The id of the span containing the tooltip text (if absent, a random id will be generated)
     */
    id?: string;
    /**
     * Tooltip background and text color is inverted from the page default
     * @default true
     * @private
     */
    invert?: boolean;
    /**
     * The trigger element ref to use (if absent, one will be created and returned)
     */
    triggerElement?: HTMLElement | null;
    /**
     * If true, the useTooltip hook will return nothing
     */
    disabled?: boolean;
    /**
     * Delay
     */
    delay?: Transitions;
    /**
     * Pass in custom aria describedById to be used instead of using the id of tooltip content
     */
    ariaDescribedById?: string;
}
declare type UseTooltipCallbacks = Required<Pick<CompatibleHTMLProps<HTMLElement>, 'onBlur' | 'onFocus' | 'onMouseOut' | 'onMouseOver'>>;
export declare type UseTooltipResponseDom = UseTooltipCallbacks & Pick<CompatibleHTMLProps<HTMLElement>, 'aria-describedby' | 'className'> & {
    /**
     * @deprecated returns a no-op function, will be removed in 3.x release
     */
    ref: Ref<any>;
};
export interface TooltipProps extends UseTooltipProps, Partial<MenuDomProps> {
    content: ReactNode;
    /**
     * Component to receive tooltip behavior or render prop function that
     * receives tooltip props and returns a component
     */
    children: ReactElement<UseTooltipResponseDom & MenuDomProps> | TooltipRenderProp;
}
export {};
