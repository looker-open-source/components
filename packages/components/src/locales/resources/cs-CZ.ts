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

import dateLocale from 'date-fns/locale/cs'

import { mergeLocaleObjects } from '@looker/i18n'

const resources = {
  AdvancedInputControls: {
    'Clear Field': 'Vymazat pole',
  },
  AvatarButton: {
    'Profile Picture': 'Profilový obrázek',
  },
  AvatarUser: {
    Avatar: 'Avatar',
  },
  BulkActions: {
    AllPageCountDisplayedSelected:
      'Byly vybrány všechny zobrazené položky (počet: {{pageCount}})',
    AllTotalCountSelected:
      'Byly vybrány všechny položky (počet: {{totalCount}})',
    'Bulk Actions': 'Hromadné akce',
    'Clear Selection': 'Vymazat výběr',
    SelectAllCountResults: 'Vybrat všechny výsledky (počet: {{totalCount}})',
    SelectedCountOfTotalDisplayed:
      'Byly vybrány zobrazené položky ({{selectedItemCount}} z {{pageCount}})',
  },
  CalendarNav: {
    'next month': 'další měsíc',
    'previous month': 'předchozí měsíc',
  },
  CheckMarkMixed: {
    'Check Mark Mixed': 'Zaškrtnout smíšené',
  },
  Chip: {
    Delete: 'Odstranit',
  },
  ColumnSelector: {
    Apply: 'Použít',
    Cancel: 'Zrušit',
    'Select All': 'Vybrat vše',
    'Select None': 'Nevybrat žádné',
    'Select columns to display': 'Vybrat zobrazované sloupce',
  },
  ConfirmationDialog: {
    Cancel: 'Zrušit',
    Confirm: 'Potvrdit',
  },
  CopyToClipboard: {
    Copied: 'Zkopírováno',
    'Copy to Clipboard': 'Kopírovat do schránky',
  },
  DataTable: {
    'No Results': 'Žádné výsledky',
  },
  DataTableItem: {
    Options: 'Možnosti',
  },
  FieldTimeSelect: {
    'Please use format HHMM': 'Použijte formát HH:MM',
  },
  GetIntentLabel: {
    Error: 'Chyba',
    Inform: 'Informovat',
    Success: 'Úspěch',
    Warning: 'Varování',
  },
  InputDate: {
    'Open calendar': 'Otevřít kalendář',
  },
  InputDateRange: {
    'End date': 'Datum ukončení',
    'Start date': 'Datum zahájení',
  },
  InputFilters: {
    'Clear Filters': 'Vymazat filtry',
    'Filter List': 'Seznam filtrů',
    'bottom-start': 'bottom-start',
  },
  InputTimeSelect: {
    'Select time': 'Vybrat čas',
  },
  MessageBar: {
    DismissIntent: 'Odvolat {{intent}}',
  },
  ModalHeaderCloseButton: {
    Close: 'Zavřít',
  },
  MonthPickerNav: {
    close: 'zavřít',
    'next year': 'další rok',
    'previous year': 'předchozí rok',
  },
  PageSize: {
    Display: 'Zobrazení',
    of: 'z',
  },
  Pagination: {
    'First page of results': 'První stránka výsledků',
    'Last page of results': 'Poslední stránka výsledků',
    'Next page of results': 'Další stránka výsledků',
    'Previous page of results': 'Předchozí stránka výsledků',
    of: 'z',
  },
  PanelHeader: {
    CloseTitle: 'Zavřít {{title}}',
  },
  PopoverFooter: {
    Done: 'Hotovo',
  },
  PromptDialog: {
    Cancel: 'Zrušit',
    Save: 'Uložit',
  },
  RangeSlider: {
    'Maximum Name': 'Maximální hodnota {{name}}',
    'Maximum Value': 'Maximální hodnota',
    'Minimum Name': 'Minimální hodnota {{name}}',
    'Minimum Value': 'Minimální hodnota',
  },
  RequiredStar: {
    required: 'požadováno',
  },
  SelectOptions: {
    Loading: 'Načítání',
    'No options': 'Žádné možnosti',
  },
  TabList: {
    Tabs: 'Karty',
  },
}

export const csCZ = mergeLocaleObjects([], 'cs-CZ', resources, dateLocale)
