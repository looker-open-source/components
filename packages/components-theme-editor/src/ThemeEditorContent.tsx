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
  Layout,
  Section,
  Box,
} from '@looker/components'
import {
  pickSpecifiableColors,
  ThemeCustomizations,
} from '@looker/design-tokens'
import React, { FC, useContext, useState } from 'react'
import { ThemeContext } from 'styled-components'
import { ThemeEditorProps } from './ThemeEditor'
import { FauxDashboard } from './Examples/Dashboard'
import { ThemeEditorForm } from './ThemeEditorForm'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ThemeEditorContentProps
  extends Omit<ThemeEditorProps, 'hasCustomTheme'> {}

export const ThemeEditorContent: FC<ThemeEditorContentProps> = ({
  updateTheme,
}) => {
  const { closeModal } = useContext(DialogContext)
  const { colors, fonts } = useContext(ThemeContext)

  const [
    themeCustomizations,
    setThemeCustomizations,
  ] = useState<ThemeCustomizations>({
    colors: pickSpecifiableColors(colors),
    fontFamilies: { ...fonts },
  })

  const saveChanges = () => {
    closeModal()
    updateTheme(themeCustomizations)
  }

  const reset = () => {
    closeModal()
    updateTheme()
  }

  const cancel = () => {
    closeModal()
    updateTheme({ colors: colors, fontFamilies: fonts })
  }

  return (
    <>
      <DialogHeader>Customize Theme</DialogHeader>
      <DialogContent>
        <Layout hasAside>
          <Aside width="16rem">
            <ThemeEditorForm
              onChange={setThemeCustomizations}
              theme={themeCustomizations}
            />
          </Aside>
          <Section pl="xxlarge">
            <Box border="1px solid" borderColor="ui2">
              <ComponentsProvider
                globalStyle={false}
                themeCustomizations={themeCustomizations}
              >
                <FauxDashboard />
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
