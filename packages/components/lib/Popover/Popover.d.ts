import type { ReactNode, RefObject } from 'react';
import React from 'react';
import type { UsePopoverProps, UsePopoverResponseDom } from './usePopover';
export declare type PopoverRenderProp = (props: UsePopoverResponseDom) => ReactNode;
export interface PopoverProps extends UsePopoverProps {
    /**
     * Component to wrap. The HOC will listen for mouse events on this
     * component, maintain the state of isOpen accordingly, and pass that state into
     * the Popover renderProp.
     */
    children: ReactNode | PopoverRenderProp;
    /**
     * The element which hovering on/off of will show/hide the triggering element
     */
    hoverDisclosureRef?: HTMLElement | null | RefObject<HTMLElement>;
}
export declare const popoverPropKeys: Array<keyof PopoverProps>;
export declare const Popover: React.ForwardRefExoticComponent<Pick<PopoverProps, "content" | "width" | "disabled" | "id" | "aria-haspopup" | "children" | "isOpen" | "placement" | "onClose" | "canClose" | "triggerElement" | "setOpen" | "cancelClickOutside" | "pin" | "triggerToggle" | "focusTrap" | "scrollLock" | "surface" | "ariaLabel" | "hoverDisclosureRef" | "portalElement" | "disableScrollLock"> & React.RefAttributes<any>>;
