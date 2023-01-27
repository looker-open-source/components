"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.zhTW = void 0;
var _zhTW = _interopRequireDefault(require("date-fns/locale/zh-TW"));
var _i18n = require("@looker/i18n");

var resources = {
  AdvancedInputControls: {
    'Clear Field': '清除欄位'
  },
  AvatarButton: {
    'Profile Picture': '個人資料圖片'
  },
  AvatarUser: {
    Avatar: '人物/群組頭像或圖示'
  },
  BulkActions: {
    AllPageCountDisplayedSelected: '已全選 {{pageCount}} 個顯示的項目',
    AllTotalCountSelected: '已全選 {{totalCount}} 個項目',
    'Bulk Actions': '批次執行動作',
    'Clear Selection': '清除選取內容',
    SelectAllCountResults: '全選 {{totalCount}} 個結果',
    SelectedCountOfTotalDisplayed: '已選取 {{selectedItemCount}} 個 (共 {{pageCount}} 個) 顯示的項目'
  },
  CalendarNav: {
    'next month': '下個月',
    'previous month': '上個月'
  },
  CheckMarkMixed: {
    'Check Mark Mixed': '勾選符號混合'
  },
  Chip: {
    Delete: '刪除'
  },
  ColumnSelector: {
    Apply: '套用',
    Cancel: '取消',
    'Select All': '全選',
    'Select None': '不要選取',
    'Select columns to display': '請選取要顯示的資料欄'
  },
  ConfirmationDialog: {
    Cancel: '取消',
    Confirm: '確認'
  },
  CopyToClipboard: {
    Copied: '已複製',
    'Copy to Clipboard': '複製到剪貼簿'
  },
  DataTable: {
    'No Results': '沒有結果'
  },
  DataTableItem: {
    Options: '選項'
  },
  FieldTimeSelect: {
    'Please use format HHMM': '請使用 HH:MM 的格式'
  },
  GetIntentLabel: {
    Error: '錯誤',
    Inform: '通知',
    Success: '成功',
    Warning: '警告'
  },
  InputDate: {
    'Open calendar': '開啟行事曆'
  },
  InputDateRange: {
    'End date': '結束日期',
    'Start date': '開始日期'
  },
  InputFilters: {
    'Clear Filters': '清除 filter',
    'Filter List': 'Filter 清單',
    'bottom-start': '從下開始'
  },
  InputTimeSelect: {
    'Select time': '選取時間'
  },
  MessageBar: {
    DismissIntent: '關閉 {{intent}}'
  },
  ModalHeaderCloseButton: {
    Close: '關閉'
  },
  MonthPickerNav: {
    close: '關閉',
    'next year': '下一年度',
    'previous year': '上一年度'
  },
  PageSize: {
    Display: '顯示',
    of: '的'
  },
  Pagination: {
    'First page of results': '第一頁的結果',
    'Last page of results': '最後一頁的結果',
    'Next page of results': '下一頁的結果',
    'Previous page of results': '上一頁的結果',
    of: '的'
  },
  PanelHeader: {
    CloseTitle: '關閉 {{title}}'
  },
  PopoverFooter: {
    Done: '完成'
  },
  PromptDialog: {
    Cancel: '取消',
    Save: '儲存'
  },
  RangeSlider: {
    'Maximum Name': '最大 {{name}}',
    'Maximum Value': '最大值',
    'Minimum Name': '最小 {{name}}',
    'Minimum Value': '最小值'
  },
  RequiredStar: {
    required: '必填'
  },
  SelectOptions: {
    Loading: '正在載入',
    'No options': '沒有選項'
  },
  TabList: {
    Tabs: '索引標籤'
  }
};
var zhTW = (0, _i18n.mergeLocaleObjects)([], 'zh-TW', resources, _zhTW["default"]);
exports.zhTW = zhTW;
//# sourceMappingURL=zh-TW.js.map