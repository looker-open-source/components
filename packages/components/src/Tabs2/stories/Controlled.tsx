/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React, { useState } from 'react'
import { Tabs2, Tab2, Paragraph, Button } from '../..'

export default function Controlled() {
  const [currentTabId, setTabId] = useState<string>('cats')

  return (
    <>
      <Paragraph>The current selected tab is: {currentTabId}</Paragraph>
      <Button onClick={() => setTabId('cats')}>Switch to Cats</Button>
      <Button onClick={() => setTabId('dogs')}>Switch to Dogs</Button>
      <Tabs2 tabId={currentTabId} onTabChange={setTabId}>
        <Tab2 id="cats" label="Cats">
          Here's awesome story about cats
        </Tab2>
        <Tab2 id="dogs" label="Dogs">
          Cats are way better than dogs. Go to other tab
        </Tab2>
      </Tabs2>
    </>
  )
}
