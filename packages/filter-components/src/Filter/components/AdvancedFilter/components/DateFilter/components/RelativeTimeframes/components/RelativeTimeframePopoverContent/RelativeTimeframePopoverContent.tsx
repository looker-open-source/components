/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react'
import { Tabs, Tab, TabList, TabPanels, TabPanel } from '@looker/components'
import { useTranslation } from '../../../../../../../../../utils'
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
