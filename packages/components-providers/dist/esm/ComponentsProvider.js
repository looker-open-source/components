const _excluded = ["children", "loadFontSources", "loadGoogleFonts", "disableStyleDefender", "dateLocale", "locale", "resources", "themeCustomizations"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
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