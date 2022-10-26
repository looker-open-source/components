import { useHotkeys } from 'react-hotkeys-hook';
import get from 'lodash/get';
import filter from 'lodash/filter';
import debounce from 'lodash/debounce';
const keyCommandCollection = {};

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

const organizeKeyCommands = shortcut => {
  const commandGroup = [...get(keyCommandCollection, shortcut, [])];
  commandGroup.sort((ev1, ev2) => {
    const rect1 = ev1.target.getBoundingClientRect();
    const rect2 = ev2.target.getBoundingClientRect();

    if (!doRectsIntersect(rect1, rect2)) {
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

const executeFirstKeyCommand = debounce((e, cbStack) => {
  cbStack[0] && cbStack[0].cb(e);
}, 50);

const discardStaleCommands = keyCommand => {
  const commandSet = keyCommandCollection[keyCommand];
  keyCommandCollection[keyCommand] = new Set(filter([...commandSet], event => document.body.contains(event.target)));
};

export const useGlobalHotkeys = (keyCommand, cb, containerRef) => {
  if (containerRef.current) {
    const newCommand = {
      cb,
      target: containerRef.current
    };
    const commandSet = get(keyCommandCollection, keyCommand, new Set());
    commandSet.add(newCommand);
    keyCommandCollection[keyCommand] = commandSet;
  }

  const wrappedCb = (e, handler) => {
    discardStaleCommands(handler.shortcut);
    const orderedEventListeners = organizeKeyCommands(handler.shortcut);
    executeFirstKeyCommand(e, orderedEventListeners);
  };

  useHotkeys(keyCommand, wrappedCb, {
    filter: () => {
      return true;
    }
  });
};
//# sourceMappingURL=useGlobalHotkeys.js.map