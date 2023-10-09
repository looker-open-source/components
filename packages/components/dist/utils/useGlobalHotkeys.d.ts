import type { ElementOrRef } from './getCurrentNode';
declare type CB = (e?: KeyboardEvent) => void;
/**
 * Registers a global key command tied to a given element
 * @param keys A + delimited string of one or more keys to be used in the keydown listener
 * @param cb The function to be called on keydown
 * @param elementOrRef The element or ref associated with the key command
 */
export declare const useGlobalHotkeys: (keys: string, cb: CB, elementOrRef: ElementOrRef) => void;
export {};
