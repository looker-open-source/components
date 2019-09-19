import { rem, rgba } from 'polished'
import React, { FunctionComponent } from 'react'
import styled, { css, StyledComponent } from 'styled-components'
import {
  CustomizableAttributes,
  palette,
  ThemedProps,
} from '@looker/design-tokens'
import { Box, BoxProps } from '../../../Box'
import { Checkbox } from '../Checkbox'

export interface KnobProps {
  className?: string
  size: number
  disabled?: boolean
  on?: boolean
}

export interface ToggleSwitchProps
  extends Omit<BoxProps<HTMLInputElement>, 'as'>,
    Omit<KnobProps, 'size'> {
  size?: number
}

type KnobComponentType = FunctionComponent<KnobProps>
type StyledKnobComponentType = StyledComponent<KnobComponentType, KnobProps>

const knobTransform = (props: ThemedProps<KnobProps>) => {
  const transform = props.on ? `translateX(${rem(props.size * 0.75)})` : ''
  return css`
    transform: ${transform};
    transition: ${props.theme.transitions.durationModerate};
  `
}

const KnobFactory: React.FC<KnobProps> = ({ className, ...props }) => (
  <Box
    className={className}
    position="absolute"
    bottom={rem(props.size * 0.1)}
    left={rem(props.size * 0.1)}
    width={rem(props.size * 0.8)}
    height={rem(props.size * 0.8)}
    borderRadius="50%"
    bg={
      props.on
        ? CustomizableToggleSwitchAttributes.knobOnColor
        : CustomizableToggleSwitchAttributes.knobOffColor
    }
  />
)

const Knob: StyledKnobComponentType = styled<KnobComponentType>(KnobFactory)`
  ${knobTransform};
`

const KnobContainerFactory: KnobComponentType = ({ className, ...props }) => {
  const hoverStyle = props.disabled
    ? undefined
    : { boxShadow: `0 0 .01rem 0.01rem ${rgba(palette.primary500, 0.5)}` }
  return (
    <Box
      className={className}
      position="absolute"
      top="0"
      bottom="0"
      left="0"
      right="0"
      borderRadius={rem(props.size)}
      bg={
        props.on
          ? CustomizableToggleSwitchAttributes.onColor
          : CustomizableToggleSwitchAttributes.offColor
      }
      hoverStyle={hoverStyle}
    >
      <Knob {...props} />
    </Box>
  )
}

const KnobContainer: StyledKnobComponentType = styled<KnobComponentType>(
  KnobContainerFactory
)`
  transition: ${props => props.theme.transitions.durationModerate};
`

export type ToggleSwitchComponentType = FunctionComponent<ToggleSwitchProps>
export type StyledToggleSwitchComponentType = StyledComponent<
  ToggleSwitchComponentType,
  ToggleSwitchProps
>

const InternalToggleSwitch: ToggleSwitchComponentType = ({
  size = 20,
  disabled,
  on,
  ...props
}) => {
  return (
    <Box
      width={rem(size * 1.75)}
      height={rem(size)}
      display="inline-block"
      position="relative"
      verticalAlign="middle"
      cursor={!disabled ? 'pointer' : undefined}
    >
      <Checkbox
        checked={on}
        disabled={disabled}
        opacity={0}
        width="100%"
        height="100%"
        role="switch"
        aria-checked={on}
        position="absolute"
        top="0"
        left="0"
        zIndex={1}
        {...props}
      />
      <KnobContainer size={size} on={on} disabled={disabled} />
      {disabled && (
        <Box
          position="absolute"
          top="0"
          bottom="0"
          left="0"
          right="0"
          opacity={0.4}
          bg={palette.charcoal300}
          borderRadius={rem(size)}
        />
      )}
    </Box>
  )
}

/** @component */
export const ToggleSwitch: StyledToggleSwitchComponentType = styled<
  ToggleSwitchComponentType
>(InternalToggleSwitch)`
  :focus + ${Box} {
    box-shadow: 0 0 0 0.2rem ${rgba(palette.primary500, 0.4)};
  }
`

export interface CustomizableToggleSwitchAttributes
  extends CustomizableAttributes {
  knobOnColor: string
  knobOffColor: string
  onColor: string
  offColor: string
}

export const CustomizableToggleSwitchAttributes: CustomizableToggleSwitchAttributes = {
  knobOffColor: palette.white,
  knobOnColor: palette.white,
  offColor: palette.charcoal300,
  onColor: palette.purple300,
}
