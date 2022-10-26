export const getActiveTrap = trapMap => {
  const traps = Object.values(trapMap);
  if (traps.length === 0) return;
  const sortedTraps = traps.sort((trapA, trapB) => {
    const relationship = trapA.element.compareDocumentPosition(trapB.element);
    return relationship > 3 ? 1 : -1;
  });
  return sortedTraps[0];
};
//# sourceMappingURL=utils.js.map