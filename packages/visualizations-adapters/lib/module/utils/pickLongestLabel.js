

export const pickLongestLabel = labels => labels.reduce((longestLabel, label) => {
  return label.length > longestLabel.length ? label : longestLabel;
}, '');
//# sourceMappingURL=pickLongestLabel.js.map