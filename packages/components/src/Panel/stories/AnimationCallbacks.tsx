/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React, { useCallback, useRef, useState } from 'react'
import { Aside, Box, Page, Section } from '../../Layout'
import { Panel, Panels } from '..'
import { Button } from '../../Button'
import { FieldText } from '../../Form'
import { Paragraph } from '../../Text'

export default function AnimationCallbacks() {
  const inputRef = useRef<HTMLInputElement>(null)
  const focusInput = useCallback(() => {
    inputRef.current?.focus()
  }, [])
  const [message, setMessage] = useState('')
  const showMessage = () => {
    setMessage('Panel closed')
  }
  return (
    <Page hasAside>
      <Aside width="20rem">
        <Panels>
          <Box p="medium" height={300}>
            <Panel
              title="Animation Callbacks"
              onAfterOpen={focusInput}
              onAfterClose={showMessage}
              content={
                <Box px="medium">
                  <FieldText label="Focus onAfterOpen" ref={inputRef} />
                </Box>
              }
            >
              <Button>Open Panel</Button>
            </Panel>
          </Box>
        </Panels>
      </Aside>
      <Section>
        <Paragraph>Main stuff here...</Paragraph>
        <Paragraph>{message}</Paragraph>
      </Section>
    </Page>
  )
}
