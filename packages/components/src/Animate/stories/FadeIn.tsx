/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react'
import { FadeIn } from '../..'
import { useToggle } from '../../utils/useToggle'

export default () => {
  const { value, toggle } = useToggle(false)
  return (
    <>
      <button onClick={toggle}>Toggle Content</button>
      {value && (
        <>
          <FadeIn>This fades in.</FadeIn>
          <FadeIn delay="complex" duration="intricate">
            This fades in more slowly.
          </FadeIn>
        </>
      )}
    </>
  )
}
