

import { createExploreViewsTree } from './create_explore_views_tree';

describe('createExploreViewsTree tests', () => {
  it('should return empty array given empty explores', () => {
    expect(createExploreViewsTree()).toEqual([]);
  });
  it('should create a tree with views at the top level', () => {
    const explore = {
      label: 'explore-a',
      model_name: 'model-a',
      name: 'explore-a',
      fields: {
        dimensions: [{
          can_filter: true,
          name: 'explore-a.dim-1',
          label_short: 'dim-1',
          view_label: 'view-a'
        }, {
          can_filter: true,
          name: 'explore-a.dim-2',
          label_short: 'dim-2',
          view_label: 'view-b'
        }],
        measures: [{
          can_filter: true,
          measure: true,
          name: 'explore-a.measure-1',
          label_short: 'measure-1',
          view_label: 'view-a'
        }, {
          can_filter: true,
          measure: true,
          name: 'explore-a.measure-2',
          label_short: 'measure-2',
          view_label: 'view-b'
        }]
      }
    };
    const trees = createExploreViewsTree(explore);
    expect(trees).toMatchSnapshot();
  });
});
//# sourceMappingURL=create_explore_views_tree.spec.js.map