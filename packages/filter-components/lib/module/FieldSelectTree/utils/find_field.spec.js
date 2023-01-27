

import { findField } from './find_field';

describe('findField', () => {
  it('should return undefined given no field, explore or explore.fields', () => {
    expect(findField('')).not.toBeDefined();
    expect(findField('explore-a.dim-1')).not.toBeDefined();
    expect(findField('explore-a.dim-1', {})).not.toBeDefined();
  });
  it('should return the correct dimension or measure', () => {
    const dimensions = [{
      can_filter: true,
      name: 'explore-a.dim-1',
      label_short: 'dim-1',
      view_label: 'view-a'
    }, {
      can_filter: true,
      name: 'explore-a.dim-2',
      label_short: 'dim-2',
      view_label: 'view-b'
    }];
    const measures = [{
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
    }];
    const explore = {
      label: 'explore-a',
      model_name: 'model-a',
      name: 'explore-a',
      fields: {
        dimensions,
        measures
      }
    };
    expect(findField('explore-a.dim-1', explore)).toEqual(dimensions[0]);
    expect(findField('explore-a.measure-2', explore)).toEqual(measures[1]);
  });
});
//# sourceMappingURL=find_field.spec.js.map