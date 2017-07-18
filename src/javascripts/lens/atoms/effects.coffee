m = angular.module "lens.atoms.effects", []


m.controller "EffectsController", (
  $scope
) ->
  return this


m.directive "effects", ->
  controller: "EffectsController"
  restrict: "E"
  scope: {}
  template: template


template = """
<lens-main>

  <ul>
    <li><a href="#hover">Hover, Active &amp; Focus</a></li>
    <li><a href="#transitions">Transitions</a></li>
  </ul>


  <section id="hover-section">
    <div id="hover" class="inpage-anchor"></div>
    <h2>Hover, Active &amp; Focus</h2>
    <p class="todo"></p>
    <p>Write a bit about hover, active and focus states and our philosophy (hover == active == focus)?</p>
    <p>Can remove <code>:focus</code> by passing <code>false</code> into the mixin.</p>
    <div class="guide-example">
      <div class="guide-example-demo">
        <div class="todo"></div>
      </div>
      <div class="guide-example-code">
<pre><code class="language-css">.my-class-with-hover-active-and-focus-the-same
  background-color: white
  +selected
    backgroundcolor: pink
.my-class-with-hover-and-active-sans-focus
  background-color: white
  +selected(false)
    background-color: purple</code></pre>
      </div>
    </div>

  </section>

  <section id="transitions-section">
    <div id="transitions" class="inpage-anchor"></div>
    <h2>Transitions</h2>
    <p>CSS transitions? default times/speeds? etc.</p>
    <p class="todo"></p>

  </section>


</lens-main>
"""
