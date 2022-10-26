"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.koKR = void 0;

var _merge = _interopRequireDefault(require("lodash/merge"));

var _ko = _interopRequireDefault(require("date-fns/locale/ko"));

var _filterExpressions = require("@looker/filter-expressions");

var _components = require("@looker/components");

var resources = {
  AddRemoveButtons: {
    Add: '추가',
    Remove: '제거'
  },
  before_after_units: {
    'days ago': '일 전',
    'days from now': '일 후(지금부터)',
    'fiscal quarter from now': '회계 분기 후(지금부터)',
    'fiscal quarters ago': '회계 분기 전',
    'fiscal years ago': '회계 연수 전',
    'fiscal years from now': '회계 연수 후(지금부터)',
    'hours ago': '시간 전',
    'hours from now': '시간 후(지금부터)',
    'minutes ago': '분 전',
    'minutes from now': '분 후(지금부터)',
    'months ago': '개월 전',
    'months from now': '개월 후(지금부터)',
    now: '지금',
    'quarters ago': '분기 전',
    'quarters from now': '분기 후(지금부터)',
    'seconds ago': '초 전',
    'seconds from now': '초 후(지금부터)',
    'weeks ago': '주 전',
    'weeks from now': '주 후(지금부터)',
    'years ago': '년 전',
    'years from now': '년 후(지금부터)'
  },
  BeforeAfter: {
    absolute: '(절대)',
    relative: '(상대)'
  },
  Between: {
    AND: '및'
  },
  date_units: {
    day: '일',
    days: '일',
    'fiscal quarter': '회계 분기',
    'fiscal quarters': '회계 분기',
    'fiscal year': '회계 연도',
    'fiscal years': '회계 연수',
    hour: '시간',
    hours: '시간',
    minute: '분',
    minutes: '분',
    month: '월',
    months: '월',
    quarter: '분기',
    quarters: '분기',
    second: '초',
    seconds: '초',
    week: '주',
    weeks: '주',
    year: '년',
    years: '년'
  },
  DateRange: {
    'until (before)': '기한'
  },
  get_date_filter_options: {
    is: '이(가)',
    'is any time': '이(가) 모든 시간임',
    'is before': '이(가) 다음보다 앞에 옴',
    'is in range': '이(가) 다음 범위임',
    'is in the last': '이(가) 다음 지난 기간에 속함',
    'is in the month': '이(가) 다음 월임',
    'is in the year': '이(가) 다음 연도임',
    'is next': '이(가) 다음임',
    'is not null': '이(가) null이 아님',
    'is null': '이(가) null임',
    'is on or after': '이(가) 다음과 위치가 같거나 그 뒤에 옴',
    'is on the day': '이(가) 다음 날짜임',
    'is previous': '이(가) 이전임',
    'is this': '이(가) 이 항목임'
  },
  get_filter_options: {
    'matches advanced': '일치(고급)'
  },
  get_location_filter_options: {
    Box: '상자',
    Circle: '원',
    Location: '위치',
    feet: '피트',
    'is anywhere': '이(가) 전체 지역에 있음',
    'is not null': '이(가) null이 아님',
    'is null': '이(가) null임',
    kilometers: 'km',
    meters: 'm',
    miles: '마일'
  },
  get_number_filter_options: {
    exclusive: '(제외)',
    inclusive: '[포함]',
    is: '이(가)',
    'is between': '이(가) 다음 두 값 사이임',
    'is greater': '이(가) >',
    'is greater equal': '이(가) >=',
    'is less': '이(가) <',
    'is less equal': '이(가) <=',
    'is not': '이(가) 다음이 아님',
    'is not between': '이(가) 다음 두 값 사이가 아님',
    'is not null': '이(가) null이 아님',
    'is null': '이(가) null임',
    'left exclusive': '(왼쪽-제외]',
    'right exclusive': '[오른쪽-제외)'
  },
  get_relative_timeframe_presets: {
    'Last 14 Days': '지난 14일',
    'Last 180 Days': '지난 180일',
    'Last 28 Days': '지난 28일',
    'Last 30 Days': '지난 30일',
    'Last 365 Days': '지난 365일',
    'Last 7 Days': '지난 7일',
    'Last 90 Days': '지난 90일',
    'Previous Month': '이전 달',
    'Previous Quarter': '이전 분기',
    'Previous Week': '이전 주',
    'Previous Year': '이전 연도',
    'This Month': '이번 달',
    'This Quarter': '이번 분기',
    'This Week': '이번 주',
    'This Year': '이번 연도',
    Today: '오늘',
    'Year To Date': '연간 누계(YTD)',
    Yesterday: '어제'
  },
  get_string_filter_options: {
    contains: '포함',
    'doesnt contain': '포함 안 함',
    'doesnt end with': '다음으로 종료 안 함',
    'doesnt start with': '다음으로 시작 안 함',
    'ends with': '다음으로 종료',
    is: '이(가)',
    'is blank': '이(가) 비어 있음',
    'is not': '이(가) 다음이 아님',
    'is not blank': '이(가) 비어 있지 않음',
    'is not null': '이(가) null이 아님',
    'is null': '이(가) null임',
    'starts with': '다음으로 시작'
  },
  get_tier_filter_options: {
    is: '이(가)',
    'is any value': '기(가) 모든 값임',
    'is not': '이(가) 다음이 아님'
  },
  get_user_attribute_option: {
    'matches a user attribute': '사용자 특성과 일치함'
  },
  MultiInput: {
    'Clear all': '',
    Remove: '',
    Toggle: ''
  },
  NumberFilter: {
    'any value': '모든 값'
  },
  OperatorLabel: {
    AND: '및',
    OR: '또는'
  },
  past_units: {
    'complete days': '전체 일',
    'complete fiscal quarters': '전체 회계 분기',
    'complete fiscal years': '전체 회계 연수',
    'complete hours': '전체 시간',
    'complete minutes': '전체 분',
    'complete months': '전체 월',
    'complete quarters': '전체 분기',
    'complete seconds': '전체 초',
    'complete weeks': '전체 주',
    'complete years': '전체 년'
  },
  RadioGroup: {
    'any value': '모든 값'
  },
  ReactSelectCustomIcons: {
    'Clear all': '모두 지우기',
    Remove: '제거',
    Toggle: '전환'
  },
  Relative: {
    ago: '전',
    'from now': '지금부터'
  },
  RelativeTimeframe: {
    'Choose a Timeframe': '기간 선택'
  },
  RelativeTimeframePopoverContent: {
    Custom: '사용자 지정',
    Presets: '기본 설정'
  },
  RelativeTimeframePresets: {
    More: '더 보기'
  },
  use_filters_errors: {
    'Invalid value': '잘못된 값',
    'No value is set for your user attribute': '사용자 특성에 설정된 값 없음',
    'Selection required': '선택 필요'
  },
  use_option_filtering: {
    'No values': '값 없음',
    'No values match': '일치하는 값 없음'
  },
  use_placeholder: {
    'any value': '모든 값'
  },
  use_suggestable: {
    'Error loading suggestions': '추천 로드 중 오류 발생'
  },
  use_validation_message: {
    'Value required': '값 필요'
  }
};
var koKR = {
  dateLocale: _ko["default"],
  locale: 'ko-KR',
  resources: {
    'ko-KR': (0, _merge["default"])({}, resources, _filterExpressions.koKR.resources['ko-KR'], _components.koKR.resources['ko-KR'])
  }
};
exports.koKR = koKR;
//# sourceMappingURL=ko-KR.js.map