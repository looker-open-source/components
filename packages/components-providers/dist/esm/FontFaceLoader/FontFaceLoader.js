import React, { useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTheme } from 'styled-components';
export const fontFacesCSS = fontSources => fontSources.map(({
  face,
  url
}) => face ? fontFace(face, url) : importFont(url)).join('\n');
export const importFont = url => `
@import url(${url});`;
export const fontFace = (face, url) => `
@font-face {
  font-family: ${face};
  src: url('${url}');
}`;
export const FontFaceLoader = () => {
  const {
    fontSources
  } = useTheme();
  const css = useMemo(() => {
    if (fontSources && fontSources.length > 0) {
      return fontFacesCSS(fontSources);
    } else {
      return null;
    }
  }, [fontSources]);
  return css === null ? null : React.createElement(Helmet, null, React.createElement("style", {
    type: "text/css"
  }, css));
};
//# sourceMappingURL=FontFaceLoader.js.map