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

import React, { FC, ReactNode } from 'react'
import styled from 'styled-components'
import { Flex, Paragraph } from '../'

interface ActionListItemColumnProps {
  detail?: ReactNode
  indicator?: ReactNode
  className?: string
}

const ActionListItemColumnInnerLayout = styled.div`
  width: 100%;
`

const ActionListItemColumnLayout: FC<ActionListItemColumnProps> = ({
  children,
  detail,
  className,
  indicator,
}) => (
  <div className={className}>
    {indicator && (
      <Flex justifyContent="center" alignItems="center" mr="xsmall">
        {indicator}
      </Flex>
    )}
    <ActionListItemColumnInnerLayout>
      {children}
      {detail && (
        <Paragraph fontSize="xsmall" variant="subdued" truncate>
          {detail}
        </Paragraph>
      )}
    </ActionListItemColumnInnerLayout>
  </div>
)

export const ActionListItemColumn = styled(ActionListItemColumnLayout)<
  ActionListItemColumnProps
>`
  color: ${({ theme }) => theme.colors.text4};
  display: ${({ indicator }) => indicator && 'flex'};
  font-size: ${({ theme }) => theme.fontSizes.xsmall};
  overflow: hidden;
  word-break: break-all;

  ${ActionListItemColumnInnerLayout} {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`
