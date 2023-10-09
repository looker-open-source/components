/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import type { Context } from 'react';
import type { ComboboxInputProps, ComboboxMultiInputProps } from '../types';
import type { ComboboxContextProps, ComboboxMultiContextProps } from '../ComboboxContext';
export declare function useInputPropRefs<TProps extends ComboboxInputProps | ComboboxMultiInputProps = ComboboxInputProps, TContext extends ComboboxContextProps | ComboboxMultiContextProps = ComboboxContextProps>({ autoComplete, freeInput, inputReadOnly }: TProps, context: Context<TContext>): void;
