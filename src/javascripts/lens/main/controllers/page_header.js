class PageHeaderController {
  constructor($scope, $timeout) { 'ngInject';
    this.$scope = $scope
    this.$timeout = $timeout
    this.showMobileNav = false
  }

  $onInit() {
    this.$scope.$on('toggleMobileNav', () => {
      this.$timeout(() => {
        this.showMobileNav = !this.showMobileNav
      })
    })
  }
}

export { PageHeaderController as default }
