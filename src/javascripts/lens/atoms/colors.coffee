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

  <section id="brand-colors">
    <h2 id="Brand">Brand Colors</h2>
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

    <ul class="list-unstyled guide-color guide-colors-brand overflow-hidden-xs"></ul><!-- List items built by JS -->
  </section>


  <section id="ui-colors">
    <h2 id="UI">UI Colors</h2>
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

    <ul class="list-unstyled guide-color guide-colors-ui overflow-hidden-xs"></ul><!-- List items built by JS -->
  </section>



  <section id="gray-colors-section">
    <div id="gray-colors" class="inpage-anchor"></div>
    <h2 id="Gray">Gray Colors</h2>
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

    <ul class="list-unstyled guide-color guide-colors-gray overflow-hidden-xs"></ul><!-- List items built by JS -->
  </section>


  <section id="Functions">
    <h2>Functions</h2>
    <h3>Colors</h3>
    <p>Brand Colors</p>
    <div class="guide-code">
  <pre><code class="language-css">.custom-element
    background-color: brand-color(purple)
  </code></pre>
    <p><code>
      brand-color(purple)<br />
      brand-color(gray)<br />
      brand-color(blue)
    </code></p>

    <p>Gray Colors</p>
    <div class="guide-code">
  <pre><code class="language-css">.custom-element
    fill: gray-color(gray-dark)
  </code></pre>
    <p><code>
      gray-color(white)<br />
      gray-color(gray-1)<br />
      gray-color(gray-2)<br />
      gray-color(gray-3)<br />
      gray-color(gray-4)<br />
      gray-color(gray-5)<br />
      gray-color(gray-6)<br />
      gray-color(gray-7)
    </code></p>

    <p class="bold">UI Colors</p>
    <div class="guide-code">
  <pre><code class="language-css">.custom-element
    background-color: ui-color(blue)
  </code></pre>
    <p><code>
      ui-color(purple)<br />
      ui-color(purple-light)<br />
      ui-color(purple-dark)<br />
      ui-color(red)<br />
      ui-color(red-light)<br />
      ui-color(red-dark)<br />
      ui-color(green)<br />
      ui-color(teal)<br />
      ui-color(teal-dark)<br />
      ui-color(yellow)<br />
      ui-color(orange)<br />
      ui-color(orange-dark)
    </code></p>

  </section>

</lens-main>

<!-- Sass to JS goodness -->
<div id="brandColorData"></div>
<div id="uiColorData"></div>
<div id="grayColorData"></div>

<script src="vendor/js/prism.js"></script>
<script src="vendor/js/sass-to-js.js"></script>
"""
