"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hiIN = void 0;
var _hi = _interopRequireDefault(require("date-fns/locale/hi"));
var _i18n = require("@looker/i18n");

var resources = {
  AdvancedInputControls: {
    'Clear Field': 'फ़ील्ड साफ़ करें'
  },
  AvatarButton: {
    'Profile Picture': 'प्रोफ़ाइल फ़ोटो'
  },
  AvatarUser: {
    Avatar: 'अवतार'
  },
  BulkActions: {
    AllPageCountDisplayedSelected: 'सभी {{pageCount}} दिखाई गई वस्तुएँ चुनी गई',
    AllTotalCountSelected: 'सभी {{totalCount}} वस्तुएँ चुनी गई',
    'Bulk Actions': 'बल्क क्रियाएँ',
    'Clear Selection': 'चयन साफ़ करें',
    SelectAllCountResults: 'सभी {{totalCount}} परिणाम चुनें',
    SelectedCountOfTotalDisplayed: '{{pageCount}} के {{selectedItemCount}} दिखाई गई वस्तुएँ चुनी गई'
  },
  CalendarNav: {
    'next month': 'अगले महीने',
    'previous month': 'पिछले महीने'
  },
  CheckMarkMixed: {
    'Check Mark Mixed': 'चेक मार्क मिलाया गया'
  },
  Chip: {
    Delete: 'मिटाएं'
  },
  ColumnSelector: {
    Apply: 'लागू करें',
    Cancel: 'रद्द करें',
    'Select All': 'सभी को चुनें',
    'Select None': 'कोई नहीं चुनें',
    'Select columns to display': 'दिखाने के लिए कॉलम चुनें'
  },
  ConfirmationDialog: {
    Cancel: 'रद्द करें',
    Confirm: 'पुष्टि करें'
  },
  CopyToClipboard: {
    Copied: 'कॉपी किया गया',
    'Copy to Clipboard': 'क्लिपबोर्ड पर कॉपी करें'
  },
  DataTable: {
    'No Results': 'कोई परिणाम नहीं'
  },
  DataTableItem: {
    Options: 'विकल्प'
  },
  FieldTimeSelect: {
    'Please use format HHMM': 'कृपया HH:MM फ़ॉर्मेट का इस्तेमाल करें'
  },
  GetIntentLabel: {
    Error: 'त्रुटि',
    Inform: 'जानकारी दें',
    Success: 'सफल',
    Warning: 'चेतावनी'
  },
  InputDate: {
    'Open calendar': 'कैलेंडर खोलें'
  },
  InputDateRange: {
    'End date': 'समाप्ति दिनांक',
    'Start date': 'शुरू होने का दिनांक'
  },
  InputFilters: {
    'Clear Filters': 'फ़िल्टर साफ़ करें',
    'Filter List': 'सूची फ़िल्टर करें',
    'bottom-start': 'बॉटम-स्टार्ट'
  },
  InputTimeSelect: {
    'Select time': 'समय चुनें'
  },
  MessageBar: {
    DismissIntent: '{{intent}} खारिज करें'
  },
  ModalHeaderCloseButton: {
    Close: 'बंद करें'
  },
  MonthPickerNav: {
    close: 'बंद करें',
    'next year': 'अगला वर्ष',
    'previous year': 'पिछला वर्ष'
  },
  PageSize: {
    Display: 'प्रदर्शित करें',
    of: 'में से'
  },
  Pagination: {
    'First page of results': 'परिणामों का पहला पेज',
    'Last page of results': 'परिणामों का अंतिम पेज',
    'Next page of results': 'परिणामों का अगला पेज',
    'Previous page of results': 'परिणामों का पिछला पेज',
    of: 'में से'
  },
  PanelHeader: {
    CloseTitle: '{{title}} बंद करें'
  },
  PopoverFooter: {
    Done: 'हो गया'
  },
  PromptDialog: {
    Cancel: 'रद्द करें',
    Save: 'सहेजें'
  },
  RangeSlider: {
    'Maximum Name': 'अधिकतम {{name}}',
    'Maximum Value': 'अधिकतम मान',
    'Minimum Name': 'न्यूनतम {{name}}',
    'Minimum Value': 'न्यूनतम मान'
  },
  RequiredStar: {
    required: 'आवश्यक'
  },
  SelectOptions: {
    Loading: 'लोड हो रहा है',
    'No options': 'कोई विकल्प नहीं'
  },
  TabList: {
    Tabs: 'टैब'
  }
};
var hiIN = (0, _i18n.mergeLocaleObjects)([], 'hi-IN', resources, _hi["default"]);
exports.hiIN = hiIN;
//# sourceMappingURL=hi-IN.js.map