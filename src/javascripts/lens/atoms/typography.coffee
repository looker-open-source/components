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

  <section id="typefaces-section">
    <div id="typefaces" class="inpage-anchor"></div>
    <h2 class="title-1">Typefaces</h2>
    <p><a href="https://fonts.google.com/specimen/Open+Sans">Open-Sans</a>
       is the default font family used in the majority of the interface.
       When displaying any code,
      <a href="https://en.wikipedia.org/wiki/Monaco_(typeface)">Monaco</a>
      is the fixed-width font.
    </p>

    <h3 class="subheading">SCSS</h3>
    <table>
      <thead>
        <tr>
          <th>Variable</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>$brand-font</code></td>
          <td>Open Sans, sans-serif</td>
        </tr>
        <tr>
          <td><code>$code-font</code></td>
          <td><span class="todo"></span></td>
        </tr>
      </tbody>
    </table>
  </section>

  <section id="sizes-section">
    <div id="sizes" class="inpage-anchor"></div>
    <h2 class="title-1">Type Sizes</h2>
    <p>The default body font size and line weight is 16px/24px.</p>

    <h3 class="subheading">SCSS</h3>
    <table>
      <thead>
        <tr>
          <th>Class</th>
          <th>PX Values</th>
          <th>Actual Size</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>.text-n2-xs</code></td>
          <td>12px/20px</td>
          <td><span class="text-n2-xs">Data analytics everybody loves.</span></td>
        </tr>
        <tr>
          <td><code>.text-n1-xs</code></td>
          <td>14px/24px</td>
          <td><span class="text-n1-xs">Data analytics everybody loves.</span></td>
        </tr>
        <tr>
          <td><code>.text-0-xs</code></td>
          <td>16px/24px</td>
          <td><span class="text-0-xs">Data analytics everybody loves.</span></td>
        </tr>
        <tr>
          <td><code>.text-1-xs</code></td>
          <td>19px/27px</td>
          <td><span class="text-1-xs">Data analytics everybody loves.</span></td>
        </tr>
        <tr>
          <td><code>.text-2-xs</code></td>
          <td>22px/30px</td>
          <td><span class="text-2-xs">Data analytics everybody loves.</span></td>
        </tr>
        <tr>
          <td><code>.text-3-xs</code></td>
          <td>28px/36px</td>
          <td><span class="text-3-xs">Data analytics everybody loves.</span></td>
        </tr>
        <tr>
          <td><code>.text-4-xs</code></td>
          <td>38px/46px</td>
          <td><span class="text-4-xs">Data analytics everybody loves.</span></td>
        </tr>
        <tr>
          <td><code>.text-5-xs</code></td>
          <td>52px/60px</td>
          <td><span class="text-5-xs">Data analytics everybody loves.</span></td>
        </tr>
        <tr>
          <td><code>.text-6-xs</code></td>
          <td>62px/72px</td>
          <td><span class="text-6-xs">Data analytics everybody loves.</span></td>
        </tr>
      </tbody>
    </table>

    <table>
      <thead>
        <tr>
          <th>Function</th>
          <th>Parameters</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>text-size($n)</code></td>
          <td>$n is any of our font sizes, 1-7</td>
          <td>Will set the text to the corresponding font size definition.</td>
        </tr>
      </tbody>
    </table>

<!--
    <h3>Responsive Text Sizing</h3>
    <p>You can use the <a ui-sref="responsive">responsive suffixes</a> to control
    text size at different screen widths.</p>
    <div class="guide-example">
      <div class="guide-example-demo">
        <div class="border-dark-xs p-1-xs">
          <p class="text-7-xs text-5-sm text-3-md text-1-lg">
            <span class="inline-block-xs hide-sm">.text-7-xs</span>
            <span class="hide-xs hide-md inline-block-sm">.text-5-sm</span>
            <span class="hide-xs hide-lg inline-block-md">.text-3-md</span>
            <span class="hide-xs inline-block-lg">.text-1-lg</span>
            <span class="m-r-1-xs p-r-1-xs border-r-dark-xs"></span>
            Resize your browser to see this text size change.
          </p>
        </div>
      </div>
      <div class="guide-example-code">
        <pre><code class="language-html">&lt;div class="border-dark-xs p-1-xs"&gt;
  &lt;p class="text-7-xs text-5-sm text-3-md text-1-lg"&gt;
    &lt;span class="inline-block-xs hide-sm"&gt;.text-7-xs&lt;/span&gt;
    &lt;span class="hide-xs hide-md inline-block-sm"&gt;.text-5-sm&lt;/span&gt;
    &lt;span class="hide-xs hide-lg inline-block-md"&gt;.text-3-md&lt;/span&gt;
    &lt;span class="hide-xs inline-block-lg"&gt;.text-1-lg&lt;/span&gt;
    &lt;span class="m-r-1-xs p-r-1-xs border-r-dark-xs"&gt;&lt;/span&gt;
    Resize your browser to see this text size change.
  &lt;/p&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>
-->
  </section>


  <section id="weights-section">
    <div id="weights" class="inpage-anchor"></div>
    <h2>Weights</h2>
    <p>The default font weight is normal/400.</p>
    <table>
      <thead>
        <tr>
          <th>Class</th>
          <th>Variable</th>
          <th>Value</th>
          <th>Example</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><span class="todo"></span></td>
          <td><code>$light</code></td>
          <td>300</td>
          <td><span class="todo"></span><!--<span class="light text-1-xs">Data analytics everybody loves.</span>--></td>
        </tr>
        <tr>
          <td><code>.regular</code></td>
          <td><span class="todo"></span></td>
          <td>normal/400</td>
          <td><span class="regular">Data analytics everybody loves.</span></td>
        </tr>
        <tr>
          <td><code>.bold</code></td>
          <td><code>$bold</code></td>
          <td>600</td>
          <td><span class="bold">Data analytics everybody loves.</span></td>
        </tr>
        <tr>
          <td><span class="todo"></span></td>
          <td><code>$extra-bold</code></td>
          <td>700</td>
          <td><span class="todo"></span><!--<span class="extra-bold text-1-xs">Data analytics everybody loves.</span>--></td>
        </tr>
      </tbody>
    </table>
  </section>

  <section id="emphasis-section">
    <div id="emphasis" class="inpage-anchor"></div>
    <h2>Emphasis</h2>
    <p>Apply emphasis to text elements using the following
       markup and selectors. ** to do - when to use which? **</p>

    <h3>Markup</h3>
    <table>
      <thead>
        <tr>
          <th>Tag</th>
          <th>Applied Styling</th>
          <th>Example</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>&lt;strong&gt;</code></td>
          <td>bold</td>
          <td><strong>Data analytics everbody loves.</strong></td>
        </tr>
        <tr>
          <td><code>&lt;em&gt;</code></td>
          <td>italic</td>
          <td><em>Data analytics everybody loves.</em></td>
        </tr>
      </tbody>
    </table>

    <h3>SCSS</h3>
    <table>
      <thead>
        <tr>
          <th>Class</th>
          <th>Example</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>.caps</code></td>
          <td><span class="caps">Data analytics everybody loves.</span></td>
        </tr>
      </tbody>
    </table>
  </section>


  <section id="alignment-section">
    <div id="alignment" class="inpage-anchor"></div>
    <h2>Alignment</h2>
    <p>Use the following classes to control text alignment in your layouts.</span></p>

    <h3>SCSS</h3>
    <table>
      <thead>
        <tr>
          <th style="width: 200px">Class</th>
          <th>Example</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>.text-left-xs</code></td>
          <td><div class="text-left-xs">Aenean lacinia bibendum nulla sed consectetur. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Etiam porta sem malesuada magna mollis euismod.</div></td>
        </tr>
        <tr>
          <td><code>.text-right-xs</code></td>
          <td><div class="text-right-xs">Aenean lacinia bibendum nulla sed consectetur. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Etiam porta sem malesuada magna mollis euismod.</div></td>
        </tr>
        <tr>
          <td><code>.text-center-xs</code></td>
          <td><div class="text-center-xs">Aenean lacinia bibendum nulla sed consectetur. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Etiam porta sem malesuada magna mollis euismod.</div></td>
        </tr>
        <tr>
          <td><code>.text-justify-xs</code></td>
          <td><div class="text-justify-xs">Aenean lacinia bibendum nulla sed consectetur. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Etiam porta sem malesuada magna mollis euismod.</div></td>
        </tr>
      </tbody>
    </table>
  </section>

  <section id="headings-section">
    <div id="headings" class="inpage-anchor"></div>
    <h2>Headings</h2>
    <p class="todo">WE SHOULD REALLY FIX HEADINGS. HEADINGS SHOULD HAVE EXTRA STYLING - WEIGHT,
      SPACING, TEXT-TRANSFORMS, COLORS. THEY SHOULD HAVE RELATIONSHIPS WITH ONE ANOTHER.</p>
    <table>
      <thead>
        <tr>
          <th>Tag</th>
          <th>PX Value</th>
          <th>Actual Size</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>&lt;h1&gt;</code></td>
          <td>21px</td>
          <td><h1>Looker is located in Santa Cruz, CA.</h1></td>
        </tr>
        <tr>
          <td><code>&lt;h2&gt;</code></td>
          <td>18px</td>
          <td><h2>Looker is located in Santa Cruz, CA.</h2></td>
        </tr>
        <tr>
          <td><code>&lt;h3&gt;</code></td>
          <td>15px</td>
          <td><h3>Looker is located in Santa Cruz, CA.</h3></td>
        </tr>
        <tr>
          <td><code>&lt;h4&gt;</code></td>
          <td>14px</td>
          <td><h4>Looker is located in Santa Cruz, CA.</h4></td>
        </tr>
        <tr>
          <td><code>&lt;h5&gt;</code></td>
          <td>13px</td>
          <td><h5>Looker is located in Santa Cruz, CA.</h5></td>
        </tr>
        <tr>
          <td><code>&lt;h6&gt;</code></td>
          <td>12px</td>
          <td><h6>Looker is located in Santa Cruz, CA.</h6></td>
        </tr>
      </tbody>
    </table>
  </section>

  <section id="body-copy-section">
    <div id="body-copy" class="inpage-anchor"></div>
    <h2>Body Copy</h2>
    <h3>Markup</h3>
    <table>
      <thead>
        <tr>
          <th>Tag</th>
          <th>Example</th>
          <th>Style Notes</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>&lt;p&gt;</code></td>
          <td><p>Data analytics everbody loves.</p></td>
          <td>font size, weight, etc.</td>
        </tr>
        <tr>
          <td><code>&lt;code&gt;</code></td>
          <td><code>Data analytics everybody loves.</code></td>
          <td>15px/1.5 monospace</td>
        </tr>
        <tr>
          <td><code>&lt;address&gt;</code></td>
          <td><address>Data anaylytics everybody loves.</address></td>
          <td>??</td>
        </tr>
        <tr>
          <td><code>&lt;blockquote&gt;</code></td>
          <td><blockquote>Data anaylytics everybody loves.</blockquote></td>
          <td>??</td>
        </tr>
        <tr>
          <td><code>&lt;....?&gt;</code></td>
          <td><p>...?</p></td>
          <td>...?</td>
        </tr>
      </tbody>
    </table>

  </section>

  <section id="links-section">
    <div id="links" class="inpage-anchor"></div>
    <h2 class="m-b-1-xs">Links</h2>

    <h3>Markup</h3>
    <table class="m-b-3-xs">
      <thead>
        <tr>
          <th>State</th>
          <th>Example</th>
          <th>Style Notes</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>a, a:link</code></td>
          <td><a href="https://www.looker.com">Looker</a></td>
          <td>Brand border-values</td>
        </tr>
        <tr>
          <td><code>a:visited</code></td>
          <td><a href="https://www.looker.com">Looker</a></td>
          <td>Same as a:link</td>
        </tr>
        <tr>
          <td><code>a:hover</code></td>
          <td><a href="https://www.looker.com">Looker</a></td>
          <td>Brand blue darkened 10% ?! always show pointer! no underline.</td>
        </tr>
        <tr>
          <td><code>a:active</code></td>
          <td><a href="https://www.looker.com">Looker</a></td>
          <td>Same as :hover</td>
        </tr>
      </tbody>
    </table>

  </section>

  <section id="lists-section">
    <div id="lists" class="inpage-anchor"></div>
    <h2>Lists</h2>
    <p>Lens comes with basic styles for unordered and ordered
      lists. You can remove the styling on either of them by using the
      class <code>.list-unstyled</code>.</p>

    <div>
      <div><code>&lt;ul&gt;</code></div>
      <ul>
        <li>List item 1</li>
        <li>List item 2 </li>
        <li>List item 3</li>
        <li>List item 4</li>
      </ul>
    </div>

    <div>
      <div><code>&lt;ol&gt;</code></div>
      <ol>
        <li>List item 1</li>
        <li>List item 2 </li>
        <li>List item 3</li>
        <li>List item 4</li>
      </ol>
    </div>

    <div>
      <div><code>&lt;ul class=".list-unstyled"&gt;</code></div>
      <ul class="list-unstyled">
        <li>List item 1</li>
        <li>List item 2 </li>
        <li>List item 3</li>
        <li>List item 4</li>
      </ul>
    </div>

    <div>
      <div><code>&lt;dl&gt;</code></div>
      <dl>
        <dt>Looker</dt>
        <dd>Data analytics everybody loves.</dd>
      </dl>
    </div>

  </section>


</lens-main>
"""
