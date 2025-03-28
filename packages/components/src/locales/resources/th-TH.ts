import dateLocale from 'date-fns/locale/th'
    
    import { mergeLocaleObjects } from '@looker/i18n'

    const resources = {
  "AdvancedInputControls": {
    "Clear Field": "ล้างฟิลด์"
  },
  "AvatarButton": {
    "Profile Picture": "รูปโปรไฟล์"
  },
  "AvatarUser": {
    "Avatar": "อวาตาร์"
  },
  "BulkActions": {
    "AllPageCountDisplayedSelected": "เลือกรายการที่แสดงทั้งหมด {{pageCount}} รายการแล้ว",
    "AllTotalCountSelected": "เลือกรายการทั้งหมด {{totalCount}} รายการแล้ว",
    "Bulk Actions": "การดำเนินการเป็นกลุ่ม",
    "Clear Selection": "ล้างการเลือก",
    "SelectAllCountResults": "เลือกผลลัพธ์ทั้งหมด {{totalCount}} รายการ",
    "SelectedCountOfTotalDisplayed": "เลือกรายการที่แสดง {{selectedItemCount}} จาก {{pageCount}} รายการแล้ว"
  },
  "CalendarNav": {
    "next month": "เดือนถัดไป",
    "previous month": "เดือนที่แล้ว"
  },
  "CheckMarkMixed": {
    "Check Mark Mixed": "เลือกเครื่องหมายที่คละกัน"
  },
  "Chip": {
    "Delete": "ลบ"
  },
  "ColumnSelector": {
    "Apply": "ใช้",
    "Cancel": "ยกเลิก",
    "Select All": "เลือกทั้งหมด",
    "Select None": "ไม่เลือกเลย",
    "Select columns to display": "เลือกคอลัมน์ที่จะแสดง"
  },
  "ConfirmationDialog": {
    "Cancel": "ยกเลิก",
    "Confirm": "ยืนยัน"
  },
  "CopyToClipboard": {
    "Copied": "คัดลอกแล้ว",
    "Copy to Clipboard": "คัดลอกไปยังคลิปบอร์ด"
  },
  "DataTable": {
    "No Results": "ไม่มีผลลัพธ์"
  },
  "DataTableItem": {
    "Options": "ตัวเลือก"
  },
  "FieldTimeSelect": {
    "Please use format HHMM": "โปรดใช้รูปแบบ HH:MM"
  },
  "GetIntentLabel": {
    "Error": "ข้อผิดพลาด",
    "Inform": "แจ้ง",
    "Success": "สำเร็จ",
    "Warning": "การเตือน"
  },
  "InputDate": {
    "Open calendar": "เปิดปฏิทิน"
  },
  "InputDateRange": {
    "End date": "วันที่สิ้นสุด",
    "Start date": "วันที่เริ่มต้น"
  },
  "InputFilters": {
    "Clear Filters": "ล้างตัวกรอง",
    "Filter List": "รายการตัวกรอง",
    "bottom-start": "เริ่มจากจุดเริ่มต้น"
  },
  "InputTimeSelect": {
    "Select time": "เลือกเวลา"
  },
  "MessageBar": {
    "DismissIntent": "เลิก {{intent}}"
  },
  "ModalHeaderCloseButton": {
    "Close": "ปิด"
  },
  "MonthPickerNav": {
    "close": "ปิด",
    "next year": "ปีถัดไป",
    "previous year": "ปีที่แล้ว"
  },
  "PageSize": {
    "Display": "แสดง",
    "of": "ของ"
  },
  "Pagination": {
    "First page of results": "หน้าแรกของผลลัพธ์",
    "Last page of results": "หน้าสุดท้ายของผลลัพธ์",
    "Next page of results": "หน้าถัดไปของผลลัพธ์",
    "Previous page of results": "หน้าก่อนหน้าของผลลัพธ์",
    "of": "ของ"
  },
  "PanelHeader": {
    "CloseTitle": "ปิด {{title}}"
  },
  "PopoverFooter": {
    "Done": "เสร็จสิ้น"
  },
  "PromptDialog": {
    "Cancel": "ยกเลิก",
    "Save": "บันทึก"
  },
  "RangeSlider": {
    "Maximum Name": "{{name}} สูงสุด",
    "Maximum Value": "ค่าสูงสุด",
    "Minimum Name": "{{name}} ต่ำสุด",
    "Minimum Value": "ค่าต่ำสุด"
  },
  "RequiredStar": {
    "required": "จำเป็น"
  },
  "SelectOptions": {
    "Loading": "กำลังโหลด",
    "No options": "ไม่มีตัวเลือก"
  },
  "TabList": {
    "Tabs": "แท็บ"
  }
}

    export const thTH = mergeLocaleObjects(
      [
        
      ],
      'th-TH',
      resources,
      dateLocale,
    )