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
    <h1 class="headline">{{ title }}</h1>
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

    // Looping through section ids to make titles to use for subnav
    for (var i = 0; i < sections.length; i++) {
      section_ids = sections[i].id;
      section_ids_no_dash = section_ids.replace(/-/g, ' ');
      section_titles = titleCase(section_ids_no_dash);
      subnav.append('<li><a href="#' + section_ids + '">' + section_titles + '</a></li>');
    }

    // Title Case function from https://www.sitepoint.com/community/t/capitalizing-first-letter-of-each-word-in-string/209644/2
    function titleCase(str) {
      words = str.toLowerCase().split(' ');

      for(var i = 0; i < words.length; i++) {
        var letters = words[i].split('');
        letters[0] = letters[0].toUpperCase();
        words[i] = letters.join('');
      }
      return words.join(' ');
    }
  });
</script>
"""
