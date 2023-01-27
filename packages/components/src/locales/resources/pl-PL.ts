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

import dateLocale from 'date-fns/locale/pl'

import { mergeLocaleObjects } from '@looker/i18n'

const resources = {
  AdvancedInputControls: {
    'Clear Field': 'Wyczyść pole',
  },
  AvatarButton: {
    'Profile Picture': 'Obraz profilu',
  },
  AvatarUser: {
    Avatar: 'Awatar',
  },
  BulkActions: {
    AllPageCountDisplayedSelected:
      'Wybrano wszystkie wyświetlone elementy ({{pageCount}})',
    AllTotalCountSelected: 'Wybrano wszystkie elementy ({{totalCount}})',
    'Bulk Actions': 'Akcje zbiorcze',
    'Clear Selection': 'Wyczyść zaznaczenie',
    SelectAllCountResults: 'Wybierz wszystkie wyniki ({{totalCount}})',
    SelectedCountOfTotalDisplayed:
      'Wybrane wyświetlone elementy: {{selectedItemCount}} z {{pageCount}}',
  },
  CalendarNav: {
    'next month': 'następny miesiąc',
    'previous month': 'poprzedni miesiąc',
  },
  CheckMarkMixed: {
    'Check Mark Mixed': 'Znacznik — tryb mieszany',
  },
  Chip: {
    Delete: 'Usuń',
  },
  ColumnSelector: {
    Apply: 'Zastosuj',
    Cancel: 'Anuluj',
    'Select All': 'Zaznacz wszystko',
    'Select None': 'Nie zaznaczaj niczego',
    'Select columns to display':
      'Wybierz kolumny, które mają zostać wyświetlone',
  },
  ConfirmationDialog: {
    Cancel: 'Anuluj',
    Confirm: 'Potwierdź',
  },
  CopyToClipboard: {
    Copied: 'Skopiowano',
    'Copy to Clipboard': 'Skopiuj do schowka',
  },
  DataTable: {
    'No Results': 'Brak wyników',
  },
  DataTableItem: {
    Options: 'Opcje',
  },
  FieldTimeSelect: {
    'Please use format HHMM': 'Użyj formatu HH:MM',
  },
  GetIntentLabel: {
    Error: 'Błąd',
    Inform: 'Informuj',
    Success: 'Powodzenie',
    Warning: 'Ostrzeżenie',
  },
  InputDate: {
    'Open calendar': 'Otwórz kalendarz',
  },
  InputDateRange: {
    'End date': 'Data końcowa',
    'Start date': 'Data początkowa',
  },
  InputFilters: {
    'Clear Filters': 'Wyczyść filtry',
    'Filter List': 'Lista filtrów',
    'bottom-start': 'bottom-start',
  },
  InputTimeSelect: {
    'Select time': 'Zaznacz czas',
  },
  MessageBar: {
    DismissIntent: 'Odrzuć: {{intent}}',
  },
  ModalHeaderCloseButton: {
    Close: 'Zamknij',
  },
  MonthPickerNav: {
    close: 'zamknij',
    'next year': 'następny rok',
    'previous year': 'poprzedni rok',
  },
  PageSize: {
    Display: 'Wyświetl',
    of: 'w miesiącu',
  },
  Pagination: {
    'First page of results': 'Pierwsza strona z wynikami',
    'Last page of results': 'Ostatnia strona z wynikami',
    'Next page of results': 'Następna strona z wynikami',
    'Previous page of results': 'Poprzednia strona z wynikami',
    of: 'w miesiącu',
  },
  PanelHeader: {
    CloseTitle: 'Zamknij: {{title}}',
  },
  PopoverFooter: {
    Done: 'Gotowe',
  },
  PromptDialog: {
    Cancel: 'Anuluj',
    Save: 'Zapisz',
  },
  RangeSlider: {
    'Maximum Name': 'Maks. {{name}}',
    'Maximum Value': 'Maksymalna wartość',
    'Minimum Name': 'Min. {{name}}',
    'Minimum Value': 'Minimalna wartość',
  },
  RequiredStar: {
    required: 'pole wymagane',
  },
  SelectOptions: {
    Loading: 'Ładowanie',
    'No options': 'Brak opcji',
  },
  TabList: {
    Tabs: 'Karty',
  },
}

export const plPL = mergeLocaleObjects([], 'pl-PL', resources, dateLocale)
