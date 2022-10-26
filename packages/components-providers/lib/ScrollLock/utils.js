import pick from 'lodash/pick';

function getScrollBarWidth() {
  const scrollDiv = document.createElement('div');
  scrollDiv.style.width = '99px';
  scrollDiv.style.height = '99px';
  scrollDiv.style.position = 'absolute';
  scrollDiv.style.top = '-9999px';
  scrollDiv.style.overflow = 'scroll';
  document.body.appendChild(scrollDiv);
  const scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
  document.body.removeChild(scrollDiv);
  return scrollbarWidth;
}

function getBodyCurrentStyle() {
  return document !== undefined ? pick(document.body.style, ['overflow', 'paddingRight']) : null;
}

function setBodyStyles() {
  if (document !== undefined) {
    if (window.innerWidth > document.documentElement.clientWidth) {
      const scrollbarWidth = getScrollBarWidth();
      const curPaddingRight = window.getComputedStyle(document.body).getPropertyValue('padding-right');

      if (curPaddingRight.indexOf('calc') === -1) {
        document.body.style.paddingRight = `calc(${curPaddingRight} + ${scrollbarWidth}px)`;
      }
    }

    document.body.style.overflow = 'hidden';
  }
}

function resetBodyStyles(previousStyle) {
  if (previousStyle) {
    document.body.style.paddingRight = previousStyle.paddingRight;
    document.body.style.overflow = previousStyle.overflow;
  }
}

export function activateScrollLock({
  element
}) {
  let scrollTop = window.scrollY;
  let scrollTarget = document;

  function stopScroll(e) {
    if (e.target !== null && e.target !== scrollTarget) {
      scrollTarget = e.target;
      scrollTop = scrollTarget instanceof Element ? scrollTarget.scrollTop : window.scrollY;
    }

    if (scrollTarget instanceof Element && !(element && element.contains(scrollTarget))) {
      scrollTarget.scrollTop = scrollTop;
    } else if (scrollTarget === document) {
      window.scrollTo({
        top: scrollTop
      });
    }
  }

  const previousStyle = getBodyCurrentStyle();
  setBodyStyles();
  window.addEventListener('scroll', stopScroll, true);
  return () => {
    window.removeEventListener('scroll', stopScroll, true);
    resetBodyStyles(previousStyle);
  };
}
//# sourceMappingURL=utils.js.map