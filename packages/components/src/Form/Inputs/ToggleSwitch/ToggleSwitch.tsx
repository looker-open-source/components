import { rem, rgba } from 'polished'
import React, { forwardRef, Ref } from 'react'
import styled from 'styled-components'
import {
  CustomizableAttributes,
  palette,
  PseudoProps,
  pseudoClasses,
  reset,
  space,
  SpaceProps,
} from 'looker-design-tokens'
import { InputProps } from '../InputProps'

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

export interface KnobProps {
  className?: string
  size: number
  disabled?: boolean
  on?: boolean
}

export interface ToggleSwitchProps
  extends SpaceProps,
    Omit<InputProps, 'type'>,
    Omit<KnobProps, 'size'> {
  size?: number
}

const Knob = styled.div<KnobProps>`
  transform: ${props =>
    props.on ? `translateX(${rem(props.size * 0.75)})` : ''};
  transition: ${props => props.theme.transitions.durationModerate};
  position: absolute;
  bottom: ${props => rem(props.size * 0.1)};
  left: ${props => rem(props.size * 0.1)};
  width: ${props => rem(props.size * 0.8)};
  height: ${props => rem(props.size * 0.8)};
  border-radius: 50%;
  background: ${props =>
    props.on
      ? CustomizableToggleSwitchAttributes.knobOnColor
      : CustomizableToggleSwitchAttributes.knobOffColor};
`

const KnobContainer = forwardRef(
  ({ className, ...props }: KnobProps, ref: Ref<HTMLDivElement>) => {
    const hoverStyle = props.disabled
      ? undefined
      : { boxShadow: `0 0 .01rem 0.01rem ${rgba(palette.primary500, 0.5)}` }
    return (
      <KnobContainerBase
        className={className}
        hoverStyle={hoverStyle}
        size={props.size}
        on={props.on}
        ref={ref}
      >
        <Knob {...props} />
      </KnobContainerBase>
    )
  }
)

const KnobContainerBase = styled.div<KnobProps & PseudoProps>`
  ${reset}
  ${pseudoClasses}

  transition: ${props => props.theme.transitions.durationModerate};
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  border-radius: ${props => rem(props.size)};
  background: ${props =>
    props.on
      ? CustomizableToggleSwitchAttributes.onColor
      : CustomizableToggleSwitchAttributes.offColor};
`

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`

const DisabledKnob = styled.div<{ size: number }>`
  ${reset}
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 0.4;
  background: ${props => props.theme.colors.palette.charcoal300};
  border-radius: ${props => rem(props.size)};
`

export const ToggleSwitchComponent = forwardRef(
  (
    { className, disabled, on, size = 20, ...props }: ToggleSwitchProps,
    ref: Ref<HTMLInputElement>
  ) => {
    return (
      <div className={className}>
        <HiddenCheckbox
          checked={on}
          disabled={disabled}
          role="switch"
          aria-checked={on}
          ref={ref}
          {...props}
        />
        <KnobContainer size={size} on={on} disabled={disabled} />
        {disabled && <DisabledKnob size={size} />}
      </div>
    )
  }
)

ToggleSwitchComponent.displayName = 'ToggleSwitchComponent'

export const ToggleSwitch = styled(ToggleSwitchComponent)`
  ${reset}
  input {
    cursor: ${props => (!props.disabled ? 'pointer' : undefined)};
    &:focus + div {
      box-shadow: 0 0 0 0.2rem ${rgba(palette.primary500, 0.4)};
    }
  }
  width: ${props => rem((props.size || 20) * 1.75)};
  height: ${props => rem(props.size || 20)};
  display: inline-block;
  position: relative;
  vertical-align: middle;
  ${space}
`
