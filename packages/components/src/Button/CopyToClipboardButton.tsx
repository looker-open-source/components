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

import React, { forwardRef, Ref, RefObject, useState } from 'react'
import styled from 'styled-components'
import { ButtonTransparent } from './ButtonTransparent'

/**
 * This button allows user to copy contents of the passed in ref to clipboard.
 */

export const copyToClipboard = (
  ref: RefObject<HTMLTextAreaElement | HTMLInputElement>
) => {
  ref?.current?.select()
  document.execCommand('copy')
}

export const CopyToClipboardButton = forwardRef(
  (_props: any, ref: Ref<HTMLTextAreaElement | HTMLInputElement>) => {
    const [copied, setCopied] = useState(false)

    const clickCopyButton = () => {
      if (typeof ref !== 'function') {
        ref && copyToClipboard(ref)
      }
      setCopied(true)
      setTimeout(() => {
        setCopied(false)
      }, 2500)
    }

    return copied ? (
      <CopiedButton iconBefore="Check" size="medium">
        Copied
      </CopiedButton>
    ) : (
      <ButtonTransparent
        size="medium"
        iconBefore="Clipboard"
        onClick={clickCopyButton}
      >
        Copy to Clipboard
      </ButtonTransparent>
    )
  }
)

CopyToClipboardButton.displayName = 'CopyToClipboardButton'

const CopiedButton = styled(ButtonTransparent)`
  border: none;
  color: ${({ theme }) => theme.colors.positive};
  margin: 0;

  &:hover,
  &:active,
  &:focus,
  &:focus-within {
    background-color: ${({ theme }) => theme.colors.background};
    border: none;
    color: ${({ theme }) => theme.colors.positive};
  }
`
