import React, {
  ChangeEvent,
  forwardRef,
  ForwardRefExoticComponent,
  Ref,
} from 'react'
import {
  CompatibleHTMLProps,
  BorderProps,
  PositionProps,
  SpaceProps,
} from 'looker-design-tokens'
import { Box } from '../Layout'
import { ButtonItemProps } from './ButtonItem'

export interface ButtonGroupOrToggleProps<
  ValueType extends string | string[] = string[]
>
  extends PositionProps,
    BorderProps,
    SpaceProps,
    Omit<CompatibleHTMLProps<HTMLDivElement>, 'value' | 'onChange'> {
  /**
   * Internal use only
   */
  isControlled?: boolean
  /**
   * One or more ButtonItem
   */
  children: React.ReactNode
  /**
   * Value for controlling the component
   */
  value?: ValueType
  /**
   * Change callback for controlling the component
   */
  onChange?: (value: ValueType) => void
}

interface ButtonSetProps<ValueType extends string | string[] = string[]>
  extends Omit<ButtonGroupOrToggleProps<ValueType>, 'onChange'> {
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  isToggle?: boolean
}

export type ButtonSetType<
  T extends string | string[] = string[]
> = ForwardRefExoticComponent<ButtonSetProps<T> & { ref: Ref<HTMLDivElement> }>

export const ButtonSet = forwardRef(
  (
    {
      children,
      disabled,
      isToggle,
      name,
      onChange: groupOnChange,
      value,
      ...props
    }: ButtonSetProps,
    ref: Ref<HTMLDivElement>
  ) => {
    const clonedChildren = React.Children.map(children, child => {
      if (!React.isValidElement(child)) return child

      const { props: childProps } = child
      const childValue =
        childProps.value ||
        (typeof childProps.children === 'string' ? childProps.children : null)

      return React.cloneElement<ButtonItemProps>(child, {
        isControlled: groupOnChange !== undefined,
        name,
        type: isToggle ? 'radio' : 'checkbox',
        value: childValue,
        // pass down these optional props only if they're defined (overriding child props)
        ...(value && value.length !== 0
          ? {
              selected: isToggle
                ? value === childValue
                : value.indexOf(childValue) > -1,
            }
          : { selected: childProps.selected }),
        ...(disabled ? { disabled } : {}),
        ...(groupOnChange
          ? {
              onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
                groupOnChange && groupOnChange(e)
                childProps.onChange && childProps.onChange(e)
              },
            }
          : {}),
      })
    })

    return (
      <Box
        alignItems="center"
        display="inline-flex"
        textAlign="center"
        fontSize="small"
        ref={ref}
        {...props}
      >
        {clonedChildren}
      </Box>
    )
  }
)

ButtonSet.displayName = 'ButtonSet'
