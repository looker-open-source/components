m = angular.module "lens.lens-main", []


m.controller "LensMainController", (
  $scope
  $state
) ->
  $scope.$watch(
    -> $state.current.title,
    ->
      $scope.title = $state.current.title
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
  <div class="guide-content">

    <h1 class="border-b-xs p-b-05-xs m-b-4-xs">{{ title }}</h1>

    <div class="col-container">
      <div class="col col-80-lg">
        <ng-transclude></ng-transclude>
      </div>
      <div class="hide-xs block-lg col col-20-lg subnav-container">
        <!-- {% include subnav.html %} -->
      </div>
    </div>

  </div>
</main>
"""
