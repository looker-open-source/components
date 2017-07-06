m = angular.module "lens.page_header", []

m.controller "PageHeaderController", (
  $scope
) ->

  return this


m.directive "pageHeader", ->
  controller: "PageHeaderController"
  restrict: "E"
  scope: { }
  template: template
  link: (scope, $el, attrs, ctrl) ->


template = """
<header class="guide-banner" role="banner">
  <a ui-sref="index" ui-sref-active="active" class="guide-name">Lens</a>
  <div class="guide-skip-content">
    <a href="#navigation">Skip to Navigation</a>
  </div>
  <a href="#" id="hamburger" class="hamburger-button">
    <span class="hamburger"></span>
  </a>
</header>
"""
