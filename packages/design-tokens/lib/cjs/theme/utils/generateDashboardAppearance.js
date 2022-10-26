"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateDashboardAppearance = void 0;

var generateDashboardAppearance = function generateDashboardAppearance(colors) {
  return {
    filters: true,
    show_last_collective_runtime: true,
    tiles: {
      background: colors.background,
      body: colors.body,
      title: colors.title,
      titleAlignment: 'center'
    },
    title: true
  };
};

exports.generateDashboardAppearance = generateDashboardAppearance;
//# sourceMappingURL=generateDashboardAppearance.js.map