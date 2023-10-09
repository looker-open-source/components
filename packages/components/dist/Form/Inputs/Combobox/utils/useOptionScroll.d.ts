import type { Context } from 'react';
import type { ComboboxContextProps, ComboboxMultiContextProps } from '../ComboboxContext';
export declare const isScrollable: (el: HTMLElement | null) => boolean;
export declare function useOptionScroll<CProps extends ComboboxContextProps | ComboboxMultiContextProps>(context: Context<CProps>, value: string, label?: string, scrollIntoView?: boolean, isActive?: boolean): (node: HTMLElement | null) => void;
