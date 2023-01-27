/*

 MIT License

 Copyright (c) 2023 Google LLC

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.

 */

import dateLocale from 'date-fns/locale/hi'

import { mergeLocaleObjects } from '@looker/i18n'

const resources = {
  AdvancedInputControls: {
    'Clear Field': 'फ़ील्ड साफ़ करें',
  },
  AvatarButton: {
    'Profile Picture': 'प्रोफ़ाइल फ़ोटो',
  },
  AvatarUser: {
    Avatar: 'अवतार',
  },
  BulkActions: {
    AllPageCountDisplayedSelected: 'सभी {{pageCount}} दिखाई गई वस्तुएँ चुनी गई',
    AllTotalCountSelected: 'सभी {{totalCount}} वस्तुएँ चुनी गई',
    'Bulk Actions': 'बल्क क्रियाएँ',
    'Clear Selection': 'चयन साफ़ करें',
    SelectAllCountResults: 'सभी {{totalCount}} परिणाम चुनें',
    SelectedCountOfTotalDisplayed:
      '{{pageCount}} के {{selectedItemCount}} दिखाई गई वस्तुएँ चुनी गई',
  },
  CalendarNav: {
    'next month': 'अगले महीने',
    'previous month': 'पिछले महीने',
  },
  CheckMarkMixed: {
    'Check Mark Mixed': 'चेक मार्क मिलाया गया',
  },
  Chip: {
    Delete: 'मिटाएं',
  },
  ColumnSelector: {
    Apply: 'लागू करें',
    Cancel: 'रद्द करें',
    'Select All': 'सभी को चुनें',
    'Select None': 'कोई नहीं चुनें',
    'Select columns to display': 'दिखाने के लिए कॉलम चुनें',
  },
  ConfirmationDialog: {
    Cancel: 'रद्द करें',
    Confirm: 'पुष्टि करें',
  },
  CopyToClipboard: {
    Copied: 'कॉपी किया गया',
    'Copy to Clipboard': 'क्लिपबोर्ड पर कॉपी करें',
  },
  DataTable: {
    'No Results': 'कोई परिणाम नहीं',
  },
  DataTableItem: {
    Options: 'विकल्प',
  },
  FieldTimeSelect: {
    'Please use format HHMM': 'कृपया HH:MM फ़ॉर्मेट का इस्तेमाल करें',
  },
  GetIntentLabel: {
    Error: 'त्रुटि',
    Inform: 'जानकारी दें',
    Success: 'सफल',
    Warning: 'चेतावनी',
  },
  InputDate: {
    'Open calendar': 'कैलेंडर खोलें',
  },
  InputDateRange: {
    'End date': 'समाप्ति दिनांक',
    'Start date': 'शुरू होने का दिनांक',
  },
  InputFilters: {
    'Clear Filters': 'फ़िल्टर साफ़ करें',
    'Filter List': 'सूची फ़िल्टर करें',
    'bottom-start': 'बॉटम-स्टार्ट',
  },
  InputTimeSelect: {
    'Select time': 'समय चुनें',
  },
  MessageBar: {
    DismissIntent: '{{intent}} खारिज करें',
  },
  ModalHeaderCloseButton: {
    Close: 'बंद करें',
  },
  MonthPickerNav: {
    close: 'बंद करें',
    'next year': 'अगला वर्ष',
    'previous year': 'पिछला वर्ष',
  },
  PageSize: {
    Display: 'प्रदर्शित करें',
    of: 'में से',
  },
  Pagination: {
    'First page of results': 'परिणामों का पहला पेज',
    'Last page of results': 'परिणामों का अंतिम पेज',
    'Next page of results': 'परिणामों का अगला पेज',
    'Previous page of results': 'परिणामों का पिछला पेज',
    of: 'में से',
  },
  PanelHeader: {
    CloseTitle: '{{title}} बंद करें',
  },
  PopoverFooter: {
    Done: 'हो गया',
  },
  PromptDialog: {
    Cancel: 'रद्द करें',
    Save: 'सहेजें',
  },
  RangeSlider: {
    'Maximum Name': 'अधिकतम {{name}}',
    'Maximum Value': 'अधिकतम मान',
    'Minimum Name': 'न्यूनतम {{name}}',
    'Minimum Value': 'न्यूनतम मान',
  },
  RequiredStar: {
    required: 'आवश्यक',
  },
  SelectOptions: {
    Loading: 'लोड हो रहा है',
    'No options': 'कोई विकल्प नहीं',
  },
  TabList: {
    Tabs: 'टैब',
  },
}

export const hiIN = mergeLocaleObjects([], 'hi-IN', resources, dateLocale)
