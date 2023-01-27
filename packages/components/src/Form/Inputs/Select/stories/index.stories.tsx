/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { defaultArgTypes as argTypes } from '@looker/storybook'
import { Select } from '../Select'
export { default as Basic } from './Basic'
export { default as Placeholder } from './Placeholder'
export { default as Description } from './Description'
export { default as Detail } from './Detail'
export { default as Preface } from './Preface'
export { default as Disabled } from './Disabled'
// export { default as Icons } from './Icons'
export { default as Error } from './Error'
export { default as Loading } from './Loading'
export { default as Filtering } from './Filtering'
export { default as ShowCreate } from './ShowCreate'
export { default as Groups } from './Groups'
export { default as ScrollIntoView } from './ScrollIntoView'
export { default as Windowing } from './Windowing'
export { default as ListLayout } from './ListLayout'
export { default as AutoResize } from './AutoResize'

export default {
  argTypes,
  component: Select,
  parameters: {
    storyshots: { disable: true },
  },
  title: 'Stories/Select',
}
