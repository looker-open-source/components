/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react';
import { useToggle } from '../../../utils/useToggle';
import { ToggleSwitch } from '.';
import type { ToggleSwitchProps } from '.';

export function Basic(props: ToggleSwitchProps) {
  const { value, toggle } = useToggle(false);
  return <ToggleSwitch onChange={toggle} on={value} {...props} />;
}

export function Checked() {
  const { value, toggle } = useToggle(true);
  return <ToggleSwitch onChange={toggle} on={value} />;
}

export function Disabled() {
  const { value, toggle } = useToggle(false);
  return <ToggleSwitch onChange={toggle} on={value} disabled />;
}
