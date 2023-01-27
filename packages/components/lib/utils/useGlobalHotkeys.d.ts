import type { ElementOrRef } from './getCurrentNode';
declare type CB = (e?: KeyboardEvent) => void;
/**
 * Registers a global key command tied to a given element
 * @param keyCommand A single key to be used in the keydown listener
 * @param cb The function to be called on keydown
 * @param elementOrRef The element or ref associated with the key command
 */
export declare const useGlobalHotkeys: (keyCommand: string, cb: CB, elementOrRef: ElementOrRef) => void;
export {};
