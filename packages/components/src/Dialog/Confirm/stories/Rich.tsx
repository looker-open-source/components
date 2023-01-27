/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import * as MaterialIcons from '@styled-icons/material'
import { Confirm } from '../../../Dialog'
import { Button } from '../../../Button'
import { Space, SpaceVertical } from '../../../Layout'
import { Paragraph } from '../../../Text/Paragraph'
import { Icon } from '../../../Icon'
import { Link } from '../../../Link'

export default function Critical() {
  const message = (
    <Space>
      <Icon icon={<MaterialIcons.Info />} size="80px" />
      <SpaceVertical>
        <Paragraph>
          Canadians say "sorry" so often that{' '}
          <strong>in 2009 a law was passed</strong> declaring that an apology
          cannot be used as an admission of guilt.
        </Paragraph>
        <cite>
          SOURCE:{' '}
          <Link
            href="https://www.theloop.ca/canadians-love-to-say-sorry-so-much-we-had-to-make-this-law/"
            target="_blank"
          >
            the loop
          </Link>
        </cite>
      </SpaceVertical>
    </Space>
  )

  return (
    <Confirm
      title="Did you know?"
      message={message}
      onConfirm={close => {
        alert('Now you know.')
        close()
      }}
      width={['10rem', '20rem', '30rem', '40rem']}
    >
      {open => <Button onClick={open}>Do something fancy</Button>}
    </Confirm>
  )
}
