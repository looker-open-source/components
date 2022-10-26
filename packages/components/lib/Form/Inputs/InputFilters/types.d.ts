import type { ReactNode } from 'react';
export interface InputFilterEditorProps {
    closeEditor: () => void;
    filterOptions: FieldFilterOptions;
    onChange: (value?: string) => void;
    value?: string;
}
export declare type InputFilterEditorRenderProp = (props: InputFilterEditorProps) => ReactNode;
export interface FieldFilterOptions {
    field: string;
    label?: string;
    /**
     * ability to select multiple filter options
     * @default false
     */
    multiple?: boolean;
    options?: string[];
}
export interface FieldFilter extends FieldFilterOptions {
    editor?: InputFilterEditorRenderProp;
    formatValue?: (value: string) => string;
    value?: string;
}
export interface InputFiltersProps {
    className?: string;
    filters: FieldFilter[];
    hideFilterIcon?: boolean;
    /**
     * Placeholder text for input when empty
     *
     * I18n recommended: content that is user visible should be treated for i18n
     *
     * Defaults to internationalized "Filter List"
     */
    placeholder?: string;
    onChange: (filters: FieldFilter[]) => void;
}
