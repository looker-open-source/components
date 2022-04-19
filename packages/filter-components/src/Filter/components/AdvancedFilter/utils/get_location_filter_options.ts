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
import { useTranslation } from '../../../../utils'
import { useUserAttributeOption } from './get_user_attribute_option'

export const useLocationFilterOptions = () => {
  const { t } = useTranslation('get_location_filter_options')
  const userAttributeOption = useUserAttributeOption()
  return [
    { value: 'location', label: t('Location') },
    { value: 'circle', label: t('Circle') },
    { value: 'box', label: t('Box') },
    { value: 'anyvalue', label: t('is anywhere') },
    { value: 'null', label: t('is null') },
    { value: 'notnull', label: t('is not null') },
    userAttributeOption,
  ]
}

export const useUnitOptions = () => {
  const { t } = useTranslation('get_location_filter_options')
  return [
    { value: 'feet', label: t('feet') },
    { value: 'kilometers', label: t('kilometers') },
    { value: 'meters', label: t('meters') },
    { value: 'miles', label: t('miles') },
  ]
}
