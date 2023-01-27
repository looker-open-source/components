/// <reference types="react" />
import type { StringMultiSelectProps } from '../../../../types/string_select_props';
import type { TokenStyleProps } from '../../../../utils/filter_styles';
export declare type TagListProps = StringMultiSelectProps & TokenStyleProps;
export declare const TagList: import("styled-components").StyledComponent<({ value, options, onChange, onInputChange, validationMessage, ...props }: TagListProps) => JSX.Element, import("styled-components").DefaultTheme, {}, never>;
