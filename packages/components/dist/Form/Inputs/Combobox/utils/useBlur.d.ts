/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import type { Context, FocusEvent } from 'react';
import type { ComboboxContextProps, ComboboxMultiContextProps } from '../ComboboxContext';
export declare function useBlur<TContext extends ComboboxContextProps | ComboboxMultiContextProps = ComboboxContextProps>(context: Context<TContext>): (e?: FocusEvent<Element, Element> | undefined) => void;
