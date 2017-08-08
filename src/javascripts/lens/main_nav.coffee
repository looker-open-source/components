m = angular.module "lens.main_nav", []

m.controller "MainNavController", ['$scope', '$location', (
  $scope
  $location
) ->

  $scope.menuItems = [
    { title: "Lens design", uiSref: "index" },
    { title: "Getting Started", uiSref: "getting-started" },
    { title: "Guidelines", id: "guidelines", subNav: [
#        { title: "Design Principles", uiSref: "design-principles" },
        { title: "Markup", uiSref: "markup" },
        { title: "Responsive", uiSref: "responsive" } # This could become Platform Adaptation...
#        { title: "Platform Adaptation", uiSref: "platform-adaptation" },
#        { title: "Environment Properties", uiSref: "environment-properties" },
#        { title: "Nouns and Verbs", uiSref: "nouns-verbs" },
#        { title: "Logo and Identity", uiSref: "logo-identity" }
      ]
    },
    { title: "Components", id: "components", subNav: [
        { title: "Buttons", uiSref: "buttons"},
        { title: "Forms", uiSref: "forms"},
        { title: "Tables", uiSref: "tables"},
        { title: "Modals", uiSref: "modals"}
        { title: "Body Copy", uiSref: "body-copy"}
        { title: "Headings", uiSref: "headings"}
      ]
    },
    { title: "Atoms", id: "atoms", subNav: [
        { title: "Block Grid", uiSref: "block-grid"},
        { title: "Borders", uiSref: "borders"},
        { title: "Colors", uiSref: "colors"},
        { title: "Effects", uiSref: "effects"},
        { title: "Flexbox", uiSref: "flexbox"}
        { title: "Grid", uiSref: "grid"},
        { title: "Icons", uiSref: "icons"},
        { title: "Layout", uiSref: "layout"},
        { title: "Spacing and Sizing", uiSref: "spacing-sizing"},
        { title: "Typography", uiSref: "typography"}
      ]
    },
    { title: "Installation", uiSref: "installation" },
    { title: "Release Notes", uiSref: "release-notes" }
  ]

  $scope.toggleSubNav = (id) =>
    @toggleSubNav(id)
    return true

  $scope.currentSection = $location.path().split("/")[1]

  return this
]


m.directive "mainNav", ->
  controller: "MainNavController"
  restrict: "E"
  scope: { }
  template: template
  link: (scope, $el, attrs, ctrl) ->

    ctrl.toggleSubNav = (id) ->
      return unless id
      $el.find("##{id}").toggleClass("active")
      $el.find("##{id}-sub-nav").toggle()

    $(document).ready( ->
      # set nav open if a sub-page. have to wait for dom to be ready
      ctrl.toggleSubNav(scope.currentSection)
    )

template = """
<div id="guide_navigation" class="guide-navigation">
  <nav id="navigation" role="navigation" tabindex="-1">
    <ul class="guide-navigation-list">
      <li ng-repeat="item in menuItems" class="guide-navaigation-item">
        <!-- sub menu -->
        <a ng-if="item.subNav" id="{{ item.id }}" class="guide-navigation-link guide-navigation-link-parent"  ng-click="toggleSubNav(item.id)">
          {{ item.title }}
          <span class="guide-navigation-icon"></span>
        </a>
        <ul ng-if="item.subNav" id="{{ item.id }}-sub-nav" class="guide-navigation-list-child">
          <li ng-repeat="child in item.subNav" class="guide-navigation-item-child">
            <a ui-sref="{{ child.uiSref }}" ui-sref-active="active" class="guide-navigation-link guide-navigation-link-child">{{ child.title }}</a>
          </li>
        </ul>

        <!-- single item -->
        <a ng-if="item.uiSref" ui-sref="{{ item.uiSref }}" ui-sref-active="active" class="guide-navigation-link guide-navigation-link-single">{{ item.title }}</a>
      </li>
    </ul>
  </nav>
</div>
"""
