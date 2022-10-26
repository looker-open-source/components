import { ComboboxActionType } from './state';
export declare function useFocusManagement(lastActionType?: ComboboxActionType): {
    inputCallbackRef: (node: HTMLInputElement | null) => void;
    inputElement: HTMLInputElement | null;
};
