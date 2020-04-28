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

import React, { useState } from 'react'
import {
  Card,
  CardContent,
  RangeSlider,
  Heading,
  Text,
  Button,
} from '@looker/components'
import styled from 'styled-components'

export const RangeSliderDemo = () => {
  const [controlledValue, setControlledValue] = useState([30, 40])
  const handleChange: (value: number[]) => void = (value: number[]) =>
    setControlledValue(value)

  return (
    <DemoWrapper>
      <DemoGrid>
        <Card height="auto">
          <CardContent p="xxlarge">
            <Heading>Basic Component:</Heading>
            <RangeSlider />
          </CardContent>
          <CardContent p="xxlarge">
            <Heading>Min, Max, Step:</Heading>
            <RangeSlider min={100} max={1000} step={50} />
          </CardContent>
          <CardContent p="xxlarge">
            <Heading>Controlled Component:</Heading>
            <Text color="green" mr="small">
              Min: {controlledValue[0]}
            </Text>
            <Text color="green">Max: {controlledValue[1]}</Text>
            <RangeSlider
              min={20}
              max={50}
              value={controlledValue}
              onChange={handleChange}
            />
            <Button onClick={() => handleChange([25, 45])} mr="small">
              25 — 45
            </Button>
            <Button onClick={() => handleChange([30, 37])} mr="small">
              30 — 37
            </Button>
            <Button onClick={() => handleChange([39, 40])}>39 — 40</Button>
          </CardContent>
        </Card>
      </DemoGrid>
    </DemoWrapper>
  )
}

const DemoWrapper = styled.div`
  max-width: 1200px;
  margin: 2rem auto;
`

const DemoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
  margin-top: 1rem;
`
