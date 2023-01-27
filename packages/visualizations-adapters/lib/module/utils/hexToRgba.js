
import chunk from 'lodash/chunk';

export const hexToRgba = (hex, opacity) => {
  if (opacity < 0 || opacity > 1) {
    throw new Error(`Invalid opacity value: ${opacity}. Please provide a decimal number between 0 and 1.`);
  }
  if (hex[0] === '#' && (hex.length === 4 || hex.length === 7)) {
    return hexToRgba(hex.slice(1), opacity);
  }
  if (hex.length === 3 || hex.length === 6) {
    const chunkLength = hex.length === 3 ? 1 : 2;
    const [r, g, b] = chunk(hex, chunkLength).map(chunk => {
      const color = chunkLength === 1 ? chunk[0] + chunk[0] : chunk.join('');
      return `0x${color}`;
    });

    return `rgba(${+r}, ${+g}, ${+b}, ${String(opacity)})`;
  } else {
    throw new Error(`Invalid hexadecimal color code: ${hex}`);
  }
};
//# sourceMappingURL=hexToRgba.js.map