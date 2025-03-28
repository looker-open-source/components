import dateLocale from 'date-fns/locale/ko'
    
    import { mergeLocaleObjects } from '@looker/i18n'

    const resources = {
  "AdvancedInputControls": {
    "Clear Field": "필드 지우기"
  },
  "AvatarButton": {
    "Profile Picture": "프로필 사진"
  },
  "AvatarUser": {
    "Avatar": "아바타"
  },
  "BulkActions": {
    "AllPageCountDisplayedSelected": "표시된 항목 {{pageCount}}개 모두 선택됨",
    "AllTotalCountSelected": "항목 {{totalCount}}개 모두 선택됨",
    "Bulk Actions": "일괄 작업",
    "Clear Selection": "항목 선택 해제",
    "SelectAllCountResults": "검색결과 {{totalCount}}개 모두 선택",
    "SelectedCountOfTotalDisplayed": "표시된 항목 {{pageCount}}개 중 {{selectedItemCount}}개 선택됨"
  },
  "CalendarNav": {
    "next month": "다음 달",
    "previous month": "지난달"
  },
  "CheckMarkMixed": {
    "Check Mark Mixed": "체크박스 일부 선택됨"
  },
  "Chip": {
    "Delete": "삭제"
  },
  "ColumnSelector": {
    "Apply": "적용",
    "Cancel": "취소",
    "Select All": "모두 선택",
    "Select None": "모두 선택 해제",
    "Select columns to display": "표시할 열 선택"
  },
  "ConfirmationDialog": {
    "Cancel": "취소",
    "Confirm": "확인"
  },
  "CopyToClipboard": {
    "Copied": "복사됨",
    "Copy to Clipboard": "클립보드로 복사"
  },
  "DataTable": {
    "No Results": "결과 없음"
  },
  "DataTableItem": {
    "Options": "옵션"
  },
  "FieldTimeSelect": {
    "Please use format HHMM": "HH:MM 형식을 사용하세요."
  },
  "GetIntentLabel": {
    "Error": "오류",
    "Inform": "알림",
    "Success": "성공",
    "Warning": "경고"
  },
  "InputDate": {
    "Open calendar": "캘린더 열기"
  },
  "InputDateRange": {
    "End date": "종료일",
    "Start date": "시작일"
  },
  "InputFilters": {
    "Clear Filters": "필터 지우기",
    "Filter List": "필터 목록"
  },
  "InputTimeSelect": {
    "Select time": "시간 선택"
  },
  "MessageBar": {
    "DismissIntent": "{{intent}} 닫기"
  },
  "ModalHeaderCloseButton": {
    "Close": "닫기"
  },
  "MonthPickerNav": {
    "close": "닫기",
    "next year": "다음 연도",
    "previous year": "이전 연도"
  },
  "PageSize": {
    "Display": "표시",
    "of": "/"
  },
  "Pagination": {
    "First page of results": "결과의 첫 페이지",
    "Last page of results": "결과의 마지막 페이지",
    "Next page of results": "결과의 다음 페이지",
    "Previous page of results": "결과의 이전 페이지",
    "of": "/"
  },
  "PanelHeader": {
    "CloseTitle": "{{title}} 닫기"
  },
  "PopoverFooter": {
    "Done": "완료"
  },
  "ProgressDuet": {
    "Processing request": "요청 처리 중"
  },
  "PromptDialog": {
    "Cancel": "취소",
    "Save": "저장"
  },
  "RangeSlider": {
    "Maximum Name": "최대 {{name}}",
    "Maximum Value": "최댓값",
    "Minimum Name": "최소 {{name}}",
    "Minimum Value": "최솟값"
  },
  "RequiredStar": {
    "required": "필수"
  },
  "SelectOptions": {
    "Loading": "로드 중",
    "No options": "옵션 없음"
  },
  "TabList": {
    "Tabs": "탭"
  }
}

    export const koKR = mergeLocaleObjects(
      [
        
      ],
      'ko-KR',
      resources,
      dateLocale,
    )