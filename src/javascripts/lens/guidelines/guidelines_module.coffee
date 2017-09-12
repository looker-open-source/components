m = angular.module "lens.guidelines", [
  "lens.guidelines.environment_properties"
  "lens.guidelines.markup"
  "lens.guidelines.responsive"
]

require "./environment_properties"
require "./markup"
require "./responsive"
