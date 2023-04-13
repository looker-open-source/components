

import { sanitizeFontFamily } from './sanitizeFont';
export const fontFacesToFamily = (faces, fallbacks) => {
  const facesStr = typeof faces === 'string' ? faces : faces.join(',');
  return sanitizeFontFamily(`${facesStr}, ${fallbacks.join(',')}`);
};
//# sourceMappingURL=fontFacesToFamily.js.map