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

import { Property } from 'csstype'
import { Placement } from '@popperjs/core'
import React, {
  cloneElement,
  FC,
  isValidElement,
  useMemo,
  useState,
  ReactNode,
  Ref,
} from 'react'
import omit from 'lodash/omit'
import {
  useCallbackRef,
  useID,
  usePopper,
  UsePopperProps,
  useForkedRef,
} from '../utils'
import { OverlaySurface, SurfaceStyleProps } from '../Overlay/OverlaySurface'
import { Portal } from '../Portal'
import { TooltipContent } from './TooltipContent'

export interface UseTooltipProps {
  /**
   * Specify a callback to be called before trying to close the Tooltip. This allows for
   * use-cases where the user might lose work (think common "Save before closing warning" type flow)
   * Specify a callback to be called each time this Tooltip is closed
   */
  canClose?: () => boolean

  isOpen?: boolean
  /**
   * Can be one of: top, bottom, left, right, auto, with the modifiers: start,
   * end. This value comes directly from popperjs. See
   * https://popper.js.org/popper-documentation.html#Popper.placements for more
   * info.
   */
  placement?: Placement
  /**
   * Content to display inside the tooltip. Can be a string or JSX.
   */
  content?: ReactNode
  /**
   * Specify a fixed content width.
   * @default auto
   */
  width?: string
  /**
   * Specify the text alignment within tooltips.
   * @default center
   */
  textAlign?: Property.TextAlign

  /**
   * The id of the span containing the tooltip text (if absent, a random id will be generated)
   */
  id?: string

  /**
   * The trigger element ref to use (if absent, one will be created and returned)
   */
  triggerElement?: HTMLElement | null

  /**
   * If true, the useTooltip hook will return nothing
   */
  disabled?: boolean

  /**
   * Customizes the style of the tooltip
   */
  surfaceStyles?: SurfaceStyleProps
}

type TooltipRenderProp = (tooltipProps: {
  'aria-describedby': string
  className?: string
  onBlur: () => void
  onFocus: () => void
  onMouseOut: (event: React.MouseEvent<Element, MouseEvent>) => void
  onMouseOver: () => void
  ref: Ref<any>
}) => ReactNode

export interface TooltipProps extends UseTooltipProps {
  content: ReactNode
  /**
   * Component to wrap. The HOC will listen for mouse events on this component, maintain the
   * state of isOpen accordingly, and pass that state into the children or "trigger" element
   */
  children: ReactNode | TooltipRenderProp
}

export function useTooltip({
  canClose,
  content,
  isOpen: initializeOpen = false,
  width,
  textAlign,
  disabled,
  surfaceStyles,
  id,
  triggerElement,
  placement: propsPlacement = 'bottom',
}: UseTooltipProps) {
  const [isOpen, setIsOpen] = useState(initializeOpen)
  const [surfaceElement, surfaceCallbackRef] = useCallbackRef()
  const [newTriggerElement, callbackRef] = useCallbackRef()
  // If the triggerElement is passed in props, use that instead of the new element
  const element =
    typeof triggerElement === 'undefined' ? newTriggerElement : triggerElement

  const handleOpen = () => setIsOpen(true)
  const handleClose = () => {
    if (canClose && !canClose()) return
    setIsOpen(false)
  }

  const handleMouseOut = (event: React.MouseEvent) => {
    if (!isOpen) return

    const related = event.relatedTarget

    if (element && (element === related || element.contains(related as Node))) {
      return
    }

    if (
      surfaceElement &&
      (surfaceElement === related || surfaceElement.contains(related as Node))
    ) {
      return
    }

    window.requestAnimationFrame(() => {
      handleClose()
    })
  }

  const usePopperProps: UsePopperProps = useMemo(
    () => ({
      anchor: element,
      options: {
        modifiers: [
          {
            enabled: true,
            name: 'flip',
            options: {
              flipVariations: true,
            },
          },
        ],
        placement: propsPlacement,
      },
    }),
    [element, propsPlacement]
  )
  const { placement, popperInstanceRef, style, targetRef } = usePopper(
    usePopperProps
  )

  const ref = useForkedRef(targetRef, surfaceCallbackRef)

  const guaranteedId = useID(id)

  const popper =
    isOpen && content && !disabled ? (
      <Portal>
        <OverlaySurface
          eventHandlers={{ onMouseOut: handleMouseOut }}
          placement={placement}
          ref={ref}
          style={style}
          backgroundColor="inverse"
          borderRadius="medium"
          boxShadow={3}
          color="inverseOn"
          {...surfaceStyles}
        >
          <TooltipContent
            role="tooltip"
            id={guaranteedId}
            width={width}
            textAlign={textAlign}
          >
            {content}
          </TooltipContent>
        </OverlaySurface>
      </Portal>
    ) : null

  return {
    'aria-describedby': guaranteedId,
    isOpen,
    onBlur: handleClose,
    onFocus: handleOpen,
    onMouseOut: handleMouseOut,
    onMouseOver: handleOpen,
    popperInstanceRef,
    ref: callbackRef,
    tooltip: popper,
  }
}

function isRenderProp(
  children: ReactNode | TooltipRenderProp
): children is TooltipRenderProp {
  return typeof children === 'function'
}

export const Tooltip: FC<TooltipProps> = ({ children, ...props }) => {
  const tooltipProps = useTooltip(props)

  let target = children

  const tooltipPropsLabeled = {
    ...omit(tooltipProps, ['tooltip', 'popperInstanceRef', 'isOpen']),
  }

  if (isValidElement(children)) {
    target = cloneElement(children, {
      ...tooltipPropsLabeled,
      className: tooltipProps.isOpen
        ? `${children.props.className} hover`
        : children.props.className,
    })
  } else if (isRenderProp(children)) {
    target = children({
      ...tooltipPropsLabeled,
      className: tooltipProps.isOpen ? 'hover' : '',
    })
  } else {
    // eslint-disable-next-line no-console
    console.warn(
      `Element "${typeof target}" can't be used as target for Tooltip`
    )
  }

  return (
    <>
      {tooltipProps.tooltip}
      {target}
    </>
  )
}
