

import dateLocale from 'date-fns/locale/da';
import { mergeLocaleObjects } from '@looker/i18n';
const resources = {
  AdvancedInputControls: {
    'Clear Field': 'Ryd felt'
  },
  AvatarButton: {
    'Profile Picture': 'Profilbillede'
  },
  AvatarUser: {
    Avatar: 'Avatar'
  },
  BulkActions: {
    AllPageCountDisplayedSelected: 'Alle {{pageCount}} viste elementer er valgt',
    AllTotalCountSelected: 'Alle {{totalCount}} elementer er valgt',
    'Bulk Actions': 'Massehandlinger',
    'Clear Selection': 'Ryd markering',
    SelectAllCountResults: 'Vælg alle {{totalCount}} resultater',
    SelectedCountOfTotalDisplayed: '{{selectedItemCount}} af {{pageCount}} viste elementer er valgt'
  },
  CalendarNav: {
    'next month': 'næste måned',
    'previous month': 'forrige måned'
  },
  CheckMarkMixed: {
    'Check Mark Mixed': 'Flueben – blandet'
  },
  Chip: {
    Delete: 'Slet'
  },
  ColumnSelector: {
    Apply: 'Anvend',
    Cancel: 'Annuller',
    'Select All': 'Vælg alt',
    'Select None': 'Vælg ingen',
    'Select columns to display': 'Vælg de kolonner, der skal vises'
  },
  ConfirmationDialog: {
    Cancel: 'Annuller',
    Confirm: 'Bekræft'
  },
  CopyToClipboard: {
    Copied: 'Kopieret',
    'Copy to Clipboard': 'Kopiér til udklipsholder'
  },
  DataTable: {
    'No Results': 'Ingen resultater'
  },
  DataTableItem: {
    Options: 'Indstillinger'
  },
  FieldTimeSelect: {
    'Please use format HHMM': 'Brug formatet TT:MM'
  },
  GetIntentLabel: {
    Error: 'Fejl',
    Inform: 'Informer',
    Success: 'Fuldført',
    Warning: 'Advarsel'
  },
  InputDate: {
    'Open calendar': 'Åbn kalender'
  },
  InputDateRange: {
    'End date': 'Slutdato',
    'Start date': 'Startdato'
  },
  InputFilters: {
    'Clear Filters': 'Ryd filtre',
    'Filter List': 'Filtrer liste',
    'bottom-start': 'nederst-start'
  },
  InputTimeSelect: {
    'Select time': 'Vælg tidspunkt'
  },
  MessageBar: {
    DismissIntent: 'Afvis {{intent}}'
  },
  ModalHeaderCloseButton: {
    Close: 'Luk'
  },
  MonthPickerNav: {
    close: 'luk',
    'next year': 'næste år',
    'previous year': 'forrige år'
  },
  PageSize: {
    Display: 'Vis',
    of: 'af'
  },
  Pagination: {
    'First page of results': 'Første side med resultater',
    'Last page of results': 'Sidste side med resultater',
    'Next page of results': 'Næste side med resultater',
    'Previous page of results': 'Forrige side med resultater',
    of: 'af'
  },
  PanelHeader: {
    CloseTitle: 'Luk {{title}}'
  },
  PopoverFooter: {
    Done: 'Udført'
  },
  PromptDialog: {
    Cancel: 'Annuller',
    Save: 'Gem'
  },
  RangeSlider: {
    'Maximum Name': 'Maksimum {{name}}',
    'Maximum Value': 'Maksimumværdi',
    'Minimum Name': 'Minimum {{name}}',
    'Minimum Value': 'Minimumværdi'
  },
  RequiredStar: {
    required: 'krævet'
  },
  SelectOptions: {
    Loading: 'Indlæser',
    'No options': 'Ingen indstillinger'
  },
  TabList: {
    Tabs: 'Faner'
  }
};
export const daDK = mergeLocaleObjects([], 'da-DK', resources, dateLocale);
//# sourceMappingURL=da-DK.js.map