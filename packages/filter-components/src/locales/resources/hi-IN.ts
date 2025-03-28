import dateLocale from 'date-fns/locale/hi'
    import {hiIN as componentsLocale} from '@looker/components'
import {hiIN as filterexpressionsLocale} from '@looker/filter-expressions'
    import { mergeLocaleObjects } from '@looker/i18n'

    const resources = {
  "AddRemoveButtons": {
    "Add": "जोड़ें",
    "Remove": "निकालें"
  },
  "before_after_units": {
    "days ago": "दिन पहले",
    "days from now": "दिन बाद",
    "fiscal quarter from now": "अब से शुरू होने वाली वित्तीय तिमाही",
    "fiscal quarters ago": "वित्तीय तिमाहियां पहले",
    "fiscal years ago": "वित्तीय वर्ष पहले",
    "fiscal years from now": "वित्तीय वर्षों बाद",
    "hours ago": "घंटे पहले",
    "hours from now": "घंटे बाद",
    "minutes ago": "मिनट पहले",
    "minutes from now": "मिनट बाद",
    "months ago": "महीने पहले",
    "months from now": "महीने बाद",
    "now": "अभी",
    "quarters ago": "तिमाहियां पहले",
    "quarters from now": "तिमाहियों बाद",
    "seconds ago": "सेकंड पहले",
    "seconds from now": "सेकंड बाद",
    "weeks ago": "सप्ताह पहले",
    "weeks from now": "सप्ताहों बाद",
    "years ago": "वर्ष पहले",
    "years from now": "वर्षों बाद"
  },
  "BeforeAfter": {
    "absolute": "(परम)",
    "relative": "(सापेक्षिक)"
  },
  "Between": {
    "AND": "और"
  },
  "date_units": {
    "day": "दिन",
    "days": "दिन",
    "fiscal quarter": "वित्तीय तिमाही",
    "fiscal quarters": "वित्तीय तिमाहियां",
    "fiscal year": "वित्तीय वर्ष",
    "fiscal years": "वित्तीय वर्ष",
    "hour": "घंटा",
    "hours": "घंटे",
    "minute": "मिनट",
    "minutes": "मिनट",
    "month": "महीना",
    "months": "महीने",
    "quarter": "तिमाही",
    "quarters": "तिमाहियां",
    "second": "सेकंड",
    "seconds": "सेकंड",
    "week": "सप्ताह",
    "weeks": "सप्ताह",
    "year": "वर्ष",
    "years": "वर्ष"
  },
  "DateRange": {
    "until (before)": "(पहले) तक"
  },
  "get_date_filter_options": {
    "is": "है",
    "is any time": "किसी भी समय है",
    "is before": "से पहले है",
    "is in range": "रेंज में है",
    "is in the last": "अंत में है",
    "is in the month": "महीने में है",
    "is in the year": "वर्ष में है",
    "is next": "अगला है",
    "is not null": "नल नहीं है",
    "is null": "नल है",
    "is on or after": "पर या बाद में है",
    "is on the day": "के दिन है",
    "is previous": "पिछला है",
    "is this": "यह है"
  },
  "get_filter_options": {
    "matches advanced": "मिलान (उन्नत)"
  },
  "get_location_filter_options": {
    "Box": "बॉक्स",
    "Circle": "वृत्त",
    "Location": "लोकेशन",
    "feet": "फ़ीट",
    "is anywhere": "कहीं भी है",
    "is not null": "नल नहीं है",
    "is null": "नल है",
    "kilometers": "किलोमीटर",
    "meters": "मीटर",
    "miles": "मील"
  },
  "get_number_filter_options": {
    "exclusive": "(असमावेशी)",
    "inclusive": "[समावेशी]",
    "is": "है",
    "is between": "के बीच है",
    "is greater": "> है",
    "is greater equal": ">= है",
    "is less": "< है",
    "is less equal": "<= है",
    "is not": "नहीं है",
    "is not between": "के बीच नहीं है",
    "is not null": "नल नहीं है",
    "is null": "नल है",
    "left exclusive": "(बायां-असमावेशी]",
    "right exclusive": "[दायां-असमावेशी)"
  },
  "get_relative_timeframe_presets": {
    "Last 14 Days": "अंतिम 14 दिन",
    "Last 180 Days": "अंतिम 180 दिन",
    "Last 28 Days": "अंतिम 28 दिन",
    "Last 30 Days": "अंतिम 30 दिन",
    "Last 365 Days": "अंतिम 365 दिन",
    "Last 7 Days": "अंतिम 7 दिन",
    "Last 90 Days": "अंतिम 90 दिन",
    "Previous Month": "पिछले महीने",
    "Previous Quarter": "पिछली तिमाही",
    "Previous Week": "पिछले सप्ताह",
    "Previous Year": "पिछला वर्ष",
    "This Month": "इस महीने",
    "This Quarter": "इस तिमाही",
    "This Week": "इस सप्ताह",
    "This Year": "इस साल",
    "Today": "आज",
    "Year To Date": "आज से पिछले एक साल का",
    "Yesterday": "कल का"
  },
  "get_string_filter_options": {
    "contains": "शामिल है",
    "doesnt contain": "शामिल नहीं है",
    "doesnt end with": "पर समाप्त नहीं होता है",
    "doesnt start with": "से शुरू नहीं होता है",
    "ends with": "पर समाप्त होता है",
    "is": "है",
    "is blank": "खाली है",
    "is not": "नहीं है",
    "is not blank": "खाली नहीं है",
    "is not null": "नल नहीं है",
    "is null": "नल है",
    "starts with": "से शुरू होता है"
  },
  "get_tier_filter_options": {
    "is": "है",
    "is any value": "कोई भी मान है",
    "is not": "नहीं है"
  },
  "get_user_attribute_option": {
    "matches a user attribute": "किसी उपयोगकर्ता के गुण से मिलान"
  },
  "NoMatchingFields": {
    "No Matching Fields": "कोई मिलता-जुलता फ़ील्ड नहीं",
    "Try Something Else": "अन्य खोज शब्द आज़माएं या शुरू करें और उपलब्ध फ़ील्ड ब्राउज़ करने के लिए किसी भी एक्सप्लोर का विस्तार करें।"
  },
  "NumberFilter": {
    "any value": "कोई भी मान"
  },
  "OperatorLabel": {
    "AND": "और",
    "OR": "या"
  },
  "past_units": {
    "complete days": "पूर्ण दिन",
    "complete fiscal quarters": "पूर्ण वित्तीय तिमाहियां",
    "complete fiscal years": "पूर्ण वित्तीय वर्ष",
    "complete hours": "पूर्ण घंटे",
    "complete minutes": "पूर्ण मिनट",
    "complete months": "पूर्ण महीने",
    "complete quarters": "पूर्ण तिमाहियां",
    "complete seconds": "पूर्ण सेकंड",
    "complete weeks": "पूर्ण सप्ताह",
    "complete years": "पूर्ण वर्ष"
  },
  "RadioGroup": {
    "any value": "कोई भी मान"
  },
  "ReactSelectCustomIcons": {
    "Clear all": "सभी साफ करें",
    "Remove": "निकालें",
    "Toggle": "टॉगल करें"
  },
  "Relative": {
    "ago": "पहले",
    "from now": "अब से"
  },
  "RelativeTimeframe": {
    "Choose a Timeframe": "एक टाइमफ़्रेम चुनें"
  },
  "RelativeTimeframePopoverContent": {
    "Custom": "कस्टम",
    "Presets": "प्रीसेट"
  },
  "RelativeTimeframePresets": {
    "More": "अधिक"
  },
  "use_filters_errors": {
    "Invalid value": "अमान्य मान",
    "No value is set for your user attribute": "आपकी उपयोगकर्ता विशेषता के लिए कोई मान सेट नहीं है",
    "Selection required": "चयन आवश्यक है"
  },
  "use_option_filtering": {
    "No values": "कोई मान नहीं",
    "No values match": "कोई मान इससे नहीं मिलता है"
  },
  "use_placeholder": {
    "any value": "कोई भी मान"
  },
  "use_suggestable": {
    "Error loading suggestions": "सुझाव लोड करने में त्रुटि हुई"
  },
  "use_validation_message": {
    "Value required": "मान आवश्यक"
  },
  "UserAttributes": {
    "placeholder": "चुनें..."
  }
}

    export const hiIN = mergeLocaleObjects(
      [
        componentsLocale,
filterexpressionsLocale,
      ],
      'hi-IN',
      resources,
      dateLocale,
    )