m = angular.module "lens.page_footer", []

m.controller "PageFooterController", (
  $scope
) ->

  return this


m.directive "pageFooter", ->
  controller: "PageFooterController"
  restrict: "E"
  scope: { }
  template: template
  link: (scope, $el, attrs, ctrl) ->

    # do something to return the current year?


template = """
<footer class="guide-contentinfo" role="contentinfo">
  <p class="guide-contentinfo-copy">Copyright &copy; 2017 Looker. All rights reserved.</p>
</footer>
"""
