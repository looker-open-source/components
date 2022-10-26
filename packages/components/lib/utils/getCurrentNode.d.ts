import type { RefObject } from 'react';
export declare type ElementOrRef<E extends HTMLElement = HTMLElement> = E | null | undefined | RefObject<E>;
export declare function getCurrentNode<E extends HTMLElement = HTMLElement>(elementOrRefObject: ElementOrRef<E>): E | null;
