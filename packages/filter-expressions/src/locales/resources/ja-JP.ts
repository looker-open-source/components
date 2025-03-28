
    
    import { mergeLocaleObjects } from '@looker/i18n'

    const resources = {
  "describe_date": {
    " complete": " 完了",
    "absolute prefix dateTime": "{{prefix}} {{dateTime}}",
    "ago": "前",
    "from now": "後",
    "is any time": "随時",
    "is before": "が指定日より前",
    "is day": "{{day}}",
    "is from dateTimeStart until dateTimeEnd": "{{dateTimeStart}} から {{dateTimeEnd}} まで",
    "is in month year": "{{year}} / {{month}}",
    "is in the last": "直近 {{describeInterval}}",
    "is in the year year": "{{year}} 年",
    "is interval ago": "{{interval}} 前",
    "is intervalStart intervalType for intervalEnd": "{{intervalStart}} {{intervalType}}（対象: {{intervalEnd}}）",
    "is not null": "null ではない",
    "is on dateTime": "{{dateTime}}",
    "is on or after": "次の日付以降",
    "is previous unitLabel": "以前の {{unitLabel}}",
    "is type unitLabel": "{{type}} {{unitLabel}}",
    "next": "次",
    "prefix interval timePassed": "{{prefix}} {{interval}} {{timePassed}}",
    "prefix now": "{{prefix}} 現在",
    "this": "この",
    "this startInterval to endInterval": "{{startInterval}}～{{endInterval}}",
    "value complete unitLabel": "{{value}}{{complete}} {{unitLabel}}"
  },
  "describe_is_any_value": {
    "any value": "任意の値"
  },
  "describe_is_item": {
    "is not value": "{{value}} ではない",
    "is value": "{{value}} である"
  },
  "describe_location": {
    "coords1 to coords2": "{{coords1}}～{{coords2}}",
    "distance unit from lat, lon": "{{distance}} {{unit}}（起点: {{lat}}、{{lon}}）",
    "is anywhere": "任意の場所",
    "is not null": "null ではない",
    "is null": "null である",
    "lat degrees north": "{{lat}}°N",
    "lat degrees south": "{{lat}}°S",
    "lon degrees east": "{{lon}}°E",
    "lon degrees west": "{{lon}}°W"
  },
  "describe_number": {
    "is in range range": "{{range}} の範囲内",
    "is not in range range": "{{range}} の範囲外"
  },
  "describe_string": {
    "blank": "空白",
    "contains value": "{{value}} を含む",
    "does not contain value": "{{value}} を含まない",
    "does not end with value": "{{value}} で終わらない",
    "does not start with value": "{{value}} で始まらない",
    "ends with value": "{{value}} で終わる",
    "starts with value": "{{value}} で始まる"
  },
  "get_distance_unit_labels": {
    "feet": "フィート",
    "kilometers": "キロメートル",
    "meters": "メートル",
    "miles": "マイル"
  },
  "get_months": {
    "April": "4 月",
    "August": "8 月",
    "December": "12 月",
    "February": "2 月",
    "January": "1 月",
    "July": "7 月",
    "June": "6 月",
    "March": "3 月",
    "May": "5 月",
    "November": "11 月",
    "October": "10 月",
    "September": "9 月"
  },
  "get_unit_label": {
    "complete day": "一日中",
    "complete days": "全日",
    "complete fiscal quarter": "一会計四半期中",
    "complete fiscal quarters": "全会計四半期",
    "complete fiscal year": "一会計年度中",
    "complete fiscal years": "全会計年度",
    "complete hour": "一時間中",
    "complete hours": "全時間",
    "complete minute": "一分間中",
    "complete minutes": "全分",
    "complete month": "一か月中",
    "complete months": "全月",
    "complete quarter": "一四半期中",
    "complete quarters": "全四半期",
    "complete second": "一秒間中",
    "complete seconds": "全秒",
    "complete week": "一週間中",
    "complete weeks": "全週",
    "complete year": "一年中",
    "complete years": "全年",
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
  "join_or": {
    "a or b": "{{a}} または {{b}}"
  },
  "summary": {
    "Value required": "値は必須です"
  }
}

    export const jaJP = mergeLocaleObjects(
      [
        
      ],
      'ja-JP',
      resources,
      
    )