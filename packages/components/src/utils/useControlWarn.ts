/*

 MIT License

 Copyright (c) 2019 Looker Data Sciences, Inc.
 
 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:
 
 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.
 
 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.

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
