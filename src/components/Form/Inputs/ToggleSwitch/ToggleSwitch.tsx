import { rem, rgba } from 'polished'
import * as React from 'react'
import { css, palette, styled } from '../../../../style'
import { Omit, ThemedProps } from '../../../../types'
import { CustomizableAttributes } from '../../../../types/attributes'
import { Box, BoxProps } from '../../../Box'
import { Label } from '../../Label'
import { Checkbox } from '../Checkbox'

interface KnobProps {
  className?: string
  size: number
  disabled?: boolean
  on?: boolean
}

export interface ToggleSwitchProps
  extends BoxProps<HTMLLabelElement>,
    Omit<KnobProps, 'size'> {
  size?: number
  ariaLabelledBy?: string
}

const knobTransform = (props: ThemedProps<KnobProps>) => {
  const transform = props.on ? `translateX(${rem(props.size * 0.75)})` : ''
  return css`
    transform: ${transform};
    transition: ${props.theme.transitions.durationModerate};
  `
}

const KnobFactory: React.SFC<KnobProps> = ({ className, ...props }) => (
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

const Knob = styled(KnobFactory)`
  ${knobTransform};
`

const KnobContainerFactory: React.SFC<KnobProps> = ({
  className,
  ...props
}) => {
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

const KnobContainer = styled(KnobContainerFactory)`
  transition: ${props => props.theme.transitions.durationModerate};
`

const InternalToggleSwitch: React.SFC<ToggleSwitchProps> = ({
  ariaLabelledBy,
  size = 20,
  disabled,
  on,
  ...props
}) => {
  return (
    <Label
      width={rem(size * 1.75)}
      height={rem(size)}
      display="inline-block"
      position="relative"
      cursor={!disabled ? 'pointer' : undefined}
      {...props}
    >
      <Checkbox
        name={props.name}
        value={props.value}
        checked={on}
        disabled={disabled}
        opacity={0}
        width="0px"
        height="0px"
        role="switch"
        aria-labelledby={ariaLabelledBy}
        aria-checked={on}
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
    </Label>
  )
}

export const ToggleSwitch = styled(InternalToggleSwitch)`
  :focus-within {
    border-radius: ${props => rem(props.size ? props.size : 20)};
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
