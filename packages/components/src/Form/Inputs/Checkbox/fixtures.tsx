/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react';
import { Checkbox } from '../Checkbox';
import type { CheckboxProps } from '../Checkbox';

export function Basic(props: CheckboxProps) {
  return <Checkbox name="someName" id="someId" {...props} />;
}

export function Checked() {
  return <Checkbox checked />;
}

export function Disabled() {
  return <Checkbox disabled />;
}

export function DisabledChecked() {
  return <Checkbox disabled checked />;
}

export function MixedChecked() {
  return <Checkbox checked="mixed" />;
}

export function ReadOnly() {
  return <Checkbox readOnly />;
}
