import type { ReactNode } from 'react';
import type { ComboboxOptionObject, ComboboxOptionIndicatorProps } from '../Combobox';
import type { IconType } from '../../../Icon';
export interface SelectOptionObject extends ComboboxOptionObject, Pick<ComboboxOptionIndicatorProps, 'indicator'> {
    description?: ReactNode;
    /**
     * Supplementary element that appears right of the option's label
     */
    detail?: ReactNode;
    /**
     * Icon shown to the left of the option label in the list and input when selected
     * Use an IconName, or inline svg for a custom icon
     */
    icon?: IconType;
    /**
     * Supplementary element that appears above the option's label
     */
    preface?: ReactNode;
}
export interface SelectOptionGroupProps {
    options: SelectOptionObject[];
    label?: ReactNode;
}
export declare type SelectOptionProps = SelectOptionObject | SelectOptionGroupProps;
export interface FlatOption extends Omit<Partial<SelectOptionObject>, 'label'> {
    label?: ReactNode;
}
