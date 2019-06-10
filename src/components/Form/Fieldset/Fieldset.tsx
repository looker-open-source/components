import * as React from 'react'
import { styled } from '../../../style'
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
}

const InternalFieldset: React.FC<FieldsetProps> = ({ legend, ...props }) => {
  return (
    <Box is="fieldset" {...props}>
      <FormControl mb="xsmall" alignLabel={props.alignLegend}>
        {legend ? (
          <FlexItem>
            <Legend>{legend}</Legend>
          </FlexItem>
        ) : null}
        <FlexItem>{props.children}</FlexItem>
      </FormControl>
    </Box>
  )
}

const FieldsetFactory = React.forwardRef((props: FieldsetProps, ref) => (
  <InternalFieldset innerRef={ref} {...props} />
))

export const Fieldset = styled<FieldsetProps>(FieldsetFactory)``
