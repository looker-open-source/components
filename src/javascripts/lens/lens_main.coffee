m = angular.module "lens.lens_main", []


m.controller "LensMainController", (
  $scope
  $state
) ->
  $scope.$watch(
    -> $state.current.title
    ->
      $scope.title = $state.current.title
      Prism.highlightAll()
  )

  return this


m.directive "lensMain", ->
  controller: "LensMainController"
  restrict: "E"
  scope: {}
  template: template
  transclude: true


template = """
<main class="guide-main" role="main" id="guideMain">
  <div class="guide-header border-b-xs bg-gray-1">
    <h1>{{ title }}</h1>
  </div>

  <div class="guide-content">
    <div class="col-container">
      <div class="col col-80-lg">
        <ng-transclude></ng-transclude>
      </div>
      <div class="col col-20-lg">
        <ul id="subnav" class="guide-subnav"></ul>
      </div>
    </div>
  </div>

</main>

<script>
  $(document).ready(function() {
    var subnav = $("#subnav");
    var sections = $("section").children('div:first-child');

    for (var i = 0; i < sections.length; i++) {
      section_ids = sections[i].id;
      section_ids_no_dash = section_ids.replace(/-/g, ' ');
      subnav.append('<li><a href="#' + section_ids + '">' + section_ids_no_dash + '</a></li>');
    }

    subnav.children('li').css('text-transform', 'capitalize');
  });
</script>
"""
