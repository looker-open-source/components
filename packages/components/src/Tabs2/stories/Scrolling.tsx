/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react'
import { Tabs2, Tab2 } from '../..'

export default function Scrolling() {
  const tabs = new Array(20).fill('Tab2')
  return (
    <Tabs2>
      {tabs.map((value, index) => (
        <Tab2 label={`Hello World ${index}`} key={index}>
          This is {value} {index}
        </Tab2>
      ))}
    </Tabs2>
  )
}
