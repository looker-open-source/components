declare type Controlled = {
    /**
     * Use this property (alongside toggleOpen) if you wish to use the component in a `controlled` manner.
     * isOpen determines whether the Accordion is currently open or closed
     **/
    isOpen: boolean;
    /**
     * Use this property (alongside isOpen) if you wish to use the component in a `controlled` manner.
     * toggleOpen is a function that should control the value / state of isOpen
     */
    toggleOpen: (isOpen: boolean) => void;
};
declare type Uncontrolled = {
    isOpen?: never;
    toggleOpen?: never;
};
declare type Others = {
    /**
     * Use this property if you wish to use the component in a `uncontrolled` manner and have it open when initially rendering.
     * Component will hold internal state and open and close on disclosure click
     **/
    defaultOpen?: boolean;
    /**
     * Callback that is triggered when closing the Accordion (i.e. when clicking on an open Accordion)
     */
    onClose?: () => void;
    /**
     * Callback that is triggered when opening the Accordion (i.e. when clicking on a closed Accordion)
     */
    onOpen?: () => void;
};
/**
 * @deprecated Use  `Accordion2ControlProps` instead
 */
export declare type ControlledLoosely = Partial<Controlled> & Others;
/**
 * Prevents the creation of a "semi-controlled" component. Prevents consumers
 * from mixing controlled vs uncontrolled properties
 *
 * Specifically this type checks toggleOpen & isOpen are both specified or
 * both undefined.
 */
export declare type ControlledOrUncontrolled = (Controlled | Uncontrolled) & Others;
export {};
