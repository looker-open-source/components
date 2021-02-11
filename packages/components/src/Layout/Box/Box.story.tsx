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

import { Story } from '@storybook/react/types-6-0'
import React from 'react'
import { VIEWPORT_MAP } from '../../utils-storybook'
import { Icon } from '../../Icon'
import { Box, BoxProps } from '.'

export default {
  component: Box,
  title: 'Box',
}

type BoxStoryProps = BoxProps & { children: JSX.Element }

const Template: Story<BoxStoryProps> = ({ children, ...args }) => (
  <>
    {/* Render two Boxes to validate inline-block rendering */}
    <Box {...args}>{children}</Box>
    <Box {...args}>{children}</Box>
  </>
)

const responsiveArgs: BoxStoryProps = {
  bg: 'ui1',
  border: '1px solid',
  borderColor: 'ui2',
  borderRadius: 'medium',
  children: (
    <>
      <Icon name="LogoRings" size="medium" /> Looker
    </>
  ),
  color: 'key',
  display: ['block', 'inline-block'],
  fontFamily: 'brand',
  fontSize: ['small', 'large'],
  fontWeight: 'bold',
  height: ['100px', '200px', '50vh'],
  letterSpacing: '10',
  lineHeight: ['small', 'large'],
  m: ['none', null, 'medium', 'xlarge'],
  maxHeight: '500px',
  maxWidth: '500px',
  textAlign: ['left', 'center', 'right'],
  width: ['100px', '200px', '50vw'],
}

export const MobileLayout = Template.bind({})
MobileLayout.args = { ...responsiveArgs }
MobileLayout.parameters = {
  viewport: {
    defaultViewport: 'mobile',
    viewports: VIEWPORT_MAP,
  },
}

export const TabletLayout = Template.bind({})
TabletLayout.args = { ...responsiveArgs }
TabletLayout.parameters = {
  viewport: {
    defaultViewport: 'tablet',
    viewports: VIEWPORT_MAP,
  },
}

export const DesktopLayout = Template.bind({})
DesktopLayout.args = { ...responsiveArgs }
DesktopLayout.parameters = {
  viewport: {
    defaultViewport: 'desktop',
    viewports: VIEWPORT_MAP,
  },
}

const absolutePositioned: BoxStoryProps = {
  alignContent: 'flex-end',
  alignItems: 'baseline',
  bg: 'key',
  children: <>A Box</>,
  color: 'text1',
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'wrap',
  height: '50px',
  justifyContent: 'center',
  position: 'absolute',
  width: '50vw',
}

export const Positioning: Story<BoxStoryProps> = () => (
  <>
    <Box {...absolutePositioned} top="1rem" left="1rem" />
    <Box bg="ui3" alignSelf="center" flexBasis="1" flex="1 1" order="unset">
      Top box
    </Box>
    <Box {...absolutePositioned} bottom="1rem" right="1rem" />
  </>
)

Positioning.parameters = {
  viewport: {
    defaultViewport: 'mobile',
    viewports: VIEWPORT_MAP,
  },
}
