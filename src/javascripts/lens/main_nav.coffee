m = angular.module "lens.main_nav", []

m.controller "MainNavController", (
  $scope
) ->

  $scope.toggleAtomsNav = =>
    $scope.showAtomsNav = !$scope.showAtomsNav
    if $scope.showAtomsNav
      @deactivate()
      @activate("atoms")
    else
      @deactivate()

  return this


m.directive "mainNav", ->
  controller: "MainNavController"
  restrict: "E"
  scope: {}
  template: template
  link: (scope, $el, attrs, ctrl) ->
    $el.find(".guide-navigation-link").on "click", ->
      return if $(this).hasClass("guide-navigation-link-child")
      if $(this).attr("id") != "atoms" && scope.showAtomsNav
        scope.toggleAtomsNav()

    ctrl.deactivate = ->
      $el.find(".guide-navigation-link").removeClass("active")
      return

    ctrl.activate = (id) ->
      $el.find("##{id}").addClass("active")
      return


template = """
<div id="guide_navigation" class="guide-navigation">
  <nav id="navigation" role="navigation" tabindex="-1">
    <ul class="guide-navigation-list">
      <li class="guide-navigation-item">
        <a ui-sref="getting-started" ui-sref-active="active" class="guide-navigation-link">Getting Started</a>
      </li>
      <li class="guide-navigation-item">
        <a ui-sref="sass" ui-sref-active="active" class="guide-navigation-link">Sass</a>
      </li>
      <li class="guide-navigation-item">
        <a ui-sref="responsive" ui-sref-active="active" class="guide-navigation-link">Responsive</a>
      </li>
      <li class="guide-navigation-item guide-navigation-item-parent">
        <a id="atoms" class="guide-navigation-link"ng-click="toggleAtomsNav()">
          Atoms
          <span class="guide-navigation-icon"></span>
        </a>
        <ul ng-show="showAtomsNav" class="guide-navigation-list-child">
          <li class="guide-navigation-item-child">
            <a ui-sref="typography" ui-sref-active="active" class="guide-navigation-link guide-navigation-link-child">Typography</a>
          </li>
          <li class="guide-navigation-item-child">
            <a ui-sref="grid" ui-sref-active="active" class="guide-navigation-link guide-navigation-link-child">Grid</a>
          </li>
          <li class="guide-navigation-item-child">
            <a ui-sref="block-grid" ui-sref-active="active" class="guide-navigation-link guide-navigation-link-child">Block Grid</a>
          </li>
          <li class="guide-navigation-item-child">
            <a ui-sref="layout" ui-sref-active="active" class="guide-navigation-link guide-navigation-link-child">Layout</a>
          </li>
          <li class="guide-navigation-item-child">
            <a ui-sref="flexbox" ui-sref-active="active" class="guide-navigation-link guide-navigation-link-child">Flexbox</a>
          </li>
          <li class="guide-navigation-item-child">
            <a ui-sref="buttons" ui-sref-active="active" class="guide-navigation-link guide-navigation-link-child">Buttons</a>
          </li>
          <li class="guide-navigation-item-child">
            <a ui-sref="colors" ui-sref-active="active" class="guide-navigation-link guide-navigation-link-child">Colors</a>
          </li>
          <li class="guide-navigation-item-child">
            <a ui-sref="borders" ui-sref-active="active" class="guide-navigation-link guide-navigation-link-child">Borders</a>
          </li>
          <li class="guide-navigation-item-child">
            <a ui-sref="forms" ui-sref-active="active" class="guide-navigation-link guide-navigation-link-child">Forms</a>
          </li>
          <li class="guide-navigation-item-child">
            <a ui-sref="icons" ui-sref-active="active" class="guide-navigation-link guide-navigation-link-child">Icons</a>
          </li>
          <li class="guide-navigation-item-child">
            <a ui-sref="tables" ui-sref-active="active" class="guide-navigation-link guide-navigation-link-child">Tables</a>
          </li>
        </ul>
      </li>
      <li class="guide-navigation-item">
        <a ui-sref="release-notes" ui-sref-active="active" class="guide-navigation-link">Release Notes</a>
      </li>
    </ul>
  </nav>
</div>
"""
