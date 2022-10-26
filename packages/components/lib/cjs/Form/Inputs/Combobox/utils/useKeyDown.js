"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useKeyDown = useKeyDown;

var _findIndex = _interopRequireDefault(require("lodash/findIndex"));

var _throttle = _interopRequireDefault(require("lodash/throttle"));

var _xorWith = _interopRequireDefault(require("lodash/xorWith"));

var _react = require("react");

var _ComboboxContext = require("../ComboboxContext");

var _state = require("./state");

function useKeyDown() {
  var context = (0, _react.useContext)(_ComboboxContext.ComboboxContext);
  var contextMulti = (0, _react.useContext)(_ComboboxContext.ComboboxMultiContext);
  var contextToUse = context.transition ? context : contextMulti;
  var data = contextToUse.data,
      onChange = contextToUse.onChange,
      optionsRef = contextToUse.optionsRef,
      state = contextToUse.state,
      transition = contextToUse.transition,
      autoCompletePropRef = contextToUse.autoCompletePropRef,
      persistSelectionPropRef = contextToUse.persistSelectionPropRef,
      inputReadOnlyPropRef = contextToUse.inputReadOnlyPropRef,
      closeOnSelectPropRef = contextToUse.closeOnSelectPropRef;
  var navigationOption = data.navigationOption;

  function checkOnChange() {
    if (onChange) {
      if (context.transition) {
        ;
        onChange(navigationOption);
      } else {
        var newOptions = (0, _xorWith["default"])(data.options, navigationOption ? [navigationOption] : [], function (o1, o2) {
          return o1.value === o2.value;
        });
        onChange(newOptions);
      }
    }
  }

  function selectOption() {
    checkOnChange();
    transition && transition(_state.ComboboxActionType.SELECT_WITH_KEYBOARD, {
      persistSelection: persistSelectionPropRef && persistSelectionPropRef.current
    });

    if (closeOnSelectPropRef && closeOnSelectPropRef.current) {
      transition && transition(_state.ComboboxActionType.ESCAPE);
    }
  }

  return (0, _throttle["default"])(function handleKeyDown(event) {
    event.persist();
    var options = optionsRef ? optionsRef.current : [];

    switch (event.key) {
      case 'ArrowDown':
        {
          event.preventDefault();

          if (state === _state.ComboboxState.IDLE) {
            transition && transition(_state.ComboboxActionType.NAVIGATE, {
              persistSelection: persistSelectionPropRef && persistSelectionPropRef.current
            });
          } else {
            var index = navigationOption ? (0, _findIndex["default"])(options, ['value', navigationOption.value]) : -1;
            var atBottom = index === options.length - 1;

            if (atBottom) {
              if (autoCompletePropRef && autoCompletePropRef.current) {
                transition && transition(_state.ComboboxActionType.NAVIGATE, {
                  option: undefined
                });
              } else {
                var firstOption = options[0];
                transition && transition(_state.ComboboxActionType.NAVIGATE, {
                  option: firstOption
                });
              }
            } else {
              var nextOption = options[(index + 1) % options.length];
              transition && transition(_state.ComboboxActionType.NAVIGATE, {
                option: nextOption
              });
            }
          }

          break;
        }

      case 'ArrowUp':
        {
          event.preventDefault();

          if (state === _state.ComboboxState.IDLE) {
            transition && transition(_state.ComboboxActionType.NAVIGATE, {
              persistSelection: persistSelectionPropRef && persistSelectionPropRef.current
            });
          } else {
            var _index = navigationOption ? (0, _findIndex["default"])(options, ['value', navigationOption.value]) : -1;

            if (_index === 0) {
              if (autoCompletePropRef && autoCompletePropRef.current) {
                transition && transition(_state.ComboboxActionType.NAVIGATE, {
                  option: undefined
                });
              } else {
                var lastOption = options[options.length - 1];
                transition && transition(_state.ComboboxActionType.NAVIGATE, {
                  option: lastOption
                });
              }
            } else if (_index === -1) {
              var option = options[options.length - 1];
              transition && transition(_state.ComboboxActionType.NAVIGATE, {
                option: option
              });
            } else {
              var _nextOption = options[(_index - 1 + options.length) % options.length];
              transition && transition && transition(_state.ComboboxActionType.NAVIGATE, {
                option: _nextOption
              });
            }
          }

          break;
        }

      case ' ':
      case 'Spacebar':
        {
          if (inputReadOnlyPropRef && inputReadOnlyPropRef.current && state === _state.ComboboxState.NAVIGATING && navigationOption !== undefined) {
            selectOption();
          }

          break;
        }

      case 'Enter':
        {
          if (state === _state.ComboboxState.NAVIGATING && navigationOption !== undefined) {
            event.preventDefault();
            selectOption();
          }

          break;
        }
    }
  }, 50);
}
//# sourceMappingURL=useKeyDown.js.map