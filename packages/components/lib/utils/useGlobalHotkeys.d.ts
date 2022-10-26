import type { MutableRefObject } from 'react';
declare type CB = (e?: KeyboardEvent) => void;
export declare const useGlobalHotkeys: (keyCommand: string, cb: CB, containerRef: MutableRefObject<null | HTMLElement>) => void;
export {};
