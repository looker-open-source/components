m = angular.module "lens.atoms.grid", []


m.controller "GridController", ['$scope', (
  $scope
) ->
  return this
]


m.directive "grid", ->
  controller: "GridController"
  restrict: "E"
  scope: {}
  template: template


template = """
<lens-main>

  <section id="grid-section">
    <div id="grid" title="The Grid" class="inpage-anchor"></div>
    <h2>The Grid</h2>
    <p>Lens provides mobile-first, fluid grid to layout pages with ease. To
       start a new grid, create a div with the class of <code>.col-container</code>.
       Then add columns inside it using <code>.col .col-$n</code>, where
       <code>$n</code> = a % value between 5-100 in increments of 5, with the addition of 33 and 66
       to let us do columns in thirds. To apply different grid width for breakpoints, apply the suffix to the column class like so: <code>.col .col-$n-md</code>, where "md" can be any of our <a href="guidelines/responsive">suffixes</a>.</p>
    <p><strong>Tips for building a happy grid:</strong>
      <ul>
        <li>Column classes should be used on container elements and <strong><em>not</em></strong>
           directly to elements such as form fields, headers or images.</li>
        <li>Avoid applying styles directly to a column element. Instead, nest
          your content within the column and apply styling there.</li>
      </ul>
    </p>
    <div class="guide-example">
      <div class="guide-example-demo">
        <div class="col-container">
          <div class="col col-30"><div class="guide-demo-box">.col .col-30</div></div>
          <div class="col col-20"><div class="guide-demo-box">.col .col-20</div></div>
          <div class="col col-50"><div class="guide-demo-box">.col .col-50</div></div>
        </div>
      </div>
      <div class="guide-example-code">
<pre><code class="language-html">&lt;div class="col-container"&gt;
  &lt;div class="col col-30"&gt;&lt;div class="guide-demo-box"&gt;.col .col-30&lt;/div&gt;&lt;/div&gt;
  &lt;div class="col col-20"&gt;&lt;div class="guide-demo-box"&gt;.col .col-20&lt;/div&gt;&lt;/div&gt
  &lt;div class="col col-50"&gt;&lt;div class="guide-demo-box"&gt;.col .col-50&lt;/div&gt;&lt;/div&gt
&lt;/div&gt;</code></pre>
      </div>
    </div>
  </section>

  <section id="nesting-section">
    <div id="nesting" title="Nesting Columns" class="inpage-anchor"></div>
    <h2>Nesting Columns</h2>
    <p>Each column in our grid can hold another set of columns inside of it. To
      make things work properly nest another <code>.col-container</code> inside
      the <code>.col</code>.</p>
    <div class="guide-example">
      <div class="guide-example-demo">
        <div class="col-container">
          <div class="col col-50">
            <div class="guide-demo-box">
              <div>.col .col-50</div>
              <div class="col-container">
                <div class="col col-30"><div class="guide-demo-box">.col .col-30</div></div>
                <div class="col col-30"><div class="guide-demo-box">.col .col-30</div></div>
                <div class="col col-40"><div class="guide-demo-box">.col .col-40</div></div>
              </div>
            </div>
          </div>
          <div class="col col-50">
            <div class="guide-demo-box">
              <div>.col .col-50</div>
              <div class="col-container">
                <div class="col col-40"><div class="guide-demo-box">.col .col-40</div></div>
                <div class="col col-60"><div class="guide-demo-box">.col .col-60</div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="guide-example-code">
<pre><code class="language-html">&lt;div class="col-container"&gt;
  &lt;div class="col col-50"&gt;
    &lt;div class="guide-demo-box"&gt;
      &lt;div&gt;.col .col-50&lt;/div&gt;
      &lt;div class="col-container"&gt;
        &lt;div class="col col-30"&gt;&lt;div class="guide-demo-box"&gt;.col .col-30&lt;/div&gt;&lt;/div&gt;
        &lt;div class="col col-30"&gt;&lt;div class="guide-demo-box"&gt;.col .col-30&lt;/div&gt;&lt;/div&gt
        &lt;div class="col col-40"&gt;&lt;div class="guide-demo-box"&gt;.col .col-40&lt;/div&gt;&lt;/div&gt
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="col col-50"&gt;
    &lt;div class="guide-demo-box"&gt;
      &lt;div&gt;.col .col-50&lt;/div&gt;
      &lt;div class="col-container"&gt;
        &lt;div class="col col-40"&gt;&lt;div class="guide-demo-box"&gt;.col .col-40&lt;/div&gt;&lt;/div&gt;
        &lt;div class="col col-60"&gt;&lt;div class="guide-demo-box"&gt;.col .col-60&lt;/div&gt;&lt;/div&gt
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>
  </section>

  <section id="max-width-section">
    <div id="max-width" title="Max-Width" class="inpage-anchor"></div>
    <h2>Max-Width</h2>
    <p class="todo">Probably should revisit this - 15px padding on either side? Centered?
      maybe the name too? just thinking out loud....</p>
    <p>By default, the grid will span 100% of the browser viewport. If you want
      to control that, add <code>.col-max</code> next to your <code>.col-container</code>
      class. This will:
      <ul>
        <li>limit the width of the grid to a maximum of <code>1260px</code></li>
        <li>add 15px padding to the right and left of the column</li>
        <li>set the left and right margin to auto, centering the column in the container</li>
      </ul>
      </p>
    <div class="guide-example">
      <div class="guide-example-demo">
        <div class="col-container col-max">
          <div class="guide-demo-box">1260px max-width.... stretch yer window to see!</div>
        </div>
      </div>
      <div class="guide-example-code">
<pre><code class="language-html">&lt;div class="col-container col-max"&gt;
  &lt;div class="guide-demo-box"&gt;1260px max-width&lt;/div&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>
  </section>

  <section id="gutters-section">
    <div id="gutters" title="Gutters" class="inpage-anchor"></div>
    <h2>Gutters</h2>
    <p class="todo">Probably should revisit the default gutter size too. currently 15px
      on the left and right, resulting in 30px between two columns.</p>
    <p>The Lens grid doesn't include gutters by default. If a gutter is needed,
       <code>.col-gutters</code> can be added next to <code>.col-container</code>
       to automatically assign <code>30px</code> gutters between columns.</p>

    <p>Gutters will not be applied to nested columns unless applied to its parent container.</p>
    <div class="guide-example">
      <div class="guide-example-demo guide-demo-box">
        <div class="col-container col-gutters">
          <div class="col col-40">
            <div class="guide-demo-box">.col .col-40</div>
          </div>
          <div class="col col-60">
            <div class="guide-demo-box">.col .col-60
              <div class="col-container">
                <div class="col col-33"><div class="guide-demo-box">.col .col-33</div></div>
                <div class="col col-33"><div class="guide-demo-box">.col .col-33</div></div>
                <div class="col col-33"><div class="guide-demo-box">.col .col-33</div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="guide-example-code">
  <pre><code class="language-html">&lt;div class="col-container col-gutters"&gt;
  &lt;div class="col col-40"&gt;
    &lt;div class="guide-demo-box"&gt;.col .col-40&lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="col col-60"&gt;
    &lt;div class="guide-demo-box"&gt;.col .col-60
      &lt;div class="col-container"&gt;
        &lt;div class="col col-33"&gt;&lt;div class="guide-demo-box"&gt;.col .col-33&lt;/div&gt;&lt;/div&gt;
        &lt;div class="col col-33"&gt;&lt;div class="guide-demo-box"&gt;.col .col-33&lt;/div&gt;&lt;/div&gt;
        &lt;div class="col col-33"&gt;&lt;div class="guide-demo-box"&gt;.col .col-33&lt;/div&gt;&lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>
  </section>

  <section id="centering-section">
    <div id="centering" title="Centering Columns" class="inpage-anchor"></div>
    <h2>Centering Columns</h2>
    <p>Sometimes you want to center a single column within its container. This is
      possible by adding <code>.col-center</code> next to your <code>.col col-$n</code> class. </p>
    <div class="col-container">
      <div class="col col-50 col-center"><div class="guide-demo-box">.col .col-50 .col-center</div></div>
    </div>
    <div class="col-container">
      <div class="col col-30 col-center"><div class="guide-demo-box">.col .col-30 .col-center</div></div>
    </div>
    <div class="guide-code">
  <pre><code class="language-html">&lt;div class="col-container"&gt;
  &lt;div class="col col-50 col-center"&gt;&lt;div class="guide-demo-box"&gt;.col .col-50 .col-center&lt;/div&gt;&lt;/div&gt;
&lt;/div&gt;
&lt;div class="col-container"&gt;
  &lt;div class="col col-30 col-center"&gt;&lt;div class="guide-demo-box"&gt;.col .col-30 .col-center&lt;/div&gt;&lt;/div&gt;
&lt;/div&gt;</code></pre>
    </div>
  </section>

  <section id="offsets-section">
    <div id="offsets" title="Offsets" class="inpage-anchor"></div>
    <h2>Column Offsets</h2>
    <p>Move columns over by different grid widths by using <code>.col-offset-$n</code> where
      <code>$n</code> has the same values as the column percentage widths. Keep in
      mind that the columns and offsets used within a <code>.col-container</code> shouldn't add
      up to more than 100.</p>
    <div class="guide-example">
      <div class="guide-example-demo">
        <div class="col-container">
          <div class="col col-40"><div class="guide-demo-box">.col-40</div></div>
          <div class="col col-40 col-offset-20"><div class="guide-demo-box">.col-40 .col-offset-30</div>
        </div>
      </div>
      <div class="guide-example-code">
<pre><code class="language-html">&lt;div class="col-container"&gt;
  &lt;div class="col col-40"&gt;&lt;div class="guide-demo-box"&gt;.col-40&lt;/div&gt;&lt;/div&gt;
  &lt;div class="col col-40 col-offset-20"&gt;&lt;div class="guide-demo-box"&gt;.col-40 .col-offset-30&lt;/div&gt;&lt;/div&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>
  </section>

  <section id="responsive-section">
    <div id="responsive" title="Responsive Breakpoints" class="inpage-anchor"></div>
    <h2>Responsive Breakpoint</h2>
    <p>Our mobile first grid comes with a set of breakpoint class suffixes that can be used to
      override columns across breakpoints. For example, if a <code>&lt;div&gt;</code>
       needs to take up the full width of
      the page across all display sizes, use <code>.col-100</code>. If that
      div needs to be half width at the medium breakpoint and a quarter at our
      large breakpoints, add <code>.col-50-md</code> and <code>.col-33-lg</code>.
      Resize the browser to see the effect in action. You can learn more about the breakpoints
      in our <a ui-sref="responsive">responsive documentation</a>.</p>
    <div class="guide-example">
      <div class="guide-example-demo">
        <div class="col-container">
          <div class="col col-100 col-50-md col-25-lg">
            <div class="guide-demo-box">
              .col-100 .col-50-md .col-25-lg
            </div>
          </div>
          <div class="col col-100 col-50-md col-25-lg">
            <div class="guide-demo-box">
              .col-100 .col-50-md .col-25-lg
            </div>
          </div>
          <div class="col col-100 col-50-md col-25-lg">
            <div class="guide-demo-box">
              .col-100 .col-50-md .col-25-lg
            </div>
          </div>
          <div class="col col-100 col-50-md col-25-lg">
            <div class="guide-demo-box">
              .col-100 .col-50-md .col-25-lg
            </div>
          </div>
        </div>
      </div>
      <div class="guide-example-code">
<pre><code class="language-html">&lt;div class="col-container"&gt;
  &lt;div class="col col-100 col-50-md col-25-lg"&gt;
    &lt;div class="guide-demo-box"&gt;.col-100 .col-50-md .col-25-lg&lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="col col-100 col-50-md col-25-lg guide-demo-box"&gt;
    &lt;div class="guide-demo-box"&gt;.col-100 .col-50-md .col-25-lg&lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="col col-100 col-50-md col-25-lg guide-demo-box"&gt;
    &lt;div class="guide-demo-box"&gt;.col-100 .col-50-md .col-25-lg&lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="col col-100 col-50-md col-25-lg guide-demo-box"&gt;
    &lt;div class="guide-demo-box"&gt;.col-100 .col-50-md .col-25-lg&lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>
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
          <td><code>$grid-max-width</code></td>
          <td>1260px</td>
          <td>This is a suggested maximum width for a layout.</td>
        </tr>
      </tbody>
    </table>
  </section>
</lens-main>
"""
