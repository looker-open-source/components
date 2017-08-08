m = angular.module "lens.atoms.effects", []


m.controller "EffectsController", ['$scope', (
  $scope
) ->
  return this
]


m.directive "effects", ->
  controller: "EffectsController"
  restrict: "E"
  scope: {}
  template: template


template = """
<lens-main>
  <section id="hover-section">
    <div id="hover" title="Hover, Focus &amp; Active" class="inpage-anchor"></div>
    <h2>Hover, Active &amp; Focus</h2>
    <p class="todo">Write a bit about hover, active and focus states and our philosophy (hover == active == focus)?</p>
    <table class="table-content">
      <thead>
        <tr>
          <th>Mixin</th>
          <th>Parameters</th>
          <th>Notes</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>+selected</code></td>
          <td>none</td>
          <td>styles the <code>:hover</code>, <code>:active</code> and <code>:focus</code> states of an element</td>
        </tr>
        <tr>
          <td><code>+selected(false)</code></td>
          <td>boolean</td>
          <td>if false, the <code>:focus</code> states is not included</td>
        </tr>
      </tbody>
    </table>
    <div class="guide-example">
      <div class="guide-example-code">
<pre><code class="language-css">.my-element-with-hover-active-and-focus-the-same
  background-color: white
  +selected
    background-color: pink
.my-class-with-hover-and-active-sans-focus
  background-color: white
  +selected(false)
    background-color: purple</code></pre>
      </div>
    </div>
  </section>

  <section id="transitions-section">
    <div id="transitions" title="Transitions" class="inpage-anchor"></div>
    <h2>Transitions</h2>
    <p>CSS transitions? default times/speeds? etc.</p>
    <p class="todo"></p>

  </section>


</lens-main>
"""
