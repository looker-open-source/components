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

import { getLuminance, rgba, rgbToColorString } from 'polished'
import React, { Component, ReactNode } from 'react'
import styled from 'styled-components'
import { Grid, Text } from '@looker/components'

interface FigmaColor {
  name: string
  children: any[]
}

type WCAGContrastLevel = 'AAA' | 'AA' | 'fail'

interface SwatchProps {
  hexValue: string
  labelColor: string
  contrastLevel: WCAGContrastLevel
  group: string
  children?: ReactNode
}

interface FigmaSwatchProps extends SwatchProps {
  fill: string
  label: string
}

const figmaColorToRgba = (color: {
  r: number
  g: number
  b: number
  a: number
}) => {
  return rgba(
    Math.round(color.r * 255),
    Math.round(color.g * 255),
    Math.round(color.b * 255),
    Math.round(color.a * 1)
  )
}

const checkContrast = (color: FigmaColor) => {
  const groupName = color.name

  const swatchList: FigmaSwatchProps[] = color.children.map((swatch) => {
    // Extract text layer and get color
    const docLabel = swatch.children.find((obj: any) => obj.name === 'label')
    const labelColor = figmaColorToRgba(docLabel.fills[0].color)

    // Extract swatch layer and get fill color
    const docSwatch = swatch.children.find((obj: any) => obj.name === 'swatch')
    const swatchFill = docSwatch.fills[0].color
    const fill = figmaColorToRgba(swatchFill)

    // eslint-disable object-literal-sort-keys
    const hexValue = rgbToColorString({
      blue: Math.round(swatchFill.b * 255),
      green: Math.round(swatchFill.g * 255),
      red: Math.round(swatchFill.r * 255),
    })
    // eslint-enable object-literal-sort-keys

    const labelLuminance = getLuminance(labelColor)
    const fillLuminance = getLuminance(fill)
    const contrast =
      (Math.max(labelLuminance, fillLuminance) + 0.05) /
      (Math.min(labelLuminance, fillLuminance) + 0.05)

    const contrastLevel: WCAGContrastLevel =
      contrast >= 4.5 ? 'AAA' : contrast >= 3 ? 'AA' : 'fail'

    return {
      contrastLevel,
      fill,
      group: groupName,
      hexValue,
      label: swatch.name,
      labelColor,
    }
  })

  return swatchList
}

const renderSwatch = (swatchList: FigmaSwatchProps[]) => {
  const color = swatchList[0].group
  const fillColor = swatchList[5].fill

  return (
    <SwatchHolder key={swatchList[0].group}>
      <SwatchHeader color="white" style={{ background: fillColor }}>
        <Text fontSize="large">{color}</Text> <Text fontSize="medium">500</Text>
      </SwatchHeader>
      {swatchList.map((swatch, index) => (
        <Swatch
          key={index}
          contrastLevel={swatch.contrastLevel}
          labelColor={swatch.labelColor}
          hexValue={swatch.hexValue}
          group={swatch.group}
        >
          {swatch.label}
        </Swatch>
      ))}
    </SwatchHolder>
  )
}

const Swatch = ({
  children,
  labelColor,
  hexValue,
  contrastLevel,
}: SwatchProps) => (
  <SwatchItem style={{ background: hexValue }}>
    <Text fontWeight="semiBold" mr="auto" style={{ color: labelColor }}>
      {children}
    </Text>
    <Text
      fontWeight="semiBold"
      ml="auto"
      mr="medium"
      style={{ color: labelColor }}
    >
      {hexValue}
    </Text>
    <ContrastBox>{contrastLevel}</ContrastBox>
  </SwatchItem>
)

export interface ColorPaletteProps {
  file: string
  page: string
  frame: string
  accessToken: string
}

export interface ColorPaletteState {
  swatches: any[]
}

export class ColorPalette extends Component<
  ColorPaletteProps,
  ColorPaletteState
> {
  constructor(props: ColorPaletteProps) {
    super(props)
    this.state = { swatches: [] }
  }

  public async componentDidMount() {
    await this.loadFile(this.props.file)
  }

  public render() {
    const swatches = this.state.swatches.map((swatchList) =>
      renderSwatch(swatchList)
    )

    return <Grid gap="xxlarge">{swatches}</Grid>
  }

  private async apiRequest(endpoint: string) {
    const response = await fetch(`https://api.figma.com/v1${endpoint}`, {
      headers: { 'x-figma-token': this.props.accessToken },
      method: 'GET',
    })

    try {
      return response.json()
    } catch (error) {
      return Promise.resolve({ err: error })
    }
  }

  private getComponentPage(obj: any, pageName: string) {
    return obj.find((page: { name: string }) => page.name === pageName)
  }

  private async loadFile(file: string) {
    const response = await this.apiRequest(`/files/${file}`)

    const page = this.getComponentPage(
      response.document.children,
      this.props.page
    )

    const pageSwatches = this.getComponentPage(page.children, this.props.frame)
    const swatches = pageSwatches.children.map((palette: any) =>
      checkContrast(palette)
    )

    this.setState({
      swatches,
    })
  }
}

const SwatchHolder = styled.div`
  border-radius: 6px;
  overflow: hidden;
`

const SwatchHeader = styled.div`
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  padding: 1.5rem 1rem;
`

const SwatchItem = styled.div`
  align-items: center;
  display: flex;
  height: 50px;
  justify-content: space-between;
  padding: 4px 12px;
`

const ContrastBox = styled.div`
  background: rgba(255, 255, 255, 0.45);
  border-radius: 10px;
  font-size: 10px;
  padding: 2px 8px;
`
