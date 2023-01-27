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

import dateLocale from 'date-fns/locale/tr'

import { mergeLocaleObjects } from '@looker/i18n'

const resources = {
  AdvancedInputControls: {
    'Clear Field': 'Alanı Temizle',
  },
  AvatarButton: {
    'Profile Picture': 'Profil Resmi',
  },
  AvatarUser: {
    Avatar: 'Avatar',
  },
  BulkActions: {
    AllPageCountDisplayedSelected:
      '{{pageCount}} görüntülenen öğenin tümü seçildi',
    AllTotalCountSelected: '{{totalCount}} öğenin tümü seçildi',
    'Bulk Actions': 'Toplu Eylemler',
    'Clear Selection': 'Seçimi Temizle',
    SelectAllCountResults: '{{totalCount}} sonucun tümünü seç',
    SelectedCountOfTotalDisplayed:
      '{{selectedItemCount}}/{{pageCount}} görüntülenen öğe seçildi',
  },
  CalendarNav: {
    'next month': 'sonraki ay',
    'previous month': 'önceki ay',
  },
  CheckMarkMixed: {
    'Check Mark Mixed': 'Onay İşareti Karışık',
  },
  Chip: {
    Delete: 'Sil',
  },
  ColumnSelector: {
    Apply: 'Uygula',
    Cancel: 'İptal',
    'Select All': 'Tümünü Seç',
    'Select None': 'Hiçbirini Seçme',
    'Select columns to display': 'Görüntülenecek sütunları seç',
  },
  ConfirmationDialog: {
    Cancel: 'İptal',
    Confirm: 'Onayla',
  },
  CopyToClipboard: {
    Copied: 'Kopyalandı',
    'Copy to Clipboard': 'Panoya Kopyala',
  },
  DataTable: {
    'No Results': 'Sonuç Yok',
  },
  DataTableItem: {
    Options: 'Seçenekler',
  },
  FieldTimeSelect: {
    'Please use format HHMM': 'Lütfen şu biçimi kullanın: SS:DD',
  },
  GetIntentLabel: {
    Error: 'Hata',
    Inform: 'Bilgilendir',
    Success: 'Başarılı',
    Warning: 'Uyarı',
  },
  InputDate: {
    'Open calendar': 'Takvimi aç',
  },
  InputDateRange: {
    'End date': 'Bitiş tarihi',
    'Start date': 'Başlangıç tarihi',
  },
  InputFilters: {
    'Clear Filters': 'Filtreleri Temizle',
    'Filter List': 'Filtre Listesi',
    'bottom-start': 'alttan başlama',
  },
  InputTimeSelect: {
    'Select time': 'Zaman seç',
  },
  MessageBar: {
    DismissIntent: '{{intent}} öğesini kapat',
  },
  ModalHeaderCloseButton: {
    Close: 'Kapat',
  },
  MonthPickerNav: {
    close: 'kapat',
    'next year': 'sonraki yıl',
    'previous year': 'önceki yıl',
  },
  PageSize: {
    Display: 'Görüntüle',
    of: '/',
  },
  Pagination: {
    'First page of results': 'İlk sonuçlar sayfası',
    'Last page of results': 'Son sonuçlar sayfası',
    'Next page of results': 'Sonraki sonuçlar sayfası',
    'Previous page of results': 'Önceki sonuçlar sayfası',
    of: '/',
  },
  PanelHeader: {
    CloseTitle: '{{title}} öğesini kapat',
  },
  PopoverFooter: {
    Done: 'Tamamlandı',
  },
  PromptDialog: {
    Cancel: 'İptal',
    Save: 'Kaydet',
  },
  RangeSlider: {
    'Maximum Name': 'Maksimum {{name}}',
    'Maximum Value': 'Maksimum Değer',
    'Minimum Name': 'Minimum {{name}}',
    'Minimum Value': 'Minimum Değer',
  },
  RequiredStar: {
    required: 'gerekli',
  },
  SelectOptions: {
    Loading: 'Yükleniyor',
    'No options': 'Seçenek yok',
  },
  TabList: {
    Tabs: 'Sekmeler',
  },
}

export const trTR = mergeLocaleObjects([], 'tr-TR', resources, dateLocale)
