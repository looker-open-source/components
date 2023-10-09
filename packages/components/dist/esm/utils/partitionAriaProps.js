export const partitionAriaProps = props => {
  const aria = {};
  const remainder = {};
  Object.entries(props).forEach(([key, value]) => key.startsWith('aria-') ? aria[key] = value : remainder[key] = value);
  return [aria, remainder];
};
//# sourceMappingURL=partitionAriaProps.js.map