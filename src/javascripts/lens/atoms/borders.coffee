m = angular.module "lens.atoms.borders", []


m.controller "BordersController", (
  $scope
) ->
  return this


m.directive "borders", ->
  controller: "BordersController"
  restrict: "E"
  scope: {}
  template: template


template = """
<lens-main>

  <section id="borders-section">
    <div id="borders" title="Adding Borders" class="inpage-anchor"></div>
    <h2>Adding Borders</h2>
    <h3>Default Border</h3>
    <table class="table-content">
      <thead>
        <tr>
          <th><code>@extend</code></th>
          <th>Resolves to...</th>
          <th>Notes</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>%border-xs</code></td>
          <td>border: 1px solid $border-color-normal</td>
          <td>All sides of the element</td>
        </tr>
        <tr>
          <td><code>%border-t-xs</code></td>
          <td>border-top: 1px solid $border-color-normal</td>
          <td></td>
        </tr>
        <tr>
          <td><code>%border-b-xs</code></td>
          <td>border-bottom: 1px solid $border-color-normal</td>
          <td></td>
        </tr>
        <tr>
          <td><code>%border-r-xs</code></td>
          <td>border-right: 1px solid $border-color-normal</td>
          <td></td>
        </tr>
        <tr>
          <td><code>%border-l-xs</code></td>
          <td>border-left: 1px solid $border-color-normal</td>
          <td></td>
        </tr>
      </tbody>
    </table>

    <h3>Different Colors</h3>
    <p>Lens provides an easy way to add lighter or darker gray borders. Simply
      insert <code>light</code> or <code>dark</code> into the class name.</p>
    <p>To use any other Lens color as a border for your custom element,
      extend the <code>%border-color-[color]</code> classes as outlined in the
      <a ui-sref="colors">colors</a> section.
    <table class="table-content">
      <thead>
        <tr>
          <th class="col-30-xs"><code>@extend</code></th>
          <th>Resolves to...</th>
          <th>Notes</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>%border-light-xs</code></td>
          <td>border: 1px solid $border-color-light</td>
          <td>All sides of the element</td>
        </tr>
        <tr>
          <td><code>%border-dark-xs</code></td>
          <td>border: 1px solid $border-color-dark</td>
          <td>All sides of the element</td>
        </tr>
        <tr>
          <td><code>%border-[side]-light-xs</code></td>
          <td>border-[side]: 1px solid $border-color-normal</td>
          <td><code>[side]</code> is t, b, r, l for top, bottom, right or left.</td>
        </tr>
        <tr>
          <td><code>%border-[side]-dark-xs</code></td>
          <td>border-[side]: 1px solid $border-color-dark</td>
          <td><code>[side]</code> is t, b, r, l for top, bottom, right or left.</td>
        </tr>
      </tbody>
    </table>

  </section>

  <section id="removing-borders-section">
    <div id="removing-borders" title="Removing Borders" class="inpage-anchor"></div>
    <h2>Removing Borders</h2>
    <p>To get a little more control over borders at different breakpoints
       <code>.border-none-xs</code> can be applied to remove all borders or borders on specific sides.</p>
    <table class="table-content">
      <thead>
        <tr>
          <th><code>@extend</code> Class</th>
          <th>Resolves to...</th>
          <th>Notes</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>%border-none-xs</code></td>
          <td>border: none</td>
          <td>removes all borders on the element</td>
        </tr>
        <tr>
          <td><code>%border-none-t-xs</code></td>
          <td>border-top: none</td>
          <td></td>
        </tr>
        <tr>
          <td><code>%border-none-b-xs</code></td>
          <td>border-bottom: none</td>
          <td></td>
        </tr>
        <tr>
          <td><code>%border-none-r-xs</code></td>
          <td>border-right: none</td>
          <td></td>
        </tr>
        <tr>
          <td><code>%border-none-l-xs</code></td>
          <td>border-left: none</td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </section>

  <section id="rounded-corners-section">
    <div id="rounded-corners" title="Rounded Corners" class="inpage-anchor"></div>
    <h2>Rounded Corners</h2>
    <p>Use the following to apply the default border-radius to any element.</p>
    <table class="table-content">
      <thead>
        <tr>
          <th><code>@extend</code></th>
          <th>Resolves to...</th>
          <th>Notes</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>%round</code></td>
          <td>border-radius: $border-radius</td>
          <td>All corners of the element</td>
        </tr>
        <tr>
          <td><code>%round-t</code></td>
          <td>border-radius: $border-radius, $border-radius, 0, 0 </td>
          <td>Top two corners</td>
        </tr>
        <tr>
          <td><code>%round-b</code></td>
          <td>border-radius: 0, 0, $border-radius, $border-radius</td>
          <td>Bottom two corners</td>
        </tr>
        <tr>
          <td><code>%round-r</code></td>
          <td>border-radius: 0, $border-radius, $border-radius, 0</td>
          <td>Right two corners</td>
        </tr>
        <tr>
          <td><code>%round-l</code></td>
          <td>border-radius: $border-radius, 0, 0, $border-radius</td>
          <td>Left two corners</td>
        </tr>
      </tbody>
    </table>
  </section>

  <section id="circles-section">
    <div id="circles" title="Circles" class="inpage-anchor"></div>
    <h2>Circle</h2>
    <p>To turn an element into a circle, use the <code>.circle</code> class.</p>
    <table class="table-content">
      <thead>
        <tr>
          <th><code>@extend</code></th>
          <th>Resolves to...</th>
          <th>Notes</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>%circle</code></td>
          <td>border-radius: 9999px</td>
          <td>Works unless you're making something wider or taller than 9999 px</td>
        </tr>
      </tbody>
    </table>
  </section>

  <section id="variables-section">
    <div id="variables" title="Variables" class="inpage-anchor"></div>
    <h2 >Variables</h2>
    <table class="table-content">
      <thead>
        <tr>
          <th>Variable</th>
          <th>Value</th>
          <th>Notes</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>$border-color-normal</code></td>
          <td>gray-color(gray-2)</td>
          <td>the default border color #e4e5e6</td>
        </tr>
        <tr>
          <td><code>$border-color-light</code></td>
          <td>gray-color(gray-1)</td>
          <td>#f6f6f7</td>
        </tr>
        <tr>
          <td><code>$border-color-dark</code></td>
          <td>gray-color(gray-2)</td>
          <td>#d2d3d4</td>
        </tr>
        <tr>
          <td><code>$border-radius</code></td>
          <td>5px</td>
          <td>Used in buttons, modal corners, etc.</td>
        </tr>
      </tbody>
    </table>
  </section>

</lens-main>
"""
