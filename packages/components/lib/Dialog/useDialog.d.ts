import type { FC, ReactNode } from 'react';
import type { DrawerPlacements, DialogDrawerWidth } from '../Drawer/DrawerSurface';
import type { DialogSurfaceProps, DialogPlacements } from './DialogSurface';
import type { DialogWidth } from './dialogWidth';
export interface UseDialogBaseProps {
    /**
     * Specify a callback to be called before trying to close the Popover. This allows for
     * use-cases where the user might lose work (think common "Save before closing warning" type flow)
     * Specify a callback to be called each time this Popover is closed
     */
    canClose?: () => boolean;
    /**
     * Content to rendered within the Dialog surface.
     * @required
     */
    content: ReactNode;
    /**
     * Dialog will be displayed immediately when rendered.
     * NOTE: Once rendered, changes to this value will be ignored. This property cannot
     * be used treat this component as "controlled"
     * @default false
     */
    defaultOpen?: boolean;
    /**
     * The id of the dialog (if absent, a random id will be generated)
     */
    id?: string;
    /**
     * Dialog will be displayed immediately when rendered.
     * @default undefined
     */
    isOpen?: boolean;
    /**
     * function available after dialog is closed
     */
    onAfterClose?: () => void;
    /**
     * function available after dialog is opened
     */
    onAfterOpen?: () => void;
    /**
     * Specify a callback to be called each time this Dialog is closed
     */
    onClose?: () => void;
    /**
     * Optional, for a controlled version of the component
     */
    setOpen?: (open: boolean) => void;
}
export interface UseDialogProps extends UseDialogBaseProps, DialogSurfaceProps {
    /**
     * Specify a custom surface to use for Dialog surface.
     * This is intended for internal components use only (specifically `Drawer`)
     * @private
     */
    Surface?: FC;
}
export interface UseDialogPropsInternal extends Omit<UseDialogProps, 'placement' | 'width'> {
    placement?: DialogPlacements | DrawerPlacements;
    width?: DialogWidth | DialogDrawerWidth;
}
export interface UseDialogResponseDom {
    onClick: () => void;
    role: string;
    'aria-expanded': boolean;
}
export interface UseDialogResponse {
    isOpen: boolean;
    setOpen: (open: boolean) => void;
    dialog: ReactNode;
    domProps: UseDialogResponseDom;
}
export declare const useDialog: ({ content, defaultOpen, isOpen: controlledIsOpen, canClose, onAfterClose, onAfterOpen, onClose, setOpen: controlledSetOpen, Surface: CustomSurface, placement, id, ...surfaceProps }: UseDialogPropsInternal) => UseDialogResponse;
