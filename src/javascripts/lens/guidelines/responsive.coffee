m = angular.module "lens.guidelines.responsive", []


m.controller "ResponsiveController", ['$scope', (
  $scope
) ->
  return this
]


m.directive "responsive", ->
  controller: "ResponsiveController"
  restrict: "E"
  scope: {}
  template: template


template = """
<lens-main>

  <section id="responsive-suffixes-section">
    <div id="responsive-suffixes" title="Responsive Suffixes" class="inpage-anchor"></div>
    <h2>Responsive Suffixes</h2>
    <p>Our grid classes, utility classes and typography are built in a way that
      give flexibility across breakpoints. To change things at different breakpoints,
       we have 5 suffixes to add to your classes:  <code>-sm</code>,
       <code>-md</code>, <code>-lg</code>, <code>-xl</code>, and <code>-xxl</code>. To apply the defaults styles that works across all screen sizes, simply leave off the final <code>-[suffix]</code>. <em>Note: The suffixes are meant to override the default, so always include the default.</em></p>
    <p>To see this in action, resize your browser and pay attention to how this grid layout changes.</p>
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

  <section id="breakpoints-section">
    <div id="breakpoints" title="Breakpoints" class="inpage-anchor"></div>
    <h2>Breakpoints</h2>
    <p>Everything in Lens is built with a mobile first approach. This means that
      if you want the same style across all breakpoints don't use a suffix.</p>
    <table class="table-content">
      <thead>
        <th>Suffixes</th>
        <th>Breakpoint</th>
      </thead>
      <tbody>
        <tr>
          <td><code>-sm</code></td>
          <td><code>@media (min-width: 480px)</code></td>
        </tr>
        <tr>
          <td><code>-md</code></td>
          <td><code>@media (min-width: 680px)</code></td>
        </tr>
        <tr>
          <td><code>-lg</code></td>
          <td><code>@media (min-width: 960px)</code></td>
        </tr>
        <tr>
          <td><code>-xl</code></td>
          <td><code>@media (min-width: 1140px)</code></td>
        </tr>
        <tr>
          <td><code>-xxl</code></td>
          <td><code>@media (min-width: 1440px)</code></td>
        </tr>
      </tbody>
    </table>
  </section>

  <section id="what-section">
    <div id="waht" title="What Gets a Suffix?" class="inpage-anchor"></div>
    <h2>What Gets a Suffix?</h2>
    <p>Suffixes are applied to many Lens classes to allow flexibility in creating
      responsive experiences. To apply a suffix, simply add <code>-$suffix</code>, where <code>$suffix</code> can be <code>sm, md, lg, xl, xxl</code></p>
    <p>The following classes can be extended within the style declarations of
      your component or custom element.</p>
    <table class="table-content">
      <thead>
        <th>Element</th>
        <th>Classes to <code>@extend</code></th>
      </thead>
      <tbody>
        <tr>
          <td><a ui-sref="typography">Text Sizing</a></td>
          <td><code>%text-$n</code></td>
        </tr>
        <tr>
          <td><a ui-sref="typography">Text Alignment</a></td>
          <td><code>%text-left</code><br /><code>%text-right</code><br /><code>%text-center</code><br /><code>%text-justify</code></td>
        </tr>
        <tr>
          <td><a ui-sref="layout">Display</a></td>
          <td><code>%hide</code><br /><code>%block</code><br /><code>%inline</code><br /><code>%inline-block</code></td>
        </tr>
        <tr>
          <td><a ui-sref="layout">Floats</a></td>
          <td><code>%float-l</code><br /><code>%float-r</code><br /><code>%float-none</code></td>
        </tr>
        <tr>
          <td><a ui-sref="spacing-sizing">Overflow</a></td>
          <td><code>%overflow-hidden</code><br /><code>%overflow-scroll</code><br /><code>%overflow-auto</code><br /><code>%overflow-visible</code></td>
        </tr>
        <tr>
          <td><a ui-sref="spacing-sizing">Margin</a></td>
          <td><code>%m-$n</code><br /><code>%m-[side]-$n</code><br /><code>%m-auto</code></td>
        </tr>
        <tr>
          <td><a ui-sref="spacing-sizing">Padding</a></td>
          <td><code>%p-$n</code><br /><code>%p-[side]-$n</code></td>
        </tr>
        <tr>
          <td><a ui-sref="layout">Position</a></td>
          <td><code>%relative</code><br /><code>%absolute</code><br /><code>%fixed</code><br /><code>%static</code></td>
        </tr>
        <tr>
          <td><a ui-sref="layout">Position Spacing</a></td>
          <td><code>%pos-$n</code><br /><code>%pos-[side]-$n</code></td>
        </tr>
        <tr>
          <td><a ui-sref="layout">Z-Index</a></td>
          <td><code>%z-$n</code></td>
        </tr>
        <tr>
          <td><a ui-sref="borders">Borders</a></td>
          <td><code>%border</code><br /><code>%border-[shade]</code><br /><code>%border-[side]</code><br /><code>%border-[side]-[shade]</code></td>
        </tr>
        <tr>
          <td><a ui-sref="flexbox">Flex Box</a></td>
          <td><code>%flex</code></td>
        </tr>
        <tr>
          <td><a ui-sref="spacing-sizing">Width and Height</td>
          <td><code>%w-full</code><br /><code>%w-fit</code><br /><code>%w-auto</code><br /><code>%h-full</code></td>
        </tr>
        <tr>
          <td><a ui-sref="layout">Veritcal Alignment</td>
          <td><code>%align-top</code><br /><code>%align-middle</code><br /><code>%align-bottom</code></td>
        </tr>
        <tr>
          <td><a ui-sref="layout">Rotation</a></td>
          <td><code>%rotate-$n</code></td>
        </tr>
      </tbody>
    </table>
    <p>The following classes can be added directly to the markup of your component or custom element.</p>
    <table class="table-content">
      <thead>
        <th>Element</th>
        <th>Class</th>
      </thead>
      <tbody>
        <tr>
          <td><a ui-sref="buttons">Buttons</a></td>
          <td><code>.button--[size]</code></td>
        </tr>
        <tr>
          <td><a ui-sref="grid">Grid</td>
          <td><code>.col-$n</code></td>
        </tr>
        <tr>
          <td><a ui-sref="grid">Grid Offsets</a></td>
          <td><code>.col-offset-$n</code></td>
        </tr>
        <tr>
          <td><a ui-sref="block-grid">Block Grid</a></td>
          <td><code>.block-$n</code></td>
        </tr>
      </tbody>
    </table>
  </section>

  <section id="scss-section">
    <div id="scss" title="Additional SCSS" class="inpage-anchor"></div>
    <h2>Additional SCSS</h2>
    <h3>Variables</h3>
    <p>Lens has a variable for each responsive breakpoint.</p>
    <table class="table-content">
      <thead>
        <th>Variable</th>
        <th>Breakpoint Value</th>
      </thead>
      <tbody>
        <tr>
          <td><code>$sm</code></td>
          <td><code>480px</code></td>
        </tr>
        <tr>
          <td><code>$md</code></td>
          <td><code>680px</code></td>
        </tr>
        <tr>
          <td><code>$lg</code></td>
          <td><code>960px</code></td>
        </tr>
        <tr>
          <td><code>$xl</code></td>
          <td><code>1140px</code></td>
        </tr>
        <tr>
          <td><code>$xxl</code></td>
          <td><code>1440px</code></td>
        </tr>
      </tbody>
    </table>

    <h3>Mixins</h3>
    <table class="table-content">
      <thead>
        <th>Mixin</th>
        <th>Parameters</th>
      </thead>
      <tbody>
        <tr>
          <td><pre><code class="language-css">+media($rule $breakpoint)</pre></td>
          <td><code>$rule</code> is a CSS rule<br />
              <code>$breakpoint</code> is one of the breakpoint variables above.
          </td>
        </tr>
      </tbody>
    </table>
  </section>

</lens-main>
"""
