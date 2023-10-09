import { mergeMultiValueNodes } from './mergeMultiValueNodes';
export const stringTransform = root => ['match', 'contains', 'startsWith', 'endsWith'].reduce((ast, type) => mergeMultiValueNodes(ast, type), root);
//# sourceMappingURL=stringTransform.js.map