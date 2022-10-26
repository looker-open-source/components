export const inputRippleColor = (checked, error) => {
  if (error) {
    return 'critical';
  } else if (checked) {
    return 'key';
  } else {
    return 'neutral';
  }
};
//# sourceMappingURL=inputRippleColor.js.map