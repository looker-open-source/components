import type { FC, ReactNode } from 'react';
import type { StatefulColor } from '@looker/design-tokens';
export declare type PromptCallback = (close: () => void) => void;
export interface PromptBaseProps {
    /**
     * Cancel button text
     * @default Cancel
     */
    cancelLabel?: string;
    /**
     * Defines the color of the cancel button. Can be the string name of a color listed in the color theme, or a color object.
     * @default neutral
     */
    cancelColor?: StatefulColor;
    /**
     * Callback if user clicks Cancel button or closes the dialog
     */
    onCancel?: (close: () => void) => void;
    /**
     * Callback that is triggered when submit button is pressed
     */
    onSave: (value: string, close: () => void) => void;
    /**
     * Label for the rendered input.
     * Rendered as placeholder and visually hidden label for screenreaders.
     */
    inputLabel: string;
    /**
     * Title of the dialog
     */
    title: string;
    /**
     * Default value of the rendered input
     */
    defaultValue?: string;
    /**
     * Text of the submit button
     */
    saveLabel?: string;
    /**
     * A React Element that is placed at the bottom left of the dialog
     */
    secondary?: ReactNode;
    /**
     * clearOnCancel
     * @default false
     */
    clearOnCancel?: boolean;
}
export interface PromptDialogProps extends PromptBaseProps {
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
export declare const PromptDialog: FC<PromptDialogProps>;
