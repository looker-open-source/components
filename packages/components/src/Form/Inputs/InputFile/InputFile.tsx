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

import type { ChangeEvent, MouseEvent } from 'react'
import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import type { CompatibleHTMLProps } from '@looker/design-tokens'
import { Space } from '../../../Layout/Space'
import { InputText } from '../InputText'
import { ButtonOutline } from '../../../Button/ButtonOutline'
import {
  omitAriaAndValidationProps,
  pickAriaAndValidationProps,
} from '../ariaProps'

export type InputFileProps = Omit<
  CompatibleHTMLProps<HTMLButtonElement>,
  'onChange'
> &
  Pick<CompatibleHTMLProps<HTMLInputElement>, 'onChange'> & {
    /**
     * A string containing one or more unique file type specifiers i.e. '.pdf', each file type separated by a comma
     */
    accept?: string

    /**
     * Text for the button which uploads the file
     */
    buttonText?: string

    /**
     * A function that takes the uploaded file
     */
    handleFile: (value: File) => void
  }

/**
 * Hidden input element that is clicked on <ButtonOutline> click
 */
const HiddenFileInput = styled.input.attrs(() => ({
  'data-testid': 'input-file',
  type: 'file',
}))`
  display: none;
`

export const InputFile = styled(
  ({
    accept = '',
    buttonText = 'Upload File',
    className,
    handleFile,
    onChange,
    onClick,
    placeholder,

    /** Unused props destructured to be excluded from spread onto <ButtonOutline> */
    type,
    /** End of exclusion */

    ...restProps
  }: InputFileProps) => {
    const [fileName, setFileName] = useState('')
    const hiddenFileInput = useRef<HTMLInputElement>(null)

    const ariaProps = pickAriaAndValidationProps(restProps)
    const buttonOutlineProps = omitAriaAndValidationProps(restProps)

    const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
      onClick && onClick(event)
      hiddenFileInput?.current?.click()
    }

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      onChange && onChange(event)

      if (!event.target.files) {
        // eslint-disable-next-line no-console
        console.warn('There was a problem uploading the file.')
        return
      }

      const fileUploaded = event.target.files[0]
      handleFile(fileUploaded)
      setFileName(fileUploaded.name)
    }

    return (
      /**
       * Putting className on the <Space> allows developers to styled override
       * any element within the <InputFile> component.
       */
      <Space className={className}>
        <InputText
          placeholder={placeholder}
          value={fileName}
          readOnly
          {...ariaProps}
        />
        <ButtonOutline onClick={handleClick} {...buttonOutlineProps}>
          {buttonText}
        </ButtonOutline>
        <HiddenFileInput
          onChange={handleChange}
          ref={hiddenFileInput}
          accept={accept}
        />
      </Space>
    )
  }
)``
