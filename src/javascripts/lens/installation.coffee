m = angular.module "lens.installation", []


m.controller "InstallationController", ["$scope", (
  $scope
) ->
  return this
]


m.directive "installation", ->
  controller: "InstallationController"
  restrict: "E"
  scope: {}
  template: template


template = """
<lens-main>

  <section>
    <h2>Lens and Helltool</h2>
    <p class="todo"></p>
    <h2>Using Lens in your own project</h2>
    <ul>
      <li>As is...</li>
      <li>Forking/branching</li>
    </ul>

    <p class="todo"></p>

    <h2>Download</h2>
    <a href="https://github.com/looker/lens/archive/v0.8.0.zip" class="button button--large w-full w-auto-lg">Source Files</a>
    <a href="http://looker.github.io/lens/css/Lens.css" class="button button--large w-full w-auto-lg">Compiled CSS</a>
    <a href="http://looker.github.io/lens/css/Lens.min.css" class="button button--large w-full w-auto-lg">Compiled CSS (minified)</a>
  </section>

</lens-main>
"""
