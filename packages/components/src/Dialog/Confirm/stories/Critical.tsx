/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { Confirm, ButtonOutline } from '../../..'

export default function Critical() {
  return (
    <Confirm
      title="Confirm Something"
      message="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      onConfirm={close => {
        alert('You did something')
        close()
      }}
      buttonColor="critical"
      width={['10rem', '20rem', '30rem', '40rem']}
    >
      {open => (
        <ButtonOutline color="critical" onClick={open}>
          Something destructive
        </ButtonOutline>
      )}
    </Confirm>
  )
}
