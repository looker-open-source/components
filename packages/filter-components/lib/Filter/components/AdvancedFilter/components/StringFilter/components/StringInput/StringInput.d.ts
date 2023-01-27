/// <reference types="react" />
import type { ValidationMessageProps } from '@looker/components';
import type { FilterModel } from '@looker/filter-expressions';
import type { Option } from '../../../../../../types/option';
import type { PlacementProps } from '../../../../../../utils/filter_styles';
interface StringInputProps extends PlacementProps {
    className?: string;
    onChange?: (id?: string, props?: any) => void;
    onInputChange?: (value: string) => void;
    isLoading?: boolean;
    item: FilterModel;
    suggestions?: string[];
    enumerations?: Option[];
    validationMessage?: ValidationMessageProps;
    id?: string;
    width?: string | number;
    height?: string | number;
}
export declare const StringInputLayout: ({ className, onChange, onInputChange, isLoading, item, suggestions, enumerations, validationMessage, id, width, height, }: StringInputProps) => JSX.Element;
export declare const StringInput: import("styled-components").StyledComponent<({ className, onChange, onInputChange, isLoading, item, suggestions, enumerations, validationMessage, id, width, height, }: StringInputProps) => JSX.Element, import("styled-components").DefaultTheme, {}, never>;
export {};
