import * as React from 'react'
import { ResponsiveSpaceValue } from '../../../style/responsive'
import { Box, BoxProps } from '../../Box'
import { FlexItem } from '../../FlexItem'
import { FormControl, FormControlDirections } from '../FormControl'
import { Legend } from './Legend'

export interface FieldsetProps extends BoxProps<HTMLFieldSetElement> {
  /**
   * Specifies where to render the legend in relation to the set of inputs. Can be placed `left`, `right`, `bottom`, or `top`.
   */
  alignLegend?: FormControlDirections
  /**
   * The legend, or heading, of this fieldset.
   */
  legend?: string
  /**
   * Specifies how much space for each horizontally aligned label in the fieldset to take up.
   */
  labelWidth?: ResponsiveSpaceValue
  /**
   * Specifies how to align each label in the fieldset relative to their input.
   */
  alignLabels?: FormControlDirections
}

export const Fieldset: React.SFC<FieldsetProps> = ({
  legend,
  labelWidth,
  alignLabels,
  ...props
}) => {
  const passLabelWidthProp = (
    lw?: ResponsiveSpaceValue,
    al?: FormControlDirections
  ) => {
    if (lw || al) {
      return React.Children.map(props.children, child => {
        child = child as React.ReactElement<any>
        return React.cloneElement(child, {
          alignLabel: al,
          labelWidth: lw,
        })
      })
    } else {
      return props.children
    }
  }

  return (
    <Box is="fieldset" {...props}>
      <FormControl mb="xsmall" alignLabel={props.alignLegend}>
        {legend ? (
          <FlexItem>
            <Legend>{legend}</Legend>
          </FlexItem>
        ) : null}
        <FlexItem>{passLabelWidthProp(labelWidth, alignLabels)}</FlexItem>
      </FormControl>
    </Box>
  )
}
