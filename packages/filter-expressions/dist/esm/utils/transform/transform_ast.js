import cloneDeep from 'lodash/cloneDeep';
import flow from 'lodash/fp/flow';
import addId from './utils/apply_id_to_ast';
export const transformAST = (root, transforms) => flow([...transforms, cloneDeep, addId])(root);
//# sourceMappingURL=transform_ast.js.map