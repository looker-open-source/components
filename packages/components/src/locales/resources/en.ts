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

import dateLocale from 'date-fns/locale/en-US'

import { mergeLocaleObjects } from '@looker/i18n'

const resources = {
  AdvancedInputControls: {
    'Clear Field': 'Clear Field',
  },
  AvatarButton: {
    'Profile Picture': 'Profile Picture',
  },
  AvatarUser: {
    Avatar: 'Avatar',
  },
  BulkActions: {
    AllPageCountDisplayedSelected: 'All {{pageCount}} displayed items selected',
    AllTotalCountSelected: 'All {{totalCount}} items selected',
    'Bulk Actions': 'Bulk Actions',
    'Clear Selection': 'Clear Selection',
    SelectAllCountResults: 'Select all {{totalCount}} results',
    SelectedCountOfTotalDisplayed:
      '{{selectedItemCount}} of {{pageCount}} displayed items selected',
  },
  CalendarNav: {
    'next month': 'next month',
    'previous month': 'previous month',
  },
  CheckMarkMixed: {
    'Check Mark Mixed': 'Check Mark Mixed',
  },
  Chip: {
    Delete: 'Delete',
  },
  ColumnSelector: {
    Apply: 'Apply',
    Cancel: 'Cancel',
    'Select All': 'Select All',
    'Select None': 'Select None',
    'Select columns to display': 'Select columns to display',
  },
  ConfirmationDialog: {
    Cancel: 'Cancel',
    Confirm: 'Confirm',
  },
  CopyToClipboard: {
    Copied: 'Copied',
    'Copy to Clipboard': 'Copy to Clipboard',
  },
  DataTable: {
    'No Results': 'No Results',
  },
  DataTableItem: {
    Options: 'Options',
  },
  FieldTimeSelect: {
    'Please use format HHMM': 'Please use format HH:MM',
  },
  GetIntentLabel: {
    Error: 'Error',
    Inform: 'Inform',
    Success: 'Success',
    Warning: 'Warning',
  },
  InputDate: {
    'Open calendar': 'Open calendar',
  },
  InputDateRange: {
    'End date': 'End date',
    'Start date': 'Start date',
  },
  InputFilters: {
    'Clear Filters': 'Clear Filters',
    'Filter List': 'Filter List',
  },
  InputTimeSelect: {
    'Select time': 'Select time',
  },
  MessageBar: {
    DismissIntent: 'Dismiss {{intent}}',
  },
  ModalHeaderCloseButton: {
    Close: 'Close',
  },
  MonthPickerNav: {
    close: 'close',
    'next year': 'next year',
    'previous year': 'previous year',
  },
  PageSize: {
    Display: 'Display',
    of: 'of',
  },
  Pagination: {
    'First page of results': 'First page of results',
    'Last page of results': 'Last page of results',
    'Next page of results': 'Next page of results',
    'Previous page of results': 'Previous page of results',
    of: 'of',
  },
  PanelHeader: {
    CloseTitle: 'Close {{title}}',
  },
  PopoverFooter: {
    Done: 'Done',
  },
  PromptDialog: {
    Cancel: 'Cancel',
    Save: 'Save',
  },
  RangeSlider: {
    'Maximum Name': 'Maximum {{name}}',
    'Maximum Value': 'Maximum Value',
    'Minimum Name': 'Minimum {{name}}',
    'Minimum Value': 'Minimum Value',
  },
  RequiredStar: {
    required: 'required',
  },
  SelectOptions: {
    Loading: 'Loading',
    'No options': 'No options',
  },
  TabList: {
    Tabs: 'Tabs',
  },
}

export const en = mergeLocaleObjects([], 'en', resources, dateLocale)
