"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.activateScrollLock = activateScrollLock;

var _pick = _interopRequireDefault(require("lodash/pick"));

function getScrollBarWidth() {
  var scrollDiv = document.createElement('div');
  scrollDiv.style.width = '99px';
  scrollDiv.style.height = '99px';
  scrollDiv.style.position = 'absolute';
  scrollDiv.style.top = '-9999px';
  scrollDiv.style.overflow = 'scroll';
  document.body.appendChild(scrollDiv);
  var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
  document.body.removeChild(scrollDiv);
  return scrollbarWidth;
}

function getBodyCurrentStyle() {
  return document !== undefined ? (0, _pick["default"])(document.body.style, ['overflow', 'paddingRight']) : null;
}

function setBodyStyles() {
  if (document !== undefined) {
    if (window.innerWidth > document.documentElement.clientWidth) {
      var scrollbarWidth = getScrollBarWidth();
      var curPaddingRight = window.getComputedStyle(document.body).getPropertyValue('padding-right');

      if (curPaddingRight.indexOf('calc') === -1) {
        document.body.style.paddingRight = "calc(".concat(curPaddingRight, " + ").concat(scrollbarWidth, "px)");
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

function activateScrollLock(_ref) {
  var element = _ref.element;
  var scrollTop = window.scrollY;
  var scrollTarget = document;

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

  var previousStyle = getBodyCurrentStyle();
  setBodyStyles();
  window.addEventListener('scroll', stopScroll, true);
  return function () {
    window.removeEventListener('scroll', stopScroll, true);
    resetBodyStyles(previousStyle);
  };
}
//# sourceMappingURL=utils.js.map