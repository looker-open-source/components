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

import { Fieldset, FieldSelect } from '@looker/components'
import {
  coreColors,
  fontFamilies,
  intentColors,
  ThemeCustomizations,
} from '@looker/design-tokens'
import React, { FC, FormEvent } from 'react'
import { fontOptions } from './defaults'
import { ThemeFieldColor } from './ThemeFieldColor'
import { arrayToSelectOptions } from './utils'

interface ThemeEditorFormProps {
  theme: ThemeCustomizations
  onChange: (theme: ThemeCustomizations) => void
}

export const ThemeEditorForm: FC<ThemeEditorFormProps> = ({
  theme,
  onChange,
}) => {
  const handleFontChange = (slot: string, font: string) => {
    const newFontFamilies = { ...theme.fontFamilies }
    newFontFamilies[slot] = font
    onChange({ ...theme, fontFamilies: newFontFamilies })
  }

  const handleColorChange = (event: FormEvent<HTMLInputElement>) => {
    const newColors = { ...theme.colors }
    newColors[event.currentTarget.name] = event.currentTarget.value
    onChange({ ...theme, colors: newColors })
  }

  const themeFieldColorProps = {
    colors: theme.colors,
    onChange: handleColorChange,
  }

  return (
    <Fieldset>
      <Fieldset>
        {coreColors.map((c) => (
          <ThemeFieldColor key={c} color={c} {...themeFieldColorProps} />
        ))}
      </Fieldset>
      <Fieldset accordion legend="Intent Colors">
        {intentColors.map((c) => (
          <ThemeFieldColor key={c} color={c} {...themeFieldColorProps} />
        ))}
      </Fieldset>

      <Fieldset legend="Fonts" accordion>
        {fontFamilies.map((family) => (
          <FieldSelect
            label={family}
            name={family}
            key={family}
            options={arrayToSelectOptions(fontOptions)}
            value={theme.fontFamilies && theme.fontFamilies[family]}
            isClearable
            onChange={(newFont) => handleFontChange(family, newFont)}
          />
        ))}
      </Fieldset>
    </Fieldset>
  )
}
