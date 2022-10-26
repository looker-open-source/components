"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fiFI = void 0;

var _fi = _interopRequireDefault(require("date-fns/locale/fi"));

var resources = {
  AdvancedInputControls: {
    'Clear Field': 'Tyhjennä kenttä'
  },
  AvatarButton: {
    'Profile Picture': 'Profiilikuva'
  },
  AvatarUser: {
    Avatar: 'Avatar'
  },
  BulkActions: {
    AllPageCountDisplayedSelected: 'Kaikki {{pageCount}} näytettyä kohdetta valittu',
    AllTotalCountSelected: 'Kaikki {{totalCount}} kohdetta valittu',
    'Bulk Actions': 'Joukkotoiminnot',
    'Clear Selection': 'Tyhjennä valinta',
    SelectAllCountResults: 'Valitse kaikki {{totalCount}} tulosta',
    SelectedCountOfTotalDisplayed: '{{selectedItemCount}}/{{pageCount}} näytettyä kohdetta valittu'
  },
  CalendarNav: {
    'next month': 'seuraava kuukausi',
    'previous month': 'edellinen kuukausi'
  },
  CheckMarkMixed: {
    'Check Mark Mixed': 'Valintamerkki sekoitettu'
  },
  Chip: {
    Delete: 'Poista'
  },
  ColumnSelector: {
    Apply: 'Käytä',
    Cancel: 'Peruuta',
    'Select All': 'Valitse kaikki',
    'Select None': 'Älä valitse mitään',
    'Select columns to display': 'Valitse näytettävät sarakkeet'
  },
  ConfirmationDialog: {
    Cancel: 'Peruuta',
    Confirm: 'Vahvista'
  },
  CopyToClipboard: {
    Copied: 'Kopioitu',
    'Copy to Clipboard': 'Kopioi leikepöydälle'
  },
  DataTable: {
    'No Results': 'Ei tuloksia'
  },
  DataTableItem: {
    Options: 'Asetukset'
  },
  FieldTimeSelect: {
    'Please enter a valid time': 'Lisää kelvollinen aika'
  },
  GetIntentLabel: {
    Error: 'Virhe',
    Inform: 'Tiedota',
    Success: 'Onnistui',
    Warning: 'Varoitus'
  },
  InputDate: {
    'Open calendar': 'Avaa kalenteri'
  },
  InputDateRange: {
    'End date': 'Päättymispäivämäärä',
    'Start date': 'Aloituspäivämäärä'
  },
  InputFilters: {
    'Clear Filters': 'Tyhjennä suodattimet',
    'Filter List': 'Suodatinluettelo',
    'bottom-start': 'aloitus pohjalta'
  },
  InputTimeSelect: {
    'Select time': 'Valitse aika'
  },
  MessageBar: {
    DismissIntent: 'Ohita {{intent}}'
  },
  ModalHeaderCloseButton: {
    Close: 'Sulje'
  },
  MonthPickerNav: {
    close: 'sulje',
    'next year': 'seuraava vuosi',
    'previous year': 'edellinen vuosi'
  },
  PageSize: {
    Display: 'Näytä',
    of: '/'
  },
  Pagination: {
    'First page of results': 'Ensimmäinen tulossivu',
    'Last page of results': 'Viimeinen tulossivu',
    'Next page of results': 'Seuraava tulossivu',
    'Previous page of results': 'Edellinen tulossivu',
    of: '/'
  },
  PanelHeader: {
    CloseTitle: 'Sulje {{title}}'
  },
  PopoverFooter: {
    Done: 'Valmis'
  },
  PromptDialog: {
    Cancel: 'Peruuta',
    Save: 'Tallenna'
  },
  RangeSlider: {
    'Maximum Value': 'Enimmäisarvo',
    'Minimum Value': 'Vähimmäisarvo'
  },
  RequiredStar: {
    required: 'tarvitaan'
  },
  SelectOptions: {
    Loading: 'Ladataan',
    'No options': 'Ei asetuksia'
  },
  TabList: {
    Tabs: 'Välilehdet'
  }
};
var fiFI = {
  dateLocale: _fi["default"],
  locale: 'fi-FI',
  resources: {
    'fi-FI': resources
  }
};
exports.fiFI = fiFI;
//# sourceMappingURL=fi-FI.js.map