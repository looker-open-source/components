import type { CompatibleHTMLProps } from '@looker/design-tokens';
import type { ValidationType } from '../ValidationMessage';
export interface InputProps extends CompatibleHTMLProps<HTMLInputElement> {
    validationType?: ValidationType;
    'data-autofocus'?: string;
    'data-testid'?: string;
}
export interface InputTextTypeProps {
    /**
     *
     * @default text
     */
    type?: 'email' | 'month' | 'number' | 'password' | 'search' | 'tel' | 'text' | 'url' | 'week';
}
export declare const inputPropKeys: string[];
/**
 * Adds data-autofocus attribute for use with focus-trap (Popover & Dialog)
 * Can't use the autofocus dom attribute b/c React does not pass it down
 * https://github.com/facebook/react/issues/11851
 */
export declare const getAutoFocusProps: (autoFocus?: boolean | undefined) => {
    autoFocus: true;
    'data-autofocus': string;
} | {
    autoFocus?: undefined;
    'data-autofocus'?: undefined;
};
export declare const pickInputProps: <T extends {
    autoFocus?: boolean | undefined;
}>({ autoFocus, ...props }: T) => ({
    autoFocus: true;
    'data-autofocus': string;
} & Partial<Omit<T, "autoFocus">>) | ({
    autoFocus?: undefined;
    'data-autofocus'?: undefined;
} & Partial<Omit<T, "autoFocus">>);
