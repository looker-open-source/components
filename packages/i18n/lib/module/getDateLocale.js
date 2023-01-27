

import arSA from 'date-fns/locale/ar-SA';
import cs from 'date-fns/locale/cs';
import da from 'date-fns/locale/da';
import de from 'date-fns/locale/de';
import enUS from 'date-fns/locale/en-US';
import es from 'date-fns/locale/es';
import fi from 'date-fns/locale/fi';
import frCA from 'date-fns/locale/fr-CA';
import fr from 'date-fns/locale/fr';
import he from 'date-fns/locale/he';
import hi from 'date-fns/locale/hi';
import it from 'date-fns/locale/it';
import ja from 'date-fns/locale/ja';
import ko from 'date-fns/locale/ko';
import lt from 'date-fns/locale/lt';
import nb from 'date-fns/locale/nb';
import nl from 'date-fns/locale/nl';
import pl from 'date-fns/locale/pl';
import ptBR from 'date-fns/locale/pt-BR';
import pt from 'date-fns/locale/pt';
import ru from 'date-fns/locale/ru';
import sv from 'date-fns/locale/sv';
import th from 'date-fns/locale/th';
import tr from 'date-fns/locale/tr';
import uk from 'date-fns/locale/uk';
import zhCN from 'date-fns/locale/zh-CN';
import zhTW from 'date-fns/locale/zh-TW';
export const dateFnLocaleMap = {
  'ar-SA': arSA,
  'cs-CZ': cs,
  'da-DK': da,
  'de-DE': de,
  en: enUS,
  'es-ES': es,
  'fi-FI': fi,
  'fr-CA': frCA,
  'fr-FR': fr,
  'he-IL': he,
  'hi-IN': hi,
  'it-IT': it,
  'ja-JP': ja,
  'ko-KR': ko,
  'lt-LT': lt,
  'nb-NO': nb,
  'nl-NL': nl,
  'pl-PL': pl,
  'pt-BR': ptBR,
  'pt-PT': pt,
  'ru-RU': ru,
  'sv-SE': sv,
  'th-TH': th,
  'tr-TR': tr,
  'uk-UA': uk,
  'zh-CN': zhCN,
  'zh-TW': zhTW
};
const isLocaleCode = str => {
  return str in dateFnLocaleMap;
};

export const getLocale = locale => {
  return isLocaleCode(locale) ? dateFnLocaleMap[locale] : enUS;
};
//# sourceMappingURL=getDateLocale.js.map