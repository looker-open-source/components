export const getDetailOptions = detail => {
  let accessory, hoverDisclosure, content, width;

  if (typeof detail === 'object' && detail && 'options' in detail) {
    accessory = detail.options.accessory;
    content = detail.content;
    hoverDisclosure = detail.options.hoverDisclosure;
    width = detail.options.width;
  } else {
    content = detail;
  }

  return {
    accessory,
    content,
    hoverDisclosure,
    width
  };
};
//# sourceMappingURL=getDetailOptions.js.map