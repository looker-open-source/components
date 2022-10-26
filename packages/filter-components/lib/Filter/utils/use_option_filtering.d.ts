/// <reference types="react" />
import type { Option } from '../types/option';
/**
 * Adds a debounce to the filter term / onInputChange call
 *
 * @param onInputChange Callback to receive debounced filter term
 */
export declare const useDebouncedFilterTerm: (onInputChange?: ((value: string) => void) | undefined) => {
    debouncedFilterTerm: string;
    noOptionsLabel: string;
    onFilter: import("react").Dispatch<import("react").SetStateAction<string>>;
};
export interface UseOptionFilteringProps {
    /**
     * Whether to remove the selected value(s) from the filtered options
     */
    excludeValues?: boolean;
    /**
     * If there are more initial options than this number, instead of filtering
     * options on the front end, the API will be hit every keystroke and
     * filtering will occur in the backend.
     * @default 999
     */
    limit?: number;
    /**
     * Callback to receive debounced filter term
     */
    onInputChange?: (value: string) => void;
    /**
     * List of available options
     */
    options: Option[];
    /**
     * Currently selected value(s)
     */
    value: string | string[];
}
/**
 * Adds a debounce to the filter term / onInputChange call
 */
export declare const useOptionFiltering: ({ excludeValues, limit, onInputChange, options, value, }: UseOptionFilteringProps) => {
    noOptionsLabel: string;
    onFilter: import("react").Dispatch<import("react").SetStateAction<string>>;
    filteredOptions: Option[];
    debouncedFilterTerm: string;
};
