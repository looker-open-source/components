import { getLuminance, rgba, rgbToColorString } from 'polished'
import React from 'react'
import { Text } from '@looker/components'
import {
  SwatchGrid,
  SwatchHolder,
  SwatchHeader,
  SwatchItem,
  ContrastBox,
} from './ColorPalette.styles'

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
  children?: React.ReactNode
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

  const swatchList: FigmaSwatchProps[] = color.children.map(swatch => {
    // Extract text layer and get color
    const docLabel = swatch.children.find((obj: any) => obj.name === 'label')
    const labelColor = figmaColorToRgba(docLabel.fills[0].color)

    // Extract swatch layer and get fill color
    const docSwatch = swatch.children.find((obj: any) => obj.name === 'swatch')
    const swatchFill = docSwatch.fills[0].color
    const fill = figmaColorToRgba(swatchFill)

    // eslint-disable object-literal-sort-keys
    const hexValue = rgbToColorString({
      red: Math.round(swatchFill.r * 255),
      green: Math.round(swatchFill.g * 255),
      blue: Math.round(swatchFill.b * 255),
    })
    // eslint-enable object-literal-sort-keys

    const labelLuminance = getLuminance(labelColor)
    const fillLuminance = getLuminance(fill)
    const constrast =
      (Math.max(labelLuminance, fillLuminance) + 0.05) /
      (Math.min(labelLuminance, fillLuminance) + 0.05)

    const contrastLevel: WCAGContrastLevel =
      constrast >= 4.5 ? 'AAA' : constrast >= 3 ? 'AA' : 'fail'

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
      <SwatchHeader
        style={{ background: fillColor, color: '#fff', fontWeight: 600 }}
      >
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
    <Text
      fontWeight="semiBold"
      style={{ color: labelColor, marginRight: 'auto' }}
    >
      {children}
    </Text>
    <Text
      fontWeight="semiBold"
      style={{ color: labelColor, marginLeft: 'auto', marginRight: '1rem' }}
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

export class ColorPalette extends React.Component<
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
    const swatches = this.state.swatches.map(swatchList =>
      renderSwatch(swatchList)
    )

    return <SwatchGrid>{swatches}</SwatchGrid>
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
