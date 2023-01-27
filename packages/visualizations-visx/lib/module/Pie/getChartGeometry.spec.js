

import { getChartGeometry } from './getChartGeometry';
describe('getChartGeometry', () => {
  describe('legend type === legend', () => {
    const legendType = 'legend';
    const width = 100;
    const height = 500;
    const labelWidth = 50;
    test('defines a square based on the larger width or height prop', () => {
      const {
        canvasH,
        canvasW
      } = getChartGeometry({
        legendType,
        width,
        height,
        labelWidth
      });
      expect(canvasW).toEqual(height);
      expect(canvasH).toEqual(height);
    });
    test('defines an appropriate pie radius and center position', () => {
      const {
        pieCenterX,
        pieCenterY,
        outerRadius
      } = getChartGeometry({
        legendType,
        width,
        height,
        labelWidth
      });
      expect(pieCenterX).toMatchInlineSnapshot(`242.5`);
      expect(pieCenterY).toMatchInlineSnapshot(`242.5`);
      expect(outerRadius).toMatchInlineSnapshot(`227.5`);
    });
  });
  describe('legend type === labels', () => {
    const legendType = 'labels';
    const width = 100;
    const height = 500;
    const labelWidth = 100;
    test('defines a rectangle based on the larger width or height prop minus labelWidth', () => {
      const {
        canvasH,
        canvasW
      } = getChartGeometry({
        legendType,
        width,
        height,
        labelWidth
      });
      expect(canvasW).toEqual(height);
      expect(canvasH).toMatchInlineSnapshot(`363.5783396384056`);
    });
    test('defines an appropriate pie radius and center position', () => {
      const {
        pieCenterX,
        pieCenterY,
        outerRadius
      } = getChartGeometry({
        legendType,
        width,
        height,
        labelWidth
      });
      expect(pieCenterX).toMatchInlineSnapshot(`242.5`);
      expect(pieCenterY).toMatchInlineSnapshot(`174.2891698192028`);
      expect(outerRadius).toMatchInlineSnapshot(`91.07833963840565`);
    });
  });
});
//# sourceMappingURL=getChartGeometry.spec.js.map