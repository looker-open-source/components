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

import dateLocale from 'date-fns/locale/uk'

import { mergeLocaleObjects } from '@looker/i18n'

const resources = {
  AdvancedInputControls: {
    'Clear Field': 'Очистити поле',
  },
  AvatarButton: {
    'Profile Picture': 'Аватар',
  },
  AvatarUser: {
    Avatar: 'Аватар',
  },
  BulkActions: {
    AllPageCountDisplayedSelected:
      'Вибрано всі відображені елементи: {{pageCount}}',
    AllTotalCountSelected: 'Вибрано всі елементи: {{totalCount}}',
    'Bulk Actions': 'Дії з групами',
    'Clear Selection': 'Очистити вибір',
    SelectAllCountResults: 'Вибрати всі результати: {{totalCount}}',
    SelectedCountOfTotalDisplayed:
      'Вибрано відображених елементів: {{selectedItemCount}} із {{pageCount}}',
  },
  CalendarNav: {
    'next month': 'наступний місяць',
    'previous month': 'попередній місяць',
  },
  CheckMarkMixed: {
    'Check Mark Mixed': 'Позначки змішані',
  },
  Chip: {
    Delete: 'Видалити',
  },
  ColumnSelector: {
    Apply: 'Застосувати',
    Cancel: 'Скасувати',
    'Select All': 'Вибрати всі',
    'Select None': 'Не вибирати нічого',
    'Select columns to display': 'Вибрати стовпці для відображення',
  },
  ConfirmationDialog: {
    Cancel: 'Скасувати',
    Confirm: 'Підтвердити',
  },
  CopyToClipboard: {
    Copied: 'Скопійовано',
    'Copy to Clipboard': 'Скопіювати в буфер обміну',
  },
  DataTable: {
    'No Results': 'Немає результатів',
  },
  DataTableItem: {
    Options: 'Параметри',
  },
  FieldTimeSelect: {
    'Please use format HHMM': 'Використовуйте формат ГГ:ХХ',
  },
  GetIntentLabel: {
    Error: 'Помилка',
    Inform: 'Інформувати',
    Success: 'Успішно',
    Warning: 'Попередження',
  },
  InputDate: {
    'Open calendar': 'Відкрити календар',
  },
  InputDateRange: {
    'End date': 'Дата завершення',
    'Start date': 'Дата початку',
  },
  InputFilters: {
    'Clear Filters': 'Очистити фільтри',
    'Filter List': 'Список фільтрів',
    'bottom-start': 'низ-початок',
  },
  InputTimeSelect: {
    'Select time': 'Вибрати час',
  },
  MessageBar: {
    DismissIntent: 'Відхилити {{intent}}',
  },
  ModalHeaderCloseButton: {
    Close: 'Закрити',
  },
  MonthPickerNav: {
    close: 'закрити',
    'next year': 'наступний рік',
    'previous year': 'попередній рік',
  },
  PageSize: {
    Display: 'Показати',
    of: 'із',
  },
  Pagination: {
    'First page of results': 'Перша сторінка результатів',
    'Last page of results': 'Остання сторінка результатів',
    'Next page of results': 'Наступна сторінка результатів',
    'Previous page of results': 'Попередня сторінка результатів',
    of: 'із',
  },
  PanelHeader: {
    CloseTitle: 'Закрити {{title}}',
  },
  PopoverFooter: {
    Done: 'Готово',
  },
  PromptDialog: {
    Cancel: 'Скасувати',
    Save: 'Зберегти',
  },
  RangeSlider: {
    'Maximum Name': 'Максимум {{name}}',
    'Maximum Value': 'Максимальне значення',
    'Minimum Name': 'Мінімум {{name}}',
    'Minimum Value': 'Мінімальне значення',
  },
  RequiredStar: {
    required: 'обов’язково',
  },
  SelectOptions: {
    Loading: 'Завантаження',
    'No options': 'Немає параметрів',
  },
  TabList: {
    Tabs: 'Вкладки',
  },
}

export const ukUA = mergeLocaleObjects([], 'uk-UA', resources, dateLocale)
