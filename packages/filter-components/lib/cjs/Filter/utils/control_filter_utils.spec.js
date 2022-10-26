"use strict";

var _filterExpressions = require("@looker/filter-expressions");

var _ButtonToggles = require("../components/ControlFilter/components/ButtonToggles");

var _DropdownMenu = require("../components/ControlFilter/components/DropdownMenu");

var _DateInput = require("../components/AdvancedFilter/components/DateFilter/components/DateInput");

var _DateRange = require("../components/AdvancedFilter/components/DateFilter/components/DateRange");

var _control_filter_utils = require("./control_filter_utils");

var getSingleValue = _control_filter_utils.TEST_ONLY.getSingleValue;

var getConfig = function getConfig() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'button_toggles';
  var display = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'inline';
  return {
    options: options,
    type: type,
    display: display
  };
};

describe('getControlFilterInfo', function () {
  it('Returns props for ButtonToggles Component', function () {
    var item = {
      id: 'filter',
      type: '=',
      is: true
    };
    var filterOptions = ['Yes', 'No'];
    var tokenInfo = (0, _control_filter_utils.getControlFilterInfo)(item, {
      config: getConfig(filterOptions),
      changeFilter: jest.fn(),
      name: ''
    });
    expect(tokenInfo).not.toBeNull();
    expect(tokenInfo === null || tokenInfo === void 0 ? void 0 : tokenInfo.Component).toBe(_ButtonToggles.ButtonToggles);
  });
  it('Returns a Dropdown Menu Control Filter with suggestions', function () {
    var item = {
      id: 'filter',
      type: '=',
      is: true
    };
    var filterOptions = {};
    var suggestions = ['Snap', 'Crackle', 'Pop'];
    var tokenInfo = (0, _control_filter_utils.getControlFilterInfo)(item, {
      config: getConfig(filterOptions, 'dropdown_menu'),
      changeFilter: jest.fn(),
      onInputChange: jest.fn(),
      suggestions: suggestions,
      name: ''
    });
    expect(tokenInfo).not.toBeNull();
    expect(tokenInfo === null || tokenInfo === void 0 ? void 0 : tokenInfo.Component).toBe(_DropdownMenu.DropdownMenu);
    expect(tokenInfo === null || tokenInfo === void 0 ? void 0 : tokenInfo.props.options).toHaveLength(3);
    var filterOptionsArray = [];
    var tokenInfoTwo = (0, _control_filter_utils.getControlFilterInfo)(item, {
      config: getConfig(filterOptionsArray, 'dropdown_menu'),
      changeFilter: jest.fn(),
      onInputChange: jest.fn(),
      suggestions: suggestions,
      name: ''
    });
    expect(tokenInfoTwo).not.toBeNull();
    expect(tokenInfoTwo === null || tokenInfoTwo === void 0 ? void 0 : tokenInfoTwo.Component).toBe(_DropdownMenu.DropdownMenu);
    expect(tokenInfoTwo === null || tokenInfoTwo === void 0 ? void 0 : tokenInfoTwo.props.options).toHaveLength(3);
  });
  it('Returns DropdownMenu ControlFilter props with enumerations', function () {
    var _tokenInfoTwo$props, _tokenInfo$props;

    var item = {
      id: 'filter',
      type: '=',
      is: true
    };
    var filterOptions = {};
    var enumerations = [{
      label: 'Snap',
      value: 'caret^_escaped'
    }, {
      label: 'Crackle',
      value: '1'
    }, {
      label: 'Pop',
      value: '2'
    }, {
      label: 'Count Chocula',
      value: '4'
    }];
    var field = {
      has_allowed_values: true,
      parameter: true,
      enumerations: enumerations
    };
    var tokenInfo = (0, _control_filter_utils.getControlFilterInfo)(item, {
      config: getConfig(filterOptions, 'dropdown_menu'),
      changeFilter: jest.fn(),
      onInputChange: jest.fn(),
      enumerations: enumerations,
      field: field,
      name: ''
    });
    var filterOptionsArray = [];
    var tokenInfoTwo = (0, _control_filter_utils.getControlFilterInfo)(item, {
      config: getConfig(filterOptionsArray, 'dropdown_menu'),
      changeFilter: jest.fn(),
      onInputChange: jest.fn(),
      enumerations: enumerations,
      name: ''
    });
    expect(tokenInfoTwo === null || tokenInfoTwo === void 0 ? void 0 : (_tokenInfoTwo$props = tokenInfoTwo.props) === null || _tokenInfoTwo$props === void 0 ? void 0 : _tokenInfoTwo$props.options).toHaveLength(4);
    expect(tokenInfo === null || tokenInfo === void 0 ? void 0 : (_tokenInfo$props = tokenInfo.props) === null || _tokenInfo$props === void 0 ? void 0 : _tokenInfo$props.options[0].value).toEqual('caret_escaped');
  });
  it('Returns DropdownMenu ControlFilter props with enumerations if suggestions is an empty array', function () {
    var _tokenInfo$props2, _tokenInfoTwo$props2;

    var item = {
      id: 'filter',
      type: '=',
      is: true
    };
    var filterOptions = {};
    var enumerations = [{
      label: 'Snap',
      value: '0'
    }, {
      label: 'Crackle',
      value: '1'
    }, {
      label: 'Pop',
      value: '2'
    }, {
      label: 'Count Chocula',
      value: '4'
    }];
    var tokenInfo = (0, _control_filter_utils.getControlFilterInfo)(item, {
      config: getConfig(filterOptions, 'dropdown_menu'),
      changeFilter: jest.fn(),
      onInputChange: jest.fn(),
      suggestions: [],
      enumerations: enumerations,
      name: ''
    });
    var filterOptionsArray = [];
    var tokenInfoTwo = (0, _control_filter_utils.getControlFilterInfo)(item, {
      config: getConfig(filterOptionsArray, 'dropdown_menu'),
      changeFilter: jest.fn(),
      onInputChange: jest.fn(),
      suggestions: [],
      enumerations: enumerations,
      name: ''
    });
    expect(tokenInfo === null || tokenInfo === void 0 ? void 0 : (_tokenInfo$props2 = tokenInfo.props) === null || _tokenInfo$props2 === void 0 ? void 0 : _tokenInfo$props2.options).toHaveLength(4);
    expect(tokenInfoTwo === null || tokenInfoTwo === void 0 ? void 0 : (_tokenInfoTwo$props2 = tokenInfoTwo.props) === null || _tokenInfoTwo$props2 === void 0 ? void 0 : _tokenInfoTwo$props2.options).toHaveLength(4);
  });
  it("Returns Checkbox ControlFilter props preserving a filter's default value, if suggestions are an empty array", function () {
    var _checkboxes$props, _buttonGroup$props;

    var item = {
      id: 'filter',
      type: '=',
      is: true,
      value: ['one', 'two', 'three']
    };
    var filterOptions = {};
    var suggestions = [];
    var checkboxes = (0, _control_filter_utils.getControlFilterInfo)(item, {
      config: getConfig(filterOptions, 'checkboxes'),
      changeFilter: jest.fn(),
      onInputChange: jest.fn(),
      suggestions: suggestions,
      name: ''
    });
    expect(checkboxes === null || checkboxes === void 0 ? void 0 : (_checkboxes$props = checkboxes.props) === null || _checkboxes$props === void 0 ? void 0 : _checkboxes$props.value).toEqual(['one', 'two', 'three']);
    expect(checkboxes === null || checkboxes === void 0 ? void 0 : checkboxes.props.max).toEqual(50);
    var buttonGroup = (0, _control_filter_utils.getControlFilterInfo)(item, {
      config: getConfig(filterOptions, 'button_group'),
      changeFilter: jest.fn(),
      onInputChange: jest.fn(),
      suggestions: suggestions,
      name: ''
    });
    expect(buttonGroup === null || buttonGroup === void 0 ? void 0 : (_buttonGroup$props = buttonGroup.props) === null || _buttonGroup$props === void 0 ? void 0 : _buttonGroup$props.value).toEqual(['one', 'two', 'three']);
  });
  it('Returns props for checkbox component with options', function () {
    var item = {
      id: 'filter',
      type: '=',
      is: true
    };
    var filterOptions = ['Snap', 'Crackle', 'Pop'];
    var checkboxes = (0, _control_filter_utils.getControlFilterInfo)(item, {
      config: getConfig(filterOptions, 'checkboxes'),
      changeFilter: jest.fn(),
      onInputChange: jest.fn(),
      name: ''
    });
    expect(checkboxes === null || checkboxes === void 0 ? void 0 : checkboxes.props.options).toHaveLength(3);
  });
  it('Returns a ButtonGroup with multiple values selected', function () {
    var item = {
      id: 'filter',
      type: '=',
      is: true,
      value: ['Snap', 'Crackle']
    };
    var filterOptions = ['Snap', 'Crackle', 'Pop'];
    var tokenInfo = (0, _control_filter_utils.getControlFilterInfo)(item, {
      config: getConfig(filterOptions, 'button_group'),
      changeFilter: jest.fn(),
      onInputChange: jest.fn(),
      name: ''
    });
    expect(tokenInfo === null || tokenInfo === void 0 ? void 0 : tokenInfo.props.value).toHaveLength(2);
    expect(tokenInfo === null || tokenInfo === void 0 ? void 0 : tokenInfo.props.value[0]).toBe('Snap');
    expect(tokenInfo === null || tokenInfo === void 0 ? void 0 : tokenInfo.props.value[1]).toBe('Crackle');
    expect(tokenInfo === null || tokenInfo === void 0 ? void 0 : tokenInfo.props.options).toHaveLength(3);
  });
  it('Returns Component & props for a Date input control', function () {
    var date = {
      year: 2019,
      month: 9,
      day: 6
    };
    var item = {
      id: 'filter',
      type: '=',
      is: true,
      date: date
    };
    var filterOptions = ['Snap', 'Crackle', 'Pop'];
    var tokenInfo = (0, _control_filter_utils.getControlFilterInfo)(item, {
      config: getConfig(filterOptions, 'day_picker'),
      changeFilter: jest.fn(),
      onInputChange: jest.fn(),
      name: ''
    });
    expect(tokenInfo === null || tokenInfo === void 0 ? void 0 : tokenInfo.Component).toBe(_DateInput.DateInput);

    var _dateToFilterDateTime = (0, _filterExpressions.dateToFilterDateTimeModel)(tokenInfo === null || tokenInfo === void 0 ? void 0 : tokenInfo.props.date),
        year = _dateToFilterDateTime.year,
        month = _dateToFilterDateTime.month,
        day = _dateToFilterDateTime.day;

    expect(year).toBe(2019);
    expect(month).toBe(9);
    expect(day).toBe(6);
  });
  it('Returns a dictionary with all supported controls for date ranges', function () {
    var _tokenInfo$props$item;

    var date = {
      year: 2019,
      month: 9,
      day: 6
    };
    var item = {
      id: 'filter',
      type: 'range',
      is: true,
      start: date,
      end: date
    };
    var tokenInfo = (0, _control_filter_utils.getControlFilterInfo)(item, {
      config: getConfig({}, 'date_time_range_input'),
      changeFilter: jest.fn(),
      onInputChange: jest.fn(),
      name: ''
    });
    expect(tokenInfo === null || tokenInfo === void 0 ? void 0 : tokenInfo.Component).toBe(_DateRange.DateRange);

    var _ref = (_tokenInfo$props$item = tokenInfo === null || tokenInfo === void 0 ? void 0 : tokenInfo.props.item.start) !== null && _tokenInfo$props$item !== void 0 ? _tokenInfo$props$item : {},
        year = _ref.year,
        month = _ref.month,
        day = _ref.day;

    expect(year).toBe(2019);
    expect(month).toBe(9);
    expect(day).toBe(6);
  });
  describe('Ensure change filter is called for each filter token map value', function () {
    var numberStringControls = ['checkboxes', 'button_group', 'tag_list', 'radio_buttons', 'button_toggles', 'dropdown_menu'];
    numberStringControls.forEach(function (control) {
      it("".concat(control, " calls changeFilter "), function () {
        var _tokenInfo$props3, _tokenInfo$props3$onC;

        var item = {
          id: 'filter',
          type: '=',
          is: true
        };
        var filterOptions = {};
        var changeFilter = jest.fn();
        var tokenInfo = (0, _control_filter_utils.getControlFilterInfo)(item, {
          config: getConfig(filterOptions, control),
          changeFilter: changeFilter,
          name: ''
        });
        tokenInfo === null || tokenInfo === void 0 ? void 0 : (_tokenInfo$props3 = tokenInfo.props) === null || _tokenInfo$props3 === void 0 ? void 0 : (_tokenInfo$props3$onC = _tokenInfo$props3.onChange) === null || _tokenInfo$props3$onC === void 0 ? void 0 : _tokenInfo$props3$onC.call(_tokenInfo$props3, 1234);
        expect(changeFilter).toHaveBeenCalledTimes(1);
      });
    });
    it('Ensure change filter is called for number slider', function () {
      var _tokenInfo$props4, _tokenInfo$props4$onC;

      var changeFilter = jest.fn();
      var item = {
        id: 'filter',
        type: 'range',
        is: true,
        value: [50]
      };
      var tokenInfo = (0, _control_filter_utils.getControlFilterInfo)(item, {
        config: getConfig({}, 'slider'),
        changeFilter: changeFilter,
        name: ''
      });
      tokenInfo === null || tokenInfo === void 0 ? void 0 : (_tokenInfo$props4 = tokenInfo.props) === null || _tokenInfo$props4 === void 0 ? void 0 : (_tokenInfo$props4$onC = _tokenInfo$props4.onChange) === null || _tokenInfo$props4$onC === void 0 ? void 0 : _tokenInfo$props4$onC.call(_tokenInfo$props4, 25);
      expect(changeFilter).toHaveBeenCalledTimes(1);
    });
    it('Ensure change filter is called for number range slider', function () {
      var _tokenInfo$props5, _tokenInfo$props5$onC;

      var changeFilter = jest.fn();
      var item = {
        id: 'filter',
        type: 'range',
        is: true,
        low: 20,
        high: 30
      };
      var tokenInfo = (0, _control_filter_utils.getControlFilterInfo)(item, {
        config: getConfig({}, 'range_slider'),
        changeFilter: changeFilter,
        name: ''
      });
      tokenInfo === null || tokenInfo === void 0 ? void 0 : (_tokenInfo$props5 = tokenInfo.props) === null || _tokenInfo$props5 === void 0 ? void 0 : (_tokenInfo$props5$onC = _tokenInfo$props5.onChange) === null || _tokenInfo$props5$onC === void 0 ? void 0 : _tokenInfo$props5$onC.call(_tokenInfo$props5, 25);
      expect(changeFilter).toHaveBeenCalledTimes(1);
    });
    it('Ensure change filter is called for relative frame changes', function () {
      var _tokenInfo$props6, _tokenInfo$props6$onC;

      var date = {
        year: 2019,
        month: 9,
        day: 6
      };
      var changeFilter = jest.fn();
      var item = {
        id: 'filter',
        type: 'range',
        is: true,
        start: date,
        end: date
      };
      var tokenInfo = (0, _control_filter_utils.getControlFilterInfo)(item, {
        config: getConfig({}, 'relative_timeframes'),
        changeFilter: changeFilter,
        name: ''
      });
      var range = {
        from: new Date(),
        to: new Date()
      };
      tokenInfo === null || tokenInfo === void 0 ? void 0 : (_tokenInfo$props6 = tokenInfo.props) === null || _tokenInfo$props6 === void 0 ? void 0 : (_tokenInfo$props6$onC = _tokenInfo$props6.onChange) === null || _tokenInfo$props6$onC === void 0 ? void 0 : _tokenInfo$props6$onC.call(_tokenInfo$props6, range);
      expect(changeFilter).toHaveBeenCalledTimes(1);
    });
    it('Ensure change filter is called for day range picker', function () {
      var _tokenInfo$props7, _tokenInfo$props7$onC;

      var date = {
        year: 2019,
        month: 9,
        day: 6
      };
      var changeFilter = jest.fn();
      var item = {
        id: 'filter',
        type: 'range',
        is: true,
        start: date,
        end: date
      };
      var tokenInfo = (0, _control_filter_utils.getControlFilterInfo)(item, {
        config: getConfig({}, 'day_range_picker'),
        changeFilter: changeFilter,
        name: ''
      });
      tokenInfo === null || tokenInfo === void 0 ? void 0 : (_tokenInfo$props7 = tokenInfo.props) === null || _tokenInfo$props7 === void 0 ? void 0 : (_tokenInfo$props7$onC = _tokenInfo$props7.onChange) === null || _tokenInfo$props7$onC === void 0 ? void 0 : _tokenInfo$props7$onC.call(_tokenInfo$props7, new Date());
      expect(changeFilter).toHaveBeenCalledTimes(1);
    });
    it('Ensure change filter is called for date picker', function () {
      var date = {
        year: 2019,
        month: 9,
        day: 6
      };
      var changeFilter = jest.fn();
      var item = {
        id: 'filter',
        type: 'on',
        is: true,
        date: date
      };
      var tokenInfo = (0, _control_filter_utils.getControlFilterInfo)(item, {
        config: getConfig({}, 'day_picker'),
        changeFilter: changeFilter,
        name: ''
      });
      tokenInfo === null || tokenInfo === void 0 ? void 0 : tokenInfo.props.onChange(new Date());
      expect(changeFilter).toHaveBeenCalledTimes(1);
    });
  });
});
describe('maxForFilterType', function () {
  it('Checkboxes have a defined max', function () {
    expect((0, _control_filter_utils.maxForFilterType)('checkboxes')).toEqual(50);
  });
  it('Radio buttons have a defined max', function () {
    expect((0, _control_filter_utils.maxForFilterType)('radio_buttons')).toEqual(50);
  });
  it('Button groups have a defined max', function () {
    expect((0, _control_filter_utils.maxForFilterType)('button_group')).toEqual(30);
  });
  it('Button toggles have a defined max', function () {
    expect((0, _control_filter_utils.maxForFilterType)('button_toggles')).toEqual(30);
  });
  var controlsWithNoMax = ['advanced', 'tag_list', 'dropdown_menu', 'relative_timeframes', 'day_picker', 'slider', 'range_slider'];
  controlsWithNoMax.forEach(function (control) {
    it("".concat(control, " has no defined max"), function () {
      expect((0, _control_filter_utils.maxForFilterType)(control)).toBeUndefined();
    });
  });
});
describe('getSingleValue', function () {
  var item = {
    id: '1',
    is: true,
    type: 'match',
    value: ['Buddy McGee'],
    attributeName: '',
    attributeValue: '',
    left: null,
    right: null
  };
  var baseOptions = [{
    value: 'Mr Blue Sky',
    label: 'Mr Blue Sky'
  }, {
    value: 'Ms Pretty Face',
    label: 'Ms Pretty Face'
  }, {
    value: 'The Whole Human Race',
    label: 'The Whole Human Race'
  }];
  var fieldCategory = 'dimension';
  it("should return an the item's value when the value does not appear in options and onlyValuesFromOptions is set to false", function () {
    expect(getSingleValue(item, baseOptions, false, fieldCategory)).toEqual('Buddy McGee');
  });
  it('should return an empty string when the value does not appear in options and onlyValuesFromOptions is set to true', function () {
    expect(getSingleValue(item, baseOptions, true, fieldCategory)).toEqual('');
  });
});
//# sourceMappingURL=control_filter_utils.spec.js.map