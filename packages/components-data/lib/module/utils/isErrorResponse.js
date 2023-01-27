

export const isErrorResponse = response => {
  return (response === null || response === void 0 ? void 0 : response.ok) === false && 'error' in response;
};
//# sourceMappingURL=isErrorResponse.js.map