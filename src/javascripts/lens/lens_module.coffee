angular = require "angular"

require "./atoms/atoms_module.coffee"
require "./getting_started.coffee"
require "./index.coffee"
require "./release_notes.coffee"
require "./sass.coffee"

module.exports = m = angular.module "Lens", [
  "lens.atoms"
  "lens.getting_started"
  "lens.index"
  "lens.release_notes"
  "lens.sass"
]

m.run ->
