import type { Context, FocusEvent } from 'react';
import type { ComboboxContextProps, ComboboxMultiContextProps } from '../ComboboxContext';
export declare function useBlur<TContext extends ComboboxContextProps | ComboboxMultiContextProps = ComboboxContextProps>(context: Context<TContext>): (e?: FocusEvent<Element, Element> | undefined) => void;
