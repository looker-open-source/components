

import { trTR as componentsLocale } from '@looker/components';
import { mergeLocaleObjects } from '@looker/i18n';
const resources = {
  Debug: {
    Config: 'Yapılandırma',
    Dimensions: 'Boyutlar',
    Error: 'Hata',
    Measures: 'Ölçümler',
    Result: 'Sonuç',
    error: 'hata',
    ok: 'tamam'
  },
  ErrorBoundary: {
    'Something went wrong': 'Bir sorun oluştu'
  },
  translation: {
    'Row Total': 'Satır Toplamı',
    false: 'yanlış',
    null: 'boş',
    true: 'doğru',
    undefined: 'tanımlanmamış'
  },
  useNormalizedPivotLabels: {
    'Row Total': 'Satır Toplamı'
  }
};
export const trTR = mergeLocaleObjects([componentsLocale], 'tr-TR', resources);
//# sourceMappingURL=tr-TR.js.map