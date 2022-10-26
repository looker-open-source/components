import { isTreeItemInnerPropKey } from '../types';
export const partitionTreeProps = props => {
  const treeItemInnerProps = {};
  const accordionInnerProps = {};
  Object.entries(props).forEach(prop => {
    const [propKey, propValue] = prop;

    if (props && isTreeItemInnerPropKey(propKey)) {
      treeItemInnerProps[propKey] = propValue;
    } else {
      accordionInnerProps[propKey] = propValue;
    }
  });
  return [treeItemInnerProps, accordionInnerProps];
};
//# sourceMappingURL=partitionTreeProps.js.map