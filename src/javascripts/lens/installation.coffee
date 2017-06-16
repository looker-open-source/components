m = angular.module "lens.installation", []


m.controller "InstallationController", (
  $scope
) ->
  return this


m.directive "installation", ->
  controller: "InstallationController"
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

  <section>
    <h2 class="guide-content-subtitle m-b-2-xs">Lens and Helltool</h2>
    <p class="m-b-4-xs"><code>coming soon</code></p>
    <h2 class="guide-content-subtitle m-b-2-xs">Using Lens in your own project</h2>
    <ul class="m-b-2-xs">
      <li>As is...</li>
      <li>Forking/branching</li>
    </ul>

    <p class="m-b-4-xs"> <code>coming soon</code></p>

    <h2 class="guide-content-subtitle m-b-2-xs">Download</h2>
    <a href="https://github.com/looker/lens/archive/v0.8.0.zip" class="button button--large-xs w-full-xs w-auto-lg">Source Files</a>
    <a href="http://looker.github.io/lens/css/Lens.css" class="button button--large-xs w-full-xs w-auto-lg">Compiled CSS</a>
    <a href="http://looker.github.io/lens/css/Lens.min.css" class="button button--large-xs w-full-xs w-auto-lg">Compiled CSS (minified)</a>
  </section>

</lens-main>
"""
