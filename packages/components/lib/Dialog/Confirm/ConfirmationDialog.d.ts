import type { FC, ReactElement } from 'react';
import type { StatefulColor } from '@looker/design-tokens';
import type { DialogProps } from '../Dialog';
export declare type ConfirmationCallback = (close: () => void) => void;
export interface ConfirmationProps extends DialogProps {
    /**
     * Cancel button text
     * I18n recommended: content that is user visible should be treated for i18n
     * @default Cancel
     */
    cancelLabel?: string;
    /**
     * Defines the color of the confirm button. Can be the string name of a color listed in the color theme, or a color object.
     * @default key
     */
    buttonColor?: StatefulColor;
    /**
     * Defines the color of the confirm button. Can be the string name of a color listed in the color theme, or a color object.
     * @default neutral
     */
    cancelColor?: StatefulColor;
    /**
     * Confirmation button text
     *
     * I18n recommended: content that is user visible should be treated for i18n
     * @default Confirm
     */
    confirmLabel?: string;
    /**
     * Additional information about the action requiring confirmation
     *
     * I18n recommended: content that is user visible should be treated for i18n
     */
    message: ReactElement | string;
    /**
     * Callback if user clicks Cancel button or closes the dialog
     */
    onCancel?: ConfirmationCallback;
    /**
     * Function called when user clicks to confirm
     * close function is passed as an argument to control when to close the dialog
     */
    onConfirm: ConfirmationCallback;
    /**
     * Dialog title text
     *
     * I18n recommended: content that is user visible should be treated for i18n
     */
    title: string;
}
export interface ConfirmationDialogProps extends ConfirmationProps {
    /**
     * For triggering close from within the dialog
     */
    close: () => void;
    /**
     * Toggling this after mounting will trigger the animation
     * @default false
     */
    isOpen?: boolean;
}
export declare const ConfirmationDialog: FC<ConfirmationDialogProps>;
