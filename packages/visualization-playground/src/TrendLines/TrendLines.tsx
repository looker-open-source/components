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
import type { TrendLine, CAll } from '@looker/visualizations'
import {
  Dialog,
  Button,
  ButtonTransparent,
  DialogLayout,
  Fieldset,
  Divider,
  Grid,
  Heading,
  IconButton,
  FieldColor,
  FieldSelect,
  SpaceVertical,
  FieldText,
  Flex,
  FlexItem,
} from '@looker/components'
import { Checkbox } from '../Checkbox'
import partial from 'lodash/partial'
import isArray from 'lodash/isArray'
import { Add } from '@styled-icons/material/Add'
import { Remove } from '@styled-icons/material/Remove'

interface TrendLinesEditorProps {
  name: string
  value?: TrendLine[]
  onConfigChange: Dispatch<SetStateAction<Partial<CAll>>>
}

// const trendLineDefaults: TrendLine = {
//   color: '#000000',
//   label_position: 'right',
//   order: 3,
//   period: 7,
//   regression_type: 'linear',
//   series_index: 1,
//   show_label: true,
// }

export const TrendLines: FC<TrendLinesEditorProps> = ({ value }) => {
  const addLine = () => {
    // TODO: re-enable config change when we support reference lines
    // const newValue = [...(value || []), trendLineDefaults]
    // handleConfigChange(name, newValue)
  }

  const removeLine = (index: number) => {
    const newValue = [...(value || [])]
    newValue.splice(index, 1)
    // TODO: re-enable config change when we support reference lines
    // handleConfigChange(name, newValue)
  }

  return (
    <Dialog
      content={
        <DialogLayout
          header="Trend Lines"
          footer="Changes saved automatically."
        >
          <SpaceVertical>
            {isArray(value) &&
              value.map((line, i) => (
                <TrendLineForm
                  {...line}
                  arrayPos={i}
                  key={i}
                  // onChange={partial(handleConfigChange, `${name}[${i}]`)}
                  onDelete={partial(removeLine, i)}
                />
              ))}
            <Button iconBefore={<Add />} onClick={addLine}>
              Add New Trend Line
            </Button>
          </SpaceVertical>
        </DialogLayout>
      }
    >
      <ButtonTransparent>
        Edit Trend Lines ({value?.length || 0})
      </ButtonTransparent>
    </Dialog>
  )
}

interface TrendLineFormProps extends TrendLine {
  arrayPos: number
  onDelete: () => void
}

const TrendLineForm: FC<TrendLineFormProps> = ({
  onDelete,
  arrayPos,
  ...lineProps
}) => {
  const {
    color,
    label_position,
    order,
    period,
    regression_type,
    series_index,
    show_label,
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
        </Flex>
        <Fieldset>
          <Grid columns={4}>
            <FieldColor
              label="Color"
              value={color}
              // onChange={partial(handleChange, 'color')}
            />
            <FieldSelect
              label="Trend Type"
              value={regression_type}
              // onChange={partial(handleChange, 'regression_type')}
              options={[
                { value: 'linear' },
                { value: 'exponential' },
                { value: 'logarithmic' },
                { value: 'power' },
                { value: 'polynomial' },
                { value: 'average' },
              ]}
            />
            {regression_type === 'polynomial' && (
              <FieldText
                label="Order"
                value={order}
                // onChange={partial(handleChange, 'order')}
              />
            )}
            {regression_type === 'average' && (
              <FieldText
                label="Period"
                value={period}
                // onChange={partial(handleChange, 'period')}
              />
            )}
            <FieldText
              label="Series Index"
              value={series_index}
              // onChange={partial(handleChange, 'series_index')}
            />
            <Checkbox
              label="Show Label"
              checked={show_label}
              // onChange={partial(handleChange, 'show_label')}
            />
            {show_label === true && (
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
            )}
          </Grid>
        </Fieldset>
      </div>
      <Divider />
    </>
  )
}
