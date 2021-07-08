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
import React from 'react'
import {
  Box,
  Code,
  Flex,
  Grid,
  Heading,
  Paragraph,
  Space,
  SpaceVertical,
  theme
} from '@looker/components'
import {coreColors, DerivativeColors, IntentColors } from '@looker/design-tokens'
import styled from 'styled-components'
import { chunk } from 'lodash'

const derivativeColorKeys: Array<keyof DerivativeColors> = [
  'field',
  'inverse',
  'inverseOn',
  'neutral',
  'linkInteractive',
  'informAccent',
  'positiveAccent',
  'warnAccent',
]

const intentColorKeys: Array<keyof IntentColors> = [
  'link',
  'critical',
  'warn',
  'positive',
  'inform',
  'calculation',
  'dimension',
  'measure',
]

const textColors = [
  'text1',
  'text2',
  'text3',
  'text4',
  'text5',
]

const uiColors = [
  'ui1',
  'ui2',
  'ui3',
  'ui4',
  'ui5',
]

const specializedTextColorKeys = [
  'title',
  'body'
]
const BlendSwatch = styled(Box)`
  border-left: solid 1px ${props => props.theme.colors.ui3};
  border-right: solid 1px ${props => props.theme.colors.ui3};
  height: 40px;
  width: 85px;
`

const BlendColorStyle = styled(Space)``

const BlendColor = ({color, ...props}) => {
  return (
  <BlendColorStyle {...props} width="auto" gap="small">
    <BlendSwatch bg={color[1]}></BlendSwatch>
    <Code fontSize="xxsmall">{color[0]}</Code>
  </BlendColorStyle>
  )
}

const BlendListStyle = styled(Flex)`
  ${BlendColorStyle}:first-of-type{
    ${BlendSwatch} {
      border-radius: 4px 4px 0 0;
      border-top: solid 1px ${props => props.theme.colors.ui3};
    }
  }

  ${BlendColorStyle}:last-of-type{
     ${BlendSwatch} {
      border-bottom: solid 1px ${props => props.theme.colors.ui3};
      border-radius: 0 0 4px 4px;
     }
  }
`

const BlendList = ({color, ...props}) => {
  return(
    <BlendListStyle  {...props} flexDirection="column">
        {color.map(c => {
          return <BlendColor color={c} key={c[0]} />
        })}
    </BlendListStyle >
  )
}

const ColorSwatch = ({color, ...props}) => {
  return (
  <SpaceVertical {...props} width="auto" gap="small">
    <Box
      width={120}
      height={65}
      bg={color[1]}
      border="solid 1px"
      borderColor="ui3"
      borderRadius="4px"
      />
    <Code fontSize="xsmall">{color[0]}</Code>
  </SpaceVertical>
  )
}

const ColorList = ({color, ...props}) => {
  return(
    <SwatchGrid {...props}>
        {color.map(c => {
          return <ColorSwatch color={c} key={c[0]} />
        })}
    </SwatchGrid>
  )
}

const ColorDescription = ({heading,...props}) => {
  return(
    <SpaceVertical {...props} gap="large">
      <Heading as="h2">{heading}</Heading>
      <Paragraph maxWidth="600px">{props.children}</Paragraph>
    </SpaceVertical>
  )
}

const SwatchBackground = styled.div`
  border-radius: 4px;
  padding: 32px 0;
`

const SwatchGrid = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`

export function ColorDocs() {
  const colorList = {
    core: [],
    intent: [],
    derivative: [],
    stateful: [],
    text: [],
    ui: [],
    specializedText: []
  }

  const colorBands = {
    core: coreColors.length,
    intent: coreColors.length + intentColorKeys.length,
    derivative: coreColors.length + intentColorKeys.length + derivativeColorKeys.length
  }

  for(const [key, value] of Object.entries(theme.colors)) {
    if(coreColors.includes(key)) {
      colorList.core.push([key, value])
    }
    else if (intentColorKeys.includes(key)) {
      colorList.intent.push([key, value])
    }
    else if (derivativeColorKeys.includes(key)) {
      colorList.derivative.push([key, value])
    }
    else if(textColors.includes(key)) {
      colorList.text.push([key, value])
    }
    else if(uiColors.includes(key)) {
      colorList.ui.push([key, value])
    }
    else if(specializedTextColorKeys.includes(key)) {
      colorList.specializedText.push([key, value])
    }
    else {
      colorList.stateful.push([key, value])
    }
  }

  colorList.stateful = chunk(colorList.stateful, 7)

    return(
      <div>
        <SpaceVertical gap="xlarge" pt="xxlarge">
          <ColorDescription heading="Core Colors">
            Core colors form the tonal  foundation of the Looker Components color palette.
          </ColorDescription>

          <SwatchBackground>
            <ColorList color={colorList.core} />
          </SwatchBackground>

          <ColorDescription heading="Intent Colors">
            Intent colors have a semantic meaning and are used to apply color to
            components that represent Looker specific ideas (dimension and measures)
            or components give the user additional context like a positive success
            message or indication of a critical destructive action.
          </ColorDescription>

          <SwatchBackground>
            <ColorList color={colorList.intent} />
          </SwatchBackground>

          <ColorDescription heading="Derivative Colors">
            Derivative colors are generated from core and intent colors. They represent
            special color usages, like inverse for tooltips above the background color,
            or informAccent for message bar background. Overriding the default theme
            core or intent colors can affect these colors.
          </ColorDescription>

          <SwatchBackground>
            <ColorList color={colorList.derivative} />
          </SwatchBackground>


          <ColorDescription heading="UI Colors">
            These colors  are generated by tinting or shading the core background color.
            These are neutral colors that are applied to components in various ways, like
            borders and backgrounds.
          </ColorDescription>

          <SwatchBackground>
            <ColorList color={colorList.ui} />
          </SwatchBackground>

          <ColorDescription heading="Text Colors">
            These colors are generated by blending the core background and text color. Their
            purpose is to give a variety of colors for text hierarchy.
          </ColorDescription>

          <SwatchBackground>
            <ColorList color={colorList.text} />
          </SwatchBackground>

          <ColorDescription heading="Stateful Colors">
            Stateful colors are generated based on the core and intent colors.
            Their purpose is to create a set of colors that can be applied to
            interactive elements, like buttons, lists, and options.
          </ColorDescription>

          <SwatchBackground>
            <Grid columns="4">
             {colorList.stateful.map((list, index) => {
              return <BlendList color={list} key={`list-${index}`} />
            })}
            </Grid>
          </SwatchBackground>
          </SpaceVertical>
      </div>
    )
}
