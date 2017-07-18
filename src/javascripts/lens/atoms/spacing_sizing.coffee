m = angular.module "lens.atoms.spacing_sizing", []


m.controller "SpacingSizingController", (
  $scope
) ->
  return this


m.directive "spacingSizing", ->
  controller: "SpacingSizingController"
  restrict: "E"
  scope: {}
  template: template


template = """
<lens-main>

<!-- these relative anchor links only work in-page. Need to
     figure out how to deal with the autoScroll = true on
     the <ui-view> element. That allows the nav to take you to the top
     of the page by default. If you set to "false" then these anchors
     work but the nav between pages doesn't. blarg.
-->
  <ul>
    <li><a href="#spacing-units">Spacing Units</a></li>
    <li><a href="#margin-padding">Margin and Padding</a></li>
    <li><a href="#width-height">Width and Height</a></li>
    <li><a href="#overflow">Overflow</a></li>
  </ul>

  <section id="spacing-units-section">
    <div id="spacing-units" class="inpage-anchor"></div>
    <h2>Spacing Units</h2>
    <p>Spatial units are used for margin, padding, and positioning.
       These comes in values from 0-4 and a half space unit of 05. Each class
       uses a shorthand of its name to indicate properties and direction.</p>
    <div class="col-container">
      <div class="col col-30-lg">
        <p><strong>Units</strong></p>
        <ul class="list-unstyled">
          <li><code>0</code> = 0px</li>
          <li><code>05</code> = 5px</li>
          <li><code>1</code> = 10px</li>
          <li><code>2</code> = 20px</li>
          <li><code>3</code> = 25px</li>
          <li><code>4</code> = 50px</li>
        </ul>
      </div>
      <div class="col col-30-lg">
        <p><strong>Properties</strong></p>
        <ul class="list-unstyled">
          <li><code>m</code> = margin</li>
          <li><code>p</code> = padding</li>
        </ul>
      </div>
      <div class="col col-30-lg">
        <p><strong>Sides</strong></p>
        <ul class="list-unstyled">
          <li><code>t</code> = top</li>
          <li><code>b</code> = bottom</li>
          <li><code>l</code> = left</li>
          <li><code>r</code> = right</li>
          <li><code>lr</code> = left + right</li>
          <li><code>tb</code> = top + bottom</li>
        </ul>
      </div>
    </div>
  </section>



  <section id="margin-padding-section">
    <div id="margin-padding" class="inpage-anchor"></div>
    <h2>Margin &amp; Padding</h2>
    <h3>Uniform Spacing</h3>
    <p>These classes are used to apply equal spacing around the
       entire element.</p>
    <div class="col-container">
      <div class="col col-30-md">
        <p><strong>Margin</strong></p>
        <ul class="list-unstyled">
          <li><code>.m-0-xs</code></li>
          <li><code>.m-05-xs</code></li>
          <li><code>.m-1-xs</code></li>
          <li><code>.m-2-xs</code></li>
          <li><code>.m-3-xs</code></li>
          <li><code>.m-4-xs</code></li>
        </ul>
      </div>
      <div class="col col-30-md">
        <p><strong>Padding</strong></p>
        <ul class="list-unstyled">
          <li><code>.p-0-xs</code></li>
          <li><code>.p-05-xs</code></li>
          <li><code>.p-1-xs</code></li>
          <li><code>.p-2-xs</code></li>
          <li><code>.p-3-xs</code></li>
          <li><code>.p-4-xs</code></li>
        </ul>
      </div>
    </div>
    <div class="guide-example">
      <div class="guide-example-demo col-container">
        <div class="border-dark-xs float-l-xs inline-block-xs m-05-xs">m-05-xs</div>
        <div class="border-dark-xs float-l-xs inline-block-xs m-1-xs">m-1-xs</div>
        <div class="border-dark-xs float-l-xs inline-block-xs m-2-xs">m-2-xs</div>
        <div class="border-dark-xs float-l-xs inline-block-xs m-3-xs">m-3-xs</div>
        <div class="border-dark-xs float-l-xs inline-block-xs p-05-xs">p-05-xs</div>
        <div class="border-dark-xs float-l-xs inline-block-xs p-1-xs">p-1-xs</div>
        <div class="border-dark-xs float-l-xs inline-block-xs p-2-xs">p-2-xs</div>
        <div class="border-dark-xs float-l-xs inline-block-xs p-3-xs">p-3-xs</div>
      </div>
      <div class="guide-example-code">
        <pre><code class="language-html">&lt;div class="col-container border-xs"&gt;
    &lt;div class="border-dark-xs float-l-xs inline-block-xs m-05-xs"&gt;m-05-xs&lt;/div&gt;
    &lt;div class="border-dark-xs float-l-xs inline-block-xs m-1-xs"&gt;m-1-xs&lt;/div&gt;
    &lt;div class="border-dark-xs float-l-xs inline-block-xs m-2-xs"&gt;m-2-xs&lt;/div&gt;
    &lt;div class="border-dark-xs float-l-xs inline-block-xs m-3-xs"&gt;m-3-xs&lt;/div&gt;
    &lt;div class="border-dark-xs float-l-xs inline-block-xs p-05-xs"&gt;p-05-xs&lt;/div&gt;
    &lt;div class="border-dark-xs float-l-xs inline-block-xs p-1-xs"&gt;p-1-xs&lt;/div&gt;
    &lt;div class="border-dark-xs float-l-xs inline-block-xs p-2-xs"&gt;p-2-xs&lt;/div&gt;
    &lt;div class="border-dark-xs float-l-xs inline-block-xs p-3-xs"&gt;p-3-xs&lt;/div&gt;
  &lt;/div&gt;</code></pre>
      </div>
    </div>

    <h3>Individual Spacing</h3>
    <p>These classes are used to apply spacing to a particular
      side of an element.</p>
    <div class="col-container">
      <div class="col col-50-lg">
        <p><strong>Margin</strong></p>
        <ul class="list-unstyled">
          <li><code>.m-t-1-xs</code> <span class="m-l-1-xs">margin-top</span></li>
          <li><code>.m-b-1-xs</code> <span class="m-l-1-xs">margin-bottom</span></li>
          <li><code>.m-l-1-xs</code> <span class="m-l-1-xs">margin-left</span></li>
          <li><code>.m-r-1-xs</code> <span class="m-l-1-xs">margin-right</span></li>
          <li><code>.m-lr-1-xs</code> <span class="m-l-1-xs">margin left + right</span></li>
          <li><code>.m-tb-1-xs</code> <span class="m-l-1-xs">margin top + bottom</span></li>
          <li><code>.m-auto-xs</code> <span class="m-l-1-xs">horizontal center</span></li>
        </ul>
      </div>
      <div class="col col-50-lg">
        <p><strong>Padding</strong></p>
        <ul class="list-unstyled">
          <li><code>.p-t-0-xs</code> <span class="m-l-1-xs">padding-top</span></li>
          <li><code>.p-b-05-xs</code> <span class="m-l-1-xs">padding-bottom</span></li>
          <li><code>.p-l-1-xs</code> <span class="m-l-1-xs">padding-left</span></li>
          <li><code>.p-r-2-xs</code> <span class="m-l-1-xs">padding-right</span></li>
          <li><code>.p-lr-3-xs</code> <span class="m-l-1-xs">padding left + right</span></li>
          <li><code>.p-tb-4-xs</code> <span class="m-l-1-xs">padding top + bottom</span></li>
        </ul>
      </div>
    </div>
    <div class="guide-example">
      <div class="guide-example-demo">
        <div class="col-container">
          <div class="border-dark-xs float-l-xs inline-block-xs m-t-3-xs">m-t-3-xs</div>
          <div class="border-dark-xs float-l-xs inline-block-xs m-t-4-xs">m-t-4-xs</div>
          <div class="border-dark-xs float-l-xs inline-block-xs p-l-3-xs">p-l-3-xs</div>
          <div class="border-dark-xs float-l-xs inline-block-xs p-l-4-xs">p-l-4-xs</div>
        </div>
      </div>
      <div class="guide-example-code">
  <pre><code class="language-html">&lt;div class="col-container border-xs"&gt;
  &lt;div class="border-dark-xs float-l-xs inline-block-xs m-t-3-xs"&gt;m-t-3-xs&lt;/div&gt;
  &lt;div class="border-dark-xs float-l-xs inline-block-xs m-t-4-xs"&gt;m-t-4-xs&lt;/div&gt;
  &lt;div class="border-dark-xs float-l-xs inline-block-xs p-l-3-xs"&gt;p-l-3-xs&lt;/div&gt;
  &lt;div class="border-dark-xs float-l-xs inline-block-xs p-l-4-xs"&gt;p-l-4-xs&lt;/div&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>

    <h3>Functions</h3>
    <p>The <code>spacing(n)</code> function can also be used to
      apply spacing units to your class definitions.</p>
    <div class="guide-example">
      <div class="guide-example-code">
        <pre><code class="language-css">.custom-element
  margin: spacing(1)
  padding: spacing(2)
  height: spacing(05)</code></pre>
      </div>
    </div>

  </section>


  <section id="widht-height-section">
    <div id="width-height" class="inpage-anchor"></div>
    <h2>Width &amp; Height</h2>
    <p>Most widths will be set using a <a href="/atoms/grid">grid
       layout</a>. However, Lens provides classes to set the following:</p>
    <ul>
      <li><code>.w-fit-xs</code> to set an elements max-width to 100%</li>
      <li><code>.w-full-xs</code> and <code>.h-full-xs</code>
       to set an element's width and height respectively to 100%</li>
       <li><code>.w-auto-xs</code> to set an element's width to auto</li>
    </ul>
    <div class="guide-example">
      <div class="guide-example-demo">
        <div class="w-fit-xs border-dark-xs p-1-xs m-b-1-xs">.w-fit-xs</div>
        <div class="w-full-xs border-dark-xs p-1-xs m-b-1-xs">.w-full-xs</div>
        <div class="border-xs p-05-xs m-b-1-xs" style="height: 100px">
          <div class="h-full-xs col-20-xs border-dark-xs p-1-xs">.h-full-xs</div>
        </div>
        <div class="w-auto-xs border-dark-xs p-1-xs">.w-auto-xs</div>
      </div>
      <div class="guide-example-code">
        <pre><code class="language-html">&lt;div class="w-fit-xs border-dark-xs p-1-xs m-b-1-xs"&gt;.w-fit-xs&lt;/div&gt;
  &lt;div class="w-full-xs border-dark-xs p-1-xs m-b-1-xs"&gt;.w-full-xs&lt;/div&gt;
  &lt;div class="border-xs p-05-xs m-b-1-xs" style="height: 100px"&gt;
    &lt;div class="h-full-xs col-20-xs border-dark-xs p-1-xs"&gt;.h-full-xs&lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="w-auto-xs border-dark-xs p-1-xs"&gt;.w-auto-xs&lt;/div&gt;</code></pre>
      </div>
    </div>

    <h3>Mixins</h3>
    <p>When defining your classes, you can also use the <code>width-height(n, n)</code> mixin.</p>
    <div class="guide-example">
      <div class="guide-example-code">
        <pre class="m-tb-05-xs"><code class="language-css">.custom-selector
  +width-height(100px, 200px)</code></pre>
      </div>
    </div>

  </section>


  <section id="overflow-section">
    <div id="overflow" class="inpage-anchor"></div>
    <h2>Overflow</h2>
    <p>Overflow controls what happens to content when it is
      bigger than its container.</p>

    <p><code>.overflow-hidden-xs</code> will clip content and not add scrollbars.</p>
    <div class="overflow-hidden-xs p-1-xs m-l-2-xs m-b-2-xs border-dark-xs" style="height: 45px">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum maiores esse vel quia, voluptates quos. Tempora natus iste aperiam sequi mollitia, doloremque quas recusandae, rerum minima dolorum, veritatis vitae maxime.
    </div>

    <p><code>.overflow-auto-xs</code> will automatically add horizonal and/or vertical scrollbars if needed.</p>
    <div class="overflow-auto-xs p-1-xs m-l-2-xs m-b-2-xs border-dark-xs" style="height: 45px">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum maiores esse vel quia, voluptates quos. Tempora natus iste aperiam sequi mollitia, doloremque quas recusandae, rerum minima dolorum, veritatis vitae maxime.
    </div>

    <p><code>.overflow-scroll-xs</code> will always show a scrollbar.</p>
    <div class="overflow-scroll-xs p-1-xs m-l-2-xs m-b-2-xs border-dark-xs" style="height: 45px">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum maiores esse vel quia, voluptates quos. Tempora natus iste aperiam sequi mollitia, doloremque quas recusandae, rerum minima dolorum, veritatis vitae maxime.
    </div>

    <p><code>.overflow-visible-xs</code> will allow the contents to extend past the container with no scrollbars.</p>
    <div class="overflow-visible-xs p-1-xs m-l-2-xs m-b-4-xs border-dark-xs" style="height: 45px">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum maiores esse vel quia, voluptates quos. Tempora natus iste aperiam sequi mollitia, doloremque quas recusandae, rerum minima dolorum, veritatis vitae maxime.
    </div>
    <div class="guide-code">
  <pre><code class="language-html">&lt;div class="overflow-hidden-xs p-1-xs m-l-2-xs m-b-2-xs border-dark-xs" style="height: 45px"&gt;...&lt;/div&gt;

&lt;div class="overflow-auto-xs p-1-xs m-l-2-xs m-b-2-xs border-dark-xs" style="height: 45px"&gt;...&lt;/div&gt;

&lt;div class="overflow-scroll-xs p-1-xs m-l-2-xs m-b-2-xs border-dark-xs" style="height: 45px"&gt;...&lt;/div&gt;

&lt;div class="overflow-visible-xs p-1-xs m-l-2-xs m-b-4-xs border-dark-xs" style="height: 45px"&gt;...&lt;/div&gt;</code></pre>
    </div>
  </section>



</lens-main>
"""
