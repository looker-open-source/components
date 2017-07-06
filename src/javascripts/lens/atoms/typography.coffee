m = angular.module "lens.atoms.typography", []


m.controller "TypographyController", (
  $scope
) ->
  return this


m.directive "typography", ->
  controller: "TypographyController"
  restrict: "E"
  scope: {}
  template: template


template = """
<lens-main>

  <section id="Headers">
    <h2 class="m-b-1-xs">Headers and Text Sizing</h2>
    <p class="m-b-2-xs">Headers are built using typical html elements <code>h1 - h6</code>. To give ourselves a bit more control, we've created utility classes for applying different sizes to the default elements so that we can control markup hierarchy while still applying the sizes we want visually (<code>.text-0-xs</code>, <code>.text-1-xs</code>, <code>.text-2-xs</code>, <code>.text-3-xs</code>, <code>.text-4-xs</code>, <code>.text-5-xs</code>, <code>.text-6-xs</code>, <code>.text-7-xs</code>). By default, headers have no margin/padding applied to them and are bold.</p>

    <div><code>h1, .text-1-xs</code></div>
    <div class="m-b-2-xs"><h1>Looker is located in Santa Cruz, CA.</h1></div>

    <div><code>h2, .text-2-xs</code></div>
    <div class="m-b-2-xs"><h2>Looker is located in Santa Cruz, CA.</h2></div>

    <div><code>h3, .text-3-xs</code></div>
    <div class="m-b-2-xs"><h3>Looker is located in Santa Cruz, CA.</h3></div>

    <div><code>h4, .text-4-xs</code></div>
    <div class="m-b-2-xs"><h4>Looker is located in Santa Cruz, CA.</h4></div>

    <div><code>h5, .text-5-xs</code></div>
    <div class="m-b-2-xs"><h5>Looker is located in Santa Cruz, CA.</h5></div>

    <div><code>h6, .text-6-xs</code></div>
    <div class="m-b-2-xs"><h6>Looker is located in Santa Cruz, CA.</h6></div>

    <div><code>.text-7-xs</code></div>
    <div class="m-b-2-xs"><p class="text-7-xs">Looker is located in Santa Cruz, CA.</p></div>

    <div class="guide-code">
  <pre><code class="language-html">&lt;h1 class="text-0-xs"&gt;Looker is located in Santa Cruz, CA.&lt;/h1&gt;
&lt;p class="text-0-xs"&gt;Looker is located in Santa Cruz, CA.&lt;/p&gt;
&lt;h1&gt;Looker is located in Santa Cruz, CA.&lt;/h1&gt;
&lt;p class="text-1-xs"&gt;Looker is located in Santa Cruz, CA.&lt;/p&gt;
&lt;h2&gt;Looker is located in Santa Cruz, CA.&lt;/h2&gt;
&lt;p class="text-2-xs"&gt;Looker is located in Santa Cruz, CA.&lt;/p&gt;
&lt;h3&gt;Looker is located in Santa Cruz, CA.&lt;/h3&gt;
&lt;p class="text-3-xs"&gt;Looker is located in Santa Cruz, CA.&lt;/p&gt;
&lt;h4&gt;Looker is located in Santa Cruz, CA.&lt;/h4&gt;
&lt;p class="text-4-xs"&gt;Looker is located in Santa Cruz, CA.&lt;/p&gt;
&lt;h5&gt;Looker is located in Santa Cruz, CA.&lt;/h5&gt;
&lt;p class="text-5-xs"&gt;Looker is located in Santa Cruz, CA.&lt;/p&gt;
&lt;h6&gt;Looker is located in Santa Cruz, CA.&lt;/h6&gt;
&lt;p class="text-6-xs"&gt;Looker is located in Santa Cruz, CA.&lt;/p&gt;
&lt;p class="text-7-xs"&gt;Looker is located in Santa Cruz, CA.&lt;/p&gt;</code></pre></code></pre>
    </div>

    <div class="border-dark-xs m-b-1-xs p-1-xs">
      <p class="text-6-xs text-5-sm text-4-md text-3-lg">
        <span class="inline-block-xs hide-sm">.text-6-xs</span>
        <span class="hide-xs hide-md inline-block-sm">.text-5-sm</span>
        <span class="hide-xs hide-lg inline-block-md">.text-4-md</span>
        <span class="hide-xs inline-block-lg">.text-3-lg</span>
        <span class="m-r-1-xs p-r-1-xs border-r-dark-xs"></span>
        Resize your browser to see this text size change.
      </p>
    </div>
    <div class="guide-code m-b-3-xs">
  <pre><code class="language-html">&lt;div class="border-dark-xs m-b-3-xs p-1-xs"&gt;
  &lt;p class="text-6-xs text-5-sm text-4-md text-3-lg"&gt;
    &lt;span class="inline-block-xs hide-sm"&gt;.text-6-xs&lt;/span&gt;
    &lt;span class="hide-xs hide-md inline-block-sm"&gt;.text-5-sm&lt;/span&gt;
    &lt;span class="hide-xs hide-lg inline-block-md"&gt;.text-4-md&lt;/span&gt;
    &lt;span class="hide-xs inline-block-lg"&gt;.text-3-lg&lt;/span&gt;
    &lt;span class="m-r-1-xs p-r-1-xs border-r-dark-xs"&gt;&lt;/span&gt;
    Resize your browser to see this text size change.
  &lt;/p&gt;
&lt;/div&gt;</code></pre>
    </div>
  </section>



  <section id="Emphasis">
    <h2 class="m-b-1-xs">Emphasis</h2>
    <p class="m-b-2-xs">Using the following tags will add some emphasis to your text elements</p>

    <div><code>.regular</code></div>
    <p class="bold"><span class="regular">Looker is located in Santa Cruz, CA.</p>
    <div class="guide-code m-b-3-xs">
  <pre><code class="language-html">&lt;p class="bold"&gt;&lt;span class="regular"&gt;Looker is&lt;/span&gt; an online school that teaches you code&lt;/p&gt;</code></pre>
    </div>

    <div><code>strong, .bold</code></div>
    <p class="bold">Looker is located in Santa Cruz, CA.</p>
    <div class="guide-code m-b-3-xs">
  <pre><code class="language-html">&lt;p class="bold"&gt;Looker is located in Santa Cruz, CA.&lt;/p&gt;</code></pre>
    </div>

    <div><code>em, .italic</code></div>
    <p class="italic">Looker is located in Santa Cruz, CA.</p>
    <div class="guide-code m-b-3-xs">
  <pre><code class="language-html">&lt;p class="italic"&gt;Looker is located in Santa Cruz, CA.&lt;/p&gt;</code></pre>
    </div>

    <div><code>.caps</code></div>
    <p class="caps">Looker is located in Santa Cruz, CA.</p>
    <div class="guide-code m-b-3-xs">
  <pre><code class="language-html">&lt;p class="caps"&gt;Looker is located in Santa Cruz, CA.&lt;/p&gt;</code></pre>
    </div>
  </section>



  <section id="Alignment">
    <h2 class="m-b-1-xs">Text Alignment</h2>
    <p class="m-b-2-xs">Use the following classes to control text alignment in your layouts.</p>

    <div><code>.text-left-xs</code></div>
    <div class="p-2-xs border-dark-xs">
      <p class="text-left-xs">Left aligned text</p>
    </div>
    <div class="guide-code m-b-3-xs">
  <pre><code class="language-html">&lt;div class="p-2-xs border-dark-xs"&gt;
  &lt;p class="text-left-xs"&gt;Left aligned text&lt;/p&gt;
&lt;/div&gt;</code></pre>
    </div>

    <div><code>.text-right-xs</code></div>
    <div class="p-2-xs border-dark-xs">
      <p class="text-right-xs">Right aligned text</p>
    </div>
    <div class="guide-code m-b-3-xs">
  <pre><code class="language-html">&lt;div class="p-2-xs border-dark-xs"&gt;
  &lt;p class="text-right-xs"&gt;Right aligned text&lt;/p&gt;
&lt;/div&gt;</code></pre>
    </div>

    <div><code>.text-center-xs</code></div>
    <div class="p-2-xs border-dark-xs">
      <p class="text-center-xs">Center aligned text</p>
    </div>
    <div class="guide-code m-b-3-xs">
  <pre><code class="language-html">&lt;div class="p-2-xs border-dark-xs"&gt;
  &lt;p class="text-center-xs"&gt;Center aligned text&lt;/p&gt;
&lt;/div&gt;</code></pre>
    </div>

    <div><code>.text-justify-xs</code></div>
    <div class="p-2-xs border-dark-xs">
      <p class="text-justify-xs">Justified aligned text. Aenean lacinia bibendum nulla sed consectetur. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Maecenas faucibus mollis interdum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Maecenas sed diam eget risus varius blandit sit amet non magna. Maecenas sed diam eget risus varius blandit sit amet non magna. Vestibulum id ligula porta felis euismod semper. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</p>
    </div>
    <div class="guide-code m-b-3-xs">
  <pre><code class="language-html">&lt;div class="p-2-xs border-dark-xs"&gt;
  &lt;p class="text-justify-xs"&gt;Justified aligned text ...&lt;/p&gt;
&lt;/div&gt;</code></pre>
    </div>
  </section>



  <section id="Lists">
    <h2 class="m-b-1-xs">Lists</h2>
    <p class="m-b-2-xs">Lens comes with basic styles for unordered and ordered lists. You can remove the styling on either of them by using the class, <code>.list-unstyled</code>.</p>

    <div class="m-b-2-xs">
      <div><code>ul</code></div>
      <ul>
        <li>List item 1</li>
        <li>List item 2 </li>
        <li>List item 3</li>
        <li>List item 4</li>
      </ul>
    </div>

    <div class="m-b-2-xs">
      <div><code>ol</code></div>
      <ol>
        <li>List item 1</li>
        <li>List item 2 </li>
        <li>List item 3</li>
        <li>List item 4</li>
      </ol>
    </div>

    <div class="m-b-2-xs">
      <div><code>.list-unstyled</code></div>
      <ul class="list-unstyled">
        <li>List item 1</li>
        <li>List item 2 </li>
        <li>List item 3</li>
        <li>List item 4</li>
      </ul>
    </div>

    <div class="guide-code">
  <pre><code class="language-html">&lt;ul&gt;
  &lt;li&gt;List item 1&lt;/li&gt;
  &lt;li&gt;List item 2 &lt;/li&gt;
  &lt;li&gt;List item 3&lt;/li&gt;
  &lt;li&gt;List item 4&lt;/li&gt;
&lt;/ul&gt;

&lt;ol&gt;
  &lt;li&gt;List item 1&lt;/li&gt;
  &lt;li&gt;List item 2 &lt;/li&gt;
  &lt;li&gt;List item 3&lt;/li&gt;
  &lt;li&gt;List item 4&lt;/li&gt;
&lt;/ol&gt;

&lt;ul class="list-unstyled"&gt;
  &lt;li&gt;List item 1&lt;/li&gt;
  &lt;li&gt;List item 2 &lt;/li&gt;
  &lt;li&gt;List item 3&lt;/li&gt;
  &lt;li&gt;List item 4&lt;/li&gt;
&lt;/ul&gt;</code></pre>
    </div>
  </section>

  <section id="Variables">
    <h2 class="m-b-1-xs">Variables</h2>
    <p class="m-b-1-xs">Used to set font family and font size.</p>
    <p class="bold">Font-family</p>
    <div class="guide-code">
      <pre class="m-tb-05-xs"><code class="language-css">.custom-element
        font-family: $brand-font
      </code></pre>
      <p class="m-b-2-xs"><code>$brand-font</code></p>
    </div>

    <p class="bold">Font-weight</p>
    <div class="guide-code">
      <pre class="m-tb-05-xs"><code class="language-css">.custom-element
        font-weight: $bold
      </code></pre>
      <p class="m-b-3-xs"><code>$bold</code></p>
    </div>

  </section>

  <section id="Functions">
    <h2 class="m-b-1-xs">Functions</h2>
    <p class="m-b-1-xs">Used in our  utility classes.</p>
    <p class="bold">Font Size</p>
    <div class="guide-code">
  <pre class="m-tb-05-xs"><code class="language-css">.custom-element
    font-size: text-size(1)
  </code></pre>
    <p class="m-b-3-xs"><code>
      text-size(1)<br />
      text-size(2)<br />
      text-size(3)<br />
      text-size(4)<br />
      text-size(5)<br />
      text-size(6)
    </code></p>
  </section>

  <section id="Functions">
    <h2 class="m-b-1-xs">Functions</h2>
    <p class="bold">Hover, Active, Focus</p>
    <p>Can remove <code>:focus</code> by passing <code>false</code> into the mixin.</p>
    <div class="guide-code">
  <pre class="m-tb-05-xs"><code class="language-css">.custom-selector
    +selected
      property: value
  </code></pre>
    <p class="m-b-3-xs"><code>
      +selected<br />
      +selected(false)
    </code></p>
  </section>

</lens-main>
"""
