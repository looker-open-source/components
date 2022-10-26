import type { UseTrapStackProps } from './useTrapStack';
export declare const useScrollLock: <T extends HTMLElement = HTMLElement>(props?: Omit<UseTrapStackProps<T, unknown>, "context">) => [T | null, (node: T | null) => void];
