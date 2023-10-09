/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type { Story } from '@storybook/react';
import type { StringSingleSelectProps } from '../../../../types/string_select_props';
import React, { useState } from 'react';
import { Button, Dialog, DialogLayout } from '@looker/components';
import { ButtonToggles } from './ButtonToggles';

const options = [
  {
    label: 'label1',
    value: 'value1',
  },
  {
    label: 'label2',
    value: 'value2',
  },
  {
    label: 'label3',
    value: 'value3',
  },
];

const Template: Story<StringSingleSelectProps> = args => {
  const [value, setValue] = useState(args.value || '');
  const handleChange = (newValue: string) => {
    setValue(newValue);
    args.onChange?.(newValue);
  };
  return <ButtonToggles {...args} value={value} onChange={handleChange} />;
};

export const Basic = Template.bind({});
Basic.args = {
  options,
  value: options[1].value,
};

export const InsideADialog = () => {
  const [value, setValue] = useState('');
  const handleChange = (newValue: string) => {
    setValue(newValue);
  };
  return (
    <Dialog
      content={
        <DialogLayout>
          <ButtonToggles
            options={options}
            value={value}
            onChange={handleChange}
          />
        </DialogLayout>
      }
    >
      <Button>Open</Button>
    </Dialog>
  );
};

export const Loading = Template.bind({});
Loading.args = {
  ...Basic.args,
  isLoading: true,
};

export default {
  title: 'Filters/Stories/ButtonToggles',
  component: ButtonToggles,
};
