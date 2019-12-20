/*

 MIT License

 Copyright (c) 2019 Looker Data Sciences, Inc.

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
import { Button, Confirm, Icon, Paragraph, Link } from '@looker/components'
import styled from 'styled-components'

const StaticConfirm: React.FC = () => {
  return (
    <Confirm
      title="Confirm Something"
      message="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      onConfirm={() => {
        alert('You did something')
      }}
      width={['10rem', '20rem', '30rem', '40rem']}
    >
      {open => (
        <Button onClick={open} mr="small">
          Do something
        </Button>
      )}
    </Confirm>
  )
}

const RichConfirm: React.FC = () => {
  return (
    <Confirm
      title="Did you know?"
      message={<RichMessage />}
      onConfirm={() => {
        alert('Now you know.')
      }}
      width={['10rem', '20rem', '30rem', '40rem']}
    >
      {open => <Button onClick={open}>Do something fancy</Button>}
    </Confirm>
  )
}

export const ConfirmDemo: React.FC = () => {
  return (
    <>
      <StaticConfirm />
      <RichConfirm />
    </>
  )
}

const RichMessage: React.FC = () => (
  <MessageGrid>
    <IconWrapper>
      <Icon name="CircleInfoOutline" size="80px" />
    </IconWrapper>
    <div>
      <Paragraph>
        Canadians say "sorry" so often that{' '}
        <MessageHighlight>in 2009 a law was passed</MessageHighlight> declaring
        that an apology cannot be used as an admission of guilt.
      </Paragraph>
      <Source>
        SOURCE:{' '}
        <Link
          href="https://www.theloop.ca/canadians-love-to-say-sorry-so-much-we-had-to-make-this-law/"
          target="_blank"
        >
          the loop
        </Link>
      </Source>
    </div>
  </MessageGrid>
)

const MessageGrid = styled.div`
  display: grid;
  grid-gap: 0.75rem;
  grid-template-columns: auto 1fr;
  align-items: top;
  font-size: ${({ theme }) => theme.fontSizes.large};
`

const IconWrapper = styled.div`
  color: ${({ theme }) => theme.colors.palette.purple400};
  border-radius: 100%;
`

const MessageHighlight = styled.span`
  color: ${({ theme }) => theme.colors.palette.purple500};
  font-weight: 600;
`

const Source = styled.cite`
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.palette.charcoal300};
  margin-top: ${({ theme }) => theme.space.xsmall};
  display: block;
`
