m = angular.module "lens.components.buttons", []


m.controller "ButtonsController", (
  $scope
) ->
  return this


m.directive "buttons", ->
  controller: "ButtonsController"
  restrict: "E"
  scope: {}
  template: template


template = """
<lens-main>

  <section id="default-section">
    <div id="default" title="Default" class="inpage-anchor"></div>
    <h2>Default</h2>
    <p>Use the class, <code>button</code> for this default style button. If you are using the <code>&lt;button&gt;</code> element, always specify a <code>type</code>. When using the <code>&lt;a&gt;</code> tag, include <code>role="button"</code> for accessibility. Each button is available in multiple sizes, take note of examples for classes.</p>
    <a class="button" href>Normal</a>
    <a class="button button--small-xs" href>Small</a>
    <a class="button button--xsmall-xs" href>X-Small</a>
    <a class="button button--large-xs" href>Large</a>
    <a class="button button--xlarge-xs" href>X-Large</a>
    <div class="guide-code">
      <pre><code class="language-html">&lt;a class="button" href&gt;Normal&lt;/a&gt;</code></pre>
      <span class="button--small">
        <pre><code class="language-html">&lt;a class="button button--small-xs" href&gt;Small&lt;/a&gt;</code></pre>
      </span>
      <span class="button--xsmall">
        <pre><code class="language-html">&lt;a class="button button--xsmall-xs" href&gt;X-Small&lt;/a&gt;</code></pre>
      </span>
      <span class="button--large">
        <pre><code class="language-html">&lt;a class="button button--large-xs" href&gt;Large&lt;/a&gt;</code></pre>
      </span>
      <span class="button--xlarge">
        <pre><code class="language-html">&lt;a class="button button--xlarge-xs" href&gt;X-Large&lt;/a&gt;</code></pre>
      </span>
    </div>
  </section>

  <section id="primary-section">
    <div id="primary" title="Primary" class="inpage-anchor"></div>
    <h2>Primary</h2>
    <p>Primary buttons are used to indicate a <em>primary</em> action on the page. Use the class, <code>.button.button--primary</code>, to get a primary button on your page.</p>
    <a class="button button--primary" href>Normal</a>
    <a class="button button--primary button--small-xs" href>Small</a>
    <a class="button button--primary button--xsmall-xs" href>X-Small</a>
    <a class="button button--primary button--large-xs" href>Large</a>
    <a class="button button--primary button--xlarge-xs" href>X-Large</a>
    <div class="guide-code">
      <pre><code class="language-html">&lt;a class="button button--primary" href>Normal&lt;/a&gt;</code></pre>
      <span class="button--small">
        <pre><code class="language-html">&lt;a class="button button--primary button--small-xs" href&gt;Small&lt;/a&gt;</code></pre>
      </span>
      <span class="button--xsmall">
        <pre><code class="language-html">&lt;a class="button button--primary button--xsmall-xs" href&gt;X-Small&lt;/a&gt;</code></pre>
      </span>
      <span class="button--large">
        <pre><code class="language-html">&lt;a class="button button--primary button--large-xs" href&gt;Large&lt;/a&gt;</code></pre>
      </span>
      <span class="button--xlarge">
        <pre><code class="language-html">&lt;a class="button button--primary button--xlarge-xs" href&gt;X-Large&lt;/a&gt;</code></pre>
      </span>
    </div>
  </section>

  <section id="alert-section">
    <div id="alert" title="Alert" class="inpage-anchor"></div>
    <h2>Alert</h2>
    <p>Alert buttons are used to indicate a urgent or negative action on the page. To access these styles, use the class, <code>.button.button--alert</code>.</p>
    <a class="button button--alert" href>Normal</a>
    <a class="button button--alert button--small-xs" href>Small</a>
    <a class="button button--alert button--xsmall-xs" href>X-Small</a>
    <a class="button button--alert button--large-xs" href>Large</a>
    <a class="button button--alert button--xlarge-xs" href>X-Large</a>
    <div class="guide-code">
      <pre><code class="language-html">&lt;a class="button button--alert" href&gt;Normal&lt;/a&gt;</code></pre>
      <span class="button--small">
        <pre><code class="language-html">&lt;a class="button button--alert button--small-xs" href&gt;Small&lt;/a&gt;</code></pre>
      </span>
      <span class="button--xsmall">
        <pre><code class="language-html">&lt;a class="button button--alert button--xsmall-xs" href&gt;X-Small&lt;/a&gt;</code></pre>
      </span>
      <span class="button--large">
        <pre><code class="language-html">&lt;a class="button button--alert button--large-xs" href&gt;Large&lt;/a&gt;</code></pre>
      </span>
      <span class="button--xlarge">
        <pre><code class="language-html">&lt;a class="button button--alert button--xlarge-xs" href&gt;X-Large&lt;/a&gt;</code></pre>
      </span>
    </div>
  </div>
  </section>


  <section id="disabled-section">
    <div id="disabled" title="Disabled" class="inpage-anchor"></div>
    <h2>Disabled</h2>
    <p>Disabled buttons are used when the action on the page is blocked to the user. Get this button on a page by using the class, <code>.button.button--disabled-light</code>.</p>
    <a class="button button--disabled button--disabled-light" href>Normal</a>
    <a class="button button--disabled button--disabled-light button--small-xs" href>Small</a>
    <a class="button button--disabled button--disabled-light button--xsmall-xs" href>X-Small</a>
    <a class="button button--disabled button--disabled-light button--large-xs" href>Large</a>
    <a class="button button--disabled button--disabled-light button--xlarge-xs" href>X-Large</a>
    <div class="guide-code">
      <pre><code class="language-html">&lt;a class="button button--disabled-light" href&gt;Normal&lt;/a&gt;</code></pre>
      <span class="button--small">
        <pre><code class="language-html">&lt;a class="button button--disabled button--disabled-light button--small-xs" href&gt;Small&lt;/a&gt;</code></pre>
      </span>
      <span class="button--xsmall">
        <pre><code class="language-html">&lt;a class="button button--disabled button--disabled-light button--xsmall-xs" href&gt;X-Small&lt;/a&gt;</code></pre>
      </span>
      <span class="button--large">
        <pre><code class="language-html">&lt;a class="button button--disabled button--disabled-light button--large-xs" href&gt;Large&lt;/a&gt;</code></pre>
      </span>
      <span class="button--xlarge">
        <pre><code class="language-html">&lt;a class="button button--disabled button--disabled-light button--xlarge-xs" href&gt;X-Large&lt;/a&gt;</code></pre>
      </span>
    </div>

    <p>Use the class, <code>.button.button--disabled-dark</code>, to get a disabled button that works well on a dark background.</p>
    <a class="button button--disabled button--disabled-dark" href>Normal</a>
    <a class="button button--disabled button--disabled-dark button--small-xs" href>Small</a>
    <a class="button button--disabled button--disabled-dark button--xsmall-xs" href>X-Small</a>
    <a class="button button--disabled button--disabled-dark button--large-xs" href>Large</a>
    <a class="button button--disabled button--disabled-dark button--xlarge-xs" href>X-Large</a>
    <div class="guide-code">
      <pre><code class="language-html">&lt;a class="button button--disabled-dark" href&gt;Normal&lt;/a&gt;</code></pre>
      <span class="button--small">
        <pre><code class="language-html">&lt;a class="button button--disabled button--disabled-dark button--small-xs" href&gt;Small&lt;/a&gt;</code></pre>
      </span>
      <span class="button--xsmall">
        <pre><code class="language-html">&lt;a class="button button--disabled button--disabled-dark button--xsmall-xs" href&gt;X-Small&lt;/a&gt;</code></pre>
      </span>
      <span class="button--large">
        <pre><code class="language-html">&lt;a class="button button--disabled button--disabled-dark button--large-xs" href&gt;Large&lt;/a&gt;</code></pre>
      </span>
      <span class="button--xlarge">
        <pre><code class="language-html">&lt;a class="button button--disabled button--disabled-dark button--xlarge-xs" href&gt;X-Large&lt;/a&gt;</code></pre>
      </span>
    </div>
  </div>
  </section>

  <section id="inverse-section">
    <div id="inverse" title="Inverse" class="inpage-anchor"></div>
    <h2>Inverse</h2>
    <p class="todo">Kinda wondering if we really need this...? would be nice to design stuffs not to need this whole other button type.</p>
    <p>Inverse buttons are used when the background color a container is too dark for normal buttons to have enough contrast. Invert the style with the classes, <code>.button--inverse</code>. <code>.button--inverse-primary</code>. <code>.button--inverse-disabled</code>. <code>.button--inverse-primary-disabled</code>.</p>
    <div class="bg-gray-7">
    <a class="button button--inverse" href>Inverse</a>
    <a class="button button--inverse-primary" href>Inverse Primary</a>
    <a class="button button--inverse-disabled" href>Inverse Disabled</a>
    <a class="button button--inverse-primary-disabled" href>Inverse Primary Disabled</a>
    </div>
    <div class="guide-code">
      <pre><code class="language-html">&lt;a class="button button--inverse" href&gt;Inverse&lt;/a&gt;
&lt;a class="button button--inverse-primary" href&gt;Inverse Primary&lt;/a&gt;
&lt;a class="button button--inverse-disabled" href&gt;Inverse Disabled&lt;/a&gt;
&lt;a class="button button--inverse-primary-disabled" href&gt;Inverse Primary Disabled&lt;/a&gt;</code></pre>
    </div>
  </div>
  </section>

  <section id="split-button-section">
    <div id="split-button" title="Split Button" class="inpage-anchor"></div>
    <h2>Split buttons</h2>
    <p>Split buttons are used when you need a button that contains two actions. To accomplish this, wrap your buttons in <code>&lt;div class="split-button"&gt;</code>. Use <code>&lt;div class="split-button w-full"&gt;</code> for your buttons to take up the full width of the container.</p>
    <div class="split-button">
      <a class="button" href ng-class="{active: active == 'left'}" ng-click="active = 'left'">Left</a>
      <a class="button" href ng-class="{active: active == 'middle'}" ng-click="active = 'middle'">Middle</a>
      <a class="button" href ng-class="{active: active == 'right'}" ng-click="active = 'right'">Right</a>
    </div>
    <div class="split-button">
      <a class="button button--small-xs" href ng-class="{active: active == 'left'}" ng-click="active = 'left'">Left</a>
      <a class="button button--small-xs" href ng-class="{active: active == 'middle'}" ng-click="active = 'middle'">Middle</a>
      <a class="button button--small-xs" href ng-class="{active: active == 'right'}" ng-click="active = 'right'">Right</a>
    </div>
    <div class="split-button">
      <a class="button button--xsmall-xs" href ng-class="{active: active == 'left'}" ng-click="active = 'left'">Left</a>
      <a class="button button--xsmall-xs" href ng-class="{active: active == 'middle'}" ng-click="active = 'middle'">Middle</a>
      <a class="button button--xsmall-xs" href ng-class="{active: active == 'right'}" ng-click="active = 'right'">Right</a>
    </div>
    <div>
      <div class="split-button">
        <a class="button button--neutral" href ng-class="{active: active == 'left'}" ng-click="active = 'left'">Left</a>
        <a class="button button--neutral" href ng-class="{active: active == 'middle'}" ng-click="active = 'middle'">Middle</a>
        <a class="button button--neutral" href ng-class="{active: active == 'right'}" ng-click="active = 'right'">Right</a>
      </div>
      <div class="split-button">
        <a class="button button--neutral button--small-xs" href ng-class="{active: active == 'left'}" ng-click="active = 'left'">Left</a>
        <a class="button button--neutral button--small-xs" href ng-class="{active: active == 'middle'}" ng-click="active = 'middle'">Middle</a>
        <a class="button button--neutral button--small-xs" href ng-class="{active: active == 'right'}" ng-click="active = 'right'">Right</a>
      </div>
      <div class="split-button">
        <a class="button button--neutral button--xsmall-xs" href ng-class="{active: active == 'left'}" ng-click="active = 'left'">Left</a>
        <a class="button button--neutral button--xsmall-xs" href ng-class="{active: active == 'middle'}" ng-click="active = 'middle'">Middle</a>
        <a class="button button--neutral button--xsmall-xs" href ng-class="{active: active == 'right'}" ng-click="active = 'right'">Right</a>
      </div>
    </div>
    <div class="split-button w-full">
      <a class="button" href ng-class="{active: active == 'left'}" ng-click="active = 'left'">Left</a>
      <a class="button" href ng-class="{active: active == 'middle'}" ng-click="active = 'middle'">Middle</a>
      <a class="button" href ng-class="{active: active == 'right'}" ng-click="active = 'right'">Right</a>
    </div>
      <div class="guide-code">
        <pre><code class="language-html">&lt;div class="split-button"&gt;
  &lt;a class="button" href&gt;Left&lt;/a&gt;
  &lt;a class="button" href&gt;Middle&lt;/a&gt;
  &lt;a class="button" href&gt;Right&lt;/a&gt;
&lt;/div&gt;</code></pre>
        <span class="button--small">
          <pre><code class="language-html">
&lt;div class="split-button"&gt;
  &lt;a class="button button--small-xs" href&gt;Left&lt;/a&gt;
  &lt;a class="button button--small-xs" href&gt;Middle&lt;/a&gt;
  &lt;a class="button button--small-xs" href&gt;Right&lt;/a&gt;
&lt;/div&gt;</code></pre>
        </span>
        <span class="button--xsmall">
          <pre><code class="language-html">
&lt;div class="split-button"&gt;
  &lt;a class="button button--xsmall-xs" href&gt;Left&lt;/a&gt;
  &lt;a class="button button--xsmall-xs" href&gt;Middle&lt;/a&gt;
  &lt;a class="button button--xsmall-xs" href&gt;Right&lt;/a&gt;
&lt;/div&gt;</code></pre>
        </span>

        <pre><code class="language-html">&lt;div class="split-button"&gt;
  &lt;a class="button button--neutral" href&gt;Left&lt;/a&gt;
  &lt;a class="button button--neutral" href&gt;Middle&lt;/a&gt;
  &lt;a class="button button--neutral" href&gt;Right&lt;/a&gt;
&lt;/div&gt;</code></pre>

        <span class="button--small">
          <pre><code class="language-html">
&lt;div class="split-button"&gt;
  &lt;a class="button button--neutral button--small-xs" href&gt;Left&lt;/a&gt;
  &lt;a class="button button--neutral button--small-xs" href&gt;Middle&lt;/a&gt;
  &lt;a class="button button--neutral button--small-xs" href&gt;Right&lt;/a&gt;
&lt;/div&gt;</code></pre>
        </span>
        <span class="button--xsmall">
          <pre><code class="language-html">
&lt;div class="split-button"&gt;
  &lt;a class="button button--neutral button--xsmall-xs" href&gt;Left&lt;/a&gt;
  &lt;a class="button button--neutral button--xsmall-xs" href&gt;Middle&lt;/a&gt;
  &lt;a class="button button--neutral button--xsmall-xs" href&gt;Right&lt;/a&gt;
&lt;/div&gt;</code></pre>
        </span>

        <pre><code class="language-html">&lt;div class="split-button w-full"&gt;
  &lt;a class="button" href&gt;Left&lt;/a&gt;
  &lt;a class="button" href&gt;Middle&lt;/a&gt;
  &lt;a class="button" href&gt;Right&lt;/a&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>

  </section>

  <section id="neutral-section">
    <div id="neutral" title="Neutral" class="inpage-anchor"></div>
    <h2>Neutral</h2>
    <p class="todo">discuss if we really need this option....</p>
    <p>Neutral buttons are used for <em>neutral</em> buttons on the page, like for whitelabeling. To access these styles, use the class, <code>.button.button--neutral</code>.</p>
    <a class="button button--neutral" href>Normal</a>
    <a class="button button--neutral button--small-xs" href>Small</a>
    <a class="button button--neutral button--xsmall-xs" href>X-Small</a>
    <a class="button button--neutral button--large-xs" href>Large</a>
    <a class="button button--neutral button--xlarge-xs" href>X-Large</a>
    <div class="guide-code">
      <pre><code class="language-html">&lt;a class="button button--neutral" href&gt;Normal&lt;/a&gt;</code></pre>
      <span class="button--small">
        <pre><code class="language-html">&lt;a class="button button--neutral button--small-xs" href&gt;Small&lt;/a&gt;</code></pre>
      </span>
      <span class="button--xsmall">
        <pre><code class="language-html">&lt;a class="button button--neutral button--xsmall-xs" href&gt;X-Small&lt;/a&gt;</code></pre>
      </span>
      <span class="button--large">
        <pre><code class="language-html">&lt;a class="button button--neutral button--large-xs" href&gt;Large&lt;/a&gt;</code></pre>
      </span>
      <span class="button--xlarge">
        <pre><code class="language-html">&lt;a class="button button--neutral button--xlarge-xs" href&gt;X-Large&lt;/a&gt;</code></pre>
      </span>
    </div>
  </div>
  </section>


</lens-main>
"""
