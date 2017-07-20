m = angular.module "lens.components.tables", []


m.controller "TablesController", (
  $scope
) ->
  return this


m.directive "tables", ->
  controller: "TablesController"
  restrict: "E"
  scope: {}
  template: template


template = """
<lens-main>

  <section id="basic-table-section">
    <div id="basic-table" title="Basic Table" class="inpage-anchor"></div>
    <h2>Basic Table</h2>
    <p>Use a regular table by using a <code>&lt;table&gt;&lt;/table&gt;</code>
       element and not adding any extra table classes. By default, the table
         will be set to the width of the content, with a max-width of 100%.
       Text is aligned left horizontally and in the middle of the cell
     vertically</p>
    <div class="guide-example">
      <div class="guide-example-demo">
        <table>
          <tbody>
            <tr>
              <th>Heading 1</th>
              <th>Heading 2</th>
              <th>Heading 3</th>
            </tr>
            <tr>
              <td>hello</td>
              <td>it's</td>
              <td>me</td>
            </tr>
            <tr>
              <td>I</td>
              <td>was</td>
              <td>wondering</td>
            </tr>
            <tr>
              <td>if</td>
              <td>after</td>
              <td>all</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="guide-example-code">
<pre><code class="language-html">&lt;table&gt;
  &lt;tbody&gt;
    &lt;tr&gt;
      &lt;th"&gt;Heading 1&lt;/th&gt;
      &lt;th&gt;Heading 2&lt;/th&gt;
      &lt;th&gt;Heading 3&lt;/th&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
      &lt;td&gt;hello&lt;/td&gt;
      &lt;td&gt;it's&lt;/td&gt;
      &lt;td&gt;me&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
      &lt;td&gt;I&lt;/td&gt;
      &lt;td&gt;was&lt;/td&gt;
      &lt;td&gt;wondering&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
      &lt;td class="right top"&gt;if&lt;/td&gt;
      &lt;td class="bottom"&gt;after&lt;/td&gt;
      &lt;td&gt;all this time you'd like to have a little chat or something.&lt;/td&gt;
    &lt;/tr&gt;
  &lt;/tbody&gt;
&lt;/table&gt;</code></pre>
      </div>
    </div>
  </section>

  <section id="alignment-widths-section">
    <div id="alignment-widths" title="Column Width &amp; Cell Alignment" class="inpage-anchor"></div>
    <h2>Column Width &amp; Cell Alignment</h2>
    <p>The width of columns in tables can be set by using Lens's
      <a ui-sref="grid">grid classes</a>. Use the following classes
    to align content within a cell:</p>
    <ul>
      <li><code>.right</code> align right</li>
      <li><code>.top</code> align to top of cell</li>
      <li><code>.bottom</code> align to bottom of cell</li>
    </ul>

    <div class="guide-example">
      <div class="guide-example-demo">
        <table class="col-100-xs">
          <tbody>
            <tr>
              <th class="col-80-xs">Heading 1</th>
              <th>Heading 2</th>
              <th>Heading 3</th>
            </tr>
            <tr>
              <td>hello</td>
              <td>it's</td>
              <td>me</td>
            </tr>
            <tr>
              <td>I</td>
              <td>was</td>
              <td>wondering</td>
            </tr>
            <tr>
              <td class="right top">if</td>
              <td class="bottom">after</td>
              <td>all this time you'd like to have a little chat or something.</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="guide-example-code">
<pre><code class="language-html">&lt;table class="col-100-xs"&gt;
  &lt;tbody&gt;
    &lt;tr&gt;
      &lt;th class="col-80-xs"&gt;Heading 1&lt;/th&gt;
      &lt;th&gt;Heading 2&lt;/th&gt;
      &lt;th&gt;Heading 3&lt;/th&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
      &lt;td&gt;hello&lt;/td&gt;
      &lt;td&gt;it's&lt;/td&gt;
      &lt;td&gt;me&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
      &lt;td&gt;I&lt;/td&gt;
      &lt;td&gt;was&lt;/td&gt;
      &lt;td&gt;wondering&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
      &lt;td class="right top"&gt;if&lt;/td&gt;
      &lt;td class="bottom"&gt;after&lt;/td&gt;
      &lt;td&gt;all this time you'd like to have a little chat or something.&lt;/td&gt;
    &lt;/tr&gt;
  &lt;/tbody&gt;
&lt;/table&gt;</code></pre>
      </div>
    </div>
  </section>

  <section id="zebra-stripes-section">
    <div id="zebra-stripes" title="Zebra Stripes" class="inpage-anchor"></div>
    <h2>Zebra Stripes</h2>
    <p>Add the class <code>.table-striped</code> to include zebra striping of
    alternate rows.</p>

    <div class="guide-example">
      <div class="guide-example-demo">
        <table class="table-striped">
          <tbody>
            <tr>
              <th>Heading 1</th>
              <th>Heading 2</th>
              <th>Heading 3</th>
            </tr>
            <tr>
              <td>hello</td>
              <td>it's</td>
              <td>me</td>
            </tr>
            <tr>
              <td>I</td>
              <td>was</td>
              <td>wondering</td>
            </tr>
            <tr>
              <td>if</td>
              <td>after</td>
              <td>all</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="guide-example-code">
<pre><code class="language-html">&lt;table class="table-striped"&gt;
  &lt;tbody&gt;
    &lt;tr&gt;
      &lt;th&gt;Heading 1&lt;/th&gt;
      &lt;th&gt;Heading 2&lt;/th&gt;
      &lt;th&gt;Heading 3&lt;/th&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
      &lt;td&gt;hello&lt;/td&gt;
      &lt;td&gt;it's&lt;/td&gt;
      &lt;td&gt;me&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
      &lt;td&gt;I&lt;/td&gt;
      &lt;td&gt;was&lt;/td&gt;
      &lt;td&gt;wondering&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
      &lt;td&gt;if&lt;/td&gt;
      &lt;td&gt;after&lt;/td&gt;
      &lt;td&gt;all&lt;/td&gt;
    &lt;/tr&gt;
  &lt;/tbody&gt;
&lt;/table&gt;</code></pre>
      </div>
    </div>
  </section>

  <section id="content-table-section">
    <div id="content-table" title="Content Table" class="inpage-anchor"></div>
    <h2>Content Table</h2>
    <p>Use our content table style with the class <code>.table-content</code>.
      Use <code>.sub-text</code> for any sub text (like a description).</p>

    <div class="guide-example">
      <div class="guide-example-demo">
        <table class="table-content col-100-lg">
          <tbody>
            <tr>
              <th class="col-80-xs">Heading 1</th>
              <th>Heading 2</th>
              <th>Heading 3</th>
            </tr>
            <tr>
              <td>hello</td>
              <td>it's</td>
              <td>me</td>
            </tr>
            <tr>
              <td>
                <div>here</div>
                <div class="sub-text">A description or something.</div>
              </td>
              <td>I</td>
              <td>am</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="guide-example-code">
<pre><code class="language-html">&lt;table class="table-content"&gt;
  &lt;tbody&gt;
    &lt;tr&gt;
      &lt;th class="col-80-xs"&gt;Heading 1&lt;/th&gt;
      &lt;th&gt;Heading 2&lt;/th&gt;
      &lt;th&gt;Heading 3&lt;/th&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
      &lt;td&gt;hello&lt;/td&gt;
      &lt;td&gt;it's&lt;/td&gt;
      &lt;td&gt;me&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
      &lt;td&gt;
        &lt;div&gt;here&lt;/div&gt;
        &lt;div class="sub-text"&gt;A description or something.&lt;/div&gt;
      &lt;/td&gt;
      &lt;td&gt;I&lt;/td&gt;
      &lt;td&gt;am&lt;/td&gt;
    &lt;/tr&gt;
  &lt;/tbody&gt;
&lt;/table&gt;</code></pre>
      </div>
    </div>
  </section>

</lens-main>
"""
