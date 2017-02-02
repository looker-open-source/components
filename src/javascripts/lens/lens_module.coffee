angular = require "angular"

require "./atoms/atoms_module.coffee"

module.exports = m = angular.module "Lens", [
  "lens.atoms"
]

m.run ->
