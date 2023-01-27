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

import dateLocale from 'date-fns/locale/es'

import { mergeLocaleObjects } from '@looker/i18n'

const resources = {
  AdvancedInputControls: {
    'Clear Field': 'Borrar campo',
  },
  AvatarButton: {
    'Profile Picture': 'Imagen de perfil',
  },
  AvatarUser: {
    Avatar: 'Avatar',
  },
  BulkActions: {
    AllPageCountDisplayedSelected:
      'Se seleccionaron los {{pageCount}} elementos que se muestran',
    AllTotalCountSelected: 'Se seleccionaron los {{totalCount}} elementos',
    'Bulk Actions': 'Acciones masivas',
    'Clear Selection': 'Borrar selección',
    SelectAllCountResults: 'Seleccionar los {{totalCount}} resultados',
    SelectedCountOfTotalDisplayed:
      'Se seleccionaron {{selectedItemCount}} de los {{pageCount}} elementos que se muestran',
  },
  CalendarNav: {
    'next month': 'mes siguiente',
    'previous month': 'mes anterior',
  },
  CheckMarkMixed: {
    'Check Mark Mixed': 'Marca de verificación combinada',
  },
  Chip: {
    Delete: 'Eliminar',
  },
  ColumnSelector: {
    Apply: 'Aplicar',
    Cancel: 'Cancelar',
    'Select All': 'Seleccionar todo',
    'Select None': 'No seleccionar nada',
    'Select columns to display': 'Seleccionar columnas para mostrar',
  },
  ConfirmationDialog: {
    Cancel: 'Cancelar',
    Confirm: 'Confirmar',
  },
  CopyToClipboard: {
    Copied: 'Copiado',
    'Copy to Clipboard': 'Copiar en el portapapeles',
  },
  DataTable: {
    'No Results': 'No hay resultados',
  },
  DataTableItem: {
    Options: 'Opciones',
  },
  FieldTimeSelect: {
    'Please use format HHMM': 'Use el formato HH:MM',
  },
  GetIntentLabel: {
    Error: 'Error',
    Inform: 'Informe',
    Success: 'Correcto',
    Warning: 'Advertencia',
  },
  InputDate: {
    'Open calendar': 'Abrir calendario',
  },
  InputDateRange: {
    'End date': 'Fecha final',
    'Start date': 'Fecha inicial',
  },
  InputFilters: {
    'Clear Filters': 'Borrar filtros',
    'Filter List': 'Lista de filtros',
    'bottom-start': 'abajo-inicio',
  },
  InputTimeSelect: {
    'Select time': 'Seleccionar hora',
  },
  MessageBar: {
    DismissIntent: 'Descartar {{intent}}',
  },
  ModalHeaderCloseButton: {
    Close: 'Cerrar',
  },
  MonthPickerNav: {
    close: 'cerrar',
    'next year': 'año siguiente',
    'previous year': 'año anterior',
  },
  PageSize: {
    Display: 'Mostrar',
    of: 'de',
  },
  Pagination: {
    'First page of results': 'Primera página de resultados',
    'Last page of results': 'Última página de resultados',
    'Next page of results': 'Página siguiente de resultados',
    'Previous page of results': 'Página anterior de resultados',
    of: 'de',
  },
  PanelHeader: {
    CloseTitle: 'Cerrar {{title}}',
  },
  PopoverFooter: {
    Done: 'Listo',
  },
  PromptDialog: {
    Cancel: 'Cancelar',
    Save: 'Guardar',
  },
  RangeSlider: {
    'Maximum Name': 'Máximo de {{name}}',
    'Maximum Value': 'Valor máximo',
    'Minimum Name': 'Mínimo de {{name}}',
    'Minimum Value': 'Valor mínimo',
  },
  RequiredStar: {
    required: 'obligatorio',
  },
  SelectOptions: {
    Loading: 'Cargando',
    'No options': 'Sin opciones',
  },
  TabList: {
    Tabs: 'Pestañas',
  },
}

export const esES = mergeLocaleObjects([], 'es-ES', resources, dateLocale)
