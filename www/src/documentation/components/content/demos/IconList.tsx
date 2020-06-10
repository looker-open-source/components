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

import React from 'react'
import { Icon } from '@looker/components'
import { iconNameList, IconNames } from '@looker/icons'
import CopyToClipboard from 'react-copy-to-clipboard'
import styled from 'styled-components'

export const IconList = () => {
  return (
    <IconGrid>
      {iconNameList.map((name) => (
        <CopyToClipboard
          text={`<Icon name="${name}" />`}
          onCopy={() => alert(`Copied icon "${name}" to clipboard.`)}
          key={name}
        >
          <IconGridItem>
            <Icon name={name as IconNames} size={32} />
            <div>{name}</div>
          </IconGridItem>
        </CopyToClipboard>
      ))}
    </IconGrid>
  )
}

const IconGrid = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, 160px);
  margin-top: 2rem;
`

const IconGridItem = styled.div`
  text-align: center;
  font-size: ${({ theme }) => theme.fontSizes.small};
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.colors.ui1};
  padding: 1rem;
  border-radius: ${({ theme }) => theme.radii.medium};
  color: ${({ theme }) => theme.colors.text3};
  &:hover {
    border-color: ${({ theme }) => theme.colors.keyFocus};
    color: ${({ theme }) => theme.colors.key};
  }
`
