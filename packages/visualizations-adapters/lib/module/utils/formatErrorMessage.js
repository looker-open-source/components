

const ERROR_MAP = {
  'Invalid time value': 'You have invalid values in your date or time dimension. One common fix is to filter out all null values and invalid date or time strings from your dimension.'
};

export const formatErrorMessage = errorMessage => {
  if (errorMessage.message === 'Invalid time value') {
    return ERROR_MAP['Invalid time value'];
  }
  return errorMessage.toString();
};
//# sourceMappingURL=formatErrorMessage.js.map