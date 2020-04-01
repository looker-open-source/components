import React, { FC } from 'react'
import { TextArea, Divider } from '@looker/components'

export const TextAreaDemo: FC = () => {
  return (
    <>
      <TextArea resize="both" placeholder="resize in both directions" />
      <TextArea resize={true} placeholder="resize in both directions" />
      <Divider my="medium" />
      <TextArea resize="none" placeholder="no resize" />
      <TextArea resize={false} placeholder="no resize" />
      <Divider my="medium" />
      <TextArea resize="vertical" placeholder="only resize vertically" />
      <TextArea resize="horizontal" placeholder="only resize horizontally" />
    </>
  )
}
