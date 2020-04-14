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

import { Box, Divider, Grid, Heading, SpaceVertical } from '@looker/components'
import React from 'react'

const Placeholder = (props) => (
  <Box
    color="white"
    bg="palette.purple500"
    justifyContent="center"
    alignItems="center"
    height="100%"
    width="100%"
    display="flex"
    {...props}
  />
)

export const GridExamples = () => (
  <SpaceVertical>
    <Heading>Two Column (default)</Heading>
    <Grid>
      <Placeholder minHeight="5rem">A</Placeholder>
      <Placeholder>B</Placeholder>
      <Placeholder>C</Placeholder>
      <Placeholder>D</Placeholder>
    </Grid>

    <Divider />

    <Heading>Four Column (xsmall gap)</Heading>
    <Grid columns={4} gap="xsmall">
      <Placeholder minHeight="5rem">A</Placeholder>
      <Placeholder>B</Placeholder>
      <Placeholder>C</Placeholder>
      <Placeholder>D</Placeholder>
    </Grid>

    <Divider />

    <Heading>1 Column (xxlarge gap)</Heading>
    <Grid columns={1} gap="xxlarge">
      <Placeholder minHeight="5rem">A</Placeholder>
      <Placeholder>B</Placeholder>
      <Placeholder>C</Placeholder>
      <Placeholder>D</Placeholder>
    </Grid>
  </SpaceVertical>
)
