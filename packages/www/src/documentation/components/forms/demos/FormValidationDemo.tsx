/*

 MIT License

 Copyright (c) 2019 Looker Data Sciences, Inc.
 
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

import React, { ChangeEvent, Component } from 'react'
import { FieldText, Form } from 'looker-lens'

interface ValidationErrors {
  [key: string]: { message?: string; type?: 'error' }
}

interface FormValidationState {
  val1: string
  val2: string
  validationErrors: ValidationErrors
}

export class FormValidationDemo extends Component<{}, FormValidationState> {
  public state = {
    val1: '',
    val2: '',
    validationErrors: {},
  }

  public validate = () => {
    const errors: ValidationErrors = {}
    if (this.state.val1.length > 5) {
      errors.val1 = {
        message: 'Error! String greater than 5 characters.',
        type: 'error',
      }
    }
    if (this.state.val2.length < 5) {
      errors.val2 = {
        message: 'Error! String less than 5 characters.',
        type: 'error',
      }
    }
    this.setState({ validationErrors: errors })
  }

  public copyState(): FormValidationState {
    return Object.assign({}, this.state)
  }

  public changeHandler(val: string, event: ChangeEvent<HTMLInputElement>) {
    const stateCopy: FormValidationState = this.copyState()
    if (val === 'val1') {
      stateCopy[val] = event.target.value
    } else if (val === 'val2') {
      stateCopy[val] = event.target.value
    }
    this.setState(stateCopy, this.validate)
  }

  public render() {
    return (
      <Form validationMessages={this.state.validationErrors}>
        <FieldText
          name="val1"
          value={this.state.val1}
          label="A Field requiring more than 5 characters"
          onChange={this.changeHandler.bind(this, 'val1')}
        />
        <FieldText
          name="val2"
          value={this.state.val2}
          label="A Field requiring less than 5 characters"
          onChange={this.changeHandler.bind(this, 'val2')}
        />
      </Form>
    )
  }
}
