import dateLocale from 'date-fns/locale/it';
import { mergeLocaleObjects } from '@looker/i18n';
const resources = {
  AdvancedInputControls: {
    'Clear Field': 'Cancella campo'
  },
  AvatarButton: {
    'Profile Picture': 'Immagine del profilo'
  },
  AvatarUser: {
    Avatar: 'Avatar'
  },
  BulkActions: {
    AllPageCountDisplayedSelected: 'Tutti e {{pageCount}} gli elementi visualizzati selezionati',
    AllTotalCountSelected: 'Tutti e {{totalCount}} gli elementi selezionati',
    'Bulk Actions': 'Azioni collettive',
    'Clear Selection': 'Annulla selezione',
    SelectAllCountResults: 'Seleziona tutti e {{totalCount}} i risultati',
    SelectedCountOfTotalDisplayed: '{{selectedItemCount}} di {{pageCount}} elementi visualizzati selezionati'
  },
  CalendarNav: {
    'next month': 'mese successivo',
    'previous month': 'mese precedente'
  },
  CheckMarkMixed: {
    'Check Mark Mixed': 'Segno di spunta Misto'
  },
  Chip: {
    Delete: 'Elimina'
  },
  ColumnSelector: {
    Apply: 'Applica',
    Cancel: 'Annulla',
    'Select All': 'Seleziona tutto',
    'Select None': 'Deseleziona tutto',
    'Select columns to display': 'Seleziona colonne da visualizzare'
  },
  ConfirmationDialog: {
    Cancel: 'Annulla',
    Confirm: 'Conferma'
  },
  CopyToClipboard: {
    Copied: 'Elemento copiato',
    'Copy to Clipboard': 'Copia negli appunti'
  },
  DataTable: {
    'No Results': 'Nessun risultato'
  },
  DataTableItem: {
    Options: 'Opzioni'
  },
  FieldTimeSelect: {
    'Please use format HHMM': 'Utilizza il formato HH:MM'
  },
  GetIntentLabel: {
    Error: 'Errore',
    Inform: 'Informa',
    Success: 'Operazione completata',
    Warning: 'Avviso'
  },
  InputDate: {
    'Open calendar': 'Apri calendario'
  },
  InputDateRange: {
    'End date': 'Data di fine',
    'Start date': 'Data di inizio'
  },
  InputFilters: {
    'Clear Filters': 'Cancella filtri',
    'Filter List': 'Elenco filtri'
  },
  InputTimeSelect: {
    'Select time': 'Seleziona ora'
  },
  MessageBar: {
    DismissIntent: 'Ignora {{intent}}'
  },
  ModalHeaderCloseButton: {
    Close: 'Chiudi'
  },
  MonthPickerNav: {
    close: 'chiudi',
    'next year': 'anno successivo',
    'previous year': 'anno precedente'
  },
  PageSize: {
    Display: 'Visualizza',
    of: 'di'
  },
  Pagination: {
    'First page of results': 'Prima pagina dei risultati',
    'Last page of results': 'Ultima pagina dei risultati',
    'Next page of results': 'Pagina dei risultati successiva',
    'Previous page of results': 'Pagina dei risultati precedente',
    of: 'di'
  },
  PanelHeader: {
    CloseTitle: 'Chiudi {{title}}'
  },
  PopoverFooter: {
    Done: 'Fine'
  },
  PromptDialog: {
    Cancel: 'Annulla',
    Save: 'Salva'
  },
  RangeSlider: {
    'Maximum Name': '{{name}} (max)',
    'Maximum Value': 'Valore massimo',
    'Minimum Name': '{{name}} (min)',
    'Minimum Value': 'Valore minimo'
  },
  RequiredStar: {
    required: 'obbligatorio'
  },
  SelectOptions: {
    Loading: 'Caricamento in corso…',
    'No options': 'Nessuna opzione'
  },
  TabList: {
    Tabs: 'Schede'
  }
};
export const itIT = mergeLocaleObjects([], 'it-IT', resources, dateLocale);
//# sourceMappingURL=it-IT.js.map