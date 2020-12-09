/*

 MIT License

 Copyright (c) 2020 Looker Data Sciences, Inc.

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

import React from 'react'
import {
  Box,
  Heading,
  SpaceVertical,
  Space,
  IconButton,
  ButtonGroup,
  ButtonItem,
  Button,
  FieldCheckbox,
  FieldRangeSlider,
  Field,
  ChipButton,
  Card,
  Grid,
  CardContent,
} from '@looker/components'
import { FauxPieChart, FauxBarChart } from './Charts'

export const FauxDashboard = () => (
  <Box bg="background">
    <SpaceVertical p="xlarge" gap="xlarge">
      <Space between>
        <Heading fontSize="xxxlarge">Title</Heading>
        <Space width="auto" gap="small">
          <IconButton size="medium" label="Refresh" icon="Refresh" />
          <IconButton size="medium" label="Options" icon="DotsVert" />
        </Space>
      </Space>
      <Space>
        <Field id="daterange" label="Date Range">
          <ChipButton>Today - Next Friday</ChipButton>
        </Field>
        <FieldRangeSlider label="Range Slider" />
        <Field id="checkbox" label="Checkbox">
          <FieldCheckbox label="Item" checked />
        </Field>
        <Field id="buttongroup" label="Button Group">
          <ButtonGroup value={['Item 1']}>
            <ButtonItem checked>Item 1</ButtonItem>
            <ButtonItem>Item 2</ButtonItem>
          </ButtonGroup>
        </Field>
        <Field id="button" label="button">
          <Button>Button</Button>
        </Field>
      </Space>

      <SpaceVertical align="center" gap="xxsmall">
        <Heading as="h2">Some title here</Heading>
        <Heading as="h3" color="secondary">
          Some less important information
        </Heading>
      </SpaceVertical>

      <Grid height="18rem">
        <Card raised>
          <FauxPieChart />
        </Card>
        <Card raised>
          <CardContent height="100%">
            <FauxBarChart />
          </CardContent>
        </Card>
      </Grid>
    </SpaceVertical>
  </Box>
)
