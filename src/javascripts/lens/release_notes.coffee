m = angular.module "lens.release_notes", []


m.controller "ReleaseNotesController", ['$scope', (
  $scope
) ->
  return this
]


m.directive "releaseNotes", ->
  controller: "ReleaseNotesController"
  restrict: "E"
  scope: {}
  template: template


template = """
<lens-main>

  <section id="release-notes">
<!--
    <div class="col-container border-b-xs p-b-2-xs">
      <div class="col col-10-md">
        <p class="text-color-light">x.x.x</p>
      </div>
      <div class="col col-90-md">
        <p class="bold">[Release Title]</p>
        <p class="text-6-xs text-color-light">[Release Date]</p>
        <ul class="m-t-1-xs text-6-xs">
          <li>Some bullets about release</li>
        </ul>
      </div>
    </div>
-->
    <div class="col-container" border-b-xs p-b-2-xs"">
      <div class="col col-10-md">
        <p class="text-color-light">0.1.0</p>
      </div>
      <div class="col col-90-md">
        <p class="bold">The Initial Vector</p>
        <p class="text-6-xs text-color-light">[Infection Date]</p>
        <ul class="m-t-1-xs text-6-xs">
          <li>You won't feel a thing... right?</li>
        </ul>
      </div>
    </div>
  </section>

</lens-main>
"""
