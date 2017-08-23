m = angular.module "lens.page_header", []

m.controller "PageHeaderController", ['$scope', (
  $scope
) ->

  $scope.hambugerClick = () =>
    @hambugerClick()
    return true

  return this
]


m.directive "pageHeader", ->
  controller: "PageHeaderController"
  restrict: "E"
  scope: { }
  template: template
  link: (scope, $el, attrs, ctrl) ->
    ctrl.hambugerClick = () ->
      $("#hamburger").toggleClass('hamburger-button-clicked')
      $('#guide_navigation').toggleClass('guide-navigation-mobile-show')


template = """
<header class="guide-banner" role="banner">
  <a ui-sref="index" ui-sref-active="active" class="guide-name">Lens</a>
  <a ui-sref="release-notes" ui-sref-active="active" class="guide-version">version </a>
  <div class="guide-skip-content">
    <a href="#navigation">Skip to Navigation</a>
  </div>
  <a href="#" id="hamburger" class="hamburger-button" ng-click="hambugerClick()">
    <span class="hamburger"></span>
  </a>
</header>
"""
