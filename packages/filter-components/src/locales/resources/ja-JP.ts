import dateLocale from 'date-fns/locale/ja'
    import {jaJP as componentsLocale} from '@looker/components'
import {jaJP as filterexpressionsLocale} from '@looker/filter-expressions'
    import { mergeLocaleObjects } from '@looker/i18n'

    const resources = {
  "AddRemoveButtons": {
    "Add": "追加",
    "Remove": "削除"
  },
  "before_after_units": {
    "days ago": "日前",
    "days from now": "日後",
    "fiscal quarter from now": "会計四半期後",
    "fiscal quarters ago": "会計四半期前",
    "fiscal years ago": "会計年度前",
    "fiscal years from now": "会計年度後",
    "hours ago": "時間前",
    "hours from now": "時間後",
    "minutes ago": "分前",
    "minutes from now": "分後",
    "months ago": "か月前",
    "months from now": "か月後",
    "now": "今",
    "quarters ago": "四半期前",
    "quarters from now": "四半期後",
    "seconds ago": "秒前",
    "seconds from now": "秒後",
    "weeks ago": "週間前",
    "weeks from now": "週間後",
    "years ago": "年前",
    "years from now": "年後"
  },
  "BeforeAfter": {
    "absolute": "（絶対）",
    "relative": "（相対）"
  },
  "Between": {
    "AND": "および"
  },
  "date_units": {
    "day": "日",
    "days": "日",
    "fiscal quarter": "会計四半期",
    "fiscal quarters": "会計四半期",
    "fiscal year": "会計年度",
    "fiscal years": "会計年度",
    "hour": "時間",
    "hours": "時間",
    "minute": "分",
    "minutes": "分",
    "month": "月",
    "months": "月",
    "quarter": "四半期",
    "quarters": "四半期",
    "second": "秒",
    "seconds": "秒",
    "week": "週",
    "weeks": "週",
    "year": "年",
    "years": "年"
  },
  "DateRange": {
    "until (before)": "から次（指定日より前）まで"
  },
  "get_date_filter_options": {
    "is": "次に一致",
    "is any time": "随時",
    "is before": "が指定日より前",
    "is in range": "次の範囲内",
    "is in the last": "直近",
    "is in the month": "月",
    "is in the year": "次の年",
    "is next": "次の",
    "is not null": "null ではない",
    "is null": "null である",
    "is on or after": "次の日付以降",
    "is on the day": "当日",
    "is previous": "前の",
    "is this": "この"
  },
  "get_filter_options": {
    "matches advanced": "次に一致する（高度）"
  },
  "get_location_filter_options": {
    "Box": "ボックス",
    "Circle": "円",
    "Location": "場所",
    "feet": "フィート",
    "is anywhere": "任意の場所",
    "is not null": "null ではない",
    "is null": "null である",
    "kilometers": "キロメートル",
    "meters": "メートル",
    "miles": "マイル"
  },
  "get_number_filter_options": {
    "exclusive": "（排他）",
    "inclusive": "[含む]",
    "is": "次に一致",
    "is between": "次の範囲内",
    "is greater": ">",
    "is greater equal": ">=",
    "is less": "<",
    "is less equal": "<=",
    "is not": "等しくない",
    "is not between": "次の範囲外",
    "is not null": "null ではない",
    "is null": "null である",
    "left exclusive": "（左側を除く]",
    "right exclusive": "[右側を除く）"
  },
  "get_relative_timeframe_presets": {
    "Last 14 Days": "最後 14 日間",
    "Last 180 Days": "最後 180 日間",
    "Last 28 Days": "最後 28 日間",
    "Last 30 Days": "最後 30 日間",
    "Last 365 Days": "最後 365 日間",
    "Last 7 Days": "最後 7 日間",
    "Last 90 Days": "最後 90 日間",
    "Previous Month": "前月",
    "Previous Quarter": "前四半期",
    "Previous Week": "前週",
    "Previous Year": "前年",
    "This Month": "今月",
    "This Quarter": "現在の四半期",
    "This Week": "今週",
    "This Year": "今年",
    "Today": "今日",
    "Year To Date": "年初来",
    "Yesterday": "昨日"
  },
  "get_string_filter_options": {
    "contains": "次を含む",
    "doesnt contain": "次を含まない",
    "doesnt end with": "次で終わらない",
    "doesnt start with": "次で始まらない",
    "ends with": "次で終わる",
    "is": "次に一致",
    "is blank": "空白である",
    "is not": "等しくない",
    "is not blank": "空白ではない",
    "is not null": "null ではない",
    "is null": "null である",
    "starts with": "次で始まる"
  },
  "get_tier_filter_options": {
    "is": "次に一致",
    "is any value": "任意の値",
    "is not": "等しくない"
  },
  "get_user_attribute_option": {
    "matches a user attribute": "次のユーザー属性と一致する"
  },
  "NoMatchingFields": {
    "No Matching Fields": "一致するフィールドがありません",
    "Try Something Else": "別の検索キーワードを試してください。または、最初からやり直し、任意の Explore を開いて、使用可能なフィールドを参照してください。"
  },
  "NumberFilter": {
    "any value": "任意の値"
  },
  "OperatorLabel": {
    "AND": "および",
    "OR": "または"
  },
  "past_units": {
    "complete days": "全日",
    "complete fiscal quarters": "全会計四半期",
    "complete fiscal years": "全会計年度",
    "complete hours": "全時間",
    "complete minutes": "全分",
    "complete months": "全月",
    "complete quarters": "全四半期",
    "complete seconds": "全秒",
    "complete weeks": "全週",
    "complete years": "全年"
  },
  "RadioGroup": {
    "any value": "任意の値"
  },
  "ReactSelectCustomIcons": {
    "Clear all": "すべてをクリア",
    "Remove": "削除",
    "Toggle": "切り替え"
  },
  "Relative": {
    "ago": "前",
    "from now": "後"
  },
  "RelativeTimeframe": {
    "Choose a Timeframe": "期間の選択"
  },
  "RelativeTimeframePopoverContent": {
    "Custom": "カスタム",
    "Presets": "プリセット"
  },
  "RelativeTimeframePresets": {
    "More": "詳細"
  },
  "use_filters_errors": {
    "Invalid value": "無効な値です",
    "No value is set for your user attribute": "ユーザー属性に値が設定されていません",
    "Selection required": "選択は必須です"
  },
  "use_option_filtering": {
    "No values": "値なし",
    "No values match": "一致する値はありません"
  },
  "use_placeholder": {
    "any value": "任意の値"
  },
  "use_suggestable": {
    "Error loading suggestions": "候補の読み込み中にエラーが発生しました"
  },
  "use_validation_message": {
    "Value required": "値は必須です"
  },
  "UserAttributes": {
    "placeholder": "選択..."
  }
}

    export const jaJP = mergeLocaleObjects(
      [
        componentsLocale,
filterexpressionsLocale,
      ],
      'ja-JP',
      resources,
      dateLocale,
    )