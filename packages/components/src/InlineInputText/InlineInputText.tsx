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
import { InputText } from '../Form'
import { Text } from '../Text'

interface ExpandingTitleInputProps {
  title: string
}

export const InlineInputText: FC<ExpandingTitleInputProps> = ({ title }) => {
  const [titleChange, setTitleChange] = React.useState(title)
  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitleChange(event.currentTarget.value)
  }

  return (
    <Container>
      <InnerInput onChange={handleTitleChange} value={titleChange} />
      <HiddenText>{titleChange}</HiddenText>
    </Container>
  )
}

const InnerInput = styled(InputText)`
  ${typography};

  background: transparent;
  border: none;
  border-bottom: 1px dashed;
  border-radius: 0;
  height: 32px;

  :focus,
  :hover {
    outline: none;
    border: none;
    box-shadow: none;
    border-bottom: 1px solid;
  }
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

  ${InnerInput} {
    border-bottom-color: #262d33;
    color: #262d33;
    padding: 0 8px;
    font-size: ${props => props.theme.fontSizes.xlarge};
    font-weight: ${props => props.theme.fontWeights.normal};
  }

  ${HiddenText} {
    padding: 0 8px;
    font-size: ${props => props.theme.fontSizes.xlarge};
    font-weight: ${props => props.theme.fontWeights.normal};
  }
`
