import throttle from 'lodash/throttle';
import { useEffect, useState } from 'react';
export const useScrollPosition = element => {
  const [scrollPosition, setScrollPosition] = useState(0);
  useEffect(() => {
    const scrollListener = throttle(() => {
      if (element) {
        setScrollPosition(element.scrollTop);
      }
    }, 50, {
      leading: true,
      trailing: true
    });

    if (element) {
      element.addEventListener('scroll', scrollListener);
      scrollListener();
    }

    return () => {
      element && element.removeEventListener('scroll', scrollListener);
      setScrollPosition(0);
    };
  }, [element]);
  return scrollPosition;
};
//# sourceMappingURL=useScrollPosition.js.map