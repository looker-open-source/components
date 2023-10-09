/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import type { Context } from 'react';
import type { ComboboxContextProps, ComboboxMultiContextProps } from '../ComboboxContext';
import type { ComboboxOptionObject, ComboboxOptionProps } from '../types';
export declare type UseOptionEventsProps = ComboboxOptionObject & Pick<ComboboxOptionProps, 'onClick' | 'onMouseEnter'>;
export declare function useOptionEvents<CProps extends ComboboxContextProps | ComboboxMultiContextProps>(props: ComboboxOptionProps, context: Context<CProps>): {
    onClick: (event: import("react").MouseEvent<HTMLLIElement, MouseEvent>) => void;
    onMouseEnter: (event: import("react").MouseEvent<HTMLLIElement, MouseEvent>) => void;
};
