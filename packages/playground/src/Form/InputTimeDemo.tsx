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
import styled from 'styled-components'
import partial from 'lodash/partial'
import { Button, Box, InputTime, Heading } from '@looker/components'

export const InputTimeDemo: FC = () => {
  const [basicValue, setBasicValue] = useState<string>()
  const [controlledTime, setControlledTime] = useState<string | undefined>(
    '12:00'
  )
  const [format24Time, setFormat24Time] = useState<string>()
  return (
    <DemoWrapper>
      <div>
        <HeadingGrid>
          <Heading as="h1">Basic Input</Heading>
          <SelectedDateWrapper>Selected: {basicValue}</SelectedDateWrapper>
        </HeadingGrid>
        <InputTime m="small" onChange={setBasicValue} />
      </div>
      <div>
        <HeadingGrid>
          <Heading as="h1">Controlled Component</Heading>
          <SelectedDateWrapper>Selected: {controlledTime}</SelectedDateWrapper>
        </HeadingGrid>
        <Button mr="small" onClick={partial(setControlledTime, '14:00')}>
          2:00pm
        </Button>
        <Button mr="small" onClick={partial(setControlledTime, '15:15')}>
          3:15pm
        </Button>
        <Button mr="small" onClick={partial(setControlledTime, '16:32')}>
          4:32pm
        </Button>
        <Box mt="large">
          <InputTime value={controlledTime} onChange={setControlledTime} />
        </Box>
      </div>
      <div>
        <HeadingGrid>
          <Heading as="h1">24 Hour Time</Heading>
          <SelectedDateWrapper>Selected: {format24Time}</SelectedDateWrapper>
        </HeadingGrid>
        <div>
          <InputTime
            format="24h"
            defaultValue="14:34"
            onChange={setFormat24Time}
          />
        </div>
      </div>
      <div>
        <HeadingGrid>
          <Heading as="h1">defaultValue</Heading>
        </HeadingGrid>
        <InputTime defaultValue="14:34" />
      </div>
    </DemoWrapper>
  )
}

const DemoWrapper = styled.div`
  padding: 2rem;
`

const HeadingGrid = styled.div`
  display: grid;
  grid-template-columns: auto auto 1fr;
  border-bottom: 3px solid ${({ theme }) => theme.colors.palette.charcoal300};
  padding-top: 3rem;
  padding-bottom: 0.5rem;
  margin-bottom: 1rem;
  grid-gap: 1rem;
  align-items: center;
`

const SelectedDateWrapper = styled.div`
  display: inline-block;
  color: ${({ theme }) => theme.colors.palette.blue500};
`
