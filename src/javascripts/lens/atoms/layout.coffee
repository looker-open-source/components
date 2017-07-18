m = angular.module "lens.atoms.layout", []


m.controller "LayoutController", (
  $scope
) ->
  return this


m.directive "layout", ->
  controller: "LayoutController"
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
    <li><a href="#display">Display</a></li>
    <li><a href="#position">Position</a></li>
    <li><a href="#floats">Floats</a></li>
    <li><a href="#z-index">Z-Index</a></li>
    <li><a href="#vertical-alignment">Vertical Alignment</a></li>
    <li><a href="#rotation">Rotation</a></li>
  </ul>

  <section id="display-section">
    <div id="display" class="inpage-anchor"></div>
    <h2>Display</h2>
    <ul class="list-unstyled">
      <li><code>.block-xs</code></li>
      <li><code>.inline-xs</code></li>
      <li><code>.inline-block-xs</code></li>
      <li><code>.hide-xs</code> will hide an element. Remove to un-hide.</ui>
    </ul>
    <p>See the <a ui-sref="grid">grid</a>, <a ui-sref="block-grid">block grid</a> and
       <a ui-sref="flexbox">flexbox</a> sections for more advanced layouts.
    </p>
    <!--
    <div class="guide-example">
      <div class="guide-example-demo">
        <div class="block-xs border-dark-xs m-b-05-xs">.block-xs</div>
        <div class="inline-xs border-dark-xs">.inline-xs</div>
        <div class="inline-block-xs border-dark-xs p-1-xs">.inline-block-xs</div>
      </div>
      <div class="guide-code">
  <pre><code class="language-html">&lt;div class="block-xs border-dark-xs"&gt;.block-xs&lt;/div&gt;
&lt;div class="inline-xs border-dark-xs"&gt;.inline-xs&lt;/div&gt;
&lt;div class="inline-block-xs border-dark-xs p-1-xs"&gt;.inline-block-xs&lt;/div&gt;</code></pre>
      </div>
    </div>
  -->
  </section>





  <section id="position-section">
    <div id="position" class="inpage-anchor"></div>
    <h2>Position</h2>
    <p>To control the type of positioning on an element, use:</p>
    <ul class="list-unstyled">
      <li><code>.relative-xs</code> = relative</li>
      <li><code>.absolute-xs</code> = absolute</li>
      <li><code>.fixed-xs</code> = fixed</li>
      <li><code>.static-xs</code> = static</li>
    </ul>

    <p>Set the position with <code>.pos-$s-$n-xs</code>, where <code>$s</code> is the side
       and <code>$n</code> is one of our spacing units.
    </p>
    <ul class="list-unstyled">
      <li><code>.pos-t-$n-xs</code> = top</li>
      <li><code>.pos-b-$n-xs</code> = bottom</li>
      <li><code>.pos-l-$n-xs</code> = left</li>
      <li><code>.pos-r-$n-xs</code> = right</li>
    </ul>

    <h3>Mixins</h3>
    <pre><code>+absolute($direction $amount)
+relative($direction $amount)
+fixed($direction $amount)</code></pre>

<!--
    <div class="guide-example">
      <div class="guide-example-demo">
        <div class="border-xs p-2-xs m-b-1-xs">
          <div class="relative-xs pos-t-2-xs pos-l-4-xs border-dark-xs inline-xs">
            .relative-xs .pos-t-2-xs .pos-l-4-xs
          </div>
        </div>
        <div class="relative-xs border-xs p-3-xs m-b-1-xs">
          .relative-xs
          <div class="absolute-xs pos-t-4-xs pos-l-4-xs border-dark-xs">
            .absolute-xs .pos-t-4-xs .pos-l-4-xs
          </div>
        </div>
        <div class="relative-xs border-xs p-4-xs">
          <div class="absolute-xs pos-t-1-xs pos-l-2-xs border-dark-xs p-05-xs z-2-xs" style="background: #fff">
            .absolute-xs .pos-t-1-xs .pos-l-2-xs
          </div>
          <div class="absolute-xs pos-t-4-xs pos-l-4-xs border-dark-xs p-05-xs z-1-xs">
            .absolute-xs .pos-t-4-xs .pos-l-4-xs
          </div>
        </div>
      </div>
      <div class="guide-example-code">
    <pre><code class="language-html">&lt;div class="border-xs p-2-xs m-b-1-xs"&gt;
    &lt;div class="relative-xs pos-t-2-xs pos-l-4-xs border-dark-xs inline-xs"&gt;
      .relative-xs .pos-t-2-xs .pos-l-4-xs
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="relative-xs border-xs p-3-xs m-b-1-xs"&gt;
    .relative-xs
    &lt;div class="absolute-xs pos-t-4-xs pos-l-4-xs border-dark-xs"&gt;
      .absolute-xs .pos-t-4-xs .pos-l-4-xs
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="relative-xs border-xs p-4-xs"&gt;
    &lt;div class="absolute-xs pos-t-1-xs pos-l-2-xs border-dark-xs p-05-xs z-2-xs" style="background: #fff"&gt;
      .absolute-xs .pos-t-1-xs .pos-l-2-xs
    &lt;/div&gt;
    &lt;div class="absolute-xs pos-t-4-xs pos-l-4-xs border-dark-xs p-05-xs z-1-xs"&gt;
      .absolute-xs .pos-t-4-xs .pos-l-4-xs
    &lt;/div&gt;
  &lt;/div&gt;</code></pre>
      </div>
    </div>
-->
  </section>


  <section id="floats-section">
    <div id="floats" class="inpage-anchor"></div>
    <h2>Floats</h2>
    <ul class="list-unstyled">
      <li><code>.float-l-xs</code> to float left</li>
      <li><code>.float-r-xs</code> to float right</li>
      <li><code>.float-none-xs</code> to stop the float!</li>
    </ul>
    <!--
    <div class="guide-example">
      <div class="guide-example-demo">
        <div class="col-container">
          <div class="float-l-xs border-dark-xs">.float-l-xs</div>
          <div class="float-r-xs border-dark-xs">.float-r-xs</div>
        </div>
        <div class="float-none-xs border-dark-xs m-t-05-xs">.float-none-xs</div>
      </div>
      <div class="guide-example-code">
        <pre><code class="language-html">&lt;div class="col-container"&gt;
  &lt;div class="float-l-xs border-dark-xs"&gt;.float-l-xs&lt;/div&gt;
  &lt;div class="float-r-xs border-dark-xs"&gt;.float-r-xs&lt;/div&gt;
&lt;/div&gt;
&lt;div class="float-none-xs border-dark-xs m-t-05-xs"&gt;.float-none-xs&lt;/div&gt;</code></pre>
      </div>
    </div>
  -->
    <h3>Mixins</h3>
    <p><code>+clearfix</code> will allow your element to clear its child elements.</p>
<!--
    <div class="guide-example">
      <div class="guide-code">
        <pre><code class="language-css">.custom-selector
  +clearfix</code></pre>
      </div>
    </div>
-->
  </section>



  <section id="z-index-section">
    <div id="z-index" class="inpage-anchor"></div>
    <h2>Z-Index</h2>
    <p>Use a z-index class to assign the stack order of elements.
      Lens has classes for values 1-4, which end up as 100-400 in the property value.</p>
    <ul class="list-unstyled">
      <li><code>.z-1-xs</code> = z-index: 100</li>
      <li><code>.z-2-xs</code> = z-index: 200</li>
      <li><code>.z-3-xs</code> = z-index: 300</li>
      <li><code>.z-4-xs</code> = z-index: 400</li>
    </ul>
  </section>



  <section id="vertical-alignment-section">
    <div id="vertical-alignment" class="inpage-anchor"></div>
    <h2>Vertical Alignment</h2>
    <p>A sub-set of the vertical alignment options.
      Note that it only works on inline or table-cell elements.</p>
    <ul class="list-unstyled">
      <li><code>.align-top-xs</code> aligns the top of the element with the top of the entire line.</li>
      <li><code>.align-middle-xs</code> aligns the middle of the element with the baseline + &half; the x-height of the parent.</li>
      <li><code>.align-bottom-xs</code> aligns the bottom of the element with the bottom of the entire line.</li>
    </ul>

    <div class="guide-example">
      <div class="guide-example-demo">
        <div>
          <img src="http://placehold.it/50x50" alt="Gratt Spore" height="50px" Width="50px" class="align-top-xs circle">
          This is our friend Gratt Spore and the <code>img</code> tag has the class <code>align-top-xs</code> on it.
        </div>
        <div>
          <img src="http://placehold.it/50x50" alt="Gratt Spore" height="50px" Width="50px" class="align-middle-xs circle">
          This is our friend Gratt Spore and the <code>img</code> tag has the class <code>align-middle-xs</code> on it.
        </div>
        <div>
          <img src="http://placehold.it/50x50" alt="Gratt Spore" height="50px" Width="50px" class="align-bottom-xs circle">
          This is our friend Gratt Spore and the <code>img</code> tag has the class <code>align-bottom-xs</code> on it.
        </div>
      </div>
      <div class="guide-example-code">
        <pre><code class="language-html">&lt;div&gt;
  &lt;img src="img/gratt-spore.svg" alt="Gratt Spore" height="50px" Width="50px" class="align-top-xs"&gt;
  This is our friend Gratt Spore and the &lt;code&gt;img&lt;/code&gt; tag has the class &lt;code&gt;align-top-xs&lt;/code&gt; on it.
&lt;/div&gt;
&lt;div&gt;
  &lt;img src="img/gratt-spore.svg" alt="Gratt Spore" height="50px" Width="50px" class="align-middle-xs"&gt;
  This is our friend Gratt Spore and the &lt;code&gt;img&lt;/code&gt; tag has the class &lt;code&gt;align-middle-xs&lt;/code&gt; on it.
&lt;/div&gt;
&lt;div&gt;
  &lt;img src="img/gratt-spore.svg" alt="Gratt Spore" height="50px" Width="50px" class="align-bottom-xs"&gt;
  This is our friend Gratt Spore and the &lt;code&gt;img&lt;/code&gt; tag has the class &lt;code&gt;align-bottom-xs&lt;/code&gt; on it.
&lt;/div&gt;</code></pre>
      </div>
    </div>
  </section>



  <section id="rotation-section">
    <div id="rotation" class="inpage-anchor"></div>
    <h2>Rotation</h2>
    <p>You can rotate elements by using <code>.rotate-n-xs</code>, where n is 0, 45, 90, 135, 180, 225, 270, or 315. You can also change rotation across breakpoints (using our breakpoint suffixes) to accomodate different layouts.</p>

    <div class="guide-example">
      <div class="guide-example-demo">
        <span class="rotate-0-xs border-dark-xs border-none-t-xs inline-block-xs p-2-xs m-r-4-xs" style="height:60px;"></span>
        <span class="rotate-45-xs border-dark-xs border-none-t-xs inline-block-xs p-2-xs m-r-4-xs" style="height:60px;"></span>
        <span class="rotate-90-xs border-dark-xs border-none-t-xs inline-block-xs p-2-xs m-r-4-xs" style="height:60px;"></span>
        <span class="rotate-135-xs border-dark-xs border-none-t-xs inline-block-xs p-2-xs m-r-4-xs" style="height:60px;"></span>
        <span class="rotate-180-xs border-dark-xs border-none-t-xs inline-block-xs p-2-xs m-r-4-xs" style="height:60px;"></span>
        <span class="rotate-225-xs border-dark-xs border-none-t-xs inline-block-xs p-2-xs m-r-4-xs" style="height:60px;"></span>
        <span class="rotate-270-xs border-dark-xs border-none-t-xs inline-block-xs p-2-xs m-r-4-xs" style="height:60px;"></span>
        <span class="rotate-315-xs border-dark-xs border-none-t-xs inline-block-xs p-2-xs" style="height:60px;"></span>
      </div>
      <div class="guide-example-code">
<pre><code class="language-html">&lt;span class="rotate-0-xs border-dark-xs border-none-t-xs inline-block-xs p-2-xs m-r-4-xs" style="height:60px;"&gt;&lt;/span&gt;
&lt;span class="rotate-45-xs border-dark-xs border-none-t-xs inline-block-xs p-2-xs m-r-4-xs" style="height:60px;"&gt;&lt;/span&gt;
&lt;span class="rotate-90-xs border-dark-xs border-none-t-xs inline-block-xs p-2-xs m-r-4-xs" style="height:60px;"&gt;&lt;/span&gt;
&lt;span class="rotate-135-xs border-dark-xs border-none-t-xs inline-block-xs p-2-xs m-r-4-xs" style="height:60px;"&gt;&lt;/span&gt;
&lt;span class="rotate-180-xs border-dark-xs border-none-t-xs inline-block-xs p-2-xs m-r-4-xs" style="height:60px;"&gt;&lt;/span&gt;
&lt;span class="rotate-225-xs border-dark-xs border-none-t-xs inline-block-xs p-2-xs m-r-4-xs" style="height:60px;"&gt;&lt;/span&gt;
&lt;span class="rotate-270-xs border-dark-xs border-none-t-xs inline-block-xs p-2-xs m-r-4-xs" style="height:60px;"&gt;&lt;/span&gt;
&lt;span class="rotate-315-xs border-dark-xs border-none-t-xs inline-block-xs p-2-xs" style="height:60px;"&gt;&lt;/span&gt;</code></pre>
      </div>
    </div>

  </section>

</lens-main>
"""
