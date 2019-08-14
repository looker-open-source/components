import * as React from 'react'
import { radii } from '../../../style/radii'
import { Flex } from '../../Flex'
import { FlexItem } from '../../FlexItem'
import {
  CustomizableInputTextAttributes,
  Field,
  FieldProps,
  FormControl,
  InputText,
  InputTextProps,
  withForm,
} from '../../Form'
import { RichTooltip, RichTooltipContent } from '../../Tooltip'
import {
  HueSaturation,
  polarbrightness2hsv,
  SimpleHSV,
  white,
} from '../ColorWheel/color_wheel_utils'
import { ColorWheel } from '../ColorWheel/ColorWheel'
import { LuminositySlider } from '../LuminositySlider/LuminositySlider'
import { Swatch } from '../Swatch/Swatch'
import * as ColorFormatUtils from '../utils/color_format_utils'
import { isValidColor } from '../utils/color_utils'

interface ColorFieldPickerProps extends FieldProps, InputTextProps {
  /**
   * Size, in pixels, of the canvas.
   */
  cwSize?: number
  /**
   * If true, hides input and only show color swatch.
   */
  hideInput?: boolean
  /**
   * Displays the color picker as visible on first render
   */
  open?: boolean
}

interface ColorFieldPickerState {
  color?: SimpleHSV
  colorFormat?: string
  /**
   * Keeps track of whether the internal color state was last set by the colorwheel or field text.
   */
  lastChangeByCW?: boolean
}

const createEventWithHSVValue = (
  color: SimpleHSV,
  colorFormat?: string
): React.ChangeEvent<HTMLInputElement> => {
  return {
    currentTarget: {
      value: ColorFormatUtils.simpleHSVtoFormattedColorString(
        color,
        colorFormat
      ),
    },
    target: {
      value: ColorFormatUtils.simpleHSVtoFormattedColorString(
        color,
        colorFormat
      ),
    },
  } as React.ChangeEvent<HTMLInputElement>
}

class InternalColorFieldPicker extends React.Component<
  ColorFieldPickerProps,
  ColorFieldPickerState
> {
  constructor(props: ColorFieldPickerProps) {
    super(props)
    this.state = {}
  }

  public render() {
    const {
      alignLabel,
      alignValidationMessage,
      hideInput,
      label,
      validationMessage,
      cwSize = 164,
      open,
      ...inputTextProps
    } = this.props
    const hsvColor = this.getHSVColor()
    let borderRadius
    if (
      typeof CustomizableInputTextAttributes.borderRadius === 'string' &&
      radii[CustomizableInputTextAttributes.borderRadius]
    ) {
      borderRadius = radii[CustomizableInputTextAttributes.borderRadius]
    } else {
      borderRadius = CustomizableInputTextAttributes.borderRadius
    }
    const swatchBorderRadius = `${borderRadius} 0 0 ${borderRadius}`
    const inputTextBorderRadius = `0 ${borderRadius} ${borderRadius} 0`

    const content = (
      <RichTooltipContent>
        <Flex flexDirection="column">
          <ColorWheel
            size={cwSize}
            hue={hsvColor.h}
            saturation={hsvColor.s}
            value={hsvColor.v}
            onColorChange={this.proxyHandleColorStateChange.bind(
              this,
              hsvColor
            )}
          />
          <LuminositySlider
            min={0}
            max={100}
            step={1}
            value={hsvColor.v * 100}
            width={cwSize}
            onChange={this.proxyHandleSliderChange.bind(this, hsvColor)}
          />
        </Flex>
      </RichTooltipContent>
    )

    return (
      <Field
        {...this.props}
        alignValidationMessage={
          alignValidationMessage ? alignValidationMessage : 'bottom'
        }
      >
        <FormControl alignLabel="left">
          <FlexItem mt="auto">
            <RichTooltip content={content}>
              {(eventHandlers, ref) => (
                <Swatch
                  innerRef={ref}
                  color={ColorFormatUtils.hsv2hex(hsvColor)}
                  borderRadius={swatchBorderRadius}
                  borderRight={0}
                  width="33px"
                  height="28px"
                  {...eventHandlers}
                />
              )}
            </RichTooltip>
          </FlexItem>
          <FlexItem>
            <InputText
              type={hideInput ? 'hidden' : 'text'}
              {...inputTextProps}
              validationType={validationMessage && validationMessage.type}
              onChange={this.handleInputTextChange}
              borderRadius={inputTextBorderRadius}
            />
          </FlexItem>
        </FormControl>
      </Field>
    )
  }

  private handleColorStateChange = (
    hs: HueSaturation,
    hsvColor: SimpleHSV,
    onChange?: React.ChangeEventHandler<HTMLInputElement>
  ) => {
    const color = {
      ...hs,
      v: hsvColor.v,
    }
    this.callOnChange(color, onChange)
  }

  private handleSliderChange = (
    event: React.FormEvent<HTMLInputElement>,
    hsvColor: SimpleHSV,
    onChange?: React.ChangeEventHandler<HTMLInputElement>
  ) => {
    const color = {
      ...hsvColor,
      v: Number(event.currentTarget.value) / 100,
    }
    this.callOnChange(color, onChange)
  }

  private proxyHandleColorStateChange = (
    hsvColor: SimpleHSV,
    hs: HueSaturation
  ) => {
    this.setState({ lastChangeByCW: true })
    this.handleColorStateChange(hs, hsvColor, this.props.onChange)
  }

  private proxyHandleSliderChange = (
    hsvColor: SimpleHSV,
    event: React.FormEvent<HTMLInputElement>
  ) => {
    this.setState({ lastChangeByCW: true })
    this.handleSliderChange(event, hsvColor, this.props.onChange)
  }

  private handleInputTextChange = (
    event: React.FormEvent<HTMLInputElement>
  ) => {
    if (this.props.value && isValidColor(this.props.value)) {
      this.setState({
        color: ColorFormatUtils.str2simpleHsv(this.props.value),
        colorFormat: ColorFormatUtils.getFormat(this.props.value),
      })
    }
    if (this.props.onChange) {
      this.props.onChange(event)
      this.setState({ lastChangeByCW: false })
    }
  }

  private getHSVColor = () => {
    if (this.state.color && this.state.lastChangeByCW) {
      return this.state.color
    } else if (this.props.value && isValidColor(this.props.value)) {
      return ColorFormatUtils.str2simpleHsv(this.props.value)
    }
    return polarbrightness2hsv(white())
  }

  private callOnChange = (
    color: SimpleHSV,
    onChange?: React.ChangeEventHandler<HTMLInputElement>
  ) => {
    const colorFormat =
      this.props.value &&
      isValidColor(this.props.value) &&
      !this.state.lastChangeByCW
        ? ColorFormatUtils.getFormat(this.props.value)
        : this.state.colorFormat

    this.setState({ color, colorFormat })

    if (onChange) {
      const event = createEventWithHSVValue(color, colorFormat)
      onChange(event)
    }
  }
}

export const ColorFieldPicker = withForm(InternalColorFieldPicker)
