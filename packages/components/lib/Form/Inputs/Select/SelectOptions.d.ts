import type { ReactNode } from 'react';
import React from 'react';
import type { FlatOption, SelectOptionObject } from './types';
export declare const SelectOptionsContext: React.Context<{
    hasIcons: boolean;
}>;
export declare const SelectOptionWithDescription: ({ description, preface, }: SelectOptionObject) => JSX.Element;
export interface SelectOptionsBaseProps {
    /**
     * The user can type in the input (default false to mimic traditional select tag)
     */
    isFilterable?: boolean;
    /**
     * Text to show when there are no available options
     */
    noOptionsLabel?: string;
    /**
     * Render only the options visible in the scroll window
     */
    windowing?: boolean;
    /**
     * Add an on-the-fly option mirroring the typed text (use when isFilterable = true)
     * When `true`, notInOptions is used to show/hide and can be included in a custom function
     */
    showCreate?: boolean;
    /**
     * Format the label of the on-the-fly create option (use with canCreate)
     */
    formatCreateLabel?: (inputText: string) => ReactNode;
    /**
     * Render a spinner in the list instead of any options
     * @default false
     */
    isLoading?: boolean;
}
export interface SelectOptionsProps extends SelectOptionsBaseProps {
    flatOptions?: FlatOption[];
    navigationOptions?: SelectOptionObject[];
    isMulti?: boolean;
}
export declare const SelectOptions: (props: SelectOptionsProps) => JSX.Element;
