import type { ValidationMessageProps } from '@looker/components';
import type { FilterModel } from '@looker/filter-expressions';
import type { FC } from 'react';
import type { Option } from '../../../../../../types/option';
import type { PlacementProps } from '../../../../../../utils/filter_styles';
interface MultiStringInputProps extends PlacementProps {
    className?: string;
    onChange?: (id?: string, props?: any) => void;
    onInputChange?: (value: string) => void;
    isLoading?: boolean;
    item: FilterModel;
    disableCreate?: boolean;
    suggestions?: string[];
    enumerations?: Option[];
    validationMessage?: ValidationMessageProps;
    id?: string;
    width?: string | number;
    height?: string | number;
    showDropDownMenu?: boolean;
}
export declare const MultiStringInputLayout: FC<MultiStringInputProps>;
export declare const MultiStringInput: import("styled-components").StyledComponent<FC<MultiStringInputProps>, import("styled-components").DefaultTheme, {}, never>;
export {};
