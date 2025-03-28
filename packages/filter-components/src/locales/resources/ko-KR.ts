import dateLocale from 'date-fns/locale/ko'
    import {koKR as componentsLocale} from '@looker/components'
import {koKR as filterexpressionsLocale} from '@looker/filter-expressions'
    import { mergeLocaleObjects } from '@looker/i18n'

    const resources = {
  "AddRemoveButtons": {
    "Add": "추가",
    "Remove": "삭제"
  },
  "before_after_units": {
    "days ago": "일 전",
    "days from now": "일 후",
    "fiscal quarter from now": "회계 분기 후",
    "fiscal quarters ago": "회계 분기 전",
    "fiscal years ago": "회계 연도 전",
    "fiscal years from now": "회계 연도 후",
    "hours ago": "시간 전",
    "hours from now": "시간 후",
    "minutes ago": "분 전",
    "minutes from now": "분 후",
    "months ago": "개월 전",
    "months from now": "개월 후",
    "now": "지금",
    "quarters ago": "분기 전",
    "quarters from now": "분기 후",
    "seconds ago": "초 전",
    "seconds from now": "초 후",
    "weeks ago": "주 전",
    "weeks from now": "주 후",
    "years ago": "년 전",
    "years from now": "년 후"
  },
  "BeforeAfter": {
    "absolute": "(절댓값)",
    "relative": "(상댓값)"
  },
  "Between": {
    "AND": "AND"
  },
  "date_units": {
    "day": "일",
    "days": "일",
    "fiscal quarter": "회계 분기",
    "fiscal quarters": "회계 분기",
    "fiscal year": "회계 연도",
    "fiscal years": "회계 연도",
    "hour": "시간",
    "hours": "시간",
    "minute": "분",
    "minutes": "분",
    "month": "월",
    "months": "개월",
    "quarter": "분기",
    "quarters": "분기",
    "second": "초",
    "seconds": "초",
    "week": "주",
    "weeks": "주",
    "year": "년",
    "years": "년"
  },
  "DateRange": {
    "until (before)": "종료 시간(그 이전):"
  },
  "get_date_filter_options": {
    "is": "다음과 일치:",
    "is any time": "시간 무관",
    "is before": "다음 날짜 이전:",
    "is in range": "다음 범위 내에 있음:",
    "is in the last": "지난",
    "is in the month": "해당 월",
    "is in the year": "연도:",
    "is next": "다음",
    "is not null": "null 아님",
    "is null": "null",
    "is on or after": "다음 날짜 또는 그 이후:",
    "is on the day": "날짜:",
    "is previous": "이전",
    "is this": "이번"
  },
  "get_filter_options": {
    "matches advanced": "일치(고급)"
  },
  "get_location_filter_options": {
    "Box": "Box",
    "Circle": "원",
    "Location": "위치",
    "feet": "피트",
    "is anywhere": "위치 무관",
    "is not null": "null 아님",
    "is null": "null",
    "kilometers": "킬로미터",
    "meters": "미터",
    "miles": "마일"
  },
  "get_number_filter_options": {
    "exclusive": "(제외)",
    "inclusive": "[포함]",
    "is": "다음과 일치:",
    "is between": "다음 두 값 사이에 있음:",
    "is greater": ">",
    "is greater equal": ">=",
    "is less": "<",
    "is less equal": "<=",
    "is not": "다음과 일치하지 않음:",
    "is not between": "다음 두 값 사이에 있지 않음:",
    "is not null": "null 아님",
    "is null": "null",
    "left exclusive": "(왼쪽 제외]",
    "right exclusive": "[오른쪽 제외)"
  },
  "get_relative_timeframe_presets": {
    "Last 14 Days": "지난 14일",
    "Last 180 Days": "지난 180일",
    "Last 28 Days": "지난 28일",
    "Last 30 Days": "지난 30일",
    "Last 365 Days": "지난 365일",
    "Last 7 Days": "지난 7일",
    "Last 90 Days": "지난 90일",
    "Previous Month": "지난달",
    "Previous Quarter": "이전 분기",
    "Previous Week": "지난주",
    "Previous Year": "이전 연도",
    "This Month": "이번 달",
    "This Quarter": "이번 분기",
    "This Week": "이번 주",
    "This Year": "올해",
    "Today": "오늘",
    "Year To Date": "올해 시작부터 오늘까지",
    "Yesterday": "어제"
  },
  "get_string_filter_options": {
    "contains": "포함",
    "doesnt contain": "다음을 포함하지 않음:",
    "doesnt end with": "다음으로 끝나지 않음:",
    "doesnt start with": "다음으로 시작하지 않음:",
    "ends with": "다음으로 끝남:",
    "is": "다음과 일치:",
    "is blank": "비어 있음",
    "is not": "다음과 일치하지 않음:",
    "is not blank": "비어 있지 않음",
    "is not null": "null 아님",
    "is null": "null",
    "starts with": "다음으로 시작:"
  },
  "get_tier_filter_options": {
    "is": "다음과 일치:",
    "is any value": "값 무관",
    "is not": "다음과 일치하지 않음:"
  },
  "get_user_attribute_option": {
    "matches a user attribute": "사용자 속성 일치"
  },
  "NoMatchingFields": {
    "No Matching Fields": "일치하는 필드 없음",
    "Try Something Else": "다른 검색어를 입력하거나 새로 시작한 다음 Explore를 펼쳐 사용 가능한 필드를 찾아보세요."
  },
  "NumberFilter": {
    "any value": "값 무관"
  },
  "OperatorLabel": {
    "AND": "AND",
    "OR": "OR"
  },
  "past_units": {
    "complete days": "일 전체",
    "complete fiscal quarters": "회계 분기 전체",
    "complete fiscal years": "회계 연도 전체",
    "complete hours": "시간 전체",
    "complete minutes": "분 전체",
    "complete months": "개월 전체",
    "complete quarters": "분기 전체",
    "complete seconds": "초 전체",
    "complete weeks": "주 전체",
    "complete years": "년 전체"
  },
  "RadioGroup": {
    "any value": "값 무관"
  },
  "ReactSelectCustomIcons": {
    "Clear all": "모두 지우기",
    "Remove": "삭제",
    "Toggle": "전환"
  },
  "Relative": {
    "ago": "전",
    "from now": "후"
  },
  "RelativeTimeframe": {
    "Choose a Timeframe": "시간 선택"
  },
  "RelativeTimeframePopoverContent": {
    "Custom": "커스텀",
    "Presets": "사전 설정"
  },
  "RelativeTimeframePresets": {
    "More": "더보기"
  },
  "use_filters_errors": {
    "Invalid value": "값이 잘못되었습니다.",
    "No value is set for your user attribute": "사용자 속성에 설정된 값이 없습니다.",
    "Selection required": "선택해야 합니다."
  },
  "use_option_filtering": {
    "No values": "값 없음",
    "No values match": "일치하는 값 없음"
  },
  "use_placeholder": {
    "any value": "값 무관"
  },
  "use_suggestable": {
    "Error loading suggestions": "추천 로드 중 오류 발생"
  },
  "use_validation_message": {
    "Value required": "값은 필수 항목입니다."
  },
  "UserAttributes": {
    "placeholder": "선택..."
  }
}

    export const koKR = mergeLocaleObjects(
      [
        componentsLocale,
filterexpressionsLocale,
      ],
      'ko-KR',
      resources,
      dateLocale,
    )