import type { FocusEvent, MouseEvent as ReactMouseEvent, Context } from 'react';
import type { ComboboxContextProps, ComboboxMultiContextProps } from '../ComboboxContext';
import type { ComboboxInputProps, ComboboxMultiInputProps } from '../types';
export declare function useInputEvents<TProps extends ComboboxInputProps | ComboboxMultiInputProps = ComboboxInputProps, TContext extends ComboboxContextProps | ComboboxMultiContextProps = ComboboxContextProps>({ disabled, selectOnClick, inputReadOnly, onClick, onMouseDown, onKeyDown, onBlur, onFocus, }: TProps, context: Context<TContext>): {
    onBlur: (event: FocusEvent<HTMLInputElement, Element>) => void;
    onClick: (event: ReactMouseEvent<HTMLDivElement, MouseEvent>) => void;
    onFocus: (event: FocusEvent<HTMLInputElement, Element>) => void;
    onKeyDown: (event: import("react").KeyboardEvent<HTMLInputElement>) => void;
    onMouseDown: (event: ReactMouseEvent<HTMLDivElement, MouseEvent>) => void;
};
