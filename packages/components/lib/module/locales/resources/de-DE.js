

import dateLocale from 'date-fns/locale/de';
import { mergeLocaleObjects } from '@looker/i18n';
const resources = {
  AdvancedInputControls: {
    'Clear Field': 'Feld löschen'
  },
  AvatarButton: {
    'Profile Picture': 'Profilbild'
  },
  AvatarUser: {
    Avatar: 'Avatar'
  },
  BulkActions: {
    AllPageCountDisplayedSelected: 'Alle {{pageCount}} angezeigten Artikel ausgewählt',
    AllTotalCountSelected: 'Alle {{totalCount}} Artikel ausgewählt',
    'Bulk Actions': 'Massenaktionen',
    'Clear Selection': 'Auswahl aufheben',
    SelectAllCountResults: 'Alle {{totalCount}} Ergebnisse auswählen',
    SelectedCountOfTotalDisplayed: '{{selectedItemCount}} von {{pageCount}} angezeigten Artikeln ausgewählt'
  },
  CalendarNav: {
    'next month': 'nächster Monat',
    'previous month': 'vorheriger Monat'
  },
  CheckMarkMixed: {
    'Check Mark Mixed': 'Gemischte Häkchen'
  },
  Chip: {
    Delete: 'Löschen'
  },
  ColumnSelector: {
    Apply: 'Anwenden',
    Cancel: 'Abbrechen',
    'Select All': 'Alle auswählen',
    'Select None': 'Keine auswählen',
    'Select columns to display': 'Anzuzeigende Spalten auswählen'
  },
  ConfirmationDialog: {
    Cancel: 'Abbrechen',
    Confirm: 'Bestätigen'
  },
  CopyToClipboard: {
    Copied: 'Kopiert',
    'Copy to Clipboard': 'In Zwischenablage kopieren'
  },
  DataTable: {
    'No Results': 'Keine Ergebnisse'
  },
  DataTableItem: {
    Options: 'Optionen'
  },
  FieldTimeSelect: {
    'Please use format HHMM': 'Bitte Format „HH:MM“ verwenden'
  },
  GetIntentLabel: {
    Error: 'Fehler',
    Inform: 'Information',
    Success: 'Erfolg',
    Warning: 'Warnung'
  },
  InputDate: {
    'Open calendar': 'Kalender öffnen'
  },
  InputDateRange: {
    'End date': 'Enddatum',
    'Start date': 'Startdatum'
  },
  InputFilters: {
    'Clear Filters': 'Filter löschen',
    'Filter List': 'Filterliste',
    'bottom-start': 'bottom-start'
  },
  InputTimeSelect: {
    'Select time': 'Uhrzeit auswählen'
  },
  MessageBar: {
    DismissIntent: '{{intent}} verwerfen'
  },
  ModalHeaderCloseButton: {
    Close: 'Schließen'
  },
  MonthPickerNav: {
    close: 'schließen',
    'next year': 'nächstes Jahr',
    'previous year': 'vorheriges Jahr'
  },
  PageSize: {
    Display: 'Anzeigen',
    of: 'von'
  },
  Pagination: {
    'First page of results': 'Erste Ergebnisseite',
    'Last page of results': 'Letzte Ergebnisseite',
    'Next page of results': 'Nächste Ergebnisseite',
    'Previous page of results': 'Vorherige Ergebnisseite',
    of: 'von'
  },
  PanelHeader: {
    CloseTitle: '{{title}} schließen'
  },
  PopoverFooter: {
    Done: 'Fertig'
  },
  PromptDialog: {
    Cancel: 'Abbrechen',
    Save: 'Speichern'
  },
  RangeSlider: {
    'Maximum Name': 'Maximal {{name}}',
    'Maximum Value': 'Höchstwert',
    'Minimum Name': 'Mindestens {{name}}',
    'Minimum Value': 'Mindestwert'
  },
  RequiredStar: {
    required: 'erforderlich'
  },
  SelectOptions: {
    Loading: 'Ladevorgang',
    'No options': 'Keine Optionen'
  },
  TabList: {
    Tabs: 'Registerkarten'
  }
};
export const deDE = mergeLocaleObjects([], 'de-DE', resources, dateLocale);
//# sourceMappingURL=de-DE.js.map