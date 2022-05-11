/*

 MIT License

 Copyright (c) 2022 Looker Data Sciences, Inc.

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
import type { FC, SetStateAction, Dispatch } from 'react'
import React from 'react'
import type { ReferenceLine, CAll } from '@looker/visualizations-adapters'
import {
  Dialog,
  Button,
  ButtonTransparent,
  DialogLayout,
  Fieldset,
  Flex,
  FlexItem,
  Divider,
  Grid,
  Heading,
  IconButton,
  FieldColor,
  FieldSelect,
  SpaceVertical,
} from '@looker/components'
import partial from 'lodash/partial'
import isArray from 'lodash/isArray'
import { Add } from '@styled-icons/material/Add'
import { Remove } from '@styled-icons/material/Remove'

interface ReferenceLinesEditorProps {
  name: string
  value?: ReferenceLine[]
  onConfigChange: Dispatch<SetStateAction<Partial<CAll>>>
}

// const referenceLineDefaults: ReferenceLine = {
//   color: '#000000',
//   label_position: 'left',
//   line_value: 'max',
//   margin_bottom: 'deviation',
//   margin_top: 'deviation',
//   margin_value: 'mean',
//   range_end: 'min',
//   range_start: 'max',
//   reference_type: 'line',
// }

export const ReferenceLines: FC<ReferenceLinesEditorProps> = ({
  value,
  // name,
}) => {
  const addLine = () => {
    // TODO: re-enable config change when we support trendlines
    // const newValue = [...(value || []), referenceLineDefaults]
    // handleConfigChange(name, newValue)
  }
  const removeLine = (index: number) => {
    const newValue = [...(value || [])]
    newValue.splice(index, 1)
    // TODO: re-enable config change when we support trendlines
    // handleConfigChange(name, newValue)
  }

  return (
    <Dialog
      content={
        <DialogLayout
          header="Reference Lines"
          footer="Changes saved automatically."
        >
          <SpaceVertical>
            {isArray(value) &&
              value.map((line, i) => (
                <ReferenceLineForm
                  {...line}
                  arrayPos={i}
                  key={i}
                  // onChange={partial(handleConfigChange, `${name}[${i}]`)}
                  onDelete={partial(removeLine, i)}
                />
              ))}
            <Button iconBefore={<Add />} onClick={addLine}>
              Add New Reference Line
            </Button>
          </SpaceVertical>
        </DialogLayout>
      }
    >
      <ButtonTransparent>
        Edit Reference Lines ({value?.length || 0})
      </ButtonTransparent>
    </Dialog>
  )
}

interface ReferenceLineFormProps extends ReferenceLine {
  arrayPos: number
  // onChange: (value: OnChangeValues) => void
  onDelete: () => void
}

const ReferenceLineForm: FC<ReferenceLineFormProps> = ({
  onDelete,
  ...lineProps
}) => {
  const {
    arrayPos,
    color,
    label_position,
    line_value,
    margin_bottom,
    margin_top,
    margin_value,
    range_end,
    range_start,
    reference_type,
  } = lineProps

  return (
    <>
      <div>
        <Flex mb="small">
          <FlexItem>
            <Heading as="h3" mr="xsmall">
              Line {arrayPos + 1}
            </Heading>
          </FlexItem>
          <FlexItem>
            <IconButton
              icon={<Remove />}
              label="Delete trend line"
              outline
              onClick={onDelete}
            />
          </FlexItem>
        </Flex>{' '}
        <Fieldset>
          <Grid columns={4}>
            <FieldSelect
              label="Reference Type"
              value={reference_type}
              // onChange={partial(handleChange, 'reference_type')}
              options={[
                { value: 'line' },
                { value: 'range' },
                { value: 'margins' },
              ]}
            />
            <FieldColor
              label="Color"
              value={color}
              // onChange={partial(handleChange, 'color')}
            />
            <FieldSelect
              label="Label Position"
              value={label_position}
              // onChange={partial(handleChange, 'label_position')}
              options={[
                { value: 'left' },
                { value: 'center' },
                { value: 'right' },
              ]}
            />
            <FieldSelect
              label="Line Value"
              value={line_value}
              // onChange={partial(handleChange, 'line_value')}
              options={[
                { value: 'mean' },
                { value: 'median' },
                { value: 'max' },
                { value: 'min' },
              ]}
            />
            {reference_type === 'margins' && (
              <>
                <FieldSelect
                  label="Margin Bottom"
                  value={margin_bottom}
                  // onChange={partial(handleChange, 'margin_bottom')}
                  options={[{ value: 'deviation' }, { value: 'variance' }]}
                />
                <FieldSelect
                  label="Margin Top"
                  value={margin_top}
                  // onChange={partial(handleChange, 'margin_top')}
                  options={[{ value: 'deviation' }, { value: 'variance' }]}
                />
                <FieldSelect
                  label="Margin Value"
                  value={margin_value}
                  // onChange={partial(handleChange, 'margin_value')}
                  options={[
                    { value: 'mean' },
                    { value: 'median' },
                    { value: 'max' },
                    { value: 'min' },
                  ]}
                />
              </>
            )}
            {reference_type === 'range' && (
              <>
                <FieldSelect
                  label="Range Start"
                  value={range_start}
                  // onChange={partial(handleChange, 'range_start')}
                  options={[
                    { value: 'mean' },
                    { value: 'median' },
                    { value: 'max' },
                    { value: 'min' },
                  ]}
                />
                <FieldSelect
                  label="Range End"
                  value={range_end}
                  // onChange={partial(handleChange, 'range_end')}
                  options={[
                    { value: 'mean' },
                    { value: 'median' },
                    { value: 'max' },
                    { value: 'min' },
                  ]}
                />
              </>
            )}
          </Grid>
        </Fieldset>
      </div>
      <Divider />
    </>
  )
}
