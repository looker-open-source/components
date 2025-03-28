/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react';
import { Radio } from '../Radio';
import type { RadioProps } from '../Radio';

export function Basic(props: RadioProps) {
  return <Radio {...props} />;
}

export function Disabled() {
  return (
    <>
      <Radio disabled />
      <Radio disabled checked />
    </>
  );
}
