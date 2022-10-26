export const sanitizeFontFamily = faces => sanitizeFontFamilyArray(faces).join(', ');
export const sanitizeFontFamilyArray = faces => faces.split(',').map(face => sanitizeFontFace(face));
export const sanitizeFontFace = face => {
  const sanitized = face.replace(/["']/g, '').trim();
  return /\s/.test(sanitized) ? `'${sanitized}'` : sanitized;
};
//# sourceMappingURL=sanitizeFont.js.map