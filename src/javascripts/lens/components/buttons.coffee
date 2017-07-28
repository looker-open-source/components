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

  <p>Buttons should be used for in-page or contextual
  actions. For navigation actions, use a link instead of a button.</p>

  <section id="code-section">
    <div id="code" title="Code" class="inpage-anchor"></div>
    <h2>Code</h2>
    <p>Buttons can be built using either the <code>&lt;a&gt;</code> or
      <code>&lt;button&gt;</code> element. If you are using the <code>&lt;button&gt;</code> element,
      always specify a <code>type</code> (button, sumbit, reset). When using the
      <code>&lt;a&gt;</code>, include <code>role="button"</code> for accessibility.</p>
    <p>To change the button type, size or state, add modifiers to the class.</p>
    <div class="guide-example">
      <div class="guide-example-demo">
        <a class="button" role="button" href>A Normal Button</a>
        <button type="button" class="button button--primary">Primary Button</button>
      </div>
      <div class="guide-example-code">
<pre><code class="language-html">&lt;a role="button" class="button" href&gt;A Normal Button&lt;/button&gt;
&lt;button type="button" class="button button--primary" href&gt;Primary Button&lt;/button&gt;
</code></pre>
      </div>
    </div>
  </section>

  <section id="types-section">
    <div id="types" title="Types" class="inpage-anchor"></div>
    <h2>Types</h2>
    <p>Button types signal to the user key properties of the action
      they are about to take.</p>
    <table class="table-content">
      <thead>
        <tr>
          <th>Button Type</th>
          <th class="col-20-xs">Modifier</th>
          <th>Example</th>
          <th>Use</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Normal</td>
          <td>Not needed</td>
          <td><a class="button" role="button" href>Normal</a></td>
          <td>Use when there are additional actions or no primary action for the user.</td>
        </tr>
        <tr>
          <td>Primary</td>
          <td><code>.button--primary</code></td>
          <td><a class="button button--primary" role="button" href>Primary</a></td>
          <td>A primary button indicates the key action the user should take. There should only be one primary action in any situation.</td>
        </tr>
        <tr>
          <td>Alert</td>
          <td><code>.button--alert</code></td>
          <td><a class="button button--alert" role="button" href>Alert</a></td>
          <td>Alert buttons are used to indicate a urgent or negative action on the page.</td>
        </tr>
      </tbody>
    </table>
  </section>

  <section id="sizes-section">
    <div id="sizes" title="Sizes" class="inpage-anchor"></div>
    <h2>Sizes</h2>
    <p>Lens has 4 button sizes that can be controlled using the <a ui-sref="responsive">responsive suffixes</a>.
    <table class="table-content">
      <thead>
        <tr>
          <th>Size</th>
          <th>Modifier</th>
          <th>Example</th>
          <th>Use</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Extra Small</td>
          <td><code>.button--xsmall-xs</td>
          <td><a class="button button--xsmall-xs" role="button" href>Extra Small</a></td>
          <td>for super tiny things.</td>
        </tr>
        <tr>
          <td>Small</td>
          <td><code>.button--small-xs</td>
          <td><a class="button button--small-xs" role="button" href>Small</a></td>
          <td>for kinda tiny things.</td>
        </tr>
        <tr>
          <td>Normal</td>
          <td><code>.button--xsmall-xs</td>
          <td><a class="button button--normal-xs" role="button" href>Normal</a></td>
          <td>Typically what you'll use...</td>
        </tr>
        <tr>
          <td>Large</td>
          <td><code>.button--large-xs</td>
          <td><a class="button button--large-xs" role="button" href>Large</a></td>
          <td>for attention!</td>
        </tr>
      </tbody>
    </table>

  </section>

  <section id="disabled-section">
    <div id="disabled" title="Disabling" class="inpage-anchor"></div>
    <h2>Disabling</h2>
    <p>Disable a button when the action on the page is blocked to the user.
      Appply the modifier <code>.button--disabled</code> to any size or type
      of button to disable it.</p>
    <div class="guide-example">
      <div class="guide-example-demo">
        <a role="button" class="button button--disabled" href>Normal</a>
        <a role="button" class="button button--primary button--disabled" role="button" href>Primary</a>
        <a role="button" class="button button--alert button--disabled" role="button" href>Primary</a>
      </div>
      <div class="guide-example-code">
<pre><code class="language-html">&lt;a role="button" class="button button--disabled" href&gt;Normal&lt;/button&gt;
&lt;a role="button" class="button button--primary button--disabled" href&gt;Normal&lt;/button&gt;
&lt;a role="button" class="button button--alert button--disabled" href&gt;Normal&lt;/button&gt;
</code></pre>
      </div>
    </div>
  </section>

<!--
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
-->

  <section id="split-button-section">
    <div id="split-button" title="Split Button" class="inpage-anchor"></div>
    <h2>Split buttons</h2>
    <p class="todo">This is maybe it's own separate component...? when do we use this?
    right now it's for filtering states on Explore page... one should always be selected, eh?
    might also need to tweak - thar be some funkiness with active/hover here.</p>
    <p>Split buttons are used when you need a button that contains two or more actions.
       To accomplish this, wrap your buttons in <code>&lt;div class="split-button"&gt;</code>.
    </p>
    <div class="guide-example">
      <div class="guide-example-demo">
        <div class="split-button">
          <a class="button" href ng-class="{active: active == 'left'}" ng-click="active = 'left'">Left</a>
          <a class="button" href ng-class="{active: active == 'middle'}" ng-click="active = 'middle'">Middle</a>
          <a class="button" href ng-class="{active: active == 'right'}" ng-click="active = 'right'">Right</a>
        </div>
      </div>
      <div class="guide-example-code">
        <pre><code class="language-html">&lt;div class="split-button"&gt;
  &lt;a class="button" href&gt;Left&lt;/a&gt;
  &lt;a class="button" href&gt;Middle&lt;/a&gt;
  &lt;a class="button" href&gt;Right&lt;/a&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>


    <p>Use <code>&lt;div class="split-button w-full"&gt;</code> for your buttons to take up the full width of the container.</p>
    <div class="split-button w-full">
      <a class="button" href ng-class="{active: active == 'left'}" ng-click="active = 'left'">Left</a>
      <a class="button" href ng-class="{active: active == 'middle'}" ng-click="active = 'middle'">Middle</a>
      <a class="button" href ng-class="{active: active == 'right'}" ng-click="active = 'right'">Right</a>
    </div>
      <div class="guide-code">
        <pre><code class="language-html">&lt;div class="split-button w-full"&gt;
  &lt;a class="button" href&gt;Left&lt;/a&gt;
  &lt;a class="button" href&gt;Middle&lt;/a&gt;
  &lt;a class="button" href&gt;Right&lt;/a&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>

  </section>


</lens-main>
"""
