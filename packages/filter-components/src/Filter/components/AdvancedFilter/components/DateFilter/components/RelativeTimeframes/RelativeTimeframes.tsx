/*

 MIT License

 Copyright (c) 2022 Looker Data Sciences, Inc.

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
import {
  usePopover,
  Breakpoint,
  Dialog,
  DialogLayout,
} from '@looker/components'
import React, { useRef } from 'react'
import { TokenBase } from '../../../../../../../Token'
import { useTranslation } from '../../../../../../../utils'
import type { DayRange } from '../../types/day_range'
import type {
  AllPresetTimeframes,
  RelativeTimeframeModel,
} from '../../types/relative_timeframe_types'
import { useRelativeTimeframeToString } from '../../utils/relative_timeframe_to_string'
import { RelativeTimeframePopoverContent } from './components/RelativeTimeframePopoverContent'

interface RelativeTimeframesProps {
  value: RelativeTimeframeModel
  onChange: (value: RelativeTimeframeModel) => void
}

// the shape of PopperInstance copied from @popperjs/core type definitions (v2.4.0)
type PopperInstance = {
  state: any
  destroy: () => void
  forceUpdate: () => void
  update: () => Promise<any>
  setOptions: (options: any) => Promise<any>
}

export const RelativeTimeframes = ({
  value,
  onChange,
}: RelativeTimeframesProps) => {
  // track the popperjs instance returned by usePopper
  // https://popper.js.org/docs/v2/constructors/#instance
  const internalPopoverInstanceRef = useRef<PopperInstance | undefined>()

  const { t } = useTranslation('RelativeTimeframe')

  const handlePresetChange = (selected: AllPresetTimeframes) => {
    onChange(selected)
  }

  const handleCustomChange = (range: DayRange) => {
    onChange(range)
  }

  const handleNav = () => {
    // recalculate popper position when content changes
    internalPopoverInstanceRef.current?.update()
  }

  const popoverContent = (
    <RelativeTimeframePopoverContent
      value={value}
      onNav={handleNav}
      onCustomChange={handleCustomChange}
      onPresetChange={handlePresetChange}
    />
  )

  const popoverProps = {
    content: popoverContent,
    pin: true,
    placement: 'bottom-start' as const,
  }

  const { popover, open, ref, popperInstanceRef } = usePopover(popoverProps)

  // hoist popperInstanceRef for use in handleNav callback
  internalPopoverInstanceRef.current = popperInstanceRef.current

  const label = useRelativeTimeframeToString(value)

  const overlayTrigger = (
    <TokenBase ref={ref} onClick={open} aria-selected="true">
      {label}
    </TokenBase>
  )

  return (
    <>
      {/* Responsive design: render a full-screen dialog on mobile devices */}
      <Breakpoint show="mobile">
        <Dialog
          content={
            <DialogLayout header={t('Choose a Timeframe')}>
              {popoverContent}
            </DialogLayout>
          }
        >
          {overlayTrigger}
        </Dialog>
      </Breakpoint>
      {/* Responsive design: render a context menu on tablet and larger */}
      <Breakpoint show={['tablet', undefined]}>
        {popover}
        {overlayTrigger}
      </Breakpoint>
    </>
  )
}
