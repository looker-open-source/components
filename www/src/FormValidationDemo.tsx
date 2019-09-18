import React from 'react'
import { FieldText } from '../src/components/Form/Fields'
import { Form } from '../src/components/Form/Form'

interface ValidationErrors {
  [key: string]: { message?: string; type?: 'error' }
}

interface FormValidationState {
  val1: string
  val2: string
  validationErrors: ValidationErrors
}

export class FormValidationDemo extends React.Component<
  {},
  FormValidationState
> {
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

  public changeHandler(
    val: string,
    event: React.ChangeEvent<HTMLInputElement>
  ) {
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
