import React from 'react';
import type { ComboboxMultiCallback, ComboboxOptionObject } from './types';
import type { ComboboxBaseProps, ComboboxCommonProps } from './Combobox';
export interface ComboboxMultiProps extends ComboboxBaseProps, ComboboxCommonProps<ComboboxMultiCallback> {
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
export declare const ComboboxMulti: import("styled-components").StyledComponent<React.ForwardRefExoticComponent<ComboboxMultiProps & React.RefAttributes<HTMLDivElement>>, import("styled-components").DefaultTheme, {
    display: import("styled-system").ResponsiveValue<import("csstype").Property.Display, Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>>;
}, "display">;
