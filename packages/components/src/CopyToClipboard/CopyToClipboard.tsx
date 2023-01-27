/*

 MIT License

 Copyright (c) 2022 Looker Data Sciences, Inc.

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
import React, {
  useEffect,
  useRef,
  useState,
  cloneElement,
  isValidElement,
} from 'react'
import type { RefObject, ReactElement } from 'react'
import { Assignment } from '@styled-icons/material/Assignment'
import { Done } from '@styled-icons/material/Done'
import { ButtonOutline } from '../Button/ButtonOutline'
import { MultiFunctionButton } from '../Button/MultiFunctionButton'
import { useTranslation } from '../utils'

/**
 */
export interface CopyToClipboardProps {
  /**
   * Content to be copied into the clipboard
   * I18n recommended: content that is user visible should be treated for i18n
   */
  content: string
  /**
   * button's label | a JSX element to replace the button
   * I18n recommended: content that is user visible should be treated for i18n
   */
  children?: string | ReactElement
  /**
   * button's successfully copied label | a JSX element to replace the button
   * I18n recommended: content that is user visible should be treated for i18n
   * @default Copied
   */
  success?: string | JSX.Element

  /**
   * button's disabled property
   */
  disabled?: boolean
}

type ChildProps = { onClick: () => void; ref: RefObject<HTMLButtonElement> }

export const CopyToClipboard = (props: CopyToClipboardProps) => {
  const { t } = useTranslation('CopyToClipboard')
  const childrenText = t('Copy to Clipboard')
  const successText = t('Copied')
  const {
    children = childrenText,
    content,
    success = successText,
    disabled,
  } = props

  const [copied, setCopied] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)

  const clickCopyButton = () => {
    const textField = document.createElement('textarea')
    textField.value = content

    if (buttonRef.current) {
      buttonRef.current.appendChild(textField)
      textField.select()
      document.execCommand('copy')
      textField.remove()
      setCopied(true)
    }
  }

  useEffect(() => {
    const t = setTimeout(() => copied && setCopied(false), 2500)
    return () => {
      clearTimeout(t)
    }
  }, [copied])

  const copyButton = isValidElement(children) ? (
    cloneElement<ChildProps>(children as ReactElement<ChildProps>, {
      onClick: clickCopyButton,
      ref: buttonRef,
    })
  ) : (
    <ButtonOutline
      iconBefore={<Assignment />}
      onClick={clickCopyButton}
      ref={buttonRef}
    >
      {children}
    </ButtonOutline>
  )

  const successButton =
    typeof success === 'string' ? (
      <ButtonOutline aria-live="polite" iconBefore={<Done />}>
        {success}
      </ButtonOutline>
    ) : (
      cloneElement(success, { 'aria-live': 'polite' })
    )

  return (
    <MultiFunctionButton
      alternate={successButton}
      ref={buttonRef}
      swap={copied}
      disabled={disabled}
    >
      {copyButton}
    </MultiFunctionButton>
  )
}
