import type { CompatibleHTMLProps } from '@looker/design-tokens';
import type { FocusEvent, KeyboardEvent } from 'react';
import type { DefaultTheme, FlattenInterpolation, ThemedStyledProps } from 'styled-components';
export interface FocusVisibleProps {
    focusVisible: boolean;
}
export declare type UseFocusVisibleProps<E extends HTMLElement> = Pick<CompatibleHTMLProps<E>, 'onBlur' | 'onKeyUp'>;
export declare const focusVisibleCSSWrapper: <Props extends FocusVisibleProps>(styleFn: (props: ThemedStyledProps<Props, DefaultTheme>) => FlattenInterpolation<ThemedStyledProps<Props, DefaultTheme>>) => FlattenInterpolation<ThemedStyledProps<Props, DefaultTheme>>;
export declare const useFocusVisible: <E extends HTMLElement = HTMLElement>({ onBlur, onKeyUp, }: UseFocusVisibleProps<E>) => {
    focusVisible: boolean;
    onBlur: (e: FocusEvent<E, Element>) => void;
    onKeyUp: (e: KeyboardEvent<E>) => void;
};
