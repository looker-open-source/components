m = angular.module "lens.atoms.block_grid", []


m.controller "BlockGridController", (
  $scope
) ->
  return this


m.directive "blockGrid", ->
  controller: "BlockGridController"
  restrict: "E"
  scope: {}
  template: template


template = """
<lens-main>

  <p>The block grid is used when you need a grid of an unknown number of items.
    The recommended way to build block grids is with <code>ul</code> elements,
    but the classes work just fine on any element, like a <code>div</code>.
     Use your best judgement to keep the markup as semantic as possible.</p>
  <p>To build a block grid, start with a <code>&lt;ul class="block-grid block-$n-xs"&gt;</code>,
    where <code>$n</code> is a number from 1-6. These divisions can be
    changed across breakpoints by applying one or more of our
    <a ui-sref="responsive">grid suffix classes</a>. Then, inside that list,
    create your items with <code>&lt;li class="block-grid__item"&gt;</code>.
    If you want the same grid division across all breakpoints, use the default
    <code>.block-$n-xs</code> class. <em>Resize your browser to see the block
       grid suffixes in effect.</em></p>
  <p><strong>Note:</strong> Do not put any style utility classes on the block
    grid containers, nest them inside the list items instead.</p>

  <section id="no-gutters-section">
    <div id="no-gutters" title="No Gutters" class="inpage-anchor"></div>
    <h2>No Gutters</h2>
    <p>By default, the block grid comes with no gutters.</p>
    <div class="guide-example">
      <div class="guide-example-demo">
        <ul class="block-grid block-4-xs block-5-md block-6-xl">
          <li class="block-grid__item">
            <div class="border-dark-xs round text-center-xs">1</div>
          </li>
          <li class="block-grid__item">
            <div class="border-dark-xs round text-center-xs">2</div>
          </li>
          <li class="block-grid__item">
            <div class="border-dark-xs round text-center-xs">3</div>
          </li>
          <li class="block-grid__item">
            <div class="border-dark-xs round text-center-xs">4</div>
          </li>
          <li class="block-grid__item">
            <div class="border-dark-xs round text-center-xs">5</div>
          </li>
          <li class="block-grid__item">
            <div class="border-dark-xs round text-center-xs">6</div>
          </li>
        </ul>
      </div>
      <div class="guide-example-code">
  <pre><code class="language-html">&lt;ul class="block-grid block-4-xs block-5-md block-6-xl"&gt;
  &lt;li class="block-grid__item"&gt;
    &lt;div class="border-dark-xs round text-center-xs"&gt;1&lt;/div&gt;
  &lt;/li&gt;
  &lt;li class="block-grid__item"&gt;
    &lt;div class="border-dark-xs round text-center-xs"&gt;2&lt;/div&gt;
  &lt;/li&gt;
  &lt;li class="block-grid__item"&gt;
    &lt;div class="border-dark-xs round text-center-xs"&gt;3&lt;/div&gt;
  &lt;/li&gt;
  &lt;li class="block-grid__item"&gt;
    &lt;div class="border-dark-xs round text-center-xs"&gt;4&lt;/div&gt;
  &lt;/li&gt;
  &lt;li class="block-grid__item"&gt;
    &lt;div class="border-dark-xs round text-center-xs"&gt;5&lt;/div&gt;
  &lt;/li&gt;
  &lt;li class="block-grid__item"&gt;
    &lt;div class="border-dark-xs round text-center-xs"&gt;6&lt;/div&gt;
  &lt;/li&gt;
&lt;/ul&gt;</code></pre>
      </div>
    </div>
  </section>

  <section id="gutters-section">
    <div id="gutters" title="Gutters" class="inpage-anchor"></div>
    <h2>Gutters</h2>
    <p>To add automatic 1rem spaced gutters between items in the block grid, apply the class
       <code>.block-grid-gutters</code> alongside your <code>.block-grid</code> class.</p>
    <div class="guide-example">
      <div class="guide-example-demo">
        <ul class="block-grid block-2-xs block-3-lg block-6-xl block-grid-gutters">
          <li class="block-grid__item">
            <div class="border-dark-xs round text-center-xs">1</div>
          </li>
          <li class="block-grid__item">
            <div class="border-dark-xs round text-center-xs">2</div>
          </li>
          <li class="block-grid__item">
            <div class="border-dark-xs round text-center-xs">3</div>
          </li>
          <li class="block-grid__item">
            <div class="border-dark-xs round text-center-xs">4</div>
          </li>
          <li class="block-grid__item">
            <div class="border-dark-xs round text-center-xs">5</div>
          </li>
          <li class="block-grid__item">
            <div class="border-dark-xs round text-center-xs">6</div>
          </li>
        </ul>
      </div>
      <div class="guide-example-code">
  <pre><code class="language-html">&lt;ul class="block-grid block-2-xs block-3-lg block-6-xl block-grid-gutters"&gt;
  &lt;li class="block-grid__item"&gt;
    &lt;div class="border-dark-xs round text-center-xs"&gt;1&lt;/div&gt;
  &lt;/li&gt;
  &lt;li class="block-grid__item"&gt;
    &lt;div class="border-dark-xs round text-center-xs"&gt;2&lt;/div&gt;
  &lt;/li&gt;
  &lt;li class="block-grid__item"&gt;
    &lt;div class="border-dark-xs round text-center-xs"&gt;3&lt;/div&gt;
  &lt;/li&gt;
  &lt;li class="block-grid__item"&gt;
    &lt;div class="border-dark-xs round text-center-xs"&gt;4&lt;/div&gt;
  &lt;/li&gt;
  &lt;li class="block-grid__item"&gt;
    &lt;div class="border-dark-xs round text-center-xs"&gt;5&lt;/div&gt;
  &lt;/li&gt;
  &lt;li class="block-grid__item"&gt;
    &lt;div class="border-dark-xs round text-center-xs"&gt;6&lt;/div&gt;
  &lt;/li&gt;
&lt;/ul&gt;</code></pre>
      </div>
    </div>
  </section>

</lens-main>
"""
