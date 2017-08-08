m = angular.module "lens.getting_started", []


m.controller "GettingStartedController", ['$scope', (
  $scope
) ->
  return this
]


m.directive "gettingStarted", ->
  controller: "GettingStartedController"
  restrict: "E"
  scope: {}
  template: template


template = """
<lens-main>
  <section id="developers">
    <h2>Developers</h2>
    <code>Coming Soon!</code>
    <ul>
      <li>How we use this in helltool</li>
      <li>Extending and using Lens elsewhere (see <a href="/installation">Installation</a> section)
      <li><a href="/guidelines/markup">markup considerations</a></li>
      <li>...</li>
    </ul>
  </section>

  <section id="designers">
    <h2>Designers</h2>
    <code>Coming Soon!</code>
    <ul>
      <li>design principles, etc.</li>
      <li>link to downloadable design resources.</li>
      <li>...</li>
    </ul>
  </section>
</lens-main>
"""
