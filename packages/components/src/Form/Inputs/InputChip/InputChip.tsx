import React from 'react'
// import { emailValidator } from 'web/utils/email_validator'
import styled from 'styled-components'

import { Flex } from '../../../Layout'
import { InputText } from '../InputText'

interface ChipProps {
  value: string
  onDelete?: () => void
}

function ChipInternal({ onDelete, value, ...props }: ChipProps) {
  return (
    <div {...props}>
      {value} <span onClick={onDelete}>x</span>
    </div>
  )
}

export const Chip = styled(ChipInternal)`
  border: 1px solid;
  display: inline-block;
`

/**
 * ChipInput is a component that appears to be a regular text input,
 * but also allows (validated) user inputs to be stored as 'tags' (see the Chip element)
 */

interface ChipInputProps {
  name: string
  placeholder?: string
  values: string[]
  onChange: (emails: string[]) => void
}

interface ChipInputState {
  inputValue: string
}

export class InputChip extends React.Component<ChipInputProps> {
  state: ChipInputState = {
    inputValue: '',
  }

  handleBlur = () => {
    this.updateValues()
  }

  handleKeyPress = (e: React.KeyboardEvent) => {
    // Remove items via backspace
    if (e.key === 'Backspace' && !this.state.inputValue) {
      // If we hit backspace and there is no text left to delete, remove the last entry instead
      this.handleDeleteChip(this.props.values[this.props.values.length - 1])
    } else if (e.key === 'Enter') {
      // Update values when the user hits return
      this.updateValues()
    }
  }

  updateValues = () => {
    const invalidValues: string[] = []
    const validValues: string[] = []

    // Values may be separated by ',' '\t' and ' '
    const inputValues: string[] = this.state.inputValue.split(/[,\t\s]+/)
    inputValues.forEach((val: string) => {
      if (val.trim() === '') return
      // Make sure each value is valid and doesn't already exist
      if (
        // !emailValidator.test(val) ||
        this.props.values &&
        this.props.values.includes(val)
      ) {
        return invalidValues.push(val)
      } else {
        return validValues.push(val)
      }
    })

    // Save valid values and keep invalid ones in the input
    const newValues = [...this.props.values, ...validValues]
    this.props.onChange(newValues)
    this.setState({ inputValue: invalidValues.join(', ') })
  }

  handleDeleteChip(value: string) {
    return () => {
      const newValues = this.props.values.filter(v => value !== v)
      this.props.onChange(newValues)
    }
  }

  handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    this.setState({ inputValue: e.currentTarget.value })
  }

  render() {
    const values = this.props.values.map(value => (
      <Chip onDelete={this.handleDeleteChip(value)} value={value} key={value} />
    ))

    return (
      <Flex
        name={this.props.name}
        minHeight="28px"
        width="100%"
        flexWrap="wrap"
        border="1px solid"
        borderColor="palette.charcoal300"
        borderRadius="5px"
      >
        {values}
        <InputText
          id="input"
          height="24px"
          value={this.state.inputValue}
          onChange={this.handleInputChange}
          type="text"
          placeholder={this.props.placeholder}
          border="0"
          // Input should be full width if there are no values; otherwise, narrow the input to stay on one line
          width={this.props.values.length < 1 ? '100%' : '35%'}
          style={{ margin: '1px' }} // Special case to align within ChipInput
          focusStyle={{
            border: '0',
            outline: 'none',
          }}
          onBlur={this.handleBlur}
          onKeyDown={this.handleKeyPress}
        />
      </Flex>
    )
  }
}
