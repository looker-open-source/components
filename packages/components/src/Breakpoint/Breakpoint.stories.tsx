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
import type { FC } from 'react'
import React from 'react'
import { Home } from '@styled-icons/material-outlined/Home'
import type { Story } from '@storybook/react/types-6-0'
import type {
  SpaceProps,
  BackgroundColorProps,
  TextColorProps,
} from '@looker/design-tokens'
import { space, backgroundColor, textColor } from '@looker/design-tokens'
import { Menu } from '@styled-icons/material/Menu'
import styled from 'styled-components'
import { VIEWPORT_MAP } from '../utils-storybook'
import { Card, CardContent, CardMedia } from '../Card'
import { Heading, Paragraph, Span } from '../Text'
import { Grid, Box2 } from '../Layout'
import { IconButton } from '../Button'
import { InputSearch } from '../Form'
import { defaultArgTypes as argTypes } from '../../../../apps/storybook/src/defaultArgTypes'
import type { BreakpointProps } from './Breakpoint'
import { Breakpoint } from './Breakpoint'

export default {
  argTypes,
  component: Breakpoint,
  title: 'Breakpoint',
}

interface NavHeaderProps
  extends SpaceProps,
    BackgroundColorProps,
    TextColorProps {}

const NavHeader = styled.div<NavHeaderProps>`
  ${space}
  ${backgroundColor}
  ${textColor}
`

const MobileHeaderGrid = styled.div`
  align-items: center;
  display: grid;
  grid-template-columns: 1fr auto;
`

const LargeHeaderGrid = styled.div`
  align-items: center;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: auto auto 1fr;
`

const Link = styled.a<TextColorProps>`
  ${textColor}
`

const NatureCard: FC<{ backgroundColor?: string }> = ({
  backgroundColor = 'ui1',
}) => (
  <Card raised>
    <CardMedia
      backgroundColor={backgroundColor}
      image="#"
      title="A Scenic Valley"
    />
    <CardContent>
      <Span
        fontSize="xsmall"
        textTransform="uppercase"
        fontWeight="semiBold"
        color="text1"
      >
        Explore
      </Span>
      <Heading as="h4" fontSize="medium" fontWeight="semiBold" truncate>
        Best Scenic Hikes
      </Heading>
      <Paragraph fontSize="small">
        Looking for a new place to trailblaze? Make sure it has a great view!
      </Paragraph>
    </CardContent>
  </Card>
)

const Template: Story<BreakpointProps> = () => {
  return (
    <>
      <Breakpoint show="mobile">
        <NavHeader backgroundColor="ui1" p="u3">
          <MobileHeaderGrid>
            <Box2 color="key">
              <Home size="1.5rem" title="Home" />
            </Box2>
            <IconButton icon={<Menu />} label="navigation" />
          </MobileHeaderGrid>
        </NavHeader>
        <Grid p="u3" columns={1}>
          <NatureCard backgroundColor="criticalFocus" />
          <NatureCard backgroundColor="keyFocus" />
          <NatureCard backgroundColor="text2" />
          <NatureCard backgroundColor="inform" />
        </Grid>
      </Breakpoint>

      <Breakpoint show={['tablet', undefined]}>
        <NavHeader backgroundColor="inverse" p="u4">
          <LargeHeaderGrid>
            <Box2 color="text1">My logo here!</Box2>
            <nav>
              <Grid columns={4}>
                <Link href="#" color="text1">
                  Product
                </Link>
                <Link href="#" color="text1">
                  Platform
                </Link>
                <Link href="#" color="text1">
                  Solutions
                </Link>
                <Link href="#" color="text1">
                  Learn
                </Link>
              </Grid>
            </nav>
            <InputSearch placeholder="Search" />
          </LargeHeaderGrid>
        </NavHeader>
        <Box2 p="u4">
          <Breakpoint show={['tablet', 'laptop']}>
            <Grid columns={2}>
              <NatureCard backgroundColor="criticalFocus" />
              <NatureCard backgroundColor="keyFocus" />
              <NatureCard backgroundColor="text2" />
              <NatureCard backgroundColor="inform" />
            </Grid>
          </Breakpoint>
          <Breakpoint show={['desktop', undefined]}>
            <Grid columns={2}>
              <NatureCard backgroundColor="criticalFocus" />
              <Grid columns={2}>
                <NatureCard backgroundColor="keyFocus" />
                <NatureCard backgroundColor="text2" />
                <NatureCard backgroundColor="inform" />
                <NatureCard backgroundColor="warn" />
              </Grid>
            </Grid>
          </Breakpoint>
        </Box2>
      </Breakpoint>
    </>
  )
}

export const MobileUI = Template.bind({})

MobileUI.parameters = {
  viewport: {
    defaultViewport: 'mobile',
    viewports: VIEWPORT_MAP,
  },
}

export const TabletUI = Template.bind({})

TabletUI.parameters = {
  viewport: {
    defaultViewport: 'tablet',
    viewports: VIEWPORT_MAP,
  },
}

export const DesktopUI = Template.bind({})

DesktopUI.parameters = {
  viewport: {
    defaultViewport: 'desktop',
    viewports: VIEWPORT_MAP,
  },
}
