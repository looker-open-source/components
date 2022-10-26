export const createSafeRel = (rel, target) => {
  const noTabNab = 'noopener noreferrer';

  if (target === '_blank') {
    if (rel) {
      return `${rel} ${noTabNab}`;
    } else {
      return noTabNab;
    }
  } else return rel;
};
//# sourceMappingURL=createSafeRel.js.map