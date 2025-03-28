import dateLocale from 'date-fns/locale/zh-TW'
    import {zhTW as componentsLocale} from '@looker/components'
import {zhTW as filterexpressionsLocale} from '@looker/filter-expressions'
    import { mergeLocaleObjects } from '@looker/i18n'

    const resources = {
  "AddRemoveButtons": {
    "Add": "新增",
    "Remove": "移除"
  },
  "before_after_units": {
    "days ago": "天前",
    "days from now": "天後",
    "fiscal quarter from now": "會計季度 (從現在起算)",
    "fiscal quarters ago": "個會計季度前",
    "fiscal years ago": "個會計年度前",
    "fiscal years from now": "個會計年度後",
    "hours ago": "小時前",
    "hours from now": "小時後",
    "minutes ago": "分鐘前",
    "minutes from now": "分鐘後",
    "months ago": "個月前",
    "months from now": "個月後",
    "now": "現在",
    "quarters ago": "季前",
    "quarters from now": "季後",
    "seconds ago": "秒前",
    "seconds from now": "秒後",
    "weeks ago": "週前",
    "weeks from now": "週後",
    "years ago": "年前",
    "years from now": "年後"
  },
  "BeforeAfter": {
    "absolute": "(絕對值)",
    "relative": "(相對值)"
  },
  "Between": {
    "AND": "且"
  },
  "date_units": {
    "day": "天",
    "days": "天",
    "fiscal quarter": "會計季度",
    "fiscal quarters": "個會計季度",
    "fiscal year": "會計年度",
    "fiscal years": "個會計年度",
    "hour": "小時",
    "hours": "小時",
    "minute": "分鐘",
    "minutes": "分鐘",
    "month": "個月",
    "months": "個月",
    "quarter": "季",
    "quarters": "季",
    "second": "秒",
    "seconds": "秒",
    "week": "週",
    "weeks": "週",
    "year": "年",
    "years": "年"
  },
  "DateRange": {
    "until (before)": "直到 (早於)"
  },
  "get_date_filter_options": {
    "is": "為",
    "is any time": "為任何時間",
    "is before": "早於",
    "is in range": "在這個範圍內",
    "is in the last": "在過去",
    "is in the month": "在當月",
    "is in the year": "在這一年內",
    "is next": "是下一個",
    "is not null": "不是空值",
    "is null": "為空值",
    "is on or after": "在這天或之後",
    "is on the day": "在這天當天",
    "is previous": "是上一個",
    "is this": "是這個"
  },
  "get_filter_options": {
    "matches advanced": "相符項目 (進階)"
  },
  "get_location_filter_options": {
    "Box": "方塊",
    "Circle": "圓形",
    "Location": "位置",
    "feet": "英尺",
    "is anywhere": "為任何地方",
    "is not null": "不是空值",
    "is null": "為空值",
    "kilometers": "公里",
    "meters": "公尺",
    "miles": "英里"
  },
  "get_number_filter_options": {
    "exclusive": "(不含)",
    "inclusive": "[包含]",
    "is": "為",
    "is between": "介於",
    "is greater": "大於",
    "is greater equal": "大於或等於",
    "is less": "小於",
    "is less equal": "小於或等於",
    "is not": "不是",
    "is not between": "不介於",
    "is not null": "不是空值",
    "is null": "為空值",
    "left exclusive": "(不含左側]",
    "right exclusive": "[不含右側)"
  },
  "get_relative_timeframe_presets": {
    "Last 14 Days": "過去 14 天",
    "Last 180 Days": "過去 180 天",
    "Last 28 Days": "過去 28 天",
    "Last 30 Days": "過去 30 天",
    "Last 365 Days": "過去 365 天",
    "Last 7 Days": "過去 7 天",
    "Last 90 Days": "過去 90 天",
    "Previous Month": "上個月",
    "Previous Quarter": "上一季",
    "Previous Week": "上週",
    "Previous Year": "去年",
    "This Month": "本月",
    "This Quarter": "本季",
    "This Week": "本週",
    "This Year": "今年",
    "Today": "今天",
    "Year To Date": "本年迄今",
    "Yesterday": "昨天"
  },
  "get_string_filter_options": {
    "contains": "包含",
    "doesnt contain": "不含",
    "doesnt end with": "結尾不是",
    "doesnt start with": "開頭不是",
    "ends with": "結尾為",
    "is": "為",
    "is blank": "為空白",
    "is not": "不是",
    "is not blank": "不是空白",
    "is not null": "不是空值",
    "is null": "為空值",
    "starts with": "開頭為"
  },
  "get_tier_filter_options": {
    "is": "為",
    "is any value": "為任何值",
    "is not": "不是"
  },
  "get_user_attribute_option": {
    "matches a user attribute": "與使用者屬性相符"
  },
  "NoMatchingFields": {
    "No Matching Fields": "沒有任何相符的欄位",
    "Try Something Else": "請改用其他搜尋字詞，或是重新開始並展開任一探索，以便瀏覽可用欄位。"
  },
  "NumberFilter": {
    "any value": "任何值"
  },
  "OperatorLabel": {
    "AND": "且",
    "OR": "或"
  },
  "past_units": {
    "complete days": "天整",
    "complete fiscal quarters": "個完整會計季度",
    "complete fiscal years": "個完整會計年度",
    "complete hours": "小時整",
    "complete minutes": "分鐘整",
    "complete months": "個月整",
    "complete quarters": "季整",
    "complete seconds": "秒整",
    "complete weeks": "週整",
    "complete years": "年整"
  },
  "RadioGroup": {
    "any value": "任何值"
  },
  "ReactSelectCustomIcons": {
    "Clear all": "全部清除",
    "Remove": "移除",
    "Toggle": "切換"
  },
  "Relative": {
    "ago": "前",
    "from now": "後"
  },
  "RelativeTimeframe": {
    "Choose a Timeframe": "選取時間範圍"
  },
  "RelativeTimeframePopoverContent": {
    "Custom": "自訂",
    "Presets": "預設"
  },
  "RelativeTimeframePresets": {
    "More": "其他"
  },
  "use_filters_errors": {
    "Invalid value": "無效的值",
    "No value is set for your user attribute": "使用者屬性未設有任何值",
    "Selection required": "請選取"
  },
  "use_option_filtering": {
    "No values": "沒有任何值",
    "No values match": "沒有相符的值"
  },
  "use_placeholder": {
    "any value": "任何值"
  },
  "use_suggestable": {
    "Error loading suggestions": "載入建議時發生錯誤"
  },
  "use_validation_message": {
    "Value required": "必須提供值"
  },
  "UserAttributes": {
    "placeholder": "選取..."
  }
}

    export const zhTW = mergeLocaleObjects(
      [
        componentsLocale,
filterexpressionsLocale,
      ],
      'zh-TW',
      resources,
      dateLocale,
    )