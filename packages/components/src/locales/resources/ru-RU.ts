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

import dateLocale from 'date-fns/locale/ru'

import { mergeLocaleObjects } from '@looker/i18n'

const resources = {
  AdvancedInputControls: {
    'Clear Field': 'Очистить поле',
  },
  AvatarButton: {
    'Profile Picture': 'Изображение профиля',
  },
  AvatarUser: {
    Avatar: 'Аватар',
  },
  BulkActions: {
    AllPageCountDisplayedSelected:
      'Выбраны все отображаемые элементы ({{pageCount}})',
    AllTotalCountSelected: 'Выбраны все элементы ({{totalCount}})',
    'Bulk Actions': 'Массовые действия',
    'Clear Selection': 'Очистить выбор',
    SelectAllCountResults: 'Выбрать все результаты ({{totalCount}})',
    SelectedCountOfTotalDisplayed:
      'Выбраны отображаемые элементы: {{selectedItemCount}} из {{pageCount}}',
  },
  CalendarNav: {
    'next month': 'следующий месяц',
    'previous month': 'прошлый месяц',
  },
  CheckMarkMixed: {
    'Check Mark Mixed': 'Отметки смешаны',
  },
  Chip: {
    Delete: 'Удалить',
  },
  ColumnSelector: {
    Apply: 'Применить',
    Cancel: 'Отмена',
    'Select All': 'Выбрать все',
    'Select None': 'Ничего не выбирать',
    'Select columns to display': 'Выбрать столбцы для отображения',
  },
  ConfirmationDialog: {
    Cancel: 'Отмена',
    Confirm: 'Подтвердить',
  },
  CopyToClipboard: {
    Copied: 'Скопировано',
    'Copy to Clipboard': 'Скопировать в буфер обмена',
  },
  DataTable: {
    'No Results': 'Нет результатов',
  },
  DataTableItem: {
    Options: 'Параметры',
  },
  FieldTimeSelect: {
    'Please use format HHMM': 'Используйте формат ЧЧ:ММ',
  },
  GetIntentLabel: {
    Error: 'Ошибка',
    Inform: 'Информировать',
    Success: 'Успешно',
    Warning: 'Предупреждение',
  },
  InputDate: {
    'Open calendar': 'Открыть календарь',
  },
  InputDateRange: {
    'End date': 'Дата завершения',
    'Start date': 'Дата начала',
  },
  InputFilters: {
    'Clear Filters': 'Снять фильтры',
    'Filter List': 'Список фильтров',
    'bottom-start': 'низ-начало',
  },
  InputTimeSelect: {
    'Select time': 'Выбрать время',
  },
  MessageBar: {
    DismissIntent: 'Отклонить {{intent}}',
  },
  ModalHeaderCloseButton: {
    Close: 'Закрыть',
  },
  MonthPickerNav: {
    close: 'закрыть',
    'next year': 'следующий год',
    'previous year': 'прошлый год',
  },
  PageSize: {
    Display: 'Показать',
    of: 'из',
  },
  Pagination: {
    'First page of results': 'Первая страница результатов',
    'Last page of results': 'Последняя страница результатов',
    'Next page of results': 'Следующая страница результатов',
    'Previous page of results': 'Предыдущая страница результатов',
    of: 'из',
  },
  PanelHeader: {
    CloseTitle: 'Закрыть {{title}}',
  },
  PopoverFooter: {
    Done: 'Готово',
  },
  PromptDialog: {
    Cancel: 'Отмена',
    Save: 'Сохранить',
  },
  RangeSlider: {
    'Maximum Name': 'Не больше {{name}}',
    'Maximum Value': 'Максимальное значение',
    'Minimum Name': 'Не меньше {{name}}',
    'Minimum Value': 'Минимальное значение',
  },
  RequiredStar: {
    required: 'обязательно',
  },
  SelectOptions: {
    Loading: 'Загрузка',
    'No options': 'Нет параметров',
  },
  TabList: {
    Tabs: 'Вкладки',
  },
}

export const ruRU = mergeLocaleObjects([], 'ru-RU', resources, dateLocale)
