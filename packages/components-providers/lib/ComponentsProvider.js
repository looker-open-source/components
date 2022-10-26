import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["children", "loadFontSources", "loadGoogleFonts", "disableStyleDefender", "dateLocale", "locale", "resources", "themeCustomizations"];
import { generateTheme, googleFontUrl, theme as defaultTheme } from '@looker/design-tokens';
import React, { Fragment, useMemo } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { FocusTrapProvider } from './FocusTrap';
import { ScrollLockProvider } from './ScrollLock';
import { useI18n } from './I18n';
import { ThemeProvider } from './ThemeProvider';
import { FontFaceLoader } from './FontFaceLoader';
import { StyleDefender } from './StyleDefender';
export const ComponentsProvider = _ref => {
  let {
    children,
    loadFontSources = true,
    loadGoogleFonts = false,
    disableStyleDefender = false,
    dateLocale,
    locale,
    resources,
    themeCustomizations
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const theme = useMemo(() => {
    const draft = generateTheme(props.theme || defaultTheme, themeCustomizations);

    if (loadGoogleFonts) {
      draft.fontSources = [...(draft.fontSources || []), {
        url: googleFontUrl(draft)
      }];
    }

    return draft;
  }, [props.theme, loadGoogleFonts, themeCustomizations]);
  useI18n({
    dateLocale,
    locale,
    resources
  });
  const ConditionalStyleDefender = disableStyleDefender ? Fragment : StyleDefender;
  return React.createElement(HelmetProvider, null, React.createElement(ThemeProvider, _extends({}, props, {
    theme: theme
  }), React.createElement(ConditionalStyleDefender, null, loadFontSources && React.createElement(FontFaceLoader, null), React.createElement(FocusTrapProvider, null, React.createElement(ScrollLockProvider, null, children)))));
};
//# sourceMappingURL=ComponentsProvider.js.map