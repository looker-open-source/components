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

import {
  ComponentsProvider,
  FieldText,
  Fieldset,
  SpaceVertical,
  Heading,
  Paragraph,
  theme,
} from '@looker/components'
import React, { FC, FormEvent, useState } from 'react'

export const Font: FC = () => {
  const [brand, setBrand] = useState('Comic Sans MS')

  const handleBrandChange = (event: FormEvent<HTMLInputElement>) => {
    setBrand(event.currentTarget.value)
  }

  const actualTheme = {
    ...theme,
    fonts: {
      ...theme.fonts,
      brand,
    },
  }

  // const coreColors = useState<CoreColors>(theme)

  return (
    <SpaceVertical>
      <Fieldset legend={name}>
        <FieldText
          label="Brand Font Face"
          value={brand}
          onChange={handleBrandChange}
        />
      </Fieldset>

      <pre>{JSON.stringify(theme, null, 1)}</pre>

      <ComponentsProvider theme={actualTheme}>
        <Heading>A Header</Heading>
        <Paragraph>Paragraph text.</Paragraph>
      </ComponentsProvider>
    </SpaceVertical>
  )
}

export default {
  component: Font,
  title: 'Theme',
}
