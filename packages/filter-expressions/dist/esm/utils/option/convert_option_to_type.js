import startsWith from 'lodash/startsWith';
export const convertOptionToType = value => startsWith(value, '!') ? {
  is: false,
  type: value.substring(1)
} : {
  is: true,
  type: value
};
//# sourceMappingURL=convert_option_to_type.js.map