/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { fireEvent, getNodeText, screen } from '@testing-library/react';

export const openCombobox = (placeholderText: string) =>
  fireEvent.mouseDown(screen.getByPlaceholderText(placeholderText));

export const closeCombobox = () => fireEvent.click(document);

export const getComboboxOptions = () => screen.getAllByRole('option');

export const getComboboxOptionText = (el: HTMLElement) =>
  getNodeText(el.children[1] as HTMLElement);

export const getAllComboboxOptionText = () =>
  getComboboxOptions().map(getComboboxOptionText);
