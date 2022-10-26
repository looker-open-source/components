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
import dateLocale from 'date-fns/locale/nb'
import type { I18nStateWithDates } from '@looker/i18n'

const resources = {
  AdvancedInputControls: {
    'Clear Field': 'Tøm felt',
  },
  AvatarButton: {
    'Profile Picture': 'Profilbilde',
  },
  AvatarUser: {
    Avatar: 'Avatar',
  },
  BulkActions: {
    AllPageCountDisplayedSelected:
      'Alle {{pageCount}} viste elementer er valgt',
    AllTotalCountSelected: 'Alle {{totalCount}} elementer er valgt',
    'Bulk Actions': 'Bulk-handlinger',
    'Clear Selection': 'Tøm valg',
    SelectAllCountResults: 'Velg alle {{totalCount}} resultater',
    SelectedCountOfTotalDisplayed:
      '{{selectedItemCount}} av {{pageCount}} viste elementer er valgt',
  },
  CalendarNav: {
    'next month': 'neste måned',
    'previous month': 'forrige måned',
  },
  CheckMarkMixed: {
    'Check Mark Mixed': 'Blandet merke',
  },
  Chip: {
    Delete: 'Slett',
  },
  ColumnSelector: {
    Apply: 'Bruk',
    Cancel: 'Avbryt',
    'Select All': 'Velg alle',
    'Select None': 'Velg ingen',
    'Select columns to display': 'Velg kolonner som skal vises',
  },
  ConfirmationDialog: {
    Cancel: 'Avbryt',
    Confirm: 'Bekreft',
  },
  CopyToClipboard: {
    Copied: 'Kopiert',
    'Copy to Clipboard': 'Kopier til utklippstavlen',
  },
  DataTable: {
    'No Results': 'Ingen resultater',
  },
  DataTableItem: {
    Options: 'Alternativer',
  },
  FieldTimeSelect: {
    'Please enter a valid time': 'Oppgi gyldig tid',
  },
  GetIntentLabel: {
    Error: 'Feil',
    Inform: 'Informer',
    Success: 'Vellykket',
    Warning: 'Advarsel',
  },
  InputDate: {
    'Open calendar': 'Åpne kalender',
  },
  InputDateRange: {
    'End date': 'Sluttdato',
    'Start date': 'Startdato',
  },
  InputFilters: {
    'Clear Filters': 'Fjern filtre',
    'Filter List': 'Filterliste',
    'bottom-start': 'bunnstart',
  },
  InputTimeSelect: {
    'Select time': 'Velg tid',
  },
  MessageBar: {
    DismissIntent: 'Forkast {{intent}}',
  },
  ModalHeaderCloseButton: {
    Close: 'Lukk',
  },
  MonthPickerNav: {
    close: 'lukk',
    'next year': 'neste år',
    'previous year': 'i fjor',
  },
  PageSize: {
    Display: 'Vis',
    of: 'av',
  },
  Pagination: {
    'First page of results': 'Første side med resultater',
    'Last page of results': 'Siste side med resultater',
    'Next page of results': 'Neste side med resultater',
    'Previous page of results': 'Forrige side med resultater',
    of: 'av',
  },
  PanelHeader: {
    CloseTitle: 'Lukk {{title}}',
  },
  PopoverFooter: {
    Done: 'Fullført',
  },
  PromptDialog: {
    Cancel: 'Avbryt',
    Save: 'Lagre',
  },
  RangeSlider: {
    'Maximum Value': 'Maksverdi',
    'Minimum Value': 'Minimumsverdi',
  },
  RequiredStar: {
    required: 'påkrevd',
  },
  SelectOptions: {
    Loading: 'Laster',
    'No options': 'Ingen alternativer',
  },
  TabList: {
    Tabs: 'Faner',
  },
}

export const nbNO: I18nStateWithDates = {
  dateLocale,
  locale: 'nb-NO',
  resources: { 'nb-NO': resources },
}
