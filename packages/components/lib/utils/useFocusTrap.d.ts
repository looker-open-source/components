import type { UseTrapStackBaseProps } from './useTrapStack';
export declare const useFocusTrap: <E extends HTMLElement = HTMLElement>({ clickOutsideDeactivates, ...props }: UseTrapStackBaseProps<E> & {
    clickOutsideDeactivates?: boolean | undefined;
}) => [E | null, (node: E | null) => void];
