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

import dateLocale from 'date-fns/locale/it'

import { mergeLocaleObjects } from '@looker/i18n'

const resources = {
  AdvancedInputControls: {
    'Clear Field': 'Svuota campo',
  },
  AvatarButton: {
    'Profile Picture': 'Immagine del profilo',
  },
  AvatarUser: {
    Avatar: 'Avatar',
  },
  BulkActions: {
    AllPageCountDisplayedSelected:
      'Tutti gli elementi visualizzati selezionati ({{pageCount}})',
    AllTotalCountSelected: 'Tutti gli elementi selezionati ({{totalCount}})',
    'Bulk Actions': 'Azioni in blocco',
    'Clear Selection': 'Cancella selezione',
    SelectAllCountResults: 'Seleziona tutti i risultati ({{totalCount}})',
    SelectedCountOfTotalDisplayed:
      '{{selectedItemCount}} di {{pageCount}} elementi visualizzati selezionati',
  },
  CalendarNav: {
    'next month': 'mese successivo',
    'previous month': 'mese precedente',
  },
  CheckMarkMixed: {
    'Check Mark Mixed': 'Segno di spunta misto',
  },
  Chip: {
    Delete: 'Elimina',
  },
  ColumnSelector: {
    Apply: 'Applica',
    Cancel: 'Annulla',
    'Select All': 'Seleziona tutte',
    'Select None': 'Seleziona nessuna',
    'Select columns to display': 'Seleziona le colonne da visualizzare',
  },
  ConfirmationDialog: {
    Cancel: 'Annulla',
    Confirm: 'Conferma',
  },
  CopyToClipboard: {
    Copied: 'Copiato',
    'Copy to Clipboard': 'Copia negli Appunti',
  },
  DataTable: {
    'No Results': 'Nessun risultato',
  },
  DataTableItem: {
    Options: 'Opzioni',
  },
  FieldTimeSelect: {
    'Please use format HHMM': 'Usa il formato OO:MM',
  },
  GetIntentLabel: {
    Error: 'Errore',
    Inform: 'Informa',
    Success: 'Operazione riuscita',
    Warning: 'Attenzione!',
  },
  InputDate: {
    'Open calendar': 'Apri calendario',
  },
  InputDateRange: {
    'End date': 'Data di fine',
    'Start date': 'Data di inizio',
  },
  InputFilters: {
    'Clear Filters': 'Cancella filtri',
    'Filter List': 'Elenco filtri',
    'bottom-start': 'fine-inizio',
  },
  InputTimeSelect: {
    'Select time': 'Seleziona orario',
  },
  MessageBar: {
    DismissIntent: 'Ignora {{intent}}',
  },
  ModalHeaderCloseButton: {
    Close: 'Chiudi',
  },
  MonthPickerNav: {
    close: 'chiudi',
    'next year': 'anno successivo',
    'previous year': 'anno precedente',
  },
  PageSize: {
    Display: 'Visualizza',
    of: 'di',
  },
  Pagination: {
    'First page of results': 'Prima pagina di risultati',
    'Last page of results': 'Ultima pagina di risultati',
    'Next page of results': 'Pagina di risultati successiva',
    'Previous page of results': 'Pagina di risultati precedente',
    of: 'di',
  },
  PanelHeader: {
    CloseTitle: 'Chiudi {{title}}',
  },
  PopoverFooter: {
    Done: 'Completato',
  },
  PromptDialog: {
    Cancel: 'Annulla',
    Save: 'Salva',
  },
  RangeSlider: {
    'Maximum Name': 'Valore massimo {{name}}',
    'Maximum Value': 'Valore massimo',
    'Minimum Name': 'Valore minimo {{name}}',
    'Minimum Value': 'Valore minimo',
  },
  RequiredStar: {
    required: 'obbligatorio',
  },
  SelectOptions: {
    Loading: 'Caricamento in corso',
    'No options': 'Nessuna opzione',
  },
  TabList: {
    Tabs: 'Schede',
  },
}

export const itIT = mergeLocaleObjects([], 'it-IT', resources, dateLocale)
