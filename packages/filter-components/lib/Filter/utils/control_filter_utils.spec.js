import { dateToFilterDateTimeModel } from '@looker/filter-expressions';
import { ButtonToggles } from '../components/ControlFilter/components/ButtonToggles';
import { DropdownMenu } from '../components/ControlFilter/components/DropdownMenu';
import { DateInput } from '../components/AdvancedFilter/components/DateFilter/components/DateInput';
import { DateRange } from '../components/AdvancedFilter/components/DateFilter/components/DateRange';
import { getControlFilterInfo, maxForFilterType, TEST_ONLY } from './control_filter_utils';
const getSingleValue = TEST_ONLY.getSingleValue;

const getConfig = (options = {}, type = 'button_toggles', display = 'inline') => ({
  options,
  type,
  display
});

describe('getControlFilterInfo', () => {
  it('Returns props for ButtonToggles Component', () => {
    const item = {
      id: 'filter',
      type: '=',
      is: true
    };
    const filterOptions = ['Yes', 'No'];
    const tokenInfo = getControlFilterInfo(item, {
      config: getConfig(filterOptions),
      changeFilter: jest.fn(),
      name: ''
    });
    expect(tokenInfo).not.toBeNull();
    expect(tokenInfo === null || tokenInfo === void 0 ? void 0 : tokenInfo.Component).toBe(ButtonToggles);
  });
  it('Returns a Dropdown Menu Control Filter with suggestions', () => {
    const item = {
      id: 'filter',
      type: '=',
      is: true
    };
    const filterOptions = {};
    const suggestions = ['Snap', 'Crackle', 'Pop'];
    const tokenInfo = getControlFilterInfo(item, {
      config: getConfig(filterOptions, 'dropdown_menu'),
      changeFilter: jest.fn(),
      onInputChange: jest.fn(),
      suggestions,
      name: ''
    });
    expect(tokenInfo).not.toBeNull();
    expect(tokenInfo === null || tokenInfo === void 0 ? void 0 : tokenInfo.Component).toBe(DropdownMenu);
    expect(tokenInfo === null || tokenInfo === void 0 ? void 0 : tokenInfo.props.options).toHaveLength(3);
    const filterOptionsArray = [];
    const tokenInfoTwo = getControlFilterInfo(item, {
      config: getConfig(filterOptionsArray, 'dropdown_menu'),
      changeFilter: jest.fn(),
      onInputChange: jest.fn(),
      suggestions,
      name: ''
    });
    expect(tokenInfoTwo).not.toBeNull();
    expect(tokenInfoTwo === null || tokenInfoTwo === void 0 ? void 0 : tokenInfoTwo.Component).toBe(DropdownMenu);
    expect(tokenInfoTwo === null || tokenInfoTwo === void 0 ? void 0 : tokenInfoTwo.props.options).toHaveLength(3);
  });
  it('Returns DropdownMenu ControlFilter props with enumerations', () => {
    var _tokenInfoTwo$props, _tokenInfo$props;

    const item = {
      id: 'filter',
      type: '=',
      is: true
    };
    const filterOptions = {};
    const enumerations = [{
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
    const field = {
      has_allowed_values: true,
      parameter: true,
      enumerations
    };
    const tokenInfo = getControlFilterInfo(item, {
      config: getConfig(filterOptions, 'dropdown_menu'),
      changeFilter: jest.fn(),
      onInputChange: jest.fn(),
      enumerations,
      field,
      name: ''
    });
    const filterOptionsArray = [];
    const tokenInfoTwo = getControlFilterInfo(item, {
      config: getConfig(filterOptionsArray, 'dropdown_menu'),
      changeFilter: jest.fn(),
      onInputChange: jest.fn(),
      enumerations,
      name: ''
    });
    expect(tokenInfoTwo === null || tokenInfoTwo === void 0 ? void 0 : (_tokenInfoTwo$props = tokenInfoTwo.props) === null || _tokenInfoTwo$props === void 0 ? void 0 : _tokenInfoTwo$props.options).toHaveLength(4);
    expect(tokenInfo === null || tokenInfo === void 0 ? void 0 : (_tokenInfo$props = tokenInfo.props) === null || _tokenInfo$props === void 0 ? void 0 : _tokenInfo$props.options[0].value).toEqual('caret_escaped');
  });
  it('Returns DropdownMenu ControlFilter props with enumerations if suggestions is an empty array', () => {
    var _tokenInfo$props2, _tokenInfoTwo$props2;

    const item = {
      id: 'filter',
      type: '=',
      is: true
    };
    const filterOptions = {};
    const enumerations = [{
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
    const tokenInfo = getControlFilterInfo(item, {
      config: getConfig(filterOptions, 'dropdown_menu'),
      changeFilter: jest.fn(),
      onInputChange: jest.fn(),
      suggestions: [],
      enumerations,
      name: ''
    });
    const filterOptionsArray = [];
    const tokenInfoTwo = getControlFilterInfo(item, {
      config: getConfig(filterOptionsArray, 'dropdown_menu'),
      changeFilter: jest.fn(),
      onInputChange: jest.fn(),
      suggestions: [],
      enumerations,
      name: ''
    });
    expect(tokenInfo === null || tokenInfo === void 0 ? void 0 : (_tokenInfo$props2 = tokenInfo.props) === null || _tokenInfo$props2 === void 0 ? void 0 : _tokenInfo$props2.options).toHaveLength(4);
    expect(tokenInfoTwo === null || tokenInfoTwo === void 0 ? void 0 : (_tokenInfoTwo$props2 = tokenInfoTwo.props) === null || _tokenInfoTwo$props2 === void 0 ? void 0 : _tokenInfoTwo$props2.options).toHaveLength(4);
  });
  it("Returns Checkbox ControlFilter props preserving a filter's default value, if suggestions are an empty array", () => {
    var _checkboxes$props, _buttonGroup$props;

    const item = {
      id: 'filter',
      type: '=',
      is: true,
      value: ['one', 'two', 'three']
    };
    const filterOptions = {};
    const suggestions = [];
    const checkboxes = getControlFilterInfo(item, {
      config: getConfig(filterOptions, 'checkboxes'),
      changeFilter: jest.fn(),
      onInputChange: jest.fn(),
      suggestions,
      name: ''
    });
    expect(checkboxes === null || checkboxes === void 0 ? void 0 : (_checkboxes$props = checkboxes.props) === null || _checkboxes$props === void 0 ? void 0 : _checkboxes$props.value).toEqual(['one', 'two', 'three']);
    expect(checkboxes === null || checkboxes === void 0 ? void 0 : checkboxes.props.max).toEqual(50);
    const buttonGroup = getControlFilterInfo(item, {
      config: getConfig(filterOptions, 'button_group'),
      changeFilter: jest.fn(),
      onInputChange: jest.fn(),
      suggestions,
      name: ''
    });
    expect(buttonGroup === null || buttonGroup === void 0 ? void 0 : (_buttonGroup$props = buttonGroup.props) === null || _buttonGroup$props === void 0 ? void 0 : _buttonGroup$props.value).toEqual(['one', 'two', 'three']);
  });
  it('Returns props for checkbox component with options', () => {
    const item = {
      id: 'filter',
      type: '=',
      is: true
    };
    const filterOptions = ['Snap', 'Crackle', 'Pop'];
    const checkboxes = getControlFilterInfo(item, {
      config: getConfig(filterOptions, 'checkboxes'),
      changeFilter: jest.fn(),
      onInputChange: jest.fn(),
      name: ''
    });
    expect(checkboxes === null || checkboxes === void 0 ? void 0 : checkboxes.props.options).toHaveLength(3);
  });
  it('Returns a ButtonGroup with multiple values selected', () => {
    const item = {
      id: 'filter',
      type: '=',
      is: true,
      value: ['Snap', 'Crackle']
    };
    const filterOptions = ['Snap', 'Crackle', 'Pop'];
    const tokenInfo = getControlFilterInfo(item, {
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
  it('Returns Component & props for a Date input control', () => {
    const date = {
      year: 2019,
      month: 9,
      day: 6
    };
    const item = {
      id: 'filter',
      type: '=',
      is: true,
      date
    };
    const filterOptions = ['Snap', 'Crackle', 'Pop'];
    const tokenInfo = getControlFilterInfo(item, {
      config: getConfig(filterOptions, 'day_picker'),
      changeFilter: jest.fn(),
      onInputChange: jest.fn(),
      name: ''
    });
    expect(tokenInfo === null || tokenInfo === void 0 ? void 0 : tokenInfo.Component).toBe(DateInput);
    const {
      year,
      month,
      day
    } = dateToFilterDateTimeModel(tokenInfo === null || tokenInfo === void 0 ? void 0 : tokenInfo.props.date);
    expect(year).toBe(2019);
    expect(month).toBe(9);
    expect(day).toBe(6);
  });
  it('Returns a dictionary with all supported controls for date ranges', () => {
    var _tokenInfo$props$item;

    const date = {
      year: 2019,
      month: 9,
      day: 6
    };
    const item = {
      id: 'filter',
      type: 'range',
      is: true,
      start: date,
      end: date
    };
    const tokenInfo = getControlFilterInfo(item, {
      config: getConfig({}, 'date_time_range_input'),
      changeFilter: jest.fn(),
      onInputChange: jest.fn(),
      name: ''
    });
    expect(tokenInfo === null || tokenInfo === void 0 ? void 0 : tokenInfo.Component).toBe(DateRange);
    const {
      year,
      month,
      day
    } = (_tokenInfo$props$item = tokenInfo === null || tokenInfo === void 0 ? void 0 : tokenInfo.props.item.start) !== null && _tokenInfo$props$item !== void 0 ? _tokenInfo$props$item : {};
    expect(year).toBe(2019);
    expect(month).toBe(9);
    expect(day).toBe(6);
  });
  describe('Ensure change filter is called for each filter token map value', () => {
    const numberStringControls = ['checkboxes', 'button_group', 'tag_list', 'radio_buttons', 'button_toggles', 'dropdown_menu'];
    numberStringControls.forEach(control => {
      it(`${control} calls changeFilter `, () => {
        var _tokenInfo$props3, _tokenInfo$props3$onC;

        const item = {
          id: 'filter',
          type: '=',
          is: true
        };
        const filterOptions = {};
        const changeFilter = jest.fn();
        const tokenInfo = getControlFilterInfo(item, {
          config: getConfig(filterOptions, control),
          changeFilter,
          name: ''
        });
        tokenInfo === null || tokenInfo === void 0 ? void 0 : (_tokenInfo$props3 = tokenInfo.props) === null || _tokenInfo$props3 === void 0 ? void 0 : (_tokenInfo$props3$onC = _tokenInfo$props3.onChange) === null || _tokenInfo$props3$onC === void 0 ? void 0 : _tokenInfo$props3$onC.call(_tokenInfo$props3, 1234);
        expect(changeFilter).toHaveBeenCalledTimes(1);
      });
    });
    it('Ensure change filter is called for number slider', () => {
      var _tokenInfo$props4, _tokenInfo$props4$onC;

      const changeFilter = jest.fn();
      const item = {
        id: 'filter',
        type: 'range',
        is: true,
        value: [50]
      };
      const tokenInfo = getControlFilterInfo(item, {
        config: getConfig({}, 'slider'),
        changeFilter,
        name: ''
      });
      tokenInfo === null || tokenInfo === void 0 ? void 0 : (_tokenInfo$props4 = tokenInfo.props) === null || _tokenInfo$props4 === void 0 ? void 0 : (_tokenInfo$props4$onC = _tokenInfo$props4.onChange) === null || _tokenInfo$props4$onC === void 0 ? void 0 : _tokenInfo$props4$onC.call(_tokenInfo$props4, 25);
      expect(changeFilter).toHaveBeenCalledTimes(1);
    });
    it('Ensure change filter is called for number range slider', () => {
      var _tokenInfo$props5, _tokenInfo$props5$onC;

      const changeFilter = jest.fn();
      const item = {
        id: 'filter',
        type: 'range',
        is: true,
        low: 20,
        high: 30
      };
      const tokenInfo = getControlFilterInfo(item, {
        config: getConfig({}, 'range_slider'),
        changeFilter,
        name: ''
      });
      tokenInfo === null || tokenInfo === void 0 ? void 0 : (_tokenInfo$props5 = tokenInfo.props) === null || _tokenInfo$props5 === void 0 ? void 0 : (_tokenInfo$props5$onC = _tokenInfo$props5.onChange) === null || _tokenInfo$props5$onC === void 0 ? void 0 : _tokenInfo$props5$onC.call(_tokenInfo$props5, 25);
      expect(changeFilter).toHaveBeenCalledTimes(1);
    });
    it('Ensure change filter is called for relative frame changes', () => {
      var _tokenInfo$props6, _tokenInfo$props6$onC;

      const date = {
        year: 2019,
        month: 9,
        day: 6
      };
      const changeFilter = jest.fn();
      const item = {
        id: 'filter',
        type: 'range',
        is: true,
        start: date,
        end: date
      };
      const tokenInfo = getControlFilterInfo(item, {
        config: getConfig({}, 'relative_timeframes'),
        changeFilter,
        name: ''
      });
      const range = {
        from: new Date(),
        to: new Date()
      };
      tokenInfo === null || tokenInfo === void 0 ? void 0 : (_tokenInfo$props6 = tokenInfo.props) === null || _tokenInfo$props6 === void 0 ? void 0 : (_tokenInfo$props6$onC = _tokenInfo$props6.onChange) === null || _tokenInfo$props6$onC === void 0 ? void 0 : _tokenInfo$props6$onC.call(_tokenInfo$props6, range);
      expect(changeFilter).toHaveBeenCalledTimes(1);
    });
    it('Ensure change filter is called for day range picker', () => {
      var _tokenInfo$props7, _tokenInfo$props7$onC;

      const date = {
        year: 2019,
        month: 9,
        day: 6
      };
      const changeFilter = jest.fn();
      const item = {
        id: 'filter',
        type: 'range',
        is: true,
        start: date,
        end: date
      };
      const tokenInfo = getControlFilterInfo(item, {
        config: getConfig({}, 'day_range_picker'),
        changeFilter,
        name: ''
      });
      tokenInfo === null || tokenInfo === void 0 ? void 0 : (_tokenInfo$props7 = tokenInfo.props) === null || _tokenInfo$props7 === void 0 ? void 0 : (_tokenInfo$props7$onC = _tokenInfo$props7.onChange) === null || _tokenInfo$props7$onC === void 0 ? void 0 : _tokenInfo$props7$onC.call(_tokenInfo$props7, new Date());
      expect(changeFilter).toHaveBeenCalledTimes(1);
    });
    it('Ensure change filter is called for date picker', () => {
      const date = {
        year: 2019,
        month: 9,
        day: 6
      };
      const changeFilter = jest.fn();
      const item = {
        id: 'filter',
        type: 'on',
        is: true,
        date
      };
      const tokenInfo = getControlFilterInfo(item, {
        config: getConfig({}, 'day_picker'),
        changeFilter,
        name: ''
      });
      tokenInfo === null || tokenInfo === void 0 ? void 0 : tokenInfo.props.onChange(new Date());
      expect(changeFilter).toHaveBeenCalledTimes(1);
    });
  });
});
describe('maxForFilterType', () => {
  it('Checkboxes have a defined max', () => {
    expect(maxForFilterType('checkboxes')).toEqual(50);
  });
  it('Radio buttons have a defined max', () => {
    expect(maxForFilterType('radio_buttons')).toEqual(50);
  });
  it('Button groups have a defined max', () => {
    expect(maxForFilterType('button_group')).toEqual(30);
  });
  it('Button toggles have a defined max', () => {
    expect(maxForFilterType('button_toggles')).toEqual(30);
  });
  const controlsWithNoMax = ['advanced', 'tag_list', 'dropdown_menu', 'relative_timeframes', 'day_picker', 'slider', 'range_slider'];
  controlsWithNoMax.forEach(control => {
    it(`${control} has no defined max`, () => {
      expect(maxForFilterType(control)).toBeUndefined();
    });
  });
});
describe('getSingleValue', () => {
  const item = {
    id: '1',
    is: true,
    type: 'match',
    value: ['Buddy McGee'],
    attributeName: '',
    attributeValue: '',
    left: null,
    right: null
  };
  const baseOptions = [{
    value: 'Mr Blue Sky',
    label: 'Mr Blue Sky'
  }, {
    value: 'Ms Pretty Face',
    label: 'Ms Pretty Face'
  }, {
    value: 'The Whole Human Race',
    label: 'The Whole Human Race'
  }];
  const fieldCategory = 'dimension';
  it("should return an the item's value when the value does not appear in options and onlyValuesFromOptions is set to false", () => {
    expect(getSingleValue(item, baseOptions, false, fieldCategory)).toEqual('Buddy McGee');
  });
  it('should return an empty string when the value does not appear in options and onlyValuesFromOptions is set to true', () => {
    expect(getSingleValue(item, baseOptions, true, fieldCategory)).toEqual('');
  });
});
//# sourceMappingURL=control_filter_utils.spec.js.map