/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { useContext } from 'react';
import {
  ComboboxContext,
  useOptionEvents,
  useOptionStatus,
  useOptionScroll,
} from '@looker/components';
import { TreeSelectContext } from '../TreeSelectContext';
import type { TreeModel } from '../types';
import { getOption } from './get_option';

/**
 * Combobox option behavior for TreeSelect
 */
export const useTreeSelectComboboxOption = (tree: TreeModel) => {
  const { withDropdown } = useContext(TreeSelectContext);
  const { listClientRect } = useContext(ComboboxContext);
  const option = getOption(tree);
  const { label, value } = option;
  const { onMouseEnter, ...optionHandlers } = useOptionEvents(
    option,
    ComboboxContext
  );
  const { isActive, isSelected } = useOptionStatus(ComboboxContext, value);

  const ref = useOptionScroll(ComboboxContext, value, label, false, isActive);

  return {
    isActive,
    isSelected,
    domProps: {
      // Without the dropdown, setting the active navigation item on hover
      // feels awkward and TreeItem already has a hover state anyway
      onMouseEnter: withDropdown ? onMouseEnter : undefined,
      ...optionHandlers,
      // Don't pass ref through unless we're inside Combobox context
      // it's not necessary and it causes a re-render
      ref: listClientRect ? ref : undefined,
    },
  };
};
