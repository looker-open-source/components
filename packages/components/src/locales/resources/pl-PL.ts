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

import dateLocale from 'date-fns/locale/pl';

import { mergeLocaleObjects } from '@looker/i18n';

const resources = {
  AdvancedInputControls: {
    'Clear Field': 'Wyczyść pole',
  },
  AvatarButton: {
    'Profile Picture': 'Zdjęcie profilowe',
  },
  AvatarUser: {
    Avatar: 'Awatar',
  },
  BulkActions: {
    AllPageCountDisplayedSelected:
      'Wybrano wszystkie wyświetlone elementy ({{pageCount}})',
    AllTotalCountSelected: 'Wybrano wszystkie elementy ({{totalCount}})',
    'Bulk Actions': 'Działania zbiorcze',
    'Clear Selection': 'Odznacz',
    SelectAllCountResults: 'Wybierz wszystkie wyniki ({{totalCount}})',
    SelectedCountOfTotalDisplayed:
      'Wybrano {{selectedItemCount}} z {{pageCount}} wyświetlonych elementów',
  },
  CalendarNav: {
    'next month': 'następny miesiąc',
    'previous month': 'poprzedni miesiąc',
  },
  CheckMarkMixed: {
    'Check Mark Mixed': 'Znacznik wyboru Mieszane',
  },
  Chip: {
    Delete: 'Usuń',
  },
  ColumnSelector: {
    Apply: 'Zastosuj',
    Cancel: 'Anuluj',
    'Select All': 'Wybierz wszystko',
    'Select None': 'Bez zaznaczenia',
    'Select columns to display': 'Wybierz kolumny do wyświetlenia',
  },
  ConfirmationDialog: {
    Cancel: 'Anuluj',
    Confirm: 'Potwierdź',
  },
  CopyToClipboard: {
    Copied: 'Skopiowano',
    'Copy to Clipboard': 'Kopiuj do schowka',
  },
  DataTable: {
    'No Results': 'Brak wyników',
  },
  DataTableItem: {
    Options: 'Opcje',
  },
  FieldTimeSelect: {
    'Please use format HHMM': 'Użyj formatu GG:MM',
  },
  GetIntentLabel: {
    Error: 'Błąd',
    Inform: 'Poinformuj',
    Success: 'Gotowe',
    Warning: 'Ostrzeżenie',
  },
  InputDate: {
    'Open calendar': 'Otwórz kalendarz',
  },
  InputDateRange: {
    'End date': 'Data zakończenia',
    'Start date': 'Data rozpoczęcia',
  },
  InputFilters: {
    'Clear Filters': 'Wyczyść filtry',
    'Filter List': 'Lista filtrów',
  },
  InputTimeSelect: {
    'Select time': 'Wybierz godzinę',
  },
  MessageBar: {
    DismissIntent: 'Odrzuć intencję {{intent}}',
  },
  ModalHeaderCloseButton: {
    Close: 'Zamknij',
  },
  MonthPickerNav: {
    close: 'zamknij',
    'next year': 'przyszły rok',
    'previous year': 'poprzedni rok',
  },
  PageSize: {
    Display: 'Wyświetlanie',
    of: 'z',
  },
  Pagination: {
    'First page of results': 'Pierwsza strona wyników',
    'Last page of results': 'Ostatnia strona wyników',
    'Next page of results': 'Następna strona wyników',
    'Previous page of results': 'Poprzednia strona wyników',
    of: 'z',
  },
  PanelHeader: {
    CloseTitle: 'Zamknij: {{title}}',
  },
  PopoverFooter: {
    Done: 'OK',
  },
  PromptDialog: {
    Cancel: 'Anuluj',
    Save: 'Zapisz',
  },
  RangeSlider: {
    'Maximum Name': 'Maksymalnie: {{name}}',
    'Maximum Value': 'Wartość maksymalna',
    'Minimum Name': 'Minimalnie: {{name}}',
    'Minimum Value': 'Wartość minimalna',
  },
  RequiredStar: {
    required: 'wymagane',
  },
  SelectOptions: {
    Loading: 'Wczytuję',
    'No options': 'Brak opcji',
  },
  TabList: {
    Tabs: 'Karty',
  },
};

export const plPL = mergeLocaleObjects([], 'pl-PL', resources, dateLocale);
