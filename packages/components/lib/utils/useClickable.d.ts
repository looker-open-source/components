import type { CompatibleHTMLProps } from '@looker/design-tokens';
import type { KeyboardEvent, MouseEvent as ReactMouseEvent } from 'react';
import type { FocusVisibleProps } from './useFocusVisible';
export declare type GenericOnClick<E extends HTMLElement> = (e: ReactMouseEvent<E, MouseEvent> | KeyboardEvent<E>) => void;
export interface GenericClickProps<E extends HTMLElement> extends Omit<CompatibleHTMLProps<E>, 'onClick'> {
    onClick?: GenericOnClick<E>;
}
declare type Attributes = 'disabled' | 'onBlur' | 'onKeyUp' | 'role';
export interface UseClickableProps<E extends HTMLElement> extends Pick<CompatibleHTMLProps<E>, Attributes>, Pick<GenericClickProps<E>, 'onClick'> {
}
export interface UseClickableResult<E extends HTMLElement> extends Pick<CompatibleHTMLProps<E>, Attributes | 'onClick' | 'tabIndex'>, FocusVisibleProps {
}
/**
 * This hook provides keyboard accessibility for any component that renders a non-button element
 * that is both focus-able and clickable. The component should handle styling for focusVisible.
 */
export declare function useClickable<E extends HTMLElement>({ onClick, disabled, role, ...rest }: UseClickableProps<E>): UseClickableResult<E>;
export {};
