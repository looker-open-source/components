/*

 MIT License

 Copyright (c) 2023 Google LLC

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

import dateLocale from 'date-fns/locale/da'

import { mergeLocaleObjects } from '@looker/i18n'

const resources = {
  AdvancedInputControls: {
    'Clear Field': 'Ryd felt',
  },
  AvatarButton: {
    'Profile Picture': 'Profilbillede',
  },
  AvatarUser: {
    Avatar: 'Avatar',
  },
  BulkActions: {
    AllPageCountDisplayedSelected:
      'Alle {{pageCount}} viste elementer er valgt',
    AllTotalCountSelected: 'Alle {{totalCount}} elementer er valgt',
    'Bulk Actions': 'Massehandlinger',
    'Clear Selection': 'Ryd markering',
    SelectAllCountResults: 'Vælg alle {{totalCount}} resultater',
    SelectedCountOfTotalDisplayed:
      '{{selectedItemCount}} af {{pageCount}} viste elementer er valgt',
  },
  CalendarNav: {
    'next month': 'næste måned',
    'previous month': 'forrige måned',
  },
  CheckMarkMixed: {
    'Check Mark Mixed': 'Flueben – blandet',
  },
  Chip: {
    Delete: 'Slet',
  },
  ColumnSelector: {
    Apply: 'Anvend',
    Cancel: 'Annuller',
    'Select All': 'Vælg alt',
    'Select None': 'Vælg ingen',
    'Select columns to display': 'Vælg de kolonner, der skal vises',
  },
  ConfirmationDialog: {
    Cancel: 'Annuller',
    Confirm: 'Bekræft',
  },
  CopyToClipboard: {
    Copied: 'Kopieret',
    'Copy to Clipboard': 'Kopiér til udklipsholder',
  },
  DataTable: {
    'No Results': 'Ingen resultater',
  },
  DataTableItem: {
    Options: 'Indstillinger',
  },
  FieldTimeSelect: {
    'Please use format HHMM': 'Brug formatet TT:MM',
  },
  GetIntentLabel: {
    Error: 'Fejl',
    Inform: 'Informer',
    Success: 'Fuldført',
    Warning: 'Advarsel',
  },
  InputDate: {
    'Open calendar': 'Åbn kalender',
  },
  InputDateRange: {
    'End date': 'Slutdato',
    'Start date': 'Startdato',
  },
  InputFilters: {
    'Clear Filters': 'Ryd filtre',
    'Filter List': 'Filtrer liste',
    'bottom-start': 'nederst-start',
  },
  InputTimeSelect: {
    'Select time': 'Vælg tidspunkt',
  },
  MessageBar: {
    DismissIntent: 'Afvis {{intent}}',
  },
  ModalHeaderCloseButton: {
    Close: 'Luk',
  },
  MonthPickerNav: {
    close: 'luk',
    'next year': 'næste år',
    'previous year': 'forrige år',
  },
  PageSize: {
    Display: 'Vis',
    of: 'af',
  },
  Pagination: {
    'First page of results': 'Første side med resultater',
    'Last page of results': 'Sidste side med resultater',
    'Next page of results': 'Næste side med resultater',
    'Previous page of results': 'Forrige side med resultater',
    of: 'af',
  },
  PanelHeader: {
    CloseTitle: 'Luk {{title}}',
  },
  PopoverFooter: {
    Done: 'Udført',
  },
  PromptDialog: {
    Cancel: 'Annuller',
    Save: 'Gem',
  },
  RangeSlider: {
    'Maximum Name': 'Maksimum {{name}}',
    'Maximum Value': 'Maksimumværdi',
    'Minimum Name': 'Minimum {{name}}',
    'Minimum Value': 'Minimumværdi',
  },
  RequiredStar: {
    required: 'krævet',
  },
  SelectOptions: {
    Loading: 'Indlæser',
    'No options': 'Ingen indstillinger',
  },
  TabList: {
    Tabs: 'Faner',
  },
}

export const daDK = mergeLocaleObjects([], 'da-DK', resources, dateLocale)
