import React from 'react';
import type { SelectProps, SelectOptionObject } from '../Select';
export interface InputSearchProps extends Omit<SelectProps, 'isFilterable' | 'noOptionsLabel' | 'onFilter' | 'openOnClick' | 'showCreate' | 'formatCreateLabel'> {
    /**
     * Selecting an option updates the input's value
     * @default true
     * @experimental
     */
    changeOnSelect?: boolean;
    /**
     * Clear the input value when the option list closes
     * Defaults to the inverse of changeOnSelect
     * @default false
     * @experimental
     */
    clearOnClose?: boolean;
    /**
     * customize the tooltip on the clear icon
     */
    clearIconLabel?: string;
    hideSearchIcon?: boolean;
    /**
     * @default true
     */
    isClearable?: SelectProps['isClearable'];
    /**
     * If defined, the popup will render with this text when there are no options.
     * @experimental
     */
    noOptionsLabel?: string;
    /**
     * Called when the user selects one of the options
     * onChange will also be called with the option's value unless changeOnSelect is set to false
     * @experimental
     */
    onSelectOption?: (option?: SelectOptionObject) => void;
    /**
     * If true, the popover opens when the text box is clicked.
     * @default false
     * @experimental
     */
    openOnClick?: boolean;
    readOnly?: boolean;
}
export declare const InputSearch: import("styled-components").StyledComponent<React.ForwardRefExoticComponent<InputSearchProps & React.RefAttributes<HTMLInputElement>>, import("styled-components").DefaultTheme, {}, never>;
