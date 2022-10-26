import type { WidthProps } from '@looker/design-tokens';
import type { Placement } from '@popperjs/core';
import type { AriaAttributes, ReactNode, Ref, SyntheticEvent } from 'react';
import React from 'react';
import { OverlaySurface } from '../Overlay/OverlaySurface';
import type { UsePopoverToggleProps } from './usePopoverToggle';
declare type AriaHaspopupProps = Pick<AriaAttributes, 'aria-haspopup'>;
export interface UsePopoverProps extends AriaHaspopupProps, WidthProps, UsePopoverToggleProps {
    /**
     * Content to render within the Popover surface.
     */
    content: ReactNode;
    /**
     * Specify a callback to be called each time this Popover is closed
     */
    onClose?: () => void;
    /**
     * Can be one of: top, bottom, left, right, auto, with the modifiers: start,
     * end. This value comes directly from popperjs. See
     * https://popper.js.org/popper-documentation.html#Popper.placements for more
     * info.
     * @default bottom
     */
    placement?: Placement;
    portalElement?: HTMLDivElement | null;
    /**
     * By default Popover will reposition itself if they overflow the widow.
     * You can use the pin property to override this behavior.
     */
    pin?: boolean;
    /**
     * Set whether to disable scrolling outside the popover
     */
    disableScrollLock?: boolean;
    /**
     * The trigger element to use (alternatively use the ref returned)
     */
    triggerElement?: HTMLElement | null;
    /**
     * Whether to trap focus within the popover
     * @default true
     */
    focusTrap?: boolean;
    /**
     * Will be merged with the ref in the return
     */
    ref?: Ref<HTMLElement>;
    /**
     * Whether to lock scrolling outside the popover
     * @default true
     */
    scrollLock?: boolean;
    /**
     * Custom surface component to render the content in
     * @private
     */
    surface?: typeof OverlaySurface;
    /**
     * The id of the dialog (if absent, a random id will be generated)
     */
    id?: string;
    /**
     * Optional Aria Label if not using Popover Header for A11Y
     */
    ariaLabel?: string;
}
export interface UsePopoverResponseDom extends AriaHaspopupProps {
    onClick: (event: SyntheticEvent) => void;
    /**
     * Used by popper.js to position the OverlaySurface relative to the trigger
     */
    ref: Ref<any>;
    'aria-expanded': boolean;
}
export declare const usePopover: ({ "aria-haspopup": ariaHaspopup, canClose, content, disabled, pin, isOpen: controlledIsOpen, onClose, placement: propsPlacement, setOpen: controlledSetOpen, triggerElement, triggerToggle, focusTrap, scrollLock, cancelClickOutside, ref, surface, width, id, ariaLabel, }: UsePopoverProps) => {
    contentContainer: HTMLElement | null;
    domProps: {
        'aria-expanded': boolean;
        'aria-haspopup': boolean | "grid" | "dialog" | "menu" | "listbox" | "false" | "true" | "tree" | undefined;
        onClick: (event: SyntheticEvent) => void;
        ref: (node: HTMLElement | null) => void;
    };
    isOpen: boolean;
    open: (event: SyntheticEvent) => void;
    popover: false | "" | 0 | JSX.Element | null | undefined;
    popperInstanceRef: React.MutableRefObject<import("@popperjs/core").Instance | undefined>;
    ref: (node: HTMLElement | null) => void;
};
export {};
