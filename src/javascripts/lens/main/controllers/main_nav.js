class NavController {
  constructor($scope, $timeout) { 'ngInject';
    this.$scope = $scope
    this.$timeout = $timeout
    this.showMobileNav = false
    this.menuItems = [
      { title: "Lens Design", uiSref: "home" },
      { title: "Getting Started", uiSref: "getting-started" },
      { title: "Guidelines",
        id: "guidelines",
        subNav: [
          // { title: "Design Principles", uiSref: "design-principles" },
          { title: "Markup", uiSref: "markup" },
          { title: "Responsive", uiSref: "responsive" }, // This could become Platform Adaptation...
          // { title: "Platform Adaptation", uiSref: "platform-adaptation" },
          { title: "Environment Properties", uiSref: "environment-properties" },
          // { title: "Nouns and Verbs", uiSref: "nouns-verbs" },
          // { title: "Logo and Identity", uiSref: "logo-identity" }
        ]
      },
      { title: "Components",
        id: "components",
        subNav: [
          { title: "Buttons", uiSref: "buttons"},
          { title: "Forms", uiSref: "forms"},
          { title: "Tables", uiSref: "tables"},
          { title: "Modals", uiSref: "modals"},
          { title: "Body Copy", uiSref: "body-copy"},
          { title: "Headings", uiSref: "headings"}
        ]
      },
      { title: "Atoms",
        id: "atoms",
        subNav: [
          { title: "Block Grid", uiSref: "block-grid"},
          { title: "Borders", uiSref: "borders"},
          { title: "Colors", uiSref: "colors"},
          { title: "Effects", uiSref: "effects"},
          { title: "Flexbox", uiSref: "flexbox"},
          { title: "Grid", uiSref: "grid"},
          { title: "Icons", uiSref: "icons"},
          { title: "Layout", uiSref: "layout"},
          { title: "Spacing and Sizing", uiSref: "spacing-sizing"},
          { title: "Typography", uiSref: "typography"}
        ]
      },
      { title: "Installation", uiSref: "installation" },
      { title: "Release Notes", uiSref: "release-notes" },
      { title: "Playground", uiSref: "playground" }
    ]
  }

  $onInit() {
    this.$scope.$on('toggleMobileNav', () => {
      this.$timeout(() => {
        this.showMobileNav = !this.showMobileNav
      })
    })
  }
}

export { NavController as default }
