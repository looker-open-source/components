

export const isSuccessResponse = response => {
  return (response === null || response === void 0 ? void 0 : response.ok) === true && 'value' in response;
};
//# sourceMappingURL=isSuccessResponse.js.map