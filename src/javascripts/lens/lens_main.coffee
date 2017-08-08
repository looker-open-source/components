m = angular.module "lens.lens_main", []

m.controller "LensMainController", ['$scope', '$state', (
  $scope
  $state
) ->
  $scope.$watch(
    -> $state.current.title
    ->
      $scope.title = $state.current.title
      Prism.highlightAll()
  )

  return this
]


m.directive "lensMain", ->
  controller: "LensMainController"
  restrict: "E"
  scope: {}
  template: template
  transclude: true


template = """
<main class="guide-main" role="main" id="guideMain">
  <div class="guide-content">
    <div class="col-container">
      <div class="col col-80-lg">
        <div class="guide-header">
          <h1 class="display-2">{{ title }}</h1>
        </div>
        <ng-transclude></ng-transclude>
      </div>
      <div class="col col-20-lg">
        <subnav></subnav>
      </div>
    </div>
  </div>

</main>
"""
