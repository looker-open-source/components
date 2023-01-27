/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import styled from 'styled-components'
import { Tab2 } from '../Tabs2/Tab2'
import type { Tab2Props } from '../Tabs2/types'

export interface TabProps extends Omit<Tab2Props, 'label'> {
  disabled?: boolean
  index?: number
}

export const Tab = styled((props: TabProps) => <Tab2 label=" " {...props} />)``
