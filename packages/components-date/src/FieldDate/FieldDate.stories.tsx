/*

 MIT License

 Copyright (c) 2021 Looker Data Sciences, Inc.

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
import type { Story } from '@storybook/react/types-6-0'
import type { SyntheticEvent } from 'react'
import React, { useState } from 'react'
import {
  Button,
  Fieldset,
  FieldSelect,
  FieldSlider,
  i18nInit,
  Paragraph,
  Popover,
  PopoverContent,
} from '@looker/components'

import ar from 'date-fns/locale/ar-SA'
import de from 'date-fns/locale/de'
import en from 'date-fns/locale/en-US'
import es from 'date-fns/locale/es'
import fr from 'date-fns/locale/fr'
import it from 'date-fns/locale/it'
import ja from 'date-fns/locale/ja'
import ko from 'date-fns/locale/ko'
import nl from 'date-fns/locale/nl'
import pl from 'date-fns/locale/pl'
import pt from 'date-fns/locale/pt'
import ptBr from 'date-fns/locale/pt-BR'
import ru from 'date-fns/locale/ru'
import sv from 'date-fns/locale/sv'
import tr from 'date-fns/locale/tr'
import zhCn from 'date-fns/locale/zh-CN'
import zhTw from 'date-fns/locale/zh-TW'

import { defaultArgTypes as argTypes } from '../../../../storybook/src/defaultArgTypes'
import { DateFormat } from '../DateFormat'
import type { FieldDateProps } from './FieldDate'
import { FieldDate } from './FieldDate'

i18nInit()

export default {
  argTypes,
  component: FieldDate,
  title: `Date / FieldDate`,
}

const Template: Story<FieldDateProps> = (args) => <FieldDate {...args} />

export const Basic = Template.bind({})
Basic.args = { defaultValue: new Date('July 25, 2020'), label: 'Example' }

export const Disabled = Template.bind({})
Disabled.args = { ...Basic.args, disabled: true }

export const Required = Template.bind({})
Required.args = { ...Basic.args, required: true }

export const Error = Template.bind({})
Error.args = {
  ...Basic.args,
  validationMessage: { message: 'Error Message', type: 'error' },
}

type DayOfWeekNumbers = 0 | 1 | 2 | 3 | 4 | 5 | 6

export const Controlled = () => {
  const [controlledDate, setControlledDate] = useState<any>()

  function handleNextWeekClick() {
    setControlledDate(new Date('03/09/2020'))
  }

  return (
    <Popover
      content={
        <PopoverContent>
          <Button onClick={handleNextWeekClick}>Next Week</Button>
          <FieldDate value={controlledDate} onChange={setControlledDate} />
        </PopoverContent>
      }
    >
      <Button>
        {controlledDate ? (
          <>
            <DateFormat>{controlledDate}</DateFormat>
          </>
        ) : (
          'Select Dates'
        )}
      </Button>
    </Popover>
  )
}

Controlled.parameters = {
  storyshots: { disable: true },
}

const dateFnLocaleMap = {
  ar: ar,
  de: de,
  en: en,
  es: es,
  fr: fr,
  it: it,
  ja: ja,
  ko: ko,
  nl: nl,
  pl: pl,
  pt: pt,
  'pt-br': ptBr,
  ru: ru,
  sv: sv,
  tr: tr,
  'zh-cn': zhCn,
  'zh-tw': zhTw,
}

export const Localized = () => {
  const [localizedDate, setLocalizedDate] = useState<Date | undefined>()
  const [localeCode, setLocale] = useState('it')
  const locale = dateFnLocaleMap[localeCode]
  const [firstDayOfWeek, setFirstDayOfWeek] = useState<DayOfWeekNumbers>(
    locale.options?.weekStartsOn
  )

  const handleFirstDayOfWeekChange = (e: SyntheticEvent<HTMLInputElement>) => {
    setFirstDayOfWeek(parseInt(e.currentTarget.value, 10) as DayOfWeekNumbers)
  }

  const handleLocaleChange = (val: any) => {
    setLocale(val)
    setLocalizedDate(undefined)
    setFirstDayOfWeek(locale.options?.weekStartsOn)
  }

  return (
    <Fieldset>
      <Paragraph>
        Selected:
        {localizedDate && (
          <DateFormat locale={locale}>{localizedDate}</DateFormat>
        )}
      </Paragraph>

      <FieldDate
        onChange={setLocalizedDate}
        firstDayOfWeek={firstDayOfWeek}
        locale={locale}
        key={localeCode}
        m="small"
      />

      <FieldSelect
        label="Date String Format"
        options={[
          { label: 'Arabic (ar)', value: 'ar' },
          { label: 'German (de)', value: 'de' },
          { label: 'English (en)', value: 'en' },
          { label: 'Spanish (es)', value: 'es' },
          { label: 'French (fr)', value: 'fr' },
          { label: 'Italian (it)', value: 'it' },
          { label: 'Japanese (ja)', value: 'ja' },
          { label: 'Korean (ko)', value: 'ko' },
          { label: 'Dutch (nl)', value: 'nl' },
          { label: 'Polish (pl)', value: 'pl' },
          { label: 'Portuguese (pt)', value: 'pt' },
          { label: 'Portuguese - Brazil (pt-br)', value: 'pt-br' },
          { label: 'Russian (ru)', value: 'ru' },
          { label: 'Swedish (sv)', value: 'sv' },
          { label: 'Turkish (tr)', value: 'tr' },
          { label: 'Chinese - China (zh-cn)', value: 'zh-cn' },
          { label: 'Chinese - Taiwan (zh-tw)', value: 'zh-tw' },
        ]}
        value={localeCode}
        onChange={handleLocaleChange}
        width="auto"
      />
      <FieldSlider
        label="First Day Of Week"
        min={0}
        max={6}
        value={firstDayOfWeek}
        onChange={handleFirstDayOfWeekChange}
      />
    </Fieldset>
  )
}

Localized.parameters = {
  storyshots: { disable: true },
}
