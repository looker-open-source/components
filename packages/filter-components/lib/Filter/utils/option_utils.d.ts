import type { Option } from '../types/option';
export declare const createOptions: (values?: string | string[] | undefined) => Option[];
/**
 * Creates an option from an enumeration's label and value.
 * For parameters we unescape the value since the filter expression value is
 * returned escaped from the backend.
 * If the enumeration value remains escaped the unescaped value will not match
 * and a new option will be added to the option list.
 *
 * https://docs.looker.com/reference/filter-expressions
 *
 * @param e Enumeration option
 */
export declare const createEnumeration: (isParameter?: boolean) => (e: Option) => Option;
/**
 * Filters a list of options by a filter term and/or values to exclude
 *
 * @param options List of available options
 * @param filterTerm Matches case-insensitive anywhere in the option's label (or value if label is undefined)
 */
export declare const filterOptions: (options: Option[], filterTerm?: string | undefined, excludedValues?: string[] | undefined) => Option[];
