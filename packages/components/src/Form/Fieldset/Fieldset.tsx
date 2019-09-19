import React, { FunctionComponent, Ref } from 'react'
import styled, { StyledComponent } from 'styled-components'
import { Box, BoxProps } from '../../Box'
import { FlexItem } from '../../FlexItem'
import { FormControl, FormControlDirections } from '../FormControl'
import { Legend } from './Legend'

export interface FieldsetProps
  extends Omit<BoxProps<HTMLFieldSetElement>, 'as'> {
  /**
   * Specifies where to render the legend in relation to the set of inputs. Can be placed `left`, `right`, `bottom`, or `top`.
   */
  alignLegend?: FormControlDirections
  /**
   * The legend, or heading, of this fieldset.
   */
  legend?: string
}

type ComponentType = FunctionComponent<FieldsetProps>
type StyledComponentType = StyledComponent<ComponentType, FieldsetProps>

const InternalFieldset: ComponentType = ({ legend, ...props }) => {
  return (
    <Box as="fieldset" {...props}>
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

const FieldsetFactory = React.forwardRef<StyledComponentType, FieldsetProps>(
  (props: FieldsetProps, ref: Ref<StyledComponentType>) => (
    <InternalFieldset ref={ref} {...props} />
  )
)

/** @component */
export const Fieldset = styled<ComponentType>(FieldsetFactory)``
