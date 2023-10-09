import type { CompatibleHTMLProps } from '@looker/design-tokens';
import type { FocusEvent } from 'react';
import type { UseFloatingLabelProps } from './types';
/**
 * A helper function to derive the hasValue prop from the value and defaultValue props.
 * Use custom logic for fields that have different value-related props (see FieldChips).
 */
export declare const getHasValue: <Props extends {
    value?: unknown;
    defaultValue?: unknown;
} = CompatibleHTMLProps<HTMLInputElement>>({ value, defaultValue, }: Pick<Props, "value" | "defaultValue">) => boolean;
/**
 * Controls the label position for FloatingLabelField
 */
export declare const useFloatingLabel: ({ checkValueOnBlur, hasValue: propsHasValue, labelOffset, }: UseFloatingLabelProps) => {
    className: string;
    handlers: {
        onBlur: (e: FocusEvent<HTMLDivElement>) => void;
        onFocus: () => void;
    };
    isFocused: boolean;
    style: Record<string, string>;
};
