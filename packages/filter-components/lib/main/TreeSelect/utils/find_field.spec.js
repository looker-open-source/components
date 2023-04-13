"use strict";

var _find_field = require("./find_field");

describe('findField', function () {
  it('should return undefined given no field, explore or explore.fields', function () {
    expect((0, _find_field.findField)('')).not.toBeDefined();
    expect((0, _find_field.findField)('explore-a.dim-1')).not.toBeDefined();
    expect((0, _find_field.findField)('explore-a.dim-1', {})).not.toBeDefined();
  });
  it('should return the correct dimension or measure', function () {
    var dimensions = [{
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
    var measures = [{
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
    var explore = {
      label: 'explore-a',
      model_name: 'model-a',
      name: 'explore-a',
      fields: {
        dimensions: dimensions,
        measures: measures
      }
    };
    expect((0, _find_field.findField)('explore-a.dim-1', explore)).toEqual(dimensions[0]);
    expect((0, _find_field.findField)('explore-a.measure-2', explore)).toEqual(measures[1]);
  });
});
//# sourceMappingURL=find_field.spec.js.map