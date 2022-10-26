export declare const dateFnLocaleMap: {
    readonly 'ar-SA': Locale;
    readonly 'cs-CZ': Locale;
    readonly 'da-DK': Locale;
    readonly 'de-DE': Locale;
    readonly en: Locale;
    readonly 'es-ES': Locale;
    readonly 'fi-FI': Locale;
    readonly 'fr-CA': Locale;
    readonly 'fr-FR': Locale;
    readonly 'he-IL': Locale;
    readonly 'hi-IN': Locale;
    readonly 'it-IT': Locale;
    readonly 'ja-JP': Locale;
    readonly 'ko-KR': Locale;
    readonly 'lt-LT': Locale;
    readonly 'nb-NO': Locale;
    readonly 'nl-NL': Locale;
    readonly 'pl-PL': Locale;
    readonly 'pt-BR': Locale;
    readonly 'pt-PT': Locale;
    readonly 'ru-RU': Locale;
    readonly 'sv-SE': Locale;
    readonly 'th-TH': Locale;
    readonly 'tr-TR': Locale;
    readonly 'uk-UA': Locale;
    readonly 'zh-CN': Locale;
    readonly 'zh-TW': Locale;
};
export declare type LocaleCodes = keyof typeof dateFnLocaleMap;
/**
 * Get date-fns locale from locale string
 * If possible, import locale directly from date-fns to save bundle size
 */
export declare const getLocale: (locale: string) => Locale;
