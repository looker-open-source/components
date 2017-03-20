m = angular.module "lens.atoms.tables", []


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
<section>
  <h2 id="Rows" class="m-b-1-xs">Just A Regular Table</h2>
  <p class="m-b-2-xs">Use a regular table by using a <code>&lt;table&gt;&lt;/table&gt;</code> element and not adding any extra table classes. Additionally, the width of columns in tables can be set by using Lens's <a href="grid.html">grid classes</a>.</p>

  <table class="m-b-2-xs col-100-lg">
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
        <td>if</td>
        <td>after</td>
        <td>all</td>
      </tr>
    </tbody>
  </table>
  <div class="guide-code m-b-4-xs">
<pre><code class="language-html">&lt;table&gt;
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
      &lt;td&gt;if&lt;/td&gt;
      &lt;td&gt;after&lt;/td&gt;
      &lt;td&gt;all&lt;/td&gt;
    &lt;/tr&gt;
  &lt;/tbody&gt;
&lt;/table&gt;</code></pre>
  </div>


  <h2 id="Rows" class="m-b-1-xs">Striped Table</h2>
  <p class="m-b-2-xs">Use a striped table by adding the class <code>.table-striped</code>. Additionally, the width of columns in tables can be set by using Lens's <a href="grid.html">grid classes</a>.</p>

  <table class="table-striped m-b-2-xs col-100-lg">
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
        <td>if</td>
        <td>after</td>
        <td>all</td>
      </tr>
    </tbody>
  </table>
  <div class="guide-code m-b-4-xs">
<pre><code class="language-html">&lt;table class="table-striped"&gt;
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
      &lt;td&gt;if&lt;/td&gt;
      &lt;td&gt;after&lt;/td&gt;
      &lt;td&gt;all&lt;/td&gt;
    &lt;/tr&gt;
  &lt;/tbody&gt;
&lt;/table&gt;</code></pre>
  </div>


  <h2 id="Default" class="m-b-1-xs">Content Table</h2>
  <p class="m-b-2-xs">Use our content table style with the class <code>.table-content</code>. Use <code>.sub-text</code> for any sub text (like a description). Additionally, the width of columns in tables can be set by using Lens's <a href="grid.html">grid classes</a>.</p>

  <table class="table-content m-b-2-xs col-100-lg">
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
  <div class="guide-code m-b-4-xs">
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

</section>
"""
