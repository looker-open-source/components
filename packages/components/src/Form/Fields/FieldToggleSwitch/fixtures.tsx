/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

// eslint-disable-next-line no-restricted-imports
import * as MaterialIcons from '@styled-icons/material';
import React from 'react';
import { IconButton } from '../../../Button';
import type { FieldToggleSwitchProps } from '..';
import { FieldToggleSwitch } from '..';

export function RichDetailDescription(props: FieldToggleSwitchProps) {
  const {
    label = 'Toggle Switch',
    name = 'thumbsUp',
    id = 'id',
    description = (
      <>
        describe something here. <a href="somewhere">Link</a>
      </>
    ),
    detail = <IconButton icon={<MaterialIcons.Delete />} label="Hello world" />,
    ...restProps
  } = props;

  return (
    <FieldToggleSwitch
      id={id}
      label={label}
      name={name}
      detail={detail}
      description={description}
      {...restProps}
    />
  );
}
