"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mockTreeData = void 0;

var mockTreeData = [{
  value: 'Root1',
  id: '.Root1_0',
  isOpen: false,
  children: [{
    value: 'some section',
    id: '.Root1_0.some section_0',
    isOpen: false,
    children: [{
      value: 'a leaf node',
      id: '.Root1_0.some section_0.a leaf node_0',
      isOpen: false,
      payload: {
        data: 'some data'
      }
    }, {
      value: 'another leaf node',
      id: '.Root1_0.some section_0.another leaf node_1',
      isOpen: false,
      payload: {
        data: 'more data'
      }
    }]
  }, {
    value: 'anotha one',
    id: '.Root1_0.anotha one_1',
    isOpen: false,
    children: [{
      value: 'child of anotha one',
      id: '.Root1_0.anotha one_1.child of anotha one_0',
      isOpen: false,
      payload: {
        data: 'hello'
      }
    }]
  }]
}, {
  value: 'Root2',
  id: '.Root2_1',
  isOpen: false,
  children: [{
    value: 'some section2',
    id: '.Root2_1.some section2_0',
    isOpen: false,
    children: [{
      value: 'a leaf node2',
      id: '.Root2_1.some section2_0.a leaf node2_0',
      isOpen: false,
      payload: {
        data: 'some data'
      }
    }, {
      value: 'another leaf node2',
      id: '.Root2_1.some section2_0.another leaf node2_1',
      isOpen: false,
      payload: {
        data: 'more data2'
      }
    }]
  }, {
    value: 'anotha one2',
    id: '.Root2_1.anotha one2_1',
    isOpen: false,
    children: [{
      value: 'child of anotha one',
      id: '.Root2_1.anotha one2_1.child of anotha one_0',
      isOpen: false,
      payload: {
        data: 'hello'
      }
    }]
  }]
}];
exports.mockTreeData = mockTreeData;
//# sourceMappingURL=mock_tree.js.map