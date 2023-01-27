"use strict";

var _getChartGeometry5 = require("./getChartGeometry");

describe('getChartGeometry', function () {
  describe('legend type === legend', function () {
    var legendType = 'legend';
    var width = 100;
    var height = 500;
    var labelWidth = 50;
    test('defines a square based on the larger width or height prop', function () {
      var _getChartGeometry = (0, _getChartGeometry5.getChartGeometry)({
          legendType: legendType,
          width: width,
          height: height,
          labelWidth: labelWidth
        }),
        canvasH = _getChartGeometry.canvasH,
        canvasW = _getChartGeometry.canvasW;
      expect(canvasW).toEqual(height);
      expect(canvasH).toEqual(height);
    });
    test('defines an appropriate pie radius and center position', function () {
      var _getChartGeometry2 = (0, _getChartGeometry5.getChartGeometry)({
          legendType: legendType,
          width: width,
          height: height,
          labelWidth: labelWidth
        }),
        pieCenterX = _getChartGeometry2.pieCenterX,
        pieCenterY = _getChartGeometry2.pieCenterY,
        outerRadius = _getChartGeometry2.outerRadius;
      expect(pieCenterX).toMatchInlineSnapshot("242.5");
      expect(pieCenterY).toMatchInlineSnapshot("242.5");
      expect(outerRadius).toMatchInlineSnapshot("227.5");
    });
  });
  describe('legend type === labels', function () {
    var legendType = 'labels';
    var width = 100;
    var height = 500;
    var labelWidth = 100;
    test('defines a rectangle based on the larger width or height prop minus labelWidth', function () {
      var _getChartGeometry3 = (0, _getChartGeometry5.getChartGeometry)({
          legendType: legendType,
          width: width,
          height: height,
          labelWidth: labelWidth
        }),
        canvasH = _getChartGeometry3.canvasH,
        canvasW = _getChartGeometry3.canvasW;
      expect(canvasW).toEqual(height);
      expect(canvasH).toMatchInlineSnapshot("363.5783396384056");
    });
    test('defines an appropriate pie radius and center position', function () {
      var _getChartGeometry4 = (0, _getChartGeometry5.getChartGeometry)({
          legendType: legendType,
          width: width,
          height: height,
          labelWidth: labelWidth
        }),
        pieCenterX = _getChartGeometry4.pieCenterX,
        pieCenterY = _getChartGeometry4.pieCenterY,
        outerRadius = _getChartGeometry4.outerRadius;
      expect(pieCenterX).toMatchInlineSnapshot("242.5");
      expect(pieCenterY).toMatchInlineSnapshot("174.2891698192028");
      expect(outerRadius).toMatchInlineSnapshot("91.07833963840565");
    });
  });
});
//# sourceMappingURL=getChartGeometry.spec.js.map