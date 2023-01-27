/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { Button, FieldText, Form } from '../..'
import type { FormProps } from '../..'

export default function Basic(props: FormProps) {
  return (
    <Form
      validationMessages={{
        alpha: { message: 'This is an error', type: 'error' },
        bravo: { message: 'This is another error', type: 'error' },
      }}
      {...props}
    >
      <FieldText label="Alpha" name="alpha" />
      <FieldText label="Bravo" name="bravo" />
      <FieldText label="Charlie" name="charlie" />
      <Button>Submit</Button>
    </Form>
  )
}
