m = angular.module "lens.atoms.icons", []


m.controller "IconsController", ['$scope', (
  $scope
) ->
  return this
]


m.directive "icons", ->
  controller: "IconsController"
  restrict: "E"
  scope: {}
  template: template


template = """
<lens-main>
  <section id="icons">Coming Soon...</section>
</lens-main>
"""
