import { useEffect } from 'react';
import some from 'lodash/some';
import every from 'lodash/every';
export function useMixedStateCheckbox({
  parent,
  children
}) {
  useEffect(() => {
    if (every(children, ['state', true])) {
      parent.setState(true);
    } else if (some(children, ['state', true])) {
      parent.setState('mixed');
    } else {
      parent.setState(false);
    }
  }, [children, parent]);

  const handleParentChange = () => {
    const newState = parent.state !== true;
    parent.setState(newState);
    children.map(child => child.setState(newState));
  };

  return handleParentChange;
}
//# sourceMappingURL=useMixedStateCheckbox.js.map