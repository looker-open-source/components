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

import React from 'react'
import ReactDOM from 'react-dom'
import {
  Box,
  GlobalStyle,
  Flex,
  FieldCheckbox,
  FieldToggleSwitch,
  FieldRadio,
  FieldText,
  FieldTextArea,
  FieldSelect,
} from '@looker/components'
import { theme } from '@looker/design-tokens'
import { ThemeProvider } from 'styled-components'

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Flex pt="large" justifyContent="space-evenly" alignItems="center">
        <FieldText label="Text Input" placeholder="placeholder" />
        <FieldText inline label="Text Input" placeholder="placeholder" />
      </Flex>

      <Flex pt="large" justifyContent="space-evenly" alignItems="center">
        <FieldText disabled label="Text Input" placeholder="placeholder" />
        <FieldText
          disabled
          inline
          label="Text Input"
          placeholder="placeholder"
        />
      </Flex>

      <Flex pt="large" justifyContent="space-evenly" alignItems="center">
        <FieldText label="Text Input" placeholder="placeholder" required />
        <FieldText
          inline
          label="Text Input"
          placeholder="placeholder"
          required
        />
      </Flex>

      <Flex pt="large" justifyContent="space-evenly" alignItems="center">
        <FieldText
          description="no vegetables allowed"
          label="Text Input"
          placeholder="placeholder"
        />
        <FieldText
          description="no vegetables allowed"
          inline
          label="Text Input"
          placeholder="placeholder"
        />
      </Flex>

      <Flex pt="large" justifyContent="space-evenly" alignItems="center">
        <FieldText label="Label" prefix="$" />
        <FieldText inline label="Label" prefix="$" />
      </Flex>
      <Flex pt="large" justifyContent="space-evenly" alignItems="center">
        <FieldText label="Label" iconBefore="GearOutline" />
        <FieldText inline label="Label" iconBefore="GearOutline" />
      </Flex>
      <Flex pt="large" justifyContent="space-evenly" alignItems="center">
        <FieldText label="Label" suffix="%" />
        <FieldText inline label="Label" suffix="%" />
      </Flex>
      <Flex pt="large" justifyContent="space-evenly" alignItems="center">
        <FieldText label="Label" iconAfter="Check" />
        <FieldText inline label="Label" iconAfter="Check" />
      </Flex>
      <Flex pt="large" justifyContent="space-evenly" alignItems="center">
        <FieldText label="Label" prefix="$" iconAfter="Check" />
        <FieldText inline label="Label" prefix="$" iconAfter="Check" />
      </Flex>
      <Flex pt="large" justifyContent="space-evenly" alignItems="center">
        <FieldText label="hello" detail="5/50" placeholder="placeholder" />
        <FieldText
          inline
          label="hello"
          detail="5/50"
          placeholder="placeholder"
        />
      </Flex>
      <Flex pt="large" justifyContent="space-evenly" alignItems="center">
        <FieldTextArea label="Text Area" placeholder="placeholder" />
        <FieldTextArea inline label="Text Area" placeholder="placeholder" />
      </Flex>
      <Flex pt="large" justifyContent="space-evenly" alignItems="center">
        <FieldTextArea
          label="Text Area"
          placeholder="placeholder"
          validationMessage={{ message: 'validation Message', type: 'error' }}
        />
        <FieldTextArea
          inline
          label="Text Area"
          required
          placeholder="placeholder"
          validationMessage={{ message: 'validation Message', type: 'error' }}
        />
      </Flex>
      <Flex pt="large" justifyContent="space-evenly" alignItems="center">
        <FieldText
          label="Label"
          required
          validationMessage={{ message: 'validation Message', type: 'error' }}
          description="A special kind of thing..."
          detail="What?"
        />
        <FieldText
          inline
          label="Label"
          required
          validationMessage={{ message: 'validation Message', type: 'error' }}
          description="A special kind of thing..."
          detail="What?"
        />
      </Flex>
      <Flex pt="large" justifyContent="space-evenly" alignItems="center">
        <FieldSelect
          label="Label"
          placeholder="placeholder"
          options={[
            { label: 'Cheddar', value: 'cheddar' },
            { label: 'Gouda', value: 'gouda' },
            { label: 'Swiss', value: 'swiss' },
          ]}
        />
        <FieldSelect
          inline
          label="Label"
          placeholder="placeholder"
          options={[
            { label: 'Cheddar', value: 'cheddar' },
            { label: 'Gouda', value: 'gouda' },
            { label: 'Swiss', value: 'swiss' },
          ]}
        />
      </Flex>
      <Flex pt="large" justifyContent="space-evenly" alignItems="center">
        <FieldSelect
          label="Label"
          placeholder="placeholder"
          options={[
            { label: 'Cheddar', value: 'cheddar' },
            { label: 'Gouda', value: 'gouda' },
            { label: 'Swiss', value: 'swiss' },
          ]}
          validationMessage={{ message: 'validation Message', type: 'error' }}
        />
        <FieldSelect
          inline
          label="Label"
          placeholder="placeholder"
          options={[
            { label: 'Cheddar', value: 'cheddar' },
            { label: 'Gouda', value: 'gouda' },
            { label: 'Swiss', value: 'swiss' },
          ]}
          validationMessage={{ message: 'validation Message', type: 'error' }}
        />
      </Flex>

      <Flex>
        <Box p="xlarge">
          <FieldCheckbox label="Checkbox" />
          <FieldCheckbox
            required
            label="Checkbox"
            validationMessage={{ message: 'validation Message', type: 'error' }}
          />
          <FieldCheckbox disabled label="Checkbox" />
          <FieldCheckbox required label="Checkbox" />
        </Box>
        <Box p="xlarge">
          <FieldRadio label="Radio" />
          <FieldRadio disabled label="Radio" />
        </Box>
        <Box p="xlarge">
          <FieldToggleSwitch label="Toggle Switch" />
          <FieldToggleSwitch
            required
            label="Toggle Switch"
            validationMessage={{ message: 'validation Message', type: 'error' }}
          />
          <FieldToggleSwitch disabled label="Toggle Switch" />
          <FieldToggleSwitch required label="Toggle Switch" />
        </Box>
      </Flex>
    </ThemeProvider>
  )
}

/*
  This is the binding site for the playground. If you want to edit the
  primary application, do your work in App.tsx instead.
 */
document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<App />, document.getElementById('container'))
})
