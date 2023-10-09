import React from 'react';
import type { ComboboxMultiCallback, ComboboxOptionObject } from '../types';
import type { ComboboxCommonProps } from '../Combobox';
import type { ComboboxWrapperProps } from '../ComboboxWrapper';
export interface ComboboxMultiProps extends ComboboxWrapperProps, ComboboxCommonProps<ComboboxMultiCallback> {
    /**
     * The current option (controlled)
     */
    values?: ComboboxOptionObject[];
    /**
     * The initial option (uncontrolled)
     */
    defaultValues?: ComboboxOptionObject[];
}
export declare const ComboboxMultiInternal: React.ForwardRefExoticComponent<ComboboxMultiProps & React.RefAttributes<HTMLDivElement>>;
export declare const ComboboxMulti: import("styled-components").StyledComponent<React.ForwardRefExoticComponent<ComboboxMultiProps & React.RefAttributes<HTMLDivElement>>, import("styled-components").DefaultTheme, Partial<ComboboxMultiProps & React.RefAttributes<HTMLDivElement>> & {
    [others: string]: any;
}, string | number>;
