import React, { FC } from 'react'
import { InputDate } from '@looker/components'

export const InputDateDemo: FC = () => {
  return (
    <>
      <InputDate size="small" />
      <InputDate />
      <InputDate size="large" />
    </>
  )
}
