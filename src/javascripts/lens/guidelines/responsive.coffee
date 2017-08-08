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
       we have 6 suffixes to add to your classes: <code>-xs</code>, <code>-sm</code>,
       <code>-md</code>, <code>-lg</code>, <code>-xl</code>, and <code>-xxl</code>.</p>
    <p>To see this in action, resize your browser and pay attention to how this grid layout changes.</p>
    <div class="guide-example">
      <div class="guide-example-demo">
        <div class="col-container">
          <div class="col col-100-xs col-50-md col-25-lg">
            <div class="guide-demo-box">
              .col-100-xs .col-50-md .col-25-lg
            </div>
          </div>
          <div class="col col-100-xs col-50-md col-25-lg">
            <div class="guide-demo-box">
              .col-100-xs .col-50-md .col-25-lg
            </div>
          </div>
          <div class="col col-100-xs col-50-md col-25-lg">
            <div class="guide-demo-box">
              .col-100-xs .col-50-md .col-25-lg
            </div>
          </div>
          <div class="col col-100-xs col-50-md col-25-lg">
            <div class="guide-demo-box">
              .col-100-xs .col-50-md .col-25-lg
            </div>
          </div>
        </div>
      </div>
      <div class="guide-example-code">
<pre><code class="language-html">&lt;div class="col-container"&gt;
  &lt;div class="col col-100-xs col-50-md col-25-lg"&gt;
    &lt;div class="guide-demo-box"&gt;.col-100-xs .col-50-md .col-25-lg&lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="col col-100-xs col-50-md col-25-lg guide-demo-box"&gt;
    &lt;div class="guide-demo-box"&gt;.col-100-xs .col-50-md .col-25-lg&lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="col col-100-xs col-50-md col-25-lg guide-demo-box"&gt;
    &lt;div class="guide-demo-box"&gt;.col-100-xs .col-50-md .col-25-lg&lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="col col-100-xs col-50-md col-25-lg guide-demo-box"&gt;
    &lt;div class="guide-demo-box"&gt;.col-100-xs .col-50-md .col-25-lg&lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>
  </section>

  <section id="breakpoints-section">
    <div id="breakpoints" title="Breakpoints" class="inpage-anchor"></div>
    <h2>Breakpoints</h2>
    <p>Everything in Lens is built with a mobile first approach. This means that
      if you want the same style across all breakpoints you'd use the <code>-xs</code>
      suffix.</p>
    <table class="table-content">
      <thead>
        <th>Suffixes</th>
        <th>Breakpoint</th>
      </thead>
      <tbody>
        <tr>
          <td><code>-xs</code></td>
          <td><code>@media screen</code></td>
        </tr>
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
      responsive experiences. </p>
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
          <td><code>%text-$n-xs</code></td>
        </tr>
        <tr>
          <td><a ui-sref="typography">Text Alignment</a></td>
          <td><code>%text-left-xs</code><br /><code>%text-right-xs</code><br /><code>%text-center-xs</code><br /><code>%text-justify-xs</code></td>
        </tr>
        <tr>
          <td><a ui-sref="layout">Display</a></td>
          <td><code>%hide-xs</code><br /><code>%block-xs</code><br /><code>%inline-xs</code><br /><code>%inline-block-xs</code></td>
        </tr>
        <tr>
          <td><a ui-sref="layout">Floats</a></td>
          <td><code>%float-l-xs</code><br /><code>%float-r-xs</code><br /><code>%float-none-xs</code></td>
        </tr>
        <tr>
          <td><a ui-sref="spacing-sizing">Overflow</a></td>
          <td><code>%overflow-hidden-xs</code><br /><code>%overflow-scroll-xs</code><br /><code>%overflow-auto-xs</code><br /><code>%overflow-visible-xs</code></td>
        </tr>
        <tr>
          <td><a ui-sref="spacing-sizing">Margin</a></td>
          <td><code>%m-$n-xs</code><br /><code>%m-[side]-$n-xs</code><br /><code>%m-auto-xs</code></td>
        </tr>
        <tr>
          <td><a ui-sref="spacing-sizing">Padding</a></td>
          <td><code>%p-$n-xs</code><br /><code>%p-[side]-$n-xs</code></td>
        </tr>
        <tr>
          <td><a ui-sref="layout">Position</a></td>
          <td><code>%relative-xs</code><br /><code>%absolute-xs</code><br /><code>%fixed-xs</code><br /><code>%static-xs</code></td>
        </tr>
        <tr>
          <td><a ui-sref="layout">Position Spacing</a></td>
          <td><code>%pos-$n-xs</code><br /><code>%pos-[side]-$n-xs</code></td>
        </tr>
        <tr>
          <td><a ui-sref="layout">Z-Index</a></td>
          <td><code>%z-$n-xs</code></td>
        </tr>
        <tr>
          <td><a ui-sref="borders">Borders</a></td>
          <td><code>%border-xs</code><br /><code>%border-[shade]-xs</code><br /><code>%border-[side]-xs</code><br /><code>%border-[side]-[shade]-xs</code></td>
        </tr>
        <tr>
          <td><a ui-sref="flexbox">Flex Box</a></td>
          <td><code>%flex-xs</code></td>
        </tr>
        <tr>
          <td><a ui-sref="spacing-sizing">Width and Height</td>
          <td><code>%w-full-xs</code><br /><code>%w-fit-xs</code><br /><code>%w-auto-xs</code><br /><code>%h-full-xs</code></td>
        </tr>
        <tr>
          <td><a ui-sref="layout">Veritcal Alignment</td>
          <td><code>%align-top-xs</code><br /><code>%align-middle-xs</code><br /><code>%align-bottom-xs</code></td>
        </tr>
        <tr>
          <td><a ui-sref="layout">Rotation</a></td>
          <td><code>%rotate-$n-xs</code></td>
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
          <td><code>.button--[size]-xs</code></td>
        </tr>
        <tr>
          <td><a ui-sref="grid">Grid</td>
          <td><code>.col-$n-xs</code></td>
        </tr>
        <tr>
          <td><a ui-sref="grid">Grid Offsets</a></td>
          <td><code>.col-offset-$n-xs</code></td>
        </tr>
        <tr>
          <td><a ui-sref="block-grid">Block Grid</a></td>
          <td><code>.block-$n-xs</code></td>
        </tr>
      </tbody>
    </table>
  </section>

  <section id="scss-section">
    <div id="scss" title="Additional SCSS" class="inpage-anchor"></div>
    <h2>Additional SCSS</h2>
    <h3>Variables</h3>
    <p>Lens has a variable for each responsive breakpoint. Remember the <code>-xs</code>
       suffix is for <code>@screen</code> and is the default suffix for applying to all
       sizes.</p>
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
