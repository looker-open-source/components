/// <reference types="react" />
export interface DialogContextProps {
    /**
     * Indicates currently animating when true
     */
    busy?: boolean;
    closeModal: () => void;
    /**
     * Used to connect the DialogHeader's title to the Dialog's `aria-labelledby`
     * @private
     */
    id: string;
}
export declare const DialogContext: import("react").Context<DialogContextProps>;
