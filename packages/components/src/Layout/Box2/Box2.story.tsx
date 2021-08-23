/*

 MIT License

 Copyright (c) 2021 Looker Data Sciences, Inc.

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

import type { Story } from '@storybook/react/types-6-0'
import { Home } from '@styled-icons/material-outlined/Home'
import React from 'react'
import { VIEWPORT_MAP } from '../../utils-storybook'
import { Icon } from '../../Icon'
import type { Box2Props } from './Box2'
import { Box2 } from './Box2'

export default {
  component: Box2,
  title: 'Box2',
}

type Box2StoryProps = Box2Props & { children: JSX.Element }

const Template: Story<Box2StoryProps> = ({ children, ...args }) => (
  <>
    {/* Render two Boxes to validate inline-block rendering */}
    <Box2 {...args}>{children}</Box2>
    <Box2 {...args}>{children}</Box2>
  </>
)

const responsiveArgs: Box2StoryProps = {
  border: true,
  borderRadius: 'medium',
  children: (
    <>
      <Icon display="inline-flex" icon={<Home />} size="medium" /> Looker
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

const absolutePositioned: Box2StoryProps = {
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

export const Positioning: Story<Box2StoryProps> = () => (
  <>
    <Box2 {...absolutePositioned} top="1rem" left="1rem" />
    <Box2
      bg="ui3"
      alignItems="center"
      justifyItems="center"
      justifyContent="center"
      flexBasis="1"
      display="flex"
      order="unset"
      height="100vh"
    >
      <Box2 textAlign="center">Background box</Box2>
    </Box2>
    <Box2 {...absolutePositioned} bottom="1rem" right="1rem" />
  </>
)

Positioning.parameters = {
  viewport: {
    defaultViewport: 'mobile',
    viewports: VIEWPORT_MAP,
  },
}
