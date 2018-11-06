import * as React from 'react'
import { ResponsiveSpaceValue } from 'styled-system'
import { styled } from '../../../style'
import { Box, BoxProps } from '../../Box'
import { FlexItem } from '../../FlexItem'
import { FormControl, FormControlDirections } from '../FormControl'

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

const Legend = styled<BoxProps<HTMLLegendElement>>(props => (
  <Box is="legend" {...props}>
    {props.children}
  </Box>
))`
  color: ${props => props.theme.components.Legend.color};
  font-size: ${props => props.theme.components.Legend.fontSize};
  font-weight: ${props => props.theme.components.Legend.fontWeight};
  padding-bottom: ${props => props.theme.components.Legend.bottomPadding};
`

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
      <FormControl alignLabel={props.alignLegend}>
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
