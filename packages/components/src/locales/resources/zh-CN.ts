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

import dateLocale from 'date-fns/locale/zh-CN'

import { mergeLocaleObjects } from '@looker/i18n'

const resources = {
  AdvancedInputControls: {
    'Clear Field': '清除字段',
  },
  AvatarButton: {
    'Profile Picture': '个人资料图片',
  },
  AvatarUser: {
    Avatar: '头像',
  },
  BulkActions: {
    AllPageCountDisplayedSelected: '已选择 {{pageCount}} 页上显示的所有项目',
    AllTotalCountSelected: '已选择所有 {{totalCount}} 个项目',
    'Bulk Actions': '批量操作',
    'Clear Selection': '清除选定内容',
    SelectAllCountResults: '选择所有 {{totalCount}} 个结果',
    SelectedCountOfTotalDisplayed:
      '已选择 {{pageCount}} 页上显示的所有 {{selectedItemCount}} 个项目',
  },
  CalendarNav: {
    'next month': '下个月',
    'previous month': '上个月',
  },
  CheckMarkMixed: {
    'Check Mark Mixed': '复选标记 - 混合',
  },
  Chip: {
    Delete: '删除',
  },
  ColumnSelector: {
    Apply: '应用',
    Cancel: '取消',
    'Select All': '全选',
    'Select None': '全部不选',
    'Select columns to display': '选择要显示的列',
  },
  ConfirmationDialog: {
    Cancel: '取消',
    Confirm: '确认',
  },
  CopyToClipboard: {
    Copied: '已复制',
    'Copy to Clipboard': '复制到剪贴板',
  },
  DataTable: {
    'No Results': '无结果',
  },
  DataTableItem: {
    Options: '选项',
  },
  FieldTimeSelect: {
    'Please use format HHMM': '请使用格式 HH:MM',
  },
  GetIntentLabel: {
    Error: '错误',
    Inform: '通知',
    Success: '成功',
    Warning: '警告',
  },
  InputDate: {
    'Open calendar': '打开日历',
  },
  InputDateRange: {
    'End date': '结束日期',
    'Start date': '开始日期',
  },
  InputFilters: {
    'Clear Filters': '清除筛选条件',
    'Filter List': '筛选条件列表',
    'bottom-start': '从底部开始',
  },
  InputTimeSelect: {
    'Select time': '选择时间',
  },
  MessageBar: {
    DismissIntent: '取消 {{intent}}',
  },
  ModalHeaderCloseButton: {
    Close: '关闭',
  },
  MonthPickerNav: {
    close: '关闭',
    'next year': '下一年',
    'previous year': '上一年',
  },
  PageSize: {
    Display: '显示',
    of: '/',
  },
  Pagination: {
    'First page of results': '第一页结果',
    'Last page of results': '最后一页结果',
    'Next page of results': '下一页结果',
    'Previous page of results': '上一页结果',
    of: '/',
  },
  PanelHeader: {
    CloseTitle: '关闭 {{title}}',
  },
  PopoverFooter: {
    Done: '完成',
  },
  PromptDialog: {
    Cancel: '取消',
    Save: '保存',
  },
  RangeSlider: {
    'Maximum Name': '最大 {{name}}',
    'Maximum Value': '最大值',
    'Minimum Name': '最小 {{name}}',
    'Minimum Value': '最小值',
  },
  RequiredStar: {
    required: '必填',
  },
  SelectOptions: {
    Loading: '正在加载',
    'No options': '无选项',
  },
  TabList: {
    Tabs: '选项卡',
  },
}

export const zhCN = mergeLocaleObjects([], 'zh-CN', resources, dateLocale)
