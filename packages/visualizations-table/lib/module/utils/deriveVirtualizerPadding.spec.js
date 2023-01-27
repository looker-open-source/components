
import { deriveVirtualizerPadding } from './deriveVirtualizerPadding';
import noop from 'lodash/noop';
const mockTotalSize = 17180;
const mockVirtualItems = [{
  index: 88,
  start: 7040,
  size: 80,
  end: 7120,
  key: 88,
  measureElement: noop
}, {
  index: 89,
  start: 7120,
  size: 80,
  end: 7200,
  key: 89,
  measureElement: noop
}, {
  index: 90,
  start: 7200,
  size: 80,
  end: 7280,
  key: 90,
  measureElement: noop
}];
const mockVirualizer = {
  getTotalSize: () => mockTotalSize,
  getVirtualItems: () => mockVirtualItems
};
it('returns start and end spacer padding values', () => {
  const [paddingStart, paddingEnd] = deriveVirtualizerPadding(mockVirualizer);
  expect(paddingStart).toEqual(mockVirtualItems[0].start);
  expect(paddingEnd).toEqual(mockTotalSize - mockVirtualItems[2].end);
});
//# sourceMappingURL=deriveVirtualizerPadding.spec.js.map