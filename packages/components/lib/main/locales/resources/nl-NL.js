"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.nlNL = void 0;
var _nl = _interopRequireDefault(require("date-fns/locale/nl"));
var _i18n = require("@looker/i18n");

var resources = {
  AdvancedInputControls: {
    'Clear Field': 'Veld wissen'
  },
  AvatarButton: {
    'Profile Picture': 'Profielfoto'
  },
  AvatarUser: {
    Avatar: 'Avatar'
  },
  BulkActions: {
    AllPageCountDisplayedSelected: 'Alle {{pageCount}} weergegeven items geselecteerd',
    AllTotalCountSelected: 'Alle {{totalCount}} items geselecteerd',
    'Bulk Actions': 'Bulkacties',
    'Clear Selection': 'Selectie wissen',
    SelectAllCountResults: 'Selecteer alle {{totalCount}} resultaten',
    SelectedCountOfTotalDisplayed: '{{selectedItemCount}} van de {{pageCount}} weergegeven items geselecteerd'
  },
  CalendarNav: {
    'next month': 'volgende maand',
    'previous month': 'vorige maand'
  },
  CheckMarkMixed: {
    'Check Mark Mixed': 'Gemengd vinkje'
  },
  Chip: {
    Delete: 'Verwijderen'
  },
  ColumnSelector: {
    Apply: 'Toepassen',
    Cancel: 'Annuleren',
    'Select All': 'Alles selecteren',
    'Select None': 'Niets selecteren',
    'Select columns to display': 'Weer te geven kolommen selecteren'
  },
  ConfirmationDialog: {
    Cancel: 'Annuleren',
    Confirm: 'Bevestigen'
  },
  CopyToClipboard: {
    Copied: 'Gekopieerd',
    'Copy to Clipboard': 'Kopiëren naar Klembord'
  },
  DataTable: {
    'No Results': 'Geen resultaten'
  },
  DataTableItem: {
    Options: 'Opties'
  },
  FieldTimeSelect: {
    'Please use format HHMM': 'Gebruik de indeling UU:MM'
  },
  GetIntentLabel: {
    Error: 'Fout',
    Inform: 'Informeren',
    Success: 'Geslaagd',
    Warning: 'Waarschuwing'
  },
  InputDate: {
    'Open calendar': 'Kalender openen'
  },
  InputDateRange: {
    'End date': 'Einddatum',
    'Start date': 'Startdatum'
  },
  InputFilters: {
    'Clear Filters': 'Filters wissen',
    'Filter List': 'Filterlijst',
    'bottom-start': 'onder-start'
  },
  InputTimeSelect: {
    'Select time': 'Tijd selecteren'
  },
  MessageBar: {
    DismissIntent: '{{intent}} sluiten'
  },
  ModalHeaderCloseButton: {
    Close: 'Sluiten'
  },
  MonthPickerNav: {
    close: 'sluiten',
    'next year': 'volgend jaar',
    'previous year': 'vorig jaar'
  },
  PageSize: {
    Display: 'Weergeven',
    of: 'van'
  },
  Pagination: {
    'First page of results': 'Eerste pagina resultaten',
    'Last page of results': 'Laatste pagina resultaten',
    'Next page of results': 'Volgende pagina resultaten',
    'Previous page of results': 'Vorige pagina resultaten',
    of: 'van'
  },
  PanelHeader: {
    CloseTitle: '{{title}} sluiten'
  },
  PopoverFooter: {
    Done: 'Gereed'
  },
  PromptDialog: {
    Cancel: 'Annuleren',
    Save: 'Opslaan'
  },
  RangeSlider: {
    'Maximum Name': 'Maximaal {{name}}',
    'Maximum Value': 'Maximumwaarden',
    'Minimum Name': 'Minimaal {{name}}',
    'Minimum Value': 'Minimumwaarden'
  },
  RequiredStar: {
    required: 'verplicht'
  },
  SelectOptions: {
    Loading: 'Laden',
    'No options': 'Geen opties'
  },
  TabList: {
    Tabs: 'Tabbladen'
  }
};
var nlNL = (0, _i18n.mergeLocaleObjects)([], 'nl-NL', resources, _nl["default"]);
exports.nlNL = nlNL;
//# sourceMappingURL=nl-NL.js.map