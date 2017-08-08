m = angular.module "lens.atoms.layout", []


m.controller "LayoutController", ['$scope', (
  $scope
) ->
  return this
]


m.directive "layout", ->
  controller: "LayoutController"
  restrict: "E"
  scope: {}
  template: template


template = """
<lens-main>
  <section id="display-section">
    <div id="display" title="Display" class="inpage-anchor"></div>
    <h2>Display</h2>
    <table class="table-content">
      <thead>
        <tr>
          <th><code>@extend</code></th>
          <th>Resolves to...</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>%block-xs</code></td>
          <td>dislay: block</td>
        </tr>
        <tr>
          <td><code>%inline-xs</code></td>
          <td>dislay: inline</td>
        </tr>
        <tr>
          <td><code>%inline-block-xs</code></td>
          <td>dislay: inline-block</td>
        </tr>
        <tr>
          <td><code>%hide-xs</code></td>
          <td>dislay: none</td>
        </tr>
      </tbody>
    </table>

    <p>See the <a ui-sref="grid">grid</a>, <a ui-sref="block-grid">block grid</a> and
       <a ui-sref="flexbox">flexbox</a> sections for more advanced disaply options and layouts.
    </p>
  </section>

  <section id="position-section">
    <div id="position" title="Position" class="inpage-anchor"></div>
    <h2>Position</h2>
    <table class="table-content">
      <thead>
        <tr>
          <th><code>@extend</code></th>
          <th>Resolves to...</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>%relative-xs</code></td>
          <td>position: relative</td>
        </tr>
        <tr>
          <td><code>%absolute-xs</code></td>
          <td>position: absolute</td>
        </tr>
        <tr>
          <td><code>%fixed-xs</code></td>
          <td>position: fixed</td>
        </tr>
        <tr>
          <td><code>%static-xs</code></td>
          <td>position: static</td>
        </tr>
      </tbody>
    </table>

    <p>Set the position with <code>.pos-$s-$n-xs</code>, where <code>$s</code> is the side
       and <code>$n</code> is one of our spacing units.
    </p>
    <table class="table-content">
      <thead>
        <tr>
          <th><code>@extend</code></th>
          <th>Resolves to...</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>%pos-t-$n-xs</code></td>
          <td>top: $n</td>
        </tr>
        <tr>
          <td><code>%pos-b-$n-xs</code></td>
          <td>bottom: $n</td>
        </tr>
        <tr>
          <td><code>%pos-l-$n-xs</code></td>
          <td>left: $n</td>
        </tr>
        <tr>
          <td><code>%pos-r-$n-xs</code></td>
          <td>right: $n</td>
        </tr>
      </tbody>
    </table>

    <h3>Mixins</h3>
    <p>Set custom positioning with the following mixins:</p>
    <pre><code>+absolute($direction $amount)
+relative($direction $amount)
+fixed($direction $amount)</code></pre>
    <div class="guide-example">
      <div class="guide-example-code"><pre><code class="language-css">.custom-selector
  +absoute(top, 200px)</code></pre>
      </div>
    </div>

  </section>


  <section id="floats-section">
    <div id="floats" title="Floats" class="inpage-anchor"></div>
    <h2>Floats</h2>
    <table class="table-content">
      <thead>
        <tr>
          <th><code>@extend</code></th>
          <th>Resolves to...</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>%float-l-xs</code></td>
          <td>float: left</td>
        </tr>
        <tr>
          <td><code>%float-r-xs</code></td>
          <td>float: right</td>
        </tr>
        <tr>
          <td><code>%float-none-xs</code></td>
          <td>float: none</td>
        </tr>
      </tbody>
    </table>
    <h3>Mixins</h3>
    <p><code>+clearfix</code> will allow your element to clear its child elements.</p>
    <div class="guide-example">
      <div class="guide-example-code"><pre><code class="language-css">.custom-selector
  +clearfix</code></pre>
      </div>
    </div>
  </section>

  <section id="z-index-section">
    <div id="z-index" title="Z-Index" class="inpage-anchor"></div>
    <h2>Z-Index</h2>
    <p>Use a z-index class to assign the stack order of elements.
      Lens has classes for values 1-4, which end up as 100-400 in the property value.</p>
    <table class="table-content">
      <thead>
        <tr>
          <th><code>@extend</code></th>
          <th>Resolves to...</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>%z-1-xs</code></td>
          <td>z-index: 100</td>
        </tr>
        <tr>
          <td><code>%z-2-xs</code></td>
          <td>z-index: 200</td>
        </tr>
        <tr>
          <td><code>%z-3-xs</code></td>
          <td>z-index: 300</td>
        </tr>
        <tr>
          <td><code>%z-4-xs</code></td>
          <td>z-index: 400</td>
        </tr>
      </tbody>
    </table>
  </section>

  <section id="vertical-alignment-section">
    <div id="vertical-alignment" title="Vertical Alignment" class="inpage-anchor"></div>
    <h2>Vertical Alignment</h2>
    <p>A sub-set of the vertical alignment options for inline or table-cell elements.</p>
    <table class="table-content">
      <thead>
        <tr>
          <th><code>@extend</code></th>
          <th>Resolves to...</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>%align-top-xs</code></td>
          <td>vertical-align: top</td>
        </tr>
        <tr>
          <td><code>%align-middle-xs</code></td>
          <td>vertical-align: middle</td>
        </tr>
        <tr>
          <td><code>%align-bottom-xs</code></td>
          <td>vertical-align: bottom</td>
        </tr>
      </tbody>
    </table>
  </section>



  <section id="rotation-section">
    <div id="rotation" title="Rotation" class="inpage-anchor"></div>
    <h2>Rotation</h2>
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
          <td><code>%rotate-$n-xs</code></td>
          <td>transform: rotate(<code>$n</code>deg)</td>
          <td><code>$n</code> is one of 0, 45, 90, 135, 180, 225, 270, or 315</td>
        </tr>
      </tbody>
    </table>
  </section>

</lens-main>
"""
