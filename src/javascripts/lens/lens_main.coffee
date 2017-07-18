m = angular.module "lens.lens_main", []


m.controller "LensMainController", (
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


m.directive "lensMain", ->
  controller: "LensMainController"
  restrict: "E"
  scope: {}
  template: template
  transclude: true


template = """
<main class="guide-main" role="main">
  <div class="guide-header border-b-xs bg-gray-1">
    <h1 class="p-tb-1-xs">{{ title }}</h1>
  </div>

  <div class="guide-content">
    <div class="col-container">
      <div class="col col-80-lg">
        <ng-transclude></ng-transclude>
      </div>
    </div>
  </div>

</main>
"""
