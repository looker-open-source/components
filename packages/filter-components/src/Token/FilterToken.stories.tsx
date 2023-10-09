/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import type { StoryFn } from '@storybook/react';
import React from 'react';
import { FilterToken } from './FilterToken';

export default {
  title: 'Filters/Stories/FilterToken',
  component: FilterToken,
};

// TODO delete when using functional components. See TODOs below. Doing this
// will uncover the fact that AtLeastOnePropertyOf doesn't seem to be working
// and using .args covered that up, or at least this seems to be the case.
const Template: StoryFn<typeof FilterToken> = args => {
  return <FilterToken {...args} />;
};

// TODO use a standard React functional component instead.
export const Basic: StoryFn<typeof FilterToken> = Template.bind({});
Basic.args = {
  expressionType: 'date',
  expression: '',
  allowMultipleValues: true,
};

// TODO use a standard React functional component instead.
export const Expression: StoryFn<typeof FilterToken> = Template.bind({});
Expression.args = {
  expressionType: 'string',
  expression: 'foo,bar',
  allowMultipleValues: true,
};

// TODO use a standard React functional component instead.
export const Error: StoryFn<typeof FilterToken> = Template.bind({});
Error.args = {
  ...Basic.args,
  isRequired: true,
};

// TODO use a standard React functional component instead.
export const Inline: StoryFn<typeof FilterToken> = Template.bind({});
Inline.args = {
  ...Basic.args,
  config: { display: 'inline' },
};
