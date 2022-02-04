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
import React from 'react'
import { Tabs, Tab, TabList, TabPanels, TabPanel } from '@looker/components'
import { useTranslation } from 'react-i18next'
import type { DayRange } from '../../../../types/day_range'
import type {
  AllPresetTimeframes,
  RelativeTimeframeModel,
} from '../../../../types/relative_timeframe_types'
import { RelativeTimeframeCustom } from '../RelativeTimeframeCustom'
import { RelativeTimeframePresets } from '../RelativeTimeframePresets'

interface RelativeTimeframePopoverContentProps {
  value: RelativeTimeframeModel
  onCustomChange: (range: DayRange) => void
  onPresetChange: (selected: AllPresetTimeframes) => void
  onNav: () => void
}

export const RelativeTimeframePopoverContent = ({
  value,
  onCustomChange,
  onPresetChange,
  onNav,
}: RelativeTimeframePopoverContentProps) => {
  const defaultTabIndex = typeof value === 'string' ? 0 : 1
  const { t } = useTranslation('RelativeTimeframePopoverContent')

  const handleTabClick = () => {
    requestAnimationFrame(() => {
      onNav()
    })
  }

  // Wrapper <div> to avoid flex-shrink on TabList
  return (
    <div>
      <Tabs onChange={handleTabClick} defaultIndex={defaultTabIndex}>
        <TabList pt="xsmall" pl="small">
          <Tab>{t('Presets')}</Tab>
          <Tab>{t('Custom')}</Tab>
        </TabList>
        <TabPanels pt="none">
          <TabPanel>
            <RelativeTimeframePresets
              value={value}
              onPresetChange={onPresetChange}
            />
          </TabPanel>
          <TabPanel>
            <RelativeTimeframeCustom
              value={value}
              onCustomChange={onCustomChange}
            />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  )
}
