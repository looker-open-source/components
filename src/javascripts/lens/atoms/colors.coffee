brandColors = require("./../../utils/sass-to-js-custom/brand_colors.js")
uiColors = require("./../../utils/sass-to-js-custom/ui_colors.js")
grayColors = require("./../../utils/sass-to-js-custom/gray_colors.js")

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
  link: ->
    brandColors('brandColorData', '#brandColorData', '.guide-colors-brand')
    uiColors('uiColorData', '#uiColorData', '.guide-colors-ui')
    grayColors('grayColorData', '#grayColorData', '.guide-colors-gray')


template = """
<lens-main>

  <section id="brand-colors-section">
    <div id="brand-colors" title="Brand Colors" class="inpage-anchor"></div>
    <h2>Brand Colors</h2>
    <p>There are only 2 main brand colors for Looker. Use the color class for any of these classes, just replace <code>[color]</code> with the name of the color you want.</p>
    <table class="table-border-rows col-60-xl">
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

    <ul class="guide-color guide-colors-brand"></ul><!-- List items built by JS -->
  </section>


  <section id="ui-colors-section">
    <div id="ui-colors" title="UI Colors" class="inpage-anchor"></div>
    <h2>UI Colors</h2>
    <p>Looker utilizes colors in various parts of our app UI. Most of our app is gray, so color is rather important. Each of the UI colors has utility classes you can use to apply the color to different parts of an element. Use the color class for any of these classes, just replace <code>[color]</code> with the name of the color you want.</p>
    <table class="table-border-rows col-60-xl">
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

    <ul class="guide-color guide-colors-ui"></ul><!-- List items built by JS -->
  </section>



  <section id="gray-colors-section">
    <div id="gray-colors" title="Gray Colors" class="inpage-anchor"></div>
    <h2>Gray Colors</h2>
    <p>Use the color class for any of these classes, just replace <code>[color]</code> with the name of the color you want.</p>
    <table class="table-border-rows col-60-xl">
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

    <ul class="guide-color guide-colors-gray"></ul><!-- List items built by JS -->
  </section>

</lens-main>

<!-- Sass to JS goodness -->
<div id="brandColorData"></div>
<div id="uiColorData"></div>
<div id="grayColorData"></div>

<script src="vendor/js/prism.js"></script>
<script src="vendor/js/sass-to-js.js"></script>
"""
