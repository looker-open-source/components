import type { Ref, MutableRefObject } from 'react';
export declare type RefToFork<E> = Ref<E> | MutableRefObject<E> | undefined;
export declare function useForkedRef<E extends HTMLElement>(...refs: RefToFork<E>[]): (node: E | null) => void;
