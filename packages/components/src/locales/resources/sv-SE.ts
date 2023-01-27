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

import dateLocale from 'date-fns/locale/sv'

import { mergeLocaleObjects } from '@looker/i18n'

const resources = {
  AdvancedInputControls: {
    'Clear Field': 'Rensa fält',
  },
  AvatarButton: {
    'Profile Picture': 'Profilbild',
  },
  AvatarUser: {
    Avatar: 'Avatar',
  },
  BulkActions: {
    AllPageCountDisplayedSelected:
      'Alla {{pageCount}} objekt som visas har valts',
    AllTotalCountSelected: 'Alla {{totalCount}} objekt har valts',
    'Bulk Actions': 'Massåtgärder',
    'Clear Selection': 'Rensa markering',
    SelectAllCountResults: 'Visa alla {{totalCount}} resultat',
    SelectedCountOfTotalDisplayed:
      '{{selectedItemCount}} av {{pageCount}} visade objekt har valts',
  },
  CalendarNav: {
    'next month': 'nästa månad',
    'previous month': 'föregående månad',
  },
  CheckMarkMixed: {
    'Check Mark Mixed': 'Blandad bockmarkering',
  },
  Chip: {
    Delete: 'Radera',
  },
  ColumnSelector: {
    Apply: 'Tillämpa',
    Cancel: 'Avbryt',
    'Select All': 'Markera allt',
    'Select None': 'Markera inget',
    'Select columns to display': 'Välj kolumner att visa',
  },
  ConfirmationDialog: {
    Cancel: 'Avbryt',
    Confirm: 'Bekräfta',
  },
  CopyToClipboard: {
    Copied: 'Kopierat',
    'Copy to Clipboard': 'Kopiera till urklipp',
  },
  DataTable: {
    'No Results': 'Inga resultat',
  },
  DataTableItem: {
    Options: 'Alternativ',
  },
  FieldTimeSelect: {
    'Please use format HHMM': 'Använd formatet HH:MM',
  },
  GetIntentLabel: {
    Error: 'Fel',
    Inform: 'Information',
    Success: 'Klart',
    Warning: 'Varning',
  },
  InputDate: {
    'Open calendar': 'Öppna kalender',
  },
  InputDateRange: {
    'End date': 'Slutdatum',
    'Start date': 'Startdatum',
  },
  InputFilters: {
    'Clear Filters': 'Rensa filter',
    'Filter List': 'Filterlista',
    'bottom-start': 'bottom-start',
  },
  InputTimeSelect: {
    'Select time': 'Välj tid',
  },
  MessageBar: {
    DismissIntent: 'Avfärda {{intent}}',
  },
  ModalHeaderCloseButton: {
    Close: 'Stäng',
  },
  MonthPickerNav: {
    close: 'stäng',
    'next year': 'nästa år',
    'previous year': 'föregående år',
  },
  PageSize: {
    Display: 'Visa',
    of: 'av',
  },
  Pagination: {
    'First page of results': 'Första sidan med resultat',
    'Last page of results': 'Sista sidan med resultat',
    'Next page of results': 'Nästa sida med resultat',
    'Previous page of results': 'Föregående sida med resultat',
    of: 'av',
  },
  PanelHeader: {
    CloseTitle: 'Stäng {{title}}',
  },
  PopoverFooter: {
    Done: 'Klar',
  },
  PromptDialog: {
    Cancel: 'Avbryt',
    Save: 'Spara',
  },
  RangeSlider: {
    'Maximum Name': 'Max {{name}}',
    'Maximum Value': 'Maxvärde',
    'Minimum Name': 'Minimum {{name}}',
    'Minimum Value': 'Minimivärde',
  },
  RequiredStar: {
    required: 'krävs',
  },
  SelectOptions: {
    Loading: 'Läser in',
    'No options': 'Inga alternativ',
  },
  TabList: {
    Tabs: 'Flikar',
  },
}

export const svSE = mergeLocaleObjects([], 'sv-SE', resources, dateLocale)
