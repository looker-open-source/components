import type { Trap } from '../TrapStack/types';
export interface ScrollLockMap {
    [key: string]: HTMLElement;
}
export declare function activateScrollLock({ element }: Trap): () => void;
