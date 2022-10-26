export interface UsePopoverToggleProps {
    /**
     * If true, the Popover will not render
     */
    disabled?: boolean;
    /**
     * When true, display Surface and it's contained content
     * @default false
     */
    isOpen?: boolean;
    /**
     * Specify a callback to be called before trying to close the Popover. This allows for
     * use-cases where the user might lose work (think common "Save before closing warning" type flow)
     * Specify a callback to be called each time this Popover is closed
     */
    canClose?: () => boolean;
    /**
     * Optional, for a controlled version of the component
     */
    setOpen?: (open: boolean) => void;
    /**
     * Whether to close the popover when the toggle is clicked again
     * @default true
     */
    triggerToggle?: boolean;
    /**
     * Whether to honor the first click outside the popover
     * @default false
     */
    cancelClickOutside?: boolean;
}
export declare const usePopoverToggle: ({ isOpen: controlledIsOpen, setOpen: controlledSetOpen, canClose, triggerToggle, cancelClickOutside, }: UsePopoverToggleProps, portalElement: HTMLElement | null, triggerElement: HTMLElement | null) => [boolean, (value: boolean) => void];
