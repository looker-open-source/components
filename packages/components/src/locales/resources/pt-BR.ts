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

import dateLocale from 'date-fns/locale/pt-BR'

import { mergeLocaleObjects } from '@looker/i18n'

const resources = {
  AdvancedInputControls: {
    'Clear Field': 'Limpar campo',
  },
  AvatarButton: {
    'Profile Picture': 'Foto de perfil',
  },
  AvatarUser: {
    Avatar: 'Avatar',
  },
  BulkActions: {
    AllPageCountDisplayedSelected:
      'Todos os {{pageCount}} itens exibidos selecionados',
    AllTotalCountSelected: 'Todos os {{totalCount}} itens selecionados',
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
    'Check Mark Mixed': 'Marca de verificação mista',
  },
  Chip: {
    Delete: 'Excluir',
  },
  ColumnSelector: {
    Apply: 'Aplicar',
    Cancel: 'Cancelar',
    'Select All': 'Selecionar tudo',
    'Select None': 'Selecionar nenhuma',
    'Select columns to display': 'Selecionar colunas para exibição',
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
    'No Results': 'Sem resultados',
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
    Success: 'Sucesso',
    Warning: 'Aviso',
  },
  InputDate: {
    'Open calendar': 'Abrir calendário',
  },
  InputDateRange: {
    'End date': 'Data de término',
    'Start date': 'Data de início',
  },
  InputFilters: {
    'Clear Filters': 'Limpar filtros',
    'Filter List': 'Lista de filtros',
    'bottom-start': 'bottom-start',
  },
  InputTimeSelect: {
    'Select time': 'Selecionar horário',
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
    Display: 'Exibir',
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
    'Maximum Name': '{{name}} máximo',
    'Maximum Value': 'Valor máximo',
    'Minimum Name': '{{name}} mínimo',
    'Minimum Value': 'Valor mínimo',
  },
  RequiredStar: {
    required: 'obrigatório',
  },
  SelectOptions: {
    Loading: 'Carregando',
    'No options': 'Sem opções',
  },
  TabList: {
    Tabs: 'Guias',
  },
}

export const ptBR = mergeLocaleObjects([], 'pt-BR', resources, dateLocale)
