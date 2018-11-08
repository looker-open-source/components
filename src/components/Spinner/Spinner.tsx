import * as React from 'react'
import { keyframes, styled } from '../../style'
import { Box, BoxPropsWithout } from '../Box'
import { SpinnerMarker } from './SpinnerMarker'

export interface SpinnerProps
  extends BoxPropsWithout<HTMLDivElement, 'color' | 'size'> {
  markers?: number
  speed?: number
  size?: number
  color?: string
}

class InternalSpinner extends React.Component<SpinnerProps> {
  public static defaultProps: SpinnerProps = {
    color: '#000',
    markers: 13,
    size: 20,
    speed: 1000,
  }

  constructor(props: SpinnerProps) {
    super(props)
  }

  public render() {
    return (
      <Box
        width={this.props.size}
        height={this.props.size}
        position="relative"
        {...this.props}
      >
        {this.generateMArkers()}
      </Box>
    )
  }

  private generateMArkers = () => {
    const markers = []
    const angle = 360 / this.props.markers!
    let rotate = 0
    const delayInterval = this.props.speed! / 1000 / this.props.markers!

    for (let i = 0; i < this.props.markers!; i++) {
      markers.push(
        <SpinnerMarker
          color={this.props.color}
          radius={3}
          key={i}
          rotateAngle={rotate}
          circleSize={this.props.size!}
          speed={this.props.speed!}
          delay={delayInterval * i}
        />
      )

      rotate = rotate + angle
    }

    return markers
  }
}

const fade = keyframes`
  from {opacity: 1;}
  to {opacity: 0.25;}
`

export const Spinner = styled<SpinnerProps>(InternalSpinner)`
  ${SpinnerMarker} {
    animation-name: ${fade};
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }
`
