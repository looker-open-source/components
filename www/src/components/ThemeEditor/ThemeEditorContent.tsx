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
  Aside,
  Button,
  ButtonOutline,
  ButtonTransparent,
  ComponentsProvider,
  DialogHeader,
  DialogFooter,
  DialogContent,
  DialogContext,
  FieldColor,
  Fieldset,
  FieldSelect,
  Layout,
  Section,
  Box,
} from '@looker/components'
import capitalize from 'lodash/capitalize'
import React, { FC, FormEvent, useState, useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { ThemeEditorProps } from './ThemeEditor'
import { Demo } from './Demo'
import { filterObject } from './filterObject'

const fontOptions = [
  'Red Hat Display',
  'Roboto',
  'Roboto Mono',
  'Google Sans',
  'Papyrus',
  'Impact',
  'Comic Sans MS',
]

const fontOptionsFormatted = fontOptions.map((font) => {
  return { option: font, value: font }
})

const coreColors = ['key', 'background', 'text']
const intentColors = ['link', 'critical', 'warn', 'positive', 'inform']

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ThemeEditorContentProps
  extends Omit<ThemeEditorProps, 'hasCustomTheme'> {}

export const ThemeEditorContent: FC<ThemeEditorContentProps> = ({
  updateTheme,
}) => {
  const theme = useContext(ThemeContext)
  const { closeModal } = useContext(DialogContext)

  const specifiableColors = filterObject(theme.colors, [
    ...coreColors,
    ...intentColors,
  ])

  const [colors, setColors] = useState(specifiableColors)
  const [fontFamilies, setFontFamilies] = useState({ ...theme.fontFamilies })

  const saveChanges = () => {
    closeModal()
    updateTheme({ colors, fontFamilies })
  }

  const reset = () => {
    closeModal()
    updateTheme({})
  }

  const cancel = () => {
    closeModal()
    updateTheme({ colors: theme.colors, fontFamilies: theme.fontFamilies })
  }

  const handleColorChange = (event: FormEvent<HTMLInputElement>) => {
    const newColors = { ...colors }
    newColors[event.currentTarget.name] = event.currentTarget.value
    setColors(newColors)
  }

  const handleFontChange = (slot: string, font: string) => {
    const newFontFamilies = { ...fontFamilies }
    newFontFamilies[slot] = font
    setFontFamilies(newFontFamilies)
  }

  const themeColorProps = { colors, onChange: handleColorChange }

  return (
    <>
      <DialogHeader closeIcon={false}>Customize Theme</DialogHeader>
      <DialogContent p="none">
        <Layout hasAside>
          <Aside width="16rem">
            <Fieldset legend={name}>
              <Fieldset>
                {coreColors.map((c) => (
                  <ThemeColor key={c} color={c} {...themeColorProps} />
                ))}
              </Fieldset>
              <Fieldset accordion legend="Intent Colors">
                {intentColors.map((c) => (
                  <ThemeColor key={c} color={c} {...themeColorProps} />
                ))}
              </Fieldset>

              <Fieldset legend="Fonts" accordion>
                {['body', 'brand', 'code'].map((font) => (
                  <FieldSelect
                    label={font}
                    name={font}
                    key={font}
                    options={fontOptionsFormatted}
                    value={fontFamilies[font]}
                    isClearable
                    onChange={(newFont) => handleFontChange(font, newFont)}
                  />
                ))}
              </Fieldset>
            </Fieldset>
          </Aside>
          <Section pl="xxlarge">
            <Box border="1px solid" borderColor="ui2">
              <ComponentsProvider
                globalStyle={false}
                colors={colors}
                fontFamilies={fontFamilies}
              >
                <Demo />
              </ComponentsProvider>
            </Box>
          </Section>
        </Layout>
      </DialogContent>
      <DialogFooter
        secondary={<ButtonOutline onClick={reset}>Reset Theme</ButtonOutline>}
      >
        <Button onClick={saveChanges}>Apply Changes</Button>
        <ButtonTransparent onClick={cancel}>Cancel</ButtonTransparent>
      </DialogFooter>
    </>
  )
}

interface ThemeColorProps {
  color: string
  colors: {}
  onChange: (event: FormEvent<HTMLInputElement>) => void
}

const ThemeColor: FC<ThemeColorProps> = ({ color, colors, onChange }) => (
  <FieldColor
    label={capitalize(color)}
    name={color}
    value={colors[color]}
    onChange={onChange}
  />
)
