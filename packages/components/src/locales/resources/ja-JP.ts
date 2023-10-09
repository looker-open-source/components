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

import dateLocale from 'date-fns/locale/ja';

import { mergeLocaleObjects } from '@looker/i18n';

const resources = {
  AdvancedInputControls: {
    'Clear Field': 'フィールドをクリア',
  },
  AvatarButton: {
    'Profile Picture': 'プロフィール写真',
  },
  AvatarUser: {
    Avatar: 'アバター',
  },
  BulkActions: {
    AllPageCountDisplayedSelected:
      '表示されている {{pageCount}} 個のアイテムがすべて選択されています',
    AllTotalCountSelected:
      '{{totalCount}} 個のアイテムがすべて選択されています',
    'Bulk Actions': '一括操作',
    'Clear Selection': '選択をクリア',
    SelectAllCountResults: '{{totalCount}} 件の結果をすべて選択',
    SelectedCountOfTotalDisplayed:
      '表示されている {{pageCount}} 個のうち {{selectedItemCount}} 個のアイテムが選択されています',
  },
  CalendarNav: {
    'next month': '翌月',
    'previous month': '前月',
  },
  CheckMarkMixed: {
    'Check Mark Mixed': 'チェックマークの混合',
  },
  Chip: {
    Delete: '削除',
  },
  ColumnSelector: {
    Apply: '適用',
    Cancel: 'キャンセル',
    'Select All': 'すべて選択',
    'Select None': 'すべて選択解除',
    'Select columns to display': '表示する列を選択してください',
  },
  ConfirmationDialog: {
    Cancel: 'キャンセル',
    Confirm: '確認',
  },
  CopyToClipboard: {
    Copied: 'コピーしました',
    'Copy to Clipboard': 'クリップボードにコピー',
  },
  DataTable: {
    'No Results': '一致する結果はありません',
  },
  DataTableItem: {
    Options: 'オプション',
  },
  FieldTimeSelect: {
    'Please use format HHMM': '形式「HH:MM」を使用してください',
  },
  GetIntentLabel: {
    Error: 'エラー',
    Inform: '情報提供',
    Success: '完了',
    Warning: '警告',
  },
  InputDate: {
    'Open calendar': 'カレンダーを開く',
  },
  InputDateRange: {
    'End date': '終了日',
    'Start date': '開始日',
  },
  InputFilters: {
    'Clear Filters': 'フィルタをクリア',
    'Filter List': 'フィルタリスト',
  },
  InputTimeSelect: {
    'Select time': '時刻を選択',
  },
  MessageBar: {
    DismissIntent: '{{intent}} を閉じる',
  },
  ModalHeaderCloseButton: {
    Close: '閉じる',
  },
  MonthPickerNav: {
    close: '閉じる',
    'next year': '翌年',
    'previous year': '前年',
  },
  PageSize: {
    Display: '表示',
    of: '/',
  },
  Pagination: {
    'First page of results': '検索結果の最初のページ',
    'Last page of results': '検索結果の最後のページ',
    'Next page of results': '検索結果の次のページ',
    'Previous page of results': '検索結果の前のページ',
    of: '/',
  },
  PanelHeader: {
    CloseTitle: '{{title}} を閉じる',
  },
  PopoverFooter: {
    Done: '完了',
  },
  PromptDialog: {
    Cancel: 'キャンセル',
    Save: '保存',
  },
  RangeSlider: {
    'Maximum Name': '最大 {{name}}',
    'Maximum Value': '最大値',
    'Minimum Name': '最小 {{name}}',
    'Minimum Value': '最小値',
  },
  RequiredStar: {
    required: '必須',
  },
  SelectOptions: {
    Loading: '読み込み中',
    'No options': 'オプションなし',
  },
  TabList: {
    Tabs: 'タブ',
  },
};

export const jaJP = mergeLocaleObjects([], 'ja-JP', resources, dateLocale);
