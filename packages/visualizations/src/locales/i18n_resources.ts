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
import { i18nResources as componentsResources } from '@looker/components'
import { i18nResources as adapterResources } from '@looker/visualizations-adapters'
import { i18nResources as tableResources } from '@looker/visualizations-table'
import { i18nResources as visxResources } from '@looker/visualizations-visx'
import merge from 'lodash/merge'
import { csCZ } from './resources/cs-CZ'
import { daDK } from './resources/da-DK'
import { deDE } from './resources/de-DE'
import { en } from './resources/en'
import { esES } from './resources/es-ES'
import { fiFI } from './resources/fi-FI'
import { frCA } from './resources/fr-CA'
import { frFR } from './resources/fr-FR'
import { heIL } from './resources/he-IL'
import { hiIN } from './resources/hi-IN'
import { itIT } from './resources/it-IT'
import { jaJP } from './resources/ja-JP'
import { koKR } from './resources/ko-KR'
import { ltLT } from './resources/lt-LT'
import { nbNO } from './resources/nb-NO'
import { nlNL } from './resources/nl-NL'
import { plPL } from './resources/pl-PL'
import { ptBR } from './resources/pt-BR'
import { ptPT } from './resources/pt-PT'
import { ruRU } from './resources/ru-RU'
import { svSE } from './resources/sv-SE'
import { thTH } from './resources/th-TH'
import { trTR } from './resources/tr-TR'
import { ukUA } from './resources/uk-UA'
import { zhCN } from './resources/zh-CN'
import { zhTW } from './resources/zh-TW'

export const i18nResources = merge(
  componentsResources,
  adapterResources,
  tableResources,
  visxResources,
  {
    ...csCZ.resources,
    ...daDK.resources,
    ...deDE.resources,
    ...en.resources,
    ...esES.resources,
    ...fiFI.resources,
    ...frCA.resources,
    ...frFR.resources,
    ...heIL.resources,
    ...hiIN.resources,
    ...itIT.resources,
    ...jaJP.resources,
    ...koKR.resources,
    ...ltLT.resources,
    ...nbNO.resources,
    ...nlNL.resources,
    ...plPL.resources,
    ...ptBR.resources,
    ...ptPT.resources,
    ...ruRU.resources,
    ...svSE.resources,
    ...thTH.resources,
    ...trTR.resources,
    ...ukUA.resources,
    ...zhCN.resources,
    ...zhTW.resources,
  }
)
