m = angular.module "lens.components", [
  "lens.components.buttons"
  "lens.components.forms"
  "lens.components.tables"
  "lens.components.modals"
  "lens.components.body_copy"
  "lens.components.headings"
]

require "./buttons.coffee"
require "./forms.coffee"
require "./tables.coffee"
require "./modals.coffee"
require "./body_copy.coffee"
require "./headings.coffee"
