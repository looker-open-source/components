import { useEffect, useState } from 'react';
const topPlacements = ['top', 'top-start', 'top-end', 'right-end', 'left-end'];
const bottomPlacements = ['bottom', 'bottom-start', 'bottom-end', 'right-start', 'left-start'];
const sidePlacements = ['left-start', 'left-end', 'left', 'right-start', 'right-end', 'right'];
export const useVerticalSpace = (element, pin, placement, isOpen, popperStyle) => {
  const [spaceTop, setSpaceTop] = useState(0);
  const [spaceBottom, setSpaceBottom] = useState(0);
  const placementIsBottom = placement && bottomPlacements.includes(placement);
  const placementIsTop = placement && topPlacements.includes(placement);
  const placementIsSide = placement && sidePlacements.includes(placement);
  useEffect(() => {
    const getVerticalSpace = () => {
      if (element) {
        if (placementIsBottom || placementIsTop) {
          const {
            top,
            bottom
          } = element.getBoundingClientRect();

          if (!pin || placementIsTop) {
            const spaceTop = placementIsSide ? bottom : top;
            setSpaceTop(spaceTop);
          } else if (pin) {
            setSpaceTop(0);
          }

          if (!pin || placementIsBottom) {
            const sideToUse = placementIsSide ? top : bottom;
            setSpaceBottom(window.innerHeight - sideToUse);
          } else if (pin) {
            setSpaceBottom(0);
          }
        } else {
          setSpaceTop(window.innerHeight);
        }
      }
    };

    if (isOpen) {
      window.addEventListener('resize', getVerticalSpace);
      getVerticalSpace();
    }

    return () => {
      window.removeEventListener('resize', getVerticalSpace);
    };
  }, [element, pin, placementIsBottom, placementIsTop, placementIsSide, isOpen, popperStyle.transform]);
  const max = Math.max(spaceTop, spaceBottom);
  const windowHeight = typeof window !== `undefined` ? window.innerHeight : 50;
  return max > 50 ? max : windowHeight;
};
//# sourceMappingURL=useVerticalSpace.js.map