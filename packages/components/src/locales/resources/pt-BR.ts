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

import dateLocale from 'date-fns/locale/pt-BR';

import { mergeLocaleObjects } from '@looker/i18n';

const resources = {
  AdvancedInputControls: {
    'Clear Field': 'Limpar campo',
  },
  AvatarButton: {
    'Profile Picture': 'Foto do perfil',
  },
  AvatarUser: {
    Avatar: 'Avatar',
  },
  BulkActions: {
    AllPageCountDisplayedSelected:
      'Todos os {{pageCount}} itens exibidos foram selecionados',
    AllTotalCountSelected: 'Todos os {{totalCount}} itens foram selecionados',
    'Bulk Actions': 'Ações em massa',
    'Clear Selection': 'Limpar seleção',
    SelectAllCountResults: 'Selecionar todos os {{totalCount}} resultados',
    SelectedCountOfTotalDisplayed:
      '{{selectedItemCount}} de {{pageCount}} itens exibidos selecionados',
  },
  CalendarNav: {
    'next month': 'próximo mês',
    'previous month': 'mês anterior',
  },
  CheckMarkMixed: {
    'Check Mark Mixed': 'Marca de seleção "Misto"',
  },
  Chip: {
    Delete: 'Excluir',
  },
  ColumnSelector: {
    Apply: 'Aplicar',
    Cancel: 'Cancelar',
    'Select All': 'Selecionar tudo',
    'Select None': 'Cancelar seleção',
    'Select columns to display': 'Selecione as colunas a serem exibidas',
  },
  ConfirmationDialog: {
    Cancel: 'Cancelar',
    Confirm: 'Confirmar',
  },
  CopyToClipboard: {
    Copied: 'Copiado',
    'Copy to Clipboard': 'Copiar para a área de transferência',
  },
  DataTable: {
    'No Results': 'Nenhum resultado',
  },
  DataTableItem: {
    Options: 'Opções',
  },
  FieldTimeSelect: {
    'Please use format HHMM': 'Use o formato HH:MM',
  },
  GetIntentLabel: {
    Error: 'Erro',
    Inform: 'Informar',
    Success: 'Concluído',
    Warning: 'Alerta',
  },
  InputDate: {
    'Open calendar': 'Abrir agenda',
  },
  InputDateRange: {
    'End date': 'Data de término',
    'Start date': 'Data de início',
  },
  InputFilters: {
    'Clear Filters': 'Limpar filtros',
    'Filter List': 'Lista de filtros',
  },
  InputTimeSelect: {
    'Select time': 'Selecionar hora',
  },
  MessageBar: {
    DismissIntent: 'Dispensar {{intent}}',
  },
  ModalHeaderCloseButton: {
    Close: 'Fechar',
  },
  MonthPickerNav: {
    close: 'fechar',
    'next year': 'próximo ano',
    'previous year': 'ano anterior',
  },
  PageSize: {
    Display: 'Exibição',
    of: 'de',
  },
  Pagination: {
    'First page of results': 'Primeira página de resultados',
    'Last page of results': 'Última página de resultados',
    'Next page of results': 'Próxima página de resultados',
    'Previous page of results': 'Página anterior de resultados',
    of: 'de',
  },
  PanelHeader: {
    CloseTitle: 'Fechar {{title}}',
  },
  PopoverFooter: {
    Done: 'Concluído',
  },
  PromptDialog: {
    Cancel: 'Cancelar',
    Save: 'Salvar',
  },
  RangeSlider: {
    'Maximum Name': '{{name}} no máximo',
    'Maximum Value': 'Valor máximo',
    'Minimum Name': '{{name}} no mínimo',
    'Minimum Value': 'Valor mínimo',
  },
  RequiredStar: {
    required: 'obrigatório',
  },
  SelectOptions: {
    Loading: 'Carregando',
    'No options': 'Nenhuma opção',
  },
  TabList: {
    Tabs: 'Guias',
  },
};

export const ptBR = mergeLocaleObjects([], 'pt-BR', resources, dateLocale);