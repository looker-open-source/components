/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import {
  Box,
  Button,
  ComponentsProvider,
  DialogContext,
  FieldCheckbox,
  FieldRadioGroup,
} from '@looker/components'
import React from 'react'
import { Popover } from '..'

export default function PopoverFieldRadioGroup() {
  const Wrapper = () => {
    const [value, setValue] = React.useState('')
    const { closeModal } = React.useContext(DialogContext)

    return (
      <Box pt="u3" width="100%">
        <FieldCheckbox label="Checkbox" value="checked" />
        <Box pl="u6" pt="u2">
          <FieldRadioGroup
            options={[
              { label: 'One', value: '1' },
              { label: 'Two', value: '2' },
              { label: 'Three', value: '3' },
            ]}
            value={value}
            onChange={setValue}
          />
        </Box>
        <Button onClick={closeModal}>Done</Button>
      </Box>
    )
  }
  return (
    <ComponentsProvider>
      <Box p="ui1" className="App">
        <Popover aria-haspopup width="300px" content={<Wrapper />}>
          <Button>Open Popover</Button>
        </Popover>
      </Box>
    </ComponentsProvider>
  )
}
