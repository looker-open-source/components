m = angular.module "lens.guidelines.responsive", []


m.controller "ResponsiveController", (
  $scope
) ->
  return this


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
    <div class="col-container">
      <div class="col col-100-xs col-50-md col-25-lg border-dark-xs">
        <span class="block-xs hide-md hide-lg">.col-100-xs</span>
        <span class="hide-xs block-md hide-lg">.col-50-md</span>
        <span class="hide-xs block-lg">.col-25-lg</span>
      </div>
      <div class="col col-100-xs col-50-md col-25-lg border-dark-xs">
        <span class="block-xs hide-md hide-lg">.col-100-xs</span>
        <span class="hide-xs block-md hide-lg">.col-50-md</span>
        <span class="hide-xs block-lg">.col-25-lg</span>
      </div>
      <div class="col col-100-xs col-50-md col-25-lg border-dark-xs">
        <span class="block-xs hide-md hide-lg">.col-100-xs</span>
        <span class="hide-xs block-md hide-lg">.col-50-md</span>
        <span class="hide-xs block-lg">.col-25-lg</span>
      </div>
      <div class="col col-100-xs col-50-md col-25-lg border-dark-xs">
        <span class="block-xs hide-md hide-lg">.col-100-xs</span>
        <span class="hide-xs block-md hide-lg">.col-50-md</span>
        <span class="hide-xs block-lg">.col-25-lg</span>
      </div>
    </div>
    <div class="guide-code m-b-4-xs">
  <pre><code class="language-html">&lt;div class="col-container"&gt;
    &lt;div class="col col-100-xs col-50-md col-25-lg border-dark-xs"&gt;
      &lt;span class="block-xs hide-md hide-lg"&gt;.col-100-xs&lt;/span&gt;
      &lt;span class="hide-xs block-md hide-lg"&gt;.col-50-md&lt;/span&gt;
      &lt;span class="hide-xs block-lg"&gt;.col-25-lg&lt;/span&gt;
    &lt;/div&gt;
    &lt;div class="col col-100-xs col-50-md col-25-lg border-dark-xs"&gt;
      &lt;span class="block-xs hide-md hide-lg"&gt;.col-100-xs&lt;/span&gt;
      &lt;span class="hide-xs block-md hide-lg"&gt;.col-50-md&lt;/span&gt;
      &lt;span class="hide-xs block-lg"&gt;.col-25-lg&lt;/span&gt;
    &lt;/div&gt;
    &lt;div class="col col-100-xs col-50-md col-25-lg border-dark-xs"&gt;
      &lt;span class="block-xs hide-md hide-lg"&gt;.col-100-xs&lt;/span&gt;
      &lt;span class="hide-xs block-md hide-lg"&gt;.col-50-md&lt;/span&gt;
      &lt;span class="hide-xs block-lg"&gt;.col-25-lg&lt;/span&gt;
    &lt;/div&gt;
    &lt;div class="col col-100-xs col-50-md col-25-lg border-dark-xs"&gt;
      &lt;span class="block-xs hide-md hide-lg"&gt;.col-100-xs&lt;/span&gt;
      &lt;span class="hide-xs block-md hide-lg"&gt;.col-50-md&lt;/span&gt;
      &lt;span class="hide-xs block-lg"&gt;.col-25-lg&lt;/span&gt;
    &lt;/div&gt;
  &lt;/div&gt;</code></pre>
    </div>
  </section>

  <section id="breakpoints-section">
    <div id="breakpoints" title="Breakpoints" class="inpage-anchor"></div>
    <h2>Breakpoints</h2>
    <p>Everything in Lens is built with a mobile first approach. This means that if you want the same style across all breakpoints you'd use the <code>-xs</code> suffix. Here's a rundown of which breakpoint applies to which suffix.</p>
    <table class="table-border-rows w-full-xs m-b-4-xs" style="text-align: left">
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
    <div id="waht" title="What Can I Suffix?" class="inpage-anchor"></div>
    <h2>What Can I Suffix?</h2>
    <p>We apply suffixes to a lot of classes within Lens, but not so many that we end up creating a bunch of wasted code. We decided that this list of utilities, text and grid classes gave us the most flexibility without going overboard.</p>
    <table class="table-border-rows w-full-xs" style="text-align: left">
      <thead>
        <th>Element</th>
        <th>Class Names</th>
      </thead>
      <tbody>
        <tr>
          <td>Text Sizing</td>
          <td><code>.text-[n]-xs</code></td>
        </tr>
        <tr>
          <td>Text Alignment</td>
          <td><code>.text-left-xs</code>, <code>.text-right-xs</code>, <code>.text-center-xs</code>, <code>.text-justify-xs</code></td>
        </tr>
        <tr>
          <td>Display</td>
          <td><code>.hide-xs</code>, <code>.block-xs</code>, <code>.inline-xs</code>, <code>.inline-block-xs</code></td>
        </tr>
        <tr>
          <td>Floats</td>
          <td><code>.float-l-xs</code>, <code>.float-r-xs</code>, <code>.float-none-xs</code></td>
        </tr>
        <tr>
          <td>Overflow</td>
          <td><code>.overflow-hidden-xs</code>, <code>.overflow-scroll-xs</code>, <code>.overflow-auto-xs</code>, <code>.overflow-visible-xs</code></td>
        </tr>
        <tr>
          <td>Margin</td>
          <td><code>.m-[n]-xs</code>, <code>.m-t-[n]-xs</code>, <code>.m-b-[n]-xs</code>, <code>.m-l-[n]-xs</code>, <code>.m-r-[n]-xs</code></td>
        </tr>
        <tr>
          <td>Padding</td>
          <td><code>.p-[n]-xs</code>, <code>.p-t-[n]-xs</code>, <code>.p-b-[n]-xs</code>, <code>.p-l-[n]-xs</code>, <code>.p-r-[n]-xs</code></td>
        </tr>
        <tr>
          <td>Position</td>
          <td><code>.relative-xs</code>, <code>.absolute-xs</code>, <code>.fixed-xs</code>, <code>.static-xs</code></td>
        </tr>
        <tr>
          <td>Position Spacing</td>
          <td><code>.pos-[n]-xs</code>, <code>.pos-t-[n]-xs</code>, <code>.pos-b-[n]-xs</code>, <code>.pos-l-[n]-xs</code>, <code>.pos-r-[n]-xs</code></td>
        </tr>
        <tr>
          <td>Z-Index</td>
          <td><code>.z-[n]-xs</code></td>
        </tr>
        <tr>
          <td>Borders</td>
          <td><code>.border-xs</code>, <code>.border-[shade]-xs</code>, <code>.border-[side]-xs</code>, <code>.border-[side]-[shade]-xs</code></td>
        </tr>
        <tr>
          <td>Buttons</td>
          <td><code>.button--[size]-xs</code></td>
        </tr>
        <tr>
          <td>Grid</td>
          <td><code>.col-[n]-xs</code></td>
        </tr>
        <tr>
          <td>Grid Offsets</td>
          <td><code>.col-offset-[n]-xs</code></td>
        </tr>
        <tr>
          <td>Block Grid</td>
          <td><code>.block-[n]-xs</code></td>
        </tr>
        <tr>
          <td>Flex Box</td>
          <td><code>.flex-xs</code></td>
        </tr>
        <tr>
          <td>Width and Height</td>
          <td><code>.w-full-xs</code>, <code>.w-fit-xs</code>, <code>.w-auto-xs</code>, <code>.h-full-xs</code></td>
        </tr>
        <tr>
          <td>Veritcal Alignment</td>
          <td><code>.align-top-xs</code>, <code>.align-middle-xs</code>, <code>.align-bottom-xs</code></td>
        </tr>
        <tr>
          <td>Rotation</td>
          <td><code>.rotate-[n]-xs</code></td>
        </tr>
      </tbody>
    </table>
  </section>

  <section id="Variables">
    <h2>Variables</h2>
    <p class="bold">Breakpoints</p>
    <div class="guide-code">
  <pre class="m-tb-05-xs"><code class="language-css">+media(min-width $sm)
    property: value
  </code></pre>
    <p class="m-b-4-xs"><code>
      $sm <br />
      $md <br />
      $lg <br />
      $xl <br />
      $xxl
    </code></p>
  </section>

    <section id="Mixins">
      <h2>Mixins</h2>
    <p class="bold">Media</p>
    <div class="guide-code">
  <pre class="m-tb-05-xs"><code class="language-css">.custom-selector
    +media(min-width $sm) {
      property: value
    }
  </code></pre>
    <p><code>
      +media($rule $breakpoint)
    </code></p>

    </section>

</lens-main>
"""
