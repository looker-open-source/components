
import { pointRadial } from 'd3-shape';
const LABEL_OFFSET = 10;

export const getConnectorLength = (angle, outerRadius) => {
  const [_, connectorY] = pointRadial(angle, outerRadius);

  const yPosPercent = Math.abs(connectorY / outerRadius);

  const connectorLength = Math.pow(1.15, Math.exp(yPosPercent * 3.37)) + LABEL_OFFSET;
  return connectorLength;
};
//# sourceMappingURL=getConnectorLength.js.map