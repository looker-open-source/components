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
import { Icon, Paragraph, SpaceVertical } from '@looker/components'
/* eslint-disable no-restricted-imports */
import { iconsList } from '@looker/icons'
import * as AllIcons from '@looker/icons'
/* eslint-enable no-restricted-imports */
import CopyToClipboard from 'react-copy-to-clipboard'
import styled from 'styled-components'

export const IconList = () => (
  <IconGrid>
    {iconsList.map(name => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const icon = AllIcons[name as keyof typeof AllIcons] as any
      return (
        <CopyToClipboard
          text={`<${name} />`}
          onCopy={() => alert(`Copied icon "${name}" to clipboard.`)}
          key={name}
        >
          <IconGridItem
            p="u3"
            gap="u2"
            align="center"
            tabIndex={0}
            role="button"
          >
            <Icon display="inline-flex" icon={icon.render()} size="large" />
            <Paragraph color="currentColor" fontSize="small" textAlign="center">
              {name}
            </Paragraph>
          </IconGridItem>
        </CopyToClipboard>
      )
    })}
  </IconGrid>
)

const IconGrid = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, 160px);
  margin-top: 2rem;
`

const IconGridItem = styled(SpaceVertical)`
  border: 1px solid ${({ theme }) => theme.colors.ui2};
  border-radius: ${({ theme }) => theme.radii.medium};
  cursor: pointer;
  padding: 1rem;

  &:hover {
    border-color: ${({ theme }) => theme.colors.keyFocus};
    color: ${({ theme }) => theme.colors.key};
  }
`
