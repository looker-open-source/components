/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import type { ComboboxCallback, MaybeComboboxOptionObject, ComboboxOptionType } from '../types';
import { ComboboxState } from '../utils/state';
export declare const getIsVisible: (state: ComboboxState) => boolean;
export declare function useComboboxToggle<TOption extends ComboboxOptionType = MaybeComboboxOptionObject>(state: ComboboxState, option: TOption, onOpen?: ComboboxCallback<TOption>, onClose?: ComboboxCallback<TOption>): boolean;
