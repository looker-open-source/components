

import { useEffect } from 'react';
import { getCurrentNode } from './getCurrentNode';
const keyCommandCollection = {};
const getCommandGroup = keyCommand => {
  const commandGroup = keyCommandCollection[keyCommand] || [];
  if (!keyCommandCollection[keyCommand]) {
    keyCommandCollection[keyCommand] = commandGroup;
  }
  return commandGroup;
};
const addCommand = (keyCommand, cb, target) => {
  const commandGroup = getCommandGroup(keyCommand);
  commandGroup.push({
    cb,
    target
  });
};
const removeCommand = (keyCommand, target) => {
  const commandGroup = getCommandGroup(keyCommand);
  const index = commandGroup.findIndex(command => command.target === target);
  commandGroup.splice(index, 1);
};

const doRectsIntersect = (r1, r2) => {
  return !(r2.left > r1.right || r2.right < r1.left || r2.top > r1.bottom || r2.bottom < r1.top);
};

const calculateIntersectionPoint = (r1, r2) => {
  const y = Math.max(r2.top, r1.top);
  const x = Math.max(r1.left, r2.left);
  return {
    x,
    y
  };
};

const organizeKeyCommands = keyCommand => {
  const commandGroup = [...getCommandGroup(keyCommand)];

  commandGroup.sort((ev1, ev2) => {
    const rect1 = ev1.target.getBoundingClientRect();
    const rect2 = ev2.target.getBoundingClientRect();
    if (!doRectsIntersect(rect1, rect2)) {
      if (ev1.target.contains(document.activeElement)) {
        return -1;
      }
      if (ev2.target.contains(document.activeElement)) {
        return 1;
      }
      return 0;
    } else {
      const {
        x,
        y
      } = calculateIntersectionPoint(rect1, rect2);
      const stackedElements = document.elementsFromPoint(x, y);
      const idx1 = stackedElements.findIndex(el => el === ev1.target);
      const idx2 = stackedElements.findIndex(el => el === ev2.target);
      return idx1 > idx2 ? 1 : -1;
    }
  });
  return commandGroup;
};

export const useGlobalHotkeys = (keyCommand, cb, elementOrRef) => {
  useEffect(() => {
    const target = getCurrentNode(elementOrRef);
    const handleKeydown = e => {
      if (e.key === keyCommand) {
        var _orderedCommands$;
        const orderedCommands = organizeKeyCommands(keyCommand);
        if (((_orderedCommands$ = orderedCommands[0]) === null || _orderedCommands$ === void 0 ? void 0 : _orderedCommands$.target) === target) {
          orderedCommands[0].cb();
        }
      }
    };
    if (target) {
      addCommand(keyCommand, cb, target);
      document.addEventListener('keydown', handleKeydown);
    }
    return () => {
      removeCommand(keyCommand, target);
      document.removeEventListener('keydown', handleKeydown);
    };
  }, [keyCommand, cb, elementOrRef]);
};
//# sourceMappingURL=useGlobalHotkeys.js.map