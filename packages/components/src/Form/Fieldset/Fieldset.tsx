import React, { forwardRef, Ref } from 'react'
import styled from 'styled-components'
import {
  border,
  BorderProps,
  color,
  CompatibleHTMLProps,
  layout,
  LayoutProps,
  reset,
  space,
  SpaceProps,
} from 'looker-design-tokens'
import { BackgroundColorProps } from 'styled-system'
import { FlexItem } from '../../Layout/FlexItem'
import { FormControl, FormControlDirections } from '../FormControl'
import { Legend } from './Legend'

interface FieldsetBaseProps
  extends BackgroundColorProps,
    BorderProps,
    LayoutProps,
    SpaceProps,
    CompatibleHTMLProps<HTMLFieldSetElement> {}

export interface FieldsetProps extends FieldsetBaseProps {
  /**
   * Specifies where to render the legend in relation to the set of inputs. Can be placed `left`, `right`, `bottom`, or `top`.
   */
  alignLegend?: FormControlDirections
  /**
   * The legend, or heading, of this fieldset.
   */
  legend?: string
}

const FieldsetBase = styled.fieldset<FieldsetBaseProps>`
  ${reset}
  ${border}
  ${color}
  ${layout}
  ${space}
`

const FieldsetComponent = forwardRef(
  (
    { alignLegend, legend, ...props }: FieldsetProps,
    ref: Ref<HTMLFieldSetElement>
  ) => {
    return (
      <FieldsetBase {...props} ref={ref}>
        <FormControl mb="xsmall" alignLabel={alignLegend}>
          {legend ? (
            <FlexItem>
              <Legend>{legend}</Legend>
            </FlexItem>
          ) : null}
          <FlexItem>{props.children}</FlexItem>
        </FormControl>
      </FieldsetBase>
    )
  }
)

FieldsetComponent.displayName = 'FieldsetComponent'

export const Fieldset = styled(FieldsetComponent)``
