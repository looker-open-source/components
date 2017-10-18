import Prism from 'prismjs'

class MainController {
  constructor($scope, $state) { 'ngInject';
    this.$scope = $scope
    this.$state = $state
    this.title = null
  }

  $onInit() {
    this.$scope.$watch('$state.current.title', () => {
      this.title = this.$state.current.title
      Prism.highlightAll()
    })
  }
}

export { MainController as default }
