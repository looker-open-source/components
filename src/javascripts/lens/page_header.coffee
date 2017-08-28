m = angular.module "lens.page_header", []

m.controller "PageHeaderController", ['$scope', (
  $scope
) ->

  $scope.hamburgerClick = () =>
    @hamburgerClick()
    return true

  $scope.$on 'toggleMobileNav', (event) =>
    $scope.clicked = !$scope.clicked

  return this
]

m.directive "pageHeader", ->
  controller: "PageHeaderController"
  restrict: "E"
  scope: { }
  template: template
  link: (scope, $el, attrs, ctrl) ->
    ctrl.hamburgerClick = () ->
      scope.$parent.$broadcast('toggleMobileNav')


template = """
<header class="guide-banner" role="banner">
  <a ui-sref="index" ui-sref-active="active" class="guide-name">Lens</a>
  <a ui-sref="release-notes" ui-sref-active="active" class="guide-version">version </a>
  <div class="guide-skip-content">
    <a href="#navigation">Skip to Navigation</a>
  </div>
  <a href="#" id="hamburger" class="hamburger-button" ng-class="{'hamburger-button-clicked': clicked}" ng-click="hamburgerClick()">
    <span class="hamburger"></span>
  </a>
</header>
"""
