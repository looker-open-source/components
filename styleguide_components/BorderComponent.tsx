import * as React from 'react'
import {
  charcoal000,
  charcoal100,
  charcoal200,
  charcoal300,
  charcoal400,
  charcoal500,
  charcoal600,
  charcoal700,
  charcoal800
} from '../src/styles/colors'
import { Heading, HeadingWeights } from '../src/components/Heading/Heading'
import { Text } from '../src/components/Text/Text'
import { RampSizes } from '../src/styles/ramp_sizes'

const renderBorder = (border: BorderType, index: number) => {
  const labels = [
    ['Theme Name', border.themeName],
    ['Lens Color', border.name],
    ['Hex Value', border.hex]
  ]

  return (
    <div key={index}>
      <Heading size={RampSizes.Six} weight={HeadingWeights.Bold}>
        {border.label}
      </Heading>
      <div className="border-examples">
        {border.examples.map((example, idx) => (
          <div
            className="border-example"
            style={{ borderColor: border.hex, background: example.bgColor }}
            key={`border-${idx}`}
          >
            <div className={border.textClass}>
              <Text size="6" weight="semi-bold">
                On {example.name}
              </Text>
            </div>
            <div
              className="border-divider-example"
              style={{ background: border.hex }}
            >
              {' '}
            </div>
          </div>
        ))}
      </div>
      <div className="border-labels">
        {labels.map((label, idx) => (
          <div className="border-label-group" key={`label-${idx}`}>
            <Text mode="subdued" size="5" weight="semi-bold">
              {label[0]}
            </Text>
            <Text size="5" element="code">
              {label[1]}
            </Text>
          </div>
        ))}
      </div>
    </div>
  )
}

export interface BorderExample {
  name: string
  bgColor: string
}

export interface BorderType {
  hex: string
  label: string
  name: string
  themeName: string
  textClass?: string
  examples: BorderExample[]
}

export class BorderRender extends React.Component<
  {},
  { borders: BorderType[] }
> {
  constructor(props: object) {
    super(props)
    this.state = {
      borders: [
        {
          examples: [
            { name: 'White', bgColor: '#ffffff' },
            { name: 'Charcoal000', bgColor: charcoal000 },
            { name: 'Charcoal100', bgColor: charcoal100 }
          ],
          hex: charcoal300,
          label: 'Default Border',
          name: 'charcoal300',
          themeName: 'borderColor'
        },
        {
          examples: [
            { name: 'White', bgColor: '#ffffff' },
            { name: 'Charcoal000', bgColor: charcoal000 },
            { name: 'Charcoal100', bgColor: charcoal100 },
            { name: 'Charcoal200', bgColor: charcoal200 }
          ],
          hex: charcoal400,
          label: 'Dark Border',
          name: 'charcoal400',
          themeName: 'borderColorDark'
        },
        {
          examples: [
            { name: 'White', bgColor: '#ffffff' },
            { name: 'Charcoal000', bgColor: charcoal000 },
            { name: 'Charcoal100', bgColor: charcoal100 }
          ],
          hex: charcoal200,
          label: 'Light Border',
          name: 'charcoal200',
          themeName: 'borderColorLight'
        },
        {
          examples: [
            { name: 'Charcoal800', bgColor: charcoal800 },
            { name: 'Charcoal700', bgColor: charcoal700 },
            { name: 'Charcoal600', bgColor: charcoal600 }
          ],
          hex: charcoal500,
          label: 'Border on Dark',
          name: 'charcoal500',
          textClass: 'border-on-dark-text',
          themeName: 'borderColorOnDark'
        }
      ]
    }
  }

  public render() {
    return (
      <div>
        {this.state.borders.map((border, index) => renderBorder(border, index))}
      </div>
    )
  }
}
