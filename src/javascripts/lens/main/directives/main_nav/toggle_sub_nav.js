const toggleSubNav = function($location) {
  return {
    restrict: 'A',
    link: function(scope, $el, attrs, ctrl) {
      scope.toggle = function() {
        $el.toggleClass("active")
        $el.siblings().toggle()
      }

      $el.on('click', scope.toggle)

      $(document).ready(function() {
        let currentSection = $location.path().split("/")[1]
        if (attrs.id == currentSection) {
          scope.toggle()
        }
      })
    }
  }
}

export {toggleSubNav as default}
