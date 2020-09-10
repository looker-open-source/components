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
  FieldColor,
  Fieldset,
  SpaceVertical,
  FieldSelect,
  theme,
  Card,
  CardContent,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from '@looker/components'
import { CoreColors, IntentColors } from '@looker/design-tokens'
import React, { FC, FormEvent, useState } from 'react'
import { Swatches } from './Swatches'
import { Suite } from './Suite'

interface ThemeEditorProps
  extends Partial<IntentColors>,
    Omit<Partial<CoreColors>, 'key'> {
  name?: string
  keyColor?: string
}

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

export const Editor: FC<ThemeEditorProps> = ({
  name,
  keyColor,
  background,
  text,
}) => {
  const [colors, setColors] = useState({
    background,
    key: keyColor,
    text,
  })
  const handleColorChange = (event: FormEvent<HTMLInputElement>) => {
    const newColors = { ...colors }
    newColors[event.currentTarget.name] = event.currentTarget.value
    setColors(newColors)
  }

  const [fontFamilies, setFontFamilies] = useState({ body: undefined })
  const handleFontChange = (slot: string, font: string) => {
    const newFontFamilies = { ...fontFamilies }
    newFontFamilies[slot] = font
    setFontFamilies(newFontFamilies)
  }

  return (
    <SpaceVertical>
      <Fieldset legend={name}>
        {['key', 'background', 'text'].map((color) => (
          <FieldColor
            label={color}
            key={color}
            name={color}
            placeholder={`Default: ${theme.colors[color]}`}
            value={colors[color]}
            onChange={handleColorChange}
          />
        ))}

        <Fieldset accordion legend="Intent Colors">
          {['link', 'critical', 'warn', 'neutral', 'positive', 'inform'].map(
            (color) => (
              <FieldColor
                label={color}
                key={color}
                name={color}
                placeholder={`Default: ${theme.colors[color]}`}
                value={colors[color]}
                onChange={handleColorChange}
              />
            )
          )}
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
              placeholder={`Default: ${theme.fonts[font]}`}
            />
          ))}
        </Fieldset>
      </Fieldset>

      <ComponentsProvider
        globalStyle={false}
        fontFamilies={fontFamilies}
        colors={colors}
      >
        <Card width="100%">
          <CardContent>
            <Tabs>
              <TabList>
                <Tab>Colors</Tab>
                <Tab>Components</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <Swatches />
                </TabPanel>
                <TabPanel>
                  <Card raised>
                    <CardContent>
                      <Suite />
                    </CardContent>
                  </Card>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </CardContent>
        </Card>
      </ComponentsProvider>
    </SpaceVertical>
  )
}

export default {
  title: 'Theme',
}
