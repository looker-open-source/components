
import noop from 'lodash/noop';
import { mockTreeData } from '../stories/examples';
import { generateSections } from './generate_sections';
describe('generateSections tests', () => {
  it('should match the snapshot', () => {
    expect(generateSections(mockTreeData, 0, noop, noop)).toMatchSnapshot();
  });
});
//# sourceMappingURL=generate_sections.spec.js.map