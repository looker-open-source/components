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

import dateLocale from 'date-fns/locale/fr-CA'

import { mergeLocaleObjects } from '@looker/i18n'

const resources = {
  AdvancedInputControls: {
    'Clear Field': 'Effacer le champ',
  },
  AvatarButton: {
    'Profile Picture': 'Image du profil',
  },
  AvatarUser: {
    Avatar: 'Avatar',
  },
  BulkActions: {
    AllPageCountDisplayedSelected:
      'La totalité des éléments affichés sur {{pageCount}} sélectionnés',
    AllTotalCountSelected:
      'La totalité des {{totalCount}} éléments sélectionnés',
    'Bulk Actions': 'Actions en bloc',
    'Clear Selection': 'Effacer la sélection',
    SelectAllCountResults:
      'Sélectionner la totalité des {{totalCount}} résultats',
    SelectedCountOfTotalDisplayed:
      '{{selectedItemCount}} éléments affichés sur {{pageCount}} sélectionnés',
  },
  CalendarNav: {
    'next month': 'mois suivant',
    'previous month': 'mois précédent',
  },
  CheckMarkMixed: {
    'Check Mark Mixed': 'Consulter le mélange de marque',
  },
  Chip: {
    Delete: 'Supprimer',
  },
  ColumnSelector: {
    Apply: 'Appliquer',
    Cancel: 'Annuler',
    'Select All': 'Sélectionner tout',
    'Select None': 'Ne rien sélectionner',
    'Select columns to display': 'Sélectionner les colonnes à afficher',
  },
  ConfirmationDialog: {
    Cancel: 'Annuler',
    Confirm: 'Confirmer',
  },
  CopyToClipboard: {
    Copied: 'Copié',
    'Copy to Clipboard': 'Copier dans le presse-papiers',
  },
  DataTable: {
    'No Results': 'Aucun résultat',
  },
  DataTableItem: {
    Options: 'Options',
  },
  FieldTimeSelect: {
    'Please use format HHMM': 'Veuillez utiliser le format HH:MM',
  },
  GetIntentLabel: {
    Error: 'Erreur',
    Inform: 'Informer',
    Success: 'Réussite',
    Warning: 'Avertissement',
  },
  InputDate: {
    'Open calendar': 'Ouvrir le calendrier',
  },
  InputDateRange: {
    'End date': 'Date de fin',
    'Start date': 'Date de début',
  },
  InputFilters: {
    'Clear Filters': 'Effacer les filtres',
    'Filter List': 'Filtrer la liste',
    'bottom-start': 'bottom-start',
  },
  InputTimeSelect: {
    'Select time': "Sélectionner l'heure",
  },
  MessageBar: {
    DismissIntent: 'Ignorer {{intent}}',
  },
  ModalHeaderCloseButton: {
    Close: 'Fermer',
  },
  MonthPickerNav: {
    close: 'fermer',
    'next year': 'année suivante',
    'previous year': 'année précédente',
  },
  PageSize: {
    Display: 'Affichage',
    of: 'de',
  },
  Pagination: {
    'First page of results': 'Première page de résultats',
    'Last page of results': 'Dernière page de résultats',
    'Next page of results': 'Page de résultats suivante',
    'Previous page of results': 'Page de résultats précédente',
    of: 'de',
  },
  PanelHeader: {
    CloseTitle: 'Fermer {{title}}',
  },
  PopoverFooter: {
    Done: 'Terminé',
  },
  PromptDialog: {
    Cancel: 'Annuler',
    Save: 'Enregistrer',
  },
  RangeSlider: {
    'Maximum Name': 'Maximum {{name}}',
    'Maximum Value': 'Valeur maximale',
    'Minimum Name': 'Minimum {{name}}',
    'Minimum Value': 'Valeur minimale',
  },
  RequiredStar: {
    required: 'obligatoire',
  },
  SelectOptions: {
    Loading: 'Chargement',
    'No options': 'Aucune option',
  },
  TabList: {
    Tabs: 'Onglets',
  },
}

export const frCA = mergeLocaleObjects([], 'fr-CA', resources, dateLocale)
