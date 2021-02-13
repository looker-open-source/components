/*

 MIT License

 Copyright (c) 2021 Looker Data Sciences, Inc.

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

import React from 'react'
import { Button, ButtonOutline } from '../../Button'
import { Icon } from '../../Icon'
import { Space, SpaceVertical } from '../../Layout'
import { Link } from '../../Link'
import { Paragraph } from '../../Text'
import { Confirm } from './Confirm'

export default {
  component: Confirm,
  title: 'Confirm',
}

export const Basic = () => {
  return (
    <Confirm
      title="Confirm Something"
      message="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      onConfirm={(close) => {
        alert('You did something')
        close()
      }}
      width={['10rem', '20rem', '30rem', '40rem']}
    >
      {(open) => <ButtonOutline onClick={open}>Do something</ButtonOutline>}
    </Confirm>
  )
}

Basic.parameters = {
  storyshots: { disable: true },
}

export const Critical = () => {
  return (
    <Confirm
      title="Confirm Something"
      message="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      onConfirm={(close) => {
        alert('You did something')
        close()
      }}
      buttonColor="critical"
      width={['10rem', '20rem', '30rem', '40rem']}
    >
      {(open) => (
        <ButtonOutline color="critical" onClick={open}>
          Something Destructive
        </ButtonOutline>
      )}
    </Confirm>
  )
}

Critical.parameters = {
  storyshots: { disable: true },
}

export const Rich = () => {
  const message = (
    <Space>
      <Icon name="CircleInfoOutline" size="80px" />
      <SpaceVertical>
        <Paragraph>
          Canadians say "sorry" so often that{' '}
          <strong>in 2009 a law was passed</strong> declaring that an apology
          cannot be used as an admission of guilt.
        </Paragraph>
        <cite>
          SOURCE:{' '}
          <Link
            href="https://www.theloop.ca/canadians-love-to-say-sorry-so-much-we-had-to-make-this-law/"
            target="_blank"
          >
            the loop
          </Link>
        </cite>
      </SpaceVertical>
    </Space>
  )

  return (
    <Confirm
      title="Did you know?"
      message={message}
      onConfirm={(close) => {
        alert('Now you know.')
        close()
      }}
      width={['10rem', '20rem', '30rem', '40rem']}
    >
      {(open) => <Button onClick={open}>Do something fancy</Button>}
    </Confirm>
  )
}

Rich.parameters = {
  storyshots: { disable: true },
}
