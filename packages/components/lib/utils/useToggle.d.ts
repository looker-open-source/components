export interface UseToggleReturn {
    value: boolean;
    change: (value: boolean) => void;
    setOn: () => void;
    setOff: () => void;
    toggle: () => void;
}
export declare function useToggle(initialValue?: boolean): UseToggleReturn;
