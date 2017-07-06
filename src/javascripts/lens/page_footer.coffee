m = angular.module "lens.page_footer", []

m.controller "PageFooterController", (
  $scope
) ->

  $scope.currentYear = new Date().getFullYear()

  return this


m.directive "pageFooter", ->
  controller: "PageFooterController"
  restrict: "E"
  scope: { }
  template: template

template = """
<footer class="guide-contentinfo" role="contentinfo">
  <p class="guide-contentinfo-copy">Copyright &copy; {{ currentYear }} Looker. All rights reserved.</p>
</footer>
"""
