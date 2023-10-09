import padStart from 'lodash/padStart';
export const zeroPad = length => value => padStart(String(value), length, '0');
export const zeroPad2 = zeroPad(2);
export const zeroPad4 = zeroPad(4);
//# sourceMappingURL=zero_pad.js.map