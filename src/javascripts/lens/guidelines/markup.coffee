m = angular.module "lens.guidelines.markup", []


m.controller "MarkupController", (
  $scope
) ->
  return this


m.directive "markup", ->
  controller: "MarkupController"
  restrict: "E"
  scope: {}
  template: template


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

<lens-main>

  <section id="markup">
    coming soon...
  </section>

</lens-main>
"""
