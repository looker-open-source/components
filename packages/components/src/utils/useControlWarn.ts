/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { useRef } from 'react'

const un = 'uncontrolled'
const cont = 'controlled'

function warnComponentControl(
  componentName: string,
  controllingProps: string[]
) {
  const propsText =
    controllingProps.slice(0, -1).join(',') +
    ' and ' +
    controllingProps.slice(-1)
  const check = `Check the ${propsText} being passed in.`
  return (changingToControlled: boolean) => {
    const from = changingToControlled ? un : cont
    const to = changingToControlled ? cont : un
    const warning = `${componentName} is changing from ${from} to ${to}. \
      ${componentName} should not switch from ${from} to ${to} (or vice versa). \
      Decide between using a ${cont} or ${un} ${componentName} for the \
      lifetime of the component. `
    // eslint-disable-next-line no-console
    console.warn(`${warning} ${check}`)
  }
}

export interface UseControlWarnProps {
  isControlledCheck: () => boolean
  name: string
  controllingProps: string[]
}

export function useControlWarn({
  isControlledCheck,
  name,
  controllingProps,
}: UseControlWarnProps) {
  const { current: isControlled } = useRef(isControlledCheck())
  const bgWarn = warnComponentControl(name, controllingProps)

  if (isControlled && !isControlledCheck()) {
    bgWarn(false)
  }

  if (!isControlled && isControlledCheck()) {
    bgWarn(true)
  }

  return isControlled
}
