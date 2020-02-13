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

import React, { FC } from 'react'
import styled from 'styled-components'
import { typography } from '@looker/design-tokens'
import { Text } from '../Text'

interface InlineInputTextProps {
  simple?: boolean
  title?: string
}

export const InlineInputText: FC<InlineInputTextProps> = ({
  title = 'Add a title',
  simple = false,
}) => {
  const [titleChange, setTitleChange] = React.useState(title)
  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitleChange(event.currentTarget.value)
  }

  return (
    <Container>
      <Input onChange={handleTitleChange} simple={simple} value={titleChange} />
      <HiddenText>{titleChange}</HiddenText>
    </Container>
  )
}

const Input = styled.input.attrs({ type: 'text' })<InlineInputTextProps>`
  ${typography};

  background: transparent;
  border: none;
  border-bottom: 1px dashed;
  border-bottom-color: ${props => props.theme.colors.palette.charcoal300};
  padding: 0 8px;
  font-size: ${props => props.theme.fontSizes.xlarge};
  font-weight: ${props => props.theme.fontWeights.normal};

  :focus,
  :hover {
    outline: none;
    border-bottom-color: ${props => props.theme.colors.palette.purple400};
    background-color: ${props => props.theme.colors.palette.charcoal100};
  }

  :focus {
    border-bottom: 1px solid;
    border-bottom-color: ${props => props.theme.colors.palette.purple400};
  }

  ${props =>
    props.simple &&
    `background: transparent;
    border: none;
    border-bottom: none;
    :hover {
      border-bottom: 1px dashed;
      border-bottom-color: ${props.theme.colors.palette.purple400};
    }
    :focus {
      border-bottom: 1px solid;
      border-bottom-color: ${props.theme.colors.palette.purple400};
    }
  `};
`

const HiddenText = styled(Text)`
  height: 0;
  overflow: hidden;
  white-space: pre-wrap;
`

const Container = styled.div`
  display: inline-flex;
  flex-direction: column;
  height: ${props => props.theme.space.xxlarge};
  justify-content: center;

  ${HiddenText} {
    padding: 0 8px;
    font-size: ${props => props.theme.fontSizes.xlarge};
    font-weight: ${props => props.theme.fontWeights.normal};
  }
`
