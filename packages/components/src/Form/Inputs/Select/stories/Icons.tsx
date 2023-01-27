/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import * as MaterialIcons from '@styled-icons/material'
import { Select } from '..'
import { Space } from '../../../../Layout'

export default function Icons() {
  return (
    <Space>
      <Select
        placeholder="Select a visualization"
        options={[
          {
            icon: <MaterialIcons.BarChart />,
            label: 'Column',
            value: 'column',
          },
          { icon: <MaterialIcons.ShowChart />, label: 'Line', value: 'line' },
          { icon: <MaterialIcons.Map />, label: 'Map', value: 'map' },
          { icon: <MaterialIcons.PieChart />, label: 'Pie', value: 'pie' },
          {
            icon: <MaterialIcons.TableChart />,
            label: 'Table',
            value: 'table',
          },
        ]}
      />
      <Select
        placeholder="Custom Icons"
        options={[
          {
            icon: (
              <svg
                viewBox="0 0 24 24"
                width="20px"
                height="20px"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z"
                  fill="#7FFFD4"
                />
              </svg>
            ),
            label: 'Aqua',
            value: 'Aqua',
          },
          {
            icon: (
              <svg
                viewBox="0 0 24 24"
                width="20px"
                height="20px"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z"
                  fill="#ff00e6"
                />
              </svg>
            ),
            label: 'Pink',
            value: 'Pink',
          },
        ]}
      />
    </Space>
  )
}
