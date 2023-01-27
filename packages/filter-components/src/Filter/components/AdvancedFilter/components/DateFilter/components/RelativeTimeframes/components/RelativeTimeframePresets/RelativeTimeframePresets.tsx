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
import type { AnimationProps } from '@looker/components'
import {
  FadeIn,
  Icon,
  MenuDivider,
  MenuItem,
  MenuList,
  DialogContext,
} from '@looker/components'
import { Check } from '@styled-icons/material/Check'
import { ExpandMore } from '@styled-icons/material-rounded/ExpandMore'
import type { MouseEvent } from 'react'
import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { useTranslation } from '../../../../../../../../../utils'
import type {
  AllPresetTimeframes,
  RelativeTimeframeModel,
} from '../../../../types/relative_timeframe_types'
import { useRelativeTimeframePresets } from '../../utils/get_relative_timeframe_presets'
import {
  PresetTimeframes,
  PresetTimeframesLeastRecent,
  PresetTimeframesMostRecent,
  PresetTimeframesPrevious,
  PresetTimeframesRecent,
  PresetTimeframesThis,
} from '../../../../types/relative_timeframe_types'

interface RelativeTimeframePresetsProps {
  value: RelativeTimeframeModel
  onPresetChange: (selected: AllPresetTimeframes) => void
}

export const RelativeTimeframePresets  = (
  props : RelativeTimeframePresetsProps
) => {
  const { t } = useTranslation('RelativeTimeframePresets')

  const [showMore, setShowMore] = useState(false)

  const handleClick = (e: MouseEvent<HTMLLIElement>) => {
    setShowMore(true)
    // Needed to avoid closing the popover until MenuItem is replaced with ListItem
    e.preventDefault()
  }

  return (
    <MenuList density={-1} iconGutter>
      {showMore ? (
        <>
          <PresetTimeframeGroup
            {...props}
            presetTimeframe={PresetTimeframesMostRecent}
            delay="rapid"
          />
          <PresetTimeframeGroup
            {...props}
            presetTimeframe={PresetTimeframesRecent}
            delay="simple"
          />
          <PresetTimeframeGroup
            {...props}
            presetTimeframe={PresetTimeframesLeastRecent}
            delay="moderate"
          />
          <PresetTimeframeGroup
            {...props}
            presetTimeframe={PresetTimeframesThis}
            delay="complex"
          />
          <PresetTimeframeGroup
            {...props}
            presetTimeframe={PresetTimeframesPrevious}
            delay="intricate"
          />
        </>
      ) : (
        <>
          <PresetTimeframeGroup
            {...props}
            presetTimeframe={PresetTimeframes}
            delay="none"
            duration="none"
          />
          <CustomMenuItem
            detail={
              <Icon size={28} color="ui3" pr="xsmall" icon={<ExpandMore />} />
            }
            onClick={handleClick}
          >
            {t('More')}
          </CustomMenuItem>
        </>
      )}
    </MenuList>
  )
}

interface PresetTimeframeGroupProps
  extends AnimationProps,
    RelativeTimeframePresetsProps {
  presetTimeframe: { [key: string]: string }
}

const PresetTimeframeGroup  = ({
  duration = 'simple',
  delay,
  onPresetChange,
  presetTimeframe,
  value,
} : PresetTimeframeGroupProps) => {
  const presets = useRelativeTimeframePresets()
  const { closeModal } = useContext(DialogContext)

  const handleOnClick = (timeframe: AllPresetTimeframes) => () => {
    onPresetChange(timeframe)
    closeModal?.()
  }

  return (
    <>
      {Object.values(presetTimeframe).map((timeframe, index) => {
        const current = typeof value === 'string' && value === timeframe

        return (
          <CustomMenuItem
            icon={current ? <Check /> : undefined}
            key={index}
            onClick={handleOnClick(timeframe as AllPresetTimeframes)}
            selected={current}
          >
            <FadeIn duration={duration} delay={delay}>
              {presets[timeframe as AllPresetTimeframes]}
            </FadeIn>
          </CustomMenuItem>
        )
      })}

      <MenuDivider />
    </>
  )
}

const CustomMenuItem = styled(MenuItem)`
  & > button {
    &[aria-current='true'] {
      background-color: ${({ theme: { colors } }) => colors.background};
      ${Icon} {
        color: ${({ theme: { colors } }) => colors.key};
      }
    }

    &:hover {
      background-color: ${({ theme: { colors } }) => colors.keySubtle};
    }
  }
`
