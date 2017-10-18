const toggleMobileNav = function($rootScope) {
  return {
    restrict: 'A',
    link: function(scope, $el, attrs, ctrl) {
      scope.toggle = function() {
        $rootScope.$broadcast('toggleMobileNav')
      }

      $el.on('click', scope.toggle)
    }
  }
}

export {toggleMobileNav as default}
