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

import React, { FC } from 'react'
import {
  MessageBar,
  SpaceVertical,
  ButtonOutline,
  Button,
  useToggle,
  Divider,
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
    <MessageBar intent="critical" primaryAction={false}>
      Cannot Be Dismissed
    </MessageBar>
  </SpaceVertical>
)

export const Controlled: FC = () => {
  const { value, setOff, setOn } = useToggle(true)
  return (
    <>
      <MessageBar intent="warn" onPrimaryClick={setOff} visible={value}>
        Controlled Component: I can be closed and reopened
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
  const handlePrimaryClick = () => {
    alert('Primary Action Taken')
  }

  const handleSecondaryClick = () => {
    alert('Secondary Action Taken')
  }

  return (
    <SpaceVertical>
      <MessageBar
        intent="positive"
        primaryAction="Primary Action"
        onPrimaryClick={handlePrimaryClick}
      >
        Custom Primary Action from a string label
      </MessageBar>
      <MessageBar
        intent="positive"
        secondaryAction="Secondary Action"
        onSecondaryClick={handlePrimaryClick}
      >
        Custom Secondary Action from a string label
      </MessageBar>
      <MessageBar
        intent="positive"
        primaryAction="Primary Action"
        secondaryAction="Secondary Action"
        onPrimaryClick={handlePrimaryClick}
        onSecondaryClick={handleSecondaryClick}
      >
        Custom Primary and Secondar Actions from string labels
      </MessageBar>
      <MessageBar
        intent="positive"
        primaryAction={
          <Button onClick={handlePrimaryClick} iconBefore="Trash">
            Dismiss
          </Button>
        }
        secondaryAction={
          <Button
            onClick={handleSecondaryClick}
            color="neutral"
            iconBefore="ViewGrid"
          >
            Return To Menu
          </Button>
        }
      >
        Custom actions from custom components
      </MessageBar>
    </SpaceVertical>
  )
}

export default {
  title: 'MessageBar',
}
