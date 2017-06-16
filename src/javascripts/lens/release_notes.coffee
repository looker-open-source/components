m = angular.module "lens.release_notes", []


m.controller "ReleaseNotesController", (
  $scope
) ->
  return this


m.directive "releaseNotes", ->
  controller: "ReleaseNotesController"
  restrict: "E"
  scope: {}
  template: template


template = """
<header class="guide-banner" role="banner">
  <a ui-sref="index" ui-sref-active="active" class="guide-name">Lens</a>
  <div class="guide-skip-content">
    <a href="#navigation">Skip to Navigation</a>
  </div>
  <a href="#" id="hamburger" class="hamburger-button">
    <span class="hamburger"></span>
  </a>
</header>

<lens-main>

  <section id="index">
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
  </section>

</lens-main>
"""
