export interface UseDelayedStateReturn<T> {
    change: (value: T) => void;
    delayChange: (value: T, delay?: number) => void;
    value: T;
    waitChange: (value: T) => void;
}
/**
 * Extension of useState that provides dispatchers to delay the state update
 * @param initialValue
 */
export declare function useDelayedState<T>(initialValue: T): UseDelayedStateReturn<T>;
