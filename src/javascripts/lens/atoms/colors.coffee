uiColors = require("./../../utils/sass-to-js-custom/ui_colors")
grayColors = require("./../../utils/sass-to-js-custom/gray_colors")

m = angular.module "lens.atoms.colors", []

m.controller "ColorsController", ['$scope', (
  $scope
) ->
  return this
]


m.directive "colors", ->
  controller: "ColorsController"
  restrict: "E"
  scope: {}
  template: template
  link: ->
    uiColors('uiColorData', '#uiColorData', '.guide-colors-ui')
    grayColors('grayColorData', '#grayColorData', '.guide-colors-gray')


template = """
<lens-main>
  <p class="todo">Some rules about how we use color.</p>
  <p>To use the colors, replace <code>[color]</code> with the name of the color you want in the classes below.</p>
  <table class="table-content">
    <thead>
      <th><code>@extend</code></th>
      <th>Resolves to...</th>
    </thead>
    <tbody>
      <tr>
        <td><code>%bg-[color]</code></td>
        <td>background-color: [color]</td>
      </tr>
      <tr>
        <td><code>%color-[color]</code></td>
        <td>color: [color]</td>
      </tr>
      <tr>
        <td><code>%border-[color]</code></td>
        <td>border-color: [color]</td>
      </tr>
    </tbody>
  </table>

  <section id="ui-colors-section">
    <div id="ui-colors" title="UI Colors" class="inpage-anchor"></div>
    <h2>UI Colors</h2>
    <ul class="guide-color guide-colors-ui"></ul><!-- List items built by JS -->
  </section>

  <section id="gray-colors-section">
    <div id="gray-colors" title="Gray Colors" class="inpage-anchor"></div>
    <h2>Gray Colors</h2>
    <ul class="guide-color guide-colors-gray"></ul><!-- List items built by JS -->
  </section>

  <section id="functions-section">
    <div id="functions" title="Functions" class="inpage-anchor"></div>
    <h2>Functions</h2>
    <p>Use the following functions to generate any of the above colors in your custom element
       that aren't <code>color</code, <code>background-color</code> or <code>border-color</code>.</p>
    <table class="table-content">
      <thead>
        <tr>
          <th>Function</th>
          <th>Parameters</th>
          <th>Notes</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>ui-color($color)</code></td>
          <td>One of the ui colors above</td>
          <td></td>
        </tr>
        <tr>
          <td><code>gray-color($color)</code></td>
          <td>One of the gray colors above</td>
          <td></td>
        </tr>
      </tbody>
    </table>
</lens-main>

<!-- Sass to JS goodness -->
<div id="uiColorData"></div>
<div id="grayColorData"></div>

<script src="vendor/js/prism.js"></script>
<script src="vendor/js/sass-to-js.js"></script>
"""
