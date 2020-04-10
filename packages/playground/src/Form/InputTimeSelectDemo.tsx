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
import partial from 'lodash/partial'
import styled from 'styled-components'
import { Button, Box, InputTimeSelect, Heading } from '@looker/components'

export const InputTimeSelectDemo: FC = () => {
  const [basicTime, setBasicTime] = useState<string | undefined>()
  const [controlledTime, setControlledTime] = useState<any>('09:00')
  const handleControlledTimeClick = (value: string) => {
    setControlledTime(value)
  }
  return (
    <DemoWrapper>
      <div>
        <HeadingGrid>
          <Heading as="h1">Basic Input</Heading>
          <SelectedDateWrapper>Selected: {basicTime}</SelectedDateWrapper>
        </HeadingGrid>
        <InputTimeSelect m="small" onChange={setBasicTime} />
      </div>
      <div>
        <HeadingGrid>
          <Heading as="h1">Controlled Component</Heading>
        </HeadingGrid>
        <Button
          mr="small"
          onClick={partial(handleControlledTimeClick, '11:05')}
        >
          11:05am
        </Button>
        <Button
          mr="small"
          onClick={partial(handleControlledTimeClick, '14:00')}
        >
          2:00pm
        </Button>
        <Button
          mr="small"
          onClick={partial(handleControlledTimeClick, '15:15')}
        >
          3:15pm
        </Button>
        <Button
          mr="small"
          onClick={partial(handleControlledTimeClick, '16:30')}
        >
          4:30pm
        </Button>
        <Box mt="large">
          <InputTimeSelect
            value={controlledTime}
            onChange={setControlledTime}
          />
          <InputTimeSelect
            value={controlledTime}
            onChange={setControlledTime}
            format="24h"
          />
        </Box>
      </div>
      <div>
        <HeadingGrid>
          <Heading as="h1">Intervals</Heading>
        </HeadingGrid>
        <div>
          <Heading as="h2" mt="large">
            5 minute
          </Heading>
          <InputTimeSelect interval={5} />
          <Heading as="h2" mt="large">
            10 minute
          </Heading>
          <InputTimeSelect interval={10} />
          <Heading as="h2" mt="large">
            15 minute
          </Heading>
          <InputTimeSelect interval={15} />
          <Heading as="h2" mt="large">
            30 minute
          </Heading>
          <InputTimeSelect interval={30} />
        </div>
      </div>
      <div>
        <HeadingGrid>
          <Heading as="h1">defaultValue</Heading>
        </HeadingGrid>
        <InputTimeSelect defaultValue="10:30" />
        <InputTimeSelect defaultValue="17:30" />
        <InputTimeSelect defaultValue="17:30" format="24h" />
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
