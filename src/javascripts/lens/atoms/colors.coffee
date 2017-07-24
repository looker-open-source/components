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
    <p>There are 3 main brand colors for Looker. Replace <code>[color]</code> with
      the name of the brand color you want.</p>
      <p class="todo">Why use the "brand" color variables vs the colors below? Are there three?</p>
    <table class="table-content">
      <thead>
        <th><code>@extend</code></th>
        <th>Resolves to...</th>
      </thead>
      <tbody>
        <tr>
          <td><code>%brand-bg-[color]</code></td>
          <td>background-color: [color]</td>
        </tr>
        <tr>
          <td><code>%brand-color-[color]</code></td>
          <td>color: [color]</td>
        </tr>
        <tr>
          <td><code>%brand-border-[color]</code></td>
          <td>border-color: [color]</td>
        </tr>
      </tbody>
    </table>

    <ul class="guide-color guide-colors-brand"></ul><!-- List items built by JS -->
  </section>


  <section id="ui-colors-section">
    <div id="ui-colors" title="UI Colors" class="inpage-anchor"></div>
    <h2>UI Colors</h2>
    <p>Replace <code>[color]</code> with the name of the color you want in the classes below.</p>
    <p class="todo">Some rules about how we use color? or does that go in the guide? When to use which purple? etc.</p>
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

    <ul class="guide-color guide-colors-ui"></ul><!-- List items built by JS -->
  </section>



  <section id="gray-colors-section">
    <div id="gray-colors" title="Gray Colors" class="inpage-anchor"></div>
    <h2>Gray Colors</h2>
    <p>Replace <code>[color]</code> with the name of the shade of gray you want.</p>
    <p class="todo">again, add some rules here..?</p>
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
          <td><code>brand-color($color)</code></td>
          <td>One of the brand colors above</td>
          <td></td>
        </tr>
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
<div id="brandColorData"></div>
<div id="uiColorData"></div>
<div id="grayColorData"></div>

<script src="vendor/js/prism.js"></script>
<script src="vendor/js/sass-to-js.js"></script>
"""
