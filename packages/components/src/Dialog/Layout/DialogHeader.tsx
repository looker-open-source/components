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

import React, { FC, ReactNode, useContext } from 'react'
import styled from 'styled-components'
import {
  CompatibleHTMLProps,
  omitStyledProps,
  SpaceProps,
  space,
  reset,
  FontSizeProps,
  FontWeightProps,
} from '@looker/design-tokens'
import { IconButton } from '../../Button'
import { Heading } from '../../Text'
import { DialogContext } from '../DialogContext'

export interface DialogHeaderProps
  extends SpaceProps,
    CompatibleHTMLProps<HTMLElement>,
    FontSizeProps,
    FontWeightProps {
  children: ReactNode
  /**
   * Don't include the "Close" option
   * @default false
   */
  hideClose?: boolean
  /**
   * Replaces the built-in `IconButton` (generally used for close) with an arbitrary ReactNode
   */
  detail?: ReactNode
}

const DialogHeaderLayout: FC<DialogHeaderProps> = ({
  children,
  hideClose,
  detail,
  fontSize,
  fontWeight,
  ...props
}) => {
  const { closeModal } = useContext(DialogContext)
  const { id } = props

  return (
    <header {...omitStyledProps(props)}>
      <Heading
        as="h3"
        mr="xlarge"
        fontSize={fontSize || undefined}
        fontWeight={fontWeight || 'semiBold'}
        style={{ gridArea: 'text' }}
        truncate
      >
        {children}
      </Heading>
      {detail ? (
        <Detail>{detail}</Detail>
      ) : (
        !hideClose && (
          <Detail>
            <IconButton
              id={id ? `${id}-iconButton` : undefined}
              tabIndex={-1}
              size="medium"
              onClick={closeModal}
              label="Close"
              icon="Close"
            />
          </Detail>
        )
      )}
    </header>
  )
}

const Detail = styled.div`
  margin-bottom: -${({ theme }) => theme.space.xsmall};
  margin-left: auto;
  margin-top: -${({ theme }) => theme.space.xsmall};
`

export const DialogHeader = styled(DialogHeaderLayout)`
  ${reset}
  ${space}
  align-items: center;
  display: flex;
  flex-shrink: 0;
`

DialogHeader.defaultProps = {
  p: 'large',
  pr: 'medium',
  px: 'xlarge',
}
