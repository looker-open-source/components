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

import dateLocale from 'date-fns/locale/nl'

import { mergeLocaleObjects } from '@looker/i18n'

const resources = {
  AdvancedInputControls: {
    'Clear Field': 'Veld wissen',
  },
  AvatarButton: {
    'Profile Picture': 'Profielfoto',
  },
  AvatarUser: {
    Avatar: 'Avatar',
  },
  BulkActions: {
    AllPageCountDisplayedSelected:
      'Alle {{pageCount}} weergegeven items geselecteerd',
    AllTotalCountSelected: 'Alle {{totalCount}} items geselecteerd',
    'Bulk Actions': 'Bulkacties',
    'Clear Selection': 'Selectie wissen',
    SelectAllCountResults: 'Selecteer alle {{totalCount}} resultaten',
    SelectedCountOfTotalDisplayed:
      '{{selectedItemCount}} van de {{pageCount}} weergegeven items geselecteerd',
  },
  CalendarNav: {
    'next month': 'volgende maand',
    'previous month': 'vorige maand',
  },
  CheckMarkMixed: {
    'Check Mark Mixed': 'Gemengd vinkje',
  },
  Chip: {
    Delete: 'Verwijderen',
  },
  ColumnSelector: {
    Apply: 'Toepassen',
    Cancel: 'Annuleren',
    'Select All': 'Alles selecteren',
    'Select None': 'Niets selecteren',
    'Select columns to display': 'Weer te geven kolommen selecteren',
  },
  ConfirmationDialog: {
    Cancel: 'Annuleren',
    Confirm: 'Bevestigen',
  },
  CopyToClipboard: {
    Copied: 'Gekopieerd',
    'Copy to Clipboard': 'Kopiëren naar Klembord',
  },
  DataTable: {
    'No Results': 'Geen resultaten',
  },
  DataTableItem: {
    Options: 'Opties',
  },
  FieldTimeSelect: {
    'Please use format HHMM': 'Gebruik de indeling UU:MM',
  },
  GetIntentLabel: {
    Error: 'Fout',
    Inform: 'Informeren',
    Success: 'Geslaagd',
    Warning: 'Waarschuwing',
  },
  InputDate: {
    'Open calendar': 'Kalender openen',
  },
  InputDateRange: {
    'End date': 'Einddatum',
    'Start date': 'Startdatum',
  },
  InputFilters: {
    'Clear Filters': 'Filters wissen',
    'Filter List': 'Filterlijst',
    'bottom-start': 'onder-start',
  },
  InputTimeSelect: {
    'Select time': 'Tijd selecteren',
  },
  MessageBar: {
    DismissIntent: '{{intent}} sluiten',
  },
  ModalHeaderCloseButton: {
    Close: 'Sluiten',
  },
  MonthPickerNav: {
    close: 'sluiten',
    'next year': 'volgend jaar',
    'previous year': 'vorig jaar',
  },
  PageSize: {
    Display: 'Weergeven',
    of: 'van',
  },
  Pagination: {
    'First page of results': 'Eerste pagina resultaten',
    'Last page of results': 'Laatste pagina resultaten',
    'Next page of results': 'Volgende pagina resultaten',
    'Previous page of results': 'Vorige pagina resultaten',
    of: 'van',
  },
  PanelHeader: {
    CloseTitle: '{{title}} sluiten',
  },
  PopoverFooter: {
    Done: 'Gereed',
  },
  PromptDialog: {
    Cancel: 'Annuleren',
    Save: 'Opslaan',
  },
  RangeSlider: {
    'Maximum Name': 'Maximaal {{name}}',
    'Maximum Value': 'Maximumwaarden',
    'Minimum Name': 'Minimaal {{name}}',
    'Minimum Value': 'Minimumwaarden',
  },
  RequiredStar: {
    required: 'verplicht',
  },
  SelectOptions: {
    Loading: 'Laden',
    'No options': 'Geen opties',
  },
  TabList: {
    Tabs: 'Tabbladen',
  },
}

export const nlNL = mergeLocaleObjects([], 'nl-NL', resources, dateLocale)
