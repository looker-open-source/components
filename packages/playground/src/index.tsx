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
import { ComponentsProvider, GlobalStyle } from '@looker/components'
import { Grid } from '@looker/components/src/Layout/Grid'
import { FieldCheckbox } from '../../components/src/Form/Fields/FieldCheckbox'
import { FieldRadio } from '../../components/src/Form/Fields/FieldRadio'
import { Fieldset } from '../../components/src/Form/Fieldset'

const App: React.FC = () => {
  return (
    <ComponentsProvider>
      <GlobalStyle />
      <Grid columns={1}>
        <Fieldset legend="Checkbox Legend">
          <FieldCheckbox label="Checkbox" />
          <FieldCheckbox
            required
            label="Checkbox"
            validationMessage={{ message: 'validation Message', type: 'error' }}
          />
          <FieldCheckbox disabled label="Checkbox" />
          <FieldCheckbox required label="Checkbox" />
        </Fieldset>

        <Fieldset inline legend="Checkbox Legend inline">
          <FieldCheckbox label="Checkbox" />
          <FieldCheckbox
            required
            label="Checkbox"
            validationMessage={{ message: 'validation Message', type: 'error' }}
          />
          <FieldCheckbox disabled label="Checkbox" />
          <FieldCheckbox required label="Checkbox" />
        </Fieldset>
      </Grid>

      <Grid columns={1}>
        <Fieldset legend="Radio Legend">
          <FieldRadio label="Radio" />
          <FieldRadio disabled label="Radio" />
        </Fieldset>
        <Fieldset inline legend="Radio Legend inline">
          <FieldRadio label="Radio" />
          <FieldRadio disabled label="Radio" />
        </Fieldset>
      </Grid>
    </ComponentsProvider>
  )
}

/*
  This is the binding site for the playground. If you want to edit the
  primary application, do your work in App.tsx instead.
 */
document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<App />, document.getElementById('container'))
})
