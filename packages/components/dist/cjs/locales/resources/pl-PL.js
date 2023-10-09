"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.plPL = void 0;
var _pl = _interopRequireDefault(require("date-fns/locale/pl"));
var _i18n = require("@looker/i18n");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var resources = {
  AdvancedInputControls: {
    'Clear Field': 'Wyczyść pole'
  },
  AvatarButton: {
    'Profile Picture': 'Zdjęcie profilowe'
  },
  AvatarUser: {
    Avatar: 'Awatar'
  },
  BulkActions: {
    AllPageCountDisplayedSelected: 'Wybrano wszystkie wyświetlone elementy ({{pageCount}})',
    AllTotalCountSelected: 'Wybrano wszystkie elementy ({{totalCount}})',
    'Bulk Actions': 'Działania zbiorcze',
    'Clear Selection': 'Odznacz',
    SelectAllCountResults: 'Wybierz wszystkie wyniki ({{totalCount}})',
    SelectedCountOfTotalDisplayed: 'Wybrano {{selectedItemCount}} z {{pageCount}} wyświetlonych elementów'
  },
  CalendarNav: {
    'next month': 'następny miesiąc',
    'previous month': 'poprzedni miesiąc'
  },
  CheckMarkMixed: {
    'Check Mark Mixed': 'Znacznik wyboru Mieszane'
  },
  Chip: {
    Delete: 'Usuń'
  },
  ColumnSelector: {
    Apply: 'Zastosuj',
    Cancel: 'Anuluj',
    'Select All': 'Wybierz wszystko',
    'Select None': 'Bez zaznaczenia',
    'Select columns to display': 'Wybierz kolumny do wyświetlenia'
  },
  ConfirmationDialog: {
    Cancel: 'Anuluj',
    Confirm: 'Potwierdź'
  },
  CopyToClipboard: {
    Copied: 'Skopiowano',
    'Copy to Clipboard': 'Kopiuj do schowka'
  },
  DataTable: {
    'No Results': 'Brak wyników'
  },
  DataTableItem: {
    Options: 'Opcje'
  },
  FieldTimeSelect: {
    'Please use format HHMM': 'Użyj formatu GG:MM'
  },
  GetIntentLabel: {
    Error: 'Błąd',
    Inform: 'Poinformuj',
    Success: 'Gotowe',
    Warning: 'Ostrzeżenie'
  },
  InputDate: {
    'Open calendar': 'Otwórz kalendarz'
  },
  InputDateRange: {
    'End date': 'Data zakończenia',
    'Start date': 'Data rozpoczęcia'
  },
  InputFilters: {
    'Clear Filters': 'Wyczyść filtry',
    'Filter List': 'Lista filtrów'
  },
  InputTimeSelect: {
    'Select time': 'Wybierz godzinę'
  },
  MessageBar: {
    DismissIntent: 'Odrzuć intencję {{intent}}'
  },
  ModalHeaderCloseButton: {
    Close: 'Zamknij'
  },
  MonthPickerNav: {
    close: 'zamknij',
    'next year': 'przyszły rok',
    'previous year': 'poprzedni rok'
  },
  PageSize: {
    Display: 'Wyświetlanie',
    of: 'z'
  },
  Pagination: {
    'First page of results': 'Pierwsza strona wyników',
    'Last page of results': 'Ostatnia strona wyników',
    'Next page of results': 'Następna strona wyników',
    'Previous page of results': 'Poprzednia strona wyników',
    of: 'z'
  },
  PanelHeader: {
    CloseTitle: 'Zamknij: {{title}}'
  },
  PopoverFooter: {
    Done: 'OK'
  },
  PromptDialog: {
    Cancel: 'Anuluj',
    Save: 'Zapisz'
  },
  RangeSlider: {
    'Maximum Name': 'Maksymalnie: {{name}}',
    'Maximum Value': 'Wartość maksymalna',
    'Minimum Name': 'Minimalnie: {{name}}',
    'Minimum Value': 'Wartość minimalna'
  },
  RequiredStar: {
    required: 'wymagane'
  },
  SelectOptions: {
    Loading: 'Wczytuję',
    'No options': 'Brak opcji'
  },
  TabList: {
    Tabs: 'Karty'
  }
};
var plPL = (0, _i18n.mergeLocaleObjects)([], 'pl-PL', resources, _pl["default"]);
exports.plPL = plPL;
//# sourceMappingURL=pl-PL.js.map