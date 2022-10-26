import type { Context } from 'react';
import type { ComboboxContextProps, ComboboxMultiContextProps } from '../ComboboxContext';
import type { ComboboxOptionProps } from '../types';
export declare function useOptionEvents<CProps extends ComboboxContextProps | ComboboxMultiContextProps>(props: ComboboxOptionProps, context: Context<CProps>): {
    onClick: (event: import("react").MouseEvent<HTMLLIElement, MouseEvent>) => void;
    onMouseEnter: (event: import("react").MouseEvent<HTMLLIElement, MouseEvent>) => void;
};
