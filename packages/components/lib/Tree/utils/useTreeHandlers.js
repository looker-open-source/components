import { useState } from 'react';
import { useWrapEvent } from '../../utils';
export const useTreeHandlers = props => {
  const [hovered, setHovered] = useState(false);

  const onBlur = event => {
    const nextFocusTarget = event.relatedTarget;

    if (nextFocusTarget && !event.currentTarget.contains(nextFocusTarget)) {
      setHovered(false);
    }
  };

  const onFocus = useWrapEvent(useWrapEvent(() => setHovered(true), props.onFocus));
  const onMouseEnter = useWrapEvent(() => setHovered(true), props.onMouseEnter);
  const onMouseLeave = useWrapEvent(() => setHovered(false), props.onMouseLeave);
  return {
    contentHandlers: {
      onFocus
    },
    hovered,
    wrapperHandlers: {
      onBlur,
      onMouseEnter,
      onMouseLeave
    }
  };
};
//# sourceMappingURL=useTreeHandlers.js.map