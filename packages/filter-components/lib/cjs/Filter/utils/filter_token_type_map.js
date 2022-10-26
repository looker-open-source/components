"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isValidFilterType = void 0;
var filterTokenTypeMap = {
  button_group: 'button_group',
  checkboxes: 'checkboxes',
  tag_list: 'tag_list',
  radio_buttons: 'radio_buttons',
  button_toggles: 'button_toggles',
  dropdown_menu: 'dropdown_menu',
  relative_timeframes: 'relative_timeframes',
  day_picker: 'day_picker',
  day_range_picker: 'day_range_picker',
  date_time_range_input: 'date_time_range_input',
  slider: 'slider',
  range_slider: 'range_slider'
};

var isValidFilterType = function isValidFilterType(type) {
  return !!(type && filterTokenTypeMap[type]);
};

exports.isValidFilterType = isValidFilterType;
//# sourceMappingURL=filter_token_type_map.js.map