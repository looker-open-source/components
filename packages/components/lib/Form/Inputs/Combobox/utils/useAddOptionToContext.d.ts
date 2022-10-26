import type { Context } from 'react';
import type { ComboboxContextProps, ComboboxMultiContextProps } from '../ComboboxContext';
export declare function useAddOptionToContext<CProps extends ComboboxContextProps | ComboboxMultiContextProps>(context: Context<CProps>, value: string, label?: string, scrollIntoView?: boolean): void;
