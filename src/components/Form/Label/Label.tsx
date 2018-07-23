// Typescript component boilerplate for generating meaningful declaration files.
import * as React from 'react'
import styled, { StyledComponentClass } from '../../../styled_components'
export { StyledComponentClass }
import { ThemeInterface } from '../../../themes'
export { ThemeInterface }
// End Typescript component boilerplate
import { space800 } from '../../../styles/colors'

export interface LabelProps {
  htmlFor: string
}

/**
 * Labels are used to descript an input field.
 */
const LabelGenerator: React.SFC<LabelProps> = ({ htmlFor, ...args }) => {
  // // This prevents our props from being passed directly to the underlying tags, which ultimately
  // // would cause some warnings. Ideally we would define the return type for this function, and
  // // Typescript would warn us when passing props that are invalid.
  // //
  // See https://reactjs.org/warnings/unknown-prop.html
  // const props = Object.assign({}, args)
  // delete props.htmlFor

  return (
    <label htmlFor={htmlFor} {...args}>
      {args.children}
    </label>
  )
}

export const Label = styled<LabelProps>(LabelGenerator)`
  font-weight: 600;
  color: ${space800};
  margin-right: 8px;
  font-size: 14px;
  min-width: 175px;
  text-align: right;
`
