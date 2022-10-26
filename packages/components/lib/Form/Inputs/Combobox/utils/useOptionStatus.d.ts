import type { Context } from 'react';
import type { ComboboxContextProps, ComboboxMultiContextProps } from '../ComboboxContext';
import type { ComboboxOptionStatuses } from '../types';
export declare function useOptionStatus<CProps extends ComboboxContextProps | ComboboxMultiContextProps>(context: Context<CProps>, value: string): ComboboxOptionStatuses;
