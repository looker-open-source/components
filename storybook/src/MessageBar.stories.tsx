/*

 MIT License

 Copyright (c) 2020 Looker Data Sciences, Inc.

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.

 */

import React, { FC, useState } from 'react'
import {
  MessageBar,
  SpaceVertical,
  ButtonOutline,
  ButtonTransparent,
  Button,
  useToggle,
  Divider,
  Space,
  Text,
} from '@looker/components'

export const All: FC = () => {
  return (
    <SpaceVertical>
      <Basic />
      <Divider />
      <Controlled />
      <Divider />
      <CustomActions />
    </SpaceVertical>
  )
}

export const Basic: FC = () => (
  <SpaceVertical gap="xsmall">
    <MessageBar intent="warn">Warning</MessageBar>
    <MessageBar intent="inform">Inform</MessageBar>
    <MessageBar intent="positive">Positive</MessageBar>
    <MessageBar intent="critical">Critical</MessageBar>
    <MessageBar intent="critical" canDismiss={false}>
      Cannot Be Dismissed
    </MessageBar>
  </SpaceVertical>
)

export const Controlled: FC = () => {
  const { value, setOff, setOn } = useToggle(true)
  return (
    <>
      <MessageBar intent="warn" onDismiss={setOff} visible={value}>
        I can be closed and reopened
      </MessageBar>
      {!value && (
        <div>
          <ButtonOutline onClick={setOn}>Show MessageBar</ButtonOutline>
        </div>
      )}
    </>
  )
}

export const CustomActions: FC = () => {
  const [visible, setVisible] = useState(true)
  const [secondaryActionTaken, setSecondaryActionTaken] = useState(false)
  const [primaryActionTaken, setPrimaryActionTaken] = useState(false)

  const handlePrimaryClick = () => {
    setVisible(false)
    setPrimaryActionTaken(true)
  }

  const handleSecondaryClick = () => {
    setVisible(false)
    setSecondaryActionTaken(true)
  }

  const handleUndo = () => {
    setVisible(true)
    setPrimaryActionTaken(false)
    setSecondaryActionTaken(false)
  }

  const primaryActionConfirmation = (
    <Space>
      <Text>🎉 Primary Action taken!</Text>{' '}
      <Button onClick={handleUndo}>Undo</Button>
    </Space>
  )

  const secondaryActionConfirmation = (
    <Space>
      <Text>🎈 Secondary Action taken!</Text>{' '}
      <Button onClick={handleUndo}>Undo</Button>
    </Space>
  )

  const visibleMessageBar = (
    <MessageBar
      intent="positive"
      primaryButton={
        <ButtonTransparent onClick={handlePrimaryClick}>
          Primary Action
        </ButtonTransparent>
      }
      secondaryButton={
        <ButtonTransparent onClick={handleSecondaryClick} color="neutral">
          Secondary Action
        </ButtonTransparent>
      }
    >
      Render some custom actions!
    </MessageBar>
  )

  if (visible) {
    return visibleMessageBar
  } else if (primaryActionTaken) {
    return primaryActionConfirmation
  } else if (secondaryActionTaken) {
    return secondaryActionConfirmation
  }

  return null
}


export default {
  title: 'MessageBar',
}
