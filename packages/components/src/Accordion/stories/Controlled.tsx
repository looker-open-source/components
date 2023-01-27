/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React, { useState } from 'react'
import * as MaterialIcons from '@styled-icons/material'
import { Accordion, Space, Icon, Paragraph } from '../..'
const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`

export default function Controlled() {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <Accordion
      indicatorPosition="left"
      isOpen={isOpen}
      toggleOpen={setIsOpen}
      onOpen={() => alert('Opening doors')}
      onClose={() => alert('Closing doors')}
      content={<Paragraph>{lorem}</Paragraph>}
    >
      <Space between>
        Some Information
        <Icon color="text2" icon={<MaterialIcons.Info />} size="small" />
      </Space>
    </Accordion>
  )
}
