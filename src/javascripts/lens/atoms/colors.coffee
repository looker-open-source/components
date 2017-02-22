m = angular.module "lens.atoms.colors", []


m.controller "ColorsController", (
  $scope
) ->
  return this


m.directive "colors", ->
  controller: "ColorsController"
  restrict: "E"
  scope: {}
  template: template
  link: () ->
    require "../../sass-to-js-custom-functions.js"


template = """
<section id="brand-colors">
  <h2 id="Brand" class="m-b-1-xs">Brand Colors</h2>
  <p class="m-b-2-xs">There are only 2 main brand colors for Looker. Use the color class for any of these classes, just replace <code>[color]</code> with the name of the color you want.</p>
  <table class="table-border-rows col-60-xl m-b-3-xs">
    <thead>
      <th>Class</th>
      <th>Property</th>
    </thead>
    <tbody>
      <tr>
        <td><code>.brand-bg-[color]</code></td>
        <td><code>background-color</code></td>
      </tr>
      <tr>
        <td><code>.brand-color-[color]</code></td>
        <td><code>color</code></td>
      </tr>
      <tr>
        <td><code>.brand-border-[color]</code></td>
        <td><code>border-color</code></td>
      </tr>
    </tbody>
  </table>

  <ul class="list-unstyled guide-color guide-colors-brand overflow-hidden-xs m-b-4-xs"></ul><!-- List items built by JS -->
</section>


<section id="ui-colors">
  <h2 id="UI" class="m-b-1-xs">UI Colors</h2>
  <p class="m-b-2-xs">Looker utilizes colors in various parts of our app UI. Most of our app is gray, so color is rather important. Each of the UI colors has utility classes you can use to apply the color to different parts of an element. Use the color class for any of these classes, just replace <code>[color]</code> with the name of the color you want.</p>
  <table class="table-border-rows col-60-xl m-b-3-xs">
    <thead>
      <th>Class</th>
      <th>Property</th>
    </thead>
    <tbody>
      <tr>
        <td><code>.bg-[color]</code></td>
        <td><code>background-color</code></td>
      </tr>
      <tr>
        <td><code>.color-[color]</code></td>
        <td><code>color</code></td>
      </tr>
      <tr>
        <td><code>.border-[color]</code></td>
        <td><code>border-color</code></td>
      </tr>
    </tbody>
  </table>

  <ul class="list-unstyled guide-color guide-colors-ui overflow-hidden-xs m-b-4-xs"></ul><!-- List items built by JS -->
</section>



<section id="gray-colors">
  <h2 id="Gray" class="m-b-1-xs">Gray Colors</h2>
  <p class="m-b-2-xs">Use the color class for any of these classes, just replace <code>[color]</code> with the name of the color you want.</p>
  <table class="table-border-rows col-60-xl m-b-3-xs">
    <thead>
      <th>Class</th>
      <th>Property</th>
    </thead>
    <tbody>
      <tr>
        <td><code>.bg-[color]</code></td>
        <td><code>background-color</code></td>
      </tr>
      <tr>
        <td><code>.color-[color]</code></td>
        <td><code>color</code></td>
      </tr>
      <tr>
        <td><code>.border-[color]</code></td>
        <td><code>border-color</code></td>
      </tr>
    </tbody>
  </table>

  <ul class="list-unstyled guide-color guide-colors-gray overflow-hidden-xs m-b-4-xs"></ul><!-- List items built by JS -->
</section>


</section>



<!-- Sass to JS goodness -->
<div id="brandColorData"></div>
<div id="uiColorData"></div>
<div id="grayColorData"></div>

<script src="js/prism.js"></script>
<script src="js/sass-to-js.js"></script>
"""
