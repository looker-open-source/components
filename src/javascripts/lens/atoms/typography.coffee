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
    <div id="typefaces" title="Typefaces" class="inpage-anchor"></div>
    <h2>Typefaces</h2>
    <table class="table-content">
      <thead>
        <tr>
          <th><code>@extend</code></th>
          <th>font-family</th>
          <th>Notes</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>%brand-font</code></td>
          <td>'Open Sans', Helvetica, Arial, sans-serif</td>
          <td>This is the Lens default</td>
        </tr>
        <tr>
          <td><code>%code-font</code></td>
          <td>'Monaco', 'Menlo', 'Ubuntu Mono', 'Consolas', 'source-code-pro', monospace</td>
          <td>Used in the ACE editor. Use when displaying LookML, SQL, etc.</td>
        </tr>
      </tbody>
    </table>
  </section>

  <section id="sizes-section">
    <div id="sizes" title="Size" class="inpage-anchor"></div>
    <h2>Type Size</h2>
    <p>Type size is specified as both the text size and the line height.</p>
    <table class="table-content">
      <thead>
        <tr>
          <th><code>@extend</code></th>
          <th>font-size/line-height</th>
          <th>Notes</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>%text-n2-xs</code></td>
          <td>12px/20px</td>
          <td></td>
        </tr>
        <tr>
          <td><code>%text-n1-xs</code></td>
          <td>14px/24px</td>
          <td></td>
        </tr>
        <tr>
          <td><code>%text-0-xs</code></td>
          <td>16px/24px</td>
          <td>This is the base font size and line-height</td>
        </tr>
        <tr>
          <td><code>%text-1-xs</code></td>
          <td>19px/27px</td>
          <td></td>
        </tr>
        <tr>
          <td><code>%text-2-xs</code></td>
          <td>22px/30px</td>
          <td></td>
        </tr>
        <tr>
          <td><code>%text-3-xs</code></td>
          <td>28px/36px</td>
          <td></td>
        </tr>
        <tr>
          <td><code>%text-4-xs</code></td>
          <td>38px/46px</td>
          <td></td>
        </tr>
        <tr>
          <td><code>%text-5-xs</code></td>
          <td>52px/60px</td>
          <td></td>
        </tr>
        <tr>
          <td><code>%text-6-xs</code></td>
          <td>62px/72px</td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </section>


  <section id="weights-section">
    <div id="weights" title="Weights" class="inpage-anchor"></div>
    <h2>Weights</h2>
    <table class="table-content">
      <thead>
        <tr>
          <th><code>@extend</code></th>
          <th>font-weight</th>
          <th>Notes</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>%regular</code></td>
          <td>normal/400</td>
          <td>Default font-weight</td>
        </tr>
        <tr>
          <td><code>%light</code></td>
          <td>300</td>
          <td></td>
        </tr>
        <tr>
          <td><code>%bold</code></td>
          <td>600</td>
          <td></td>
        </tr>
        <tr>
          <td><code>%extra-bold</code></td>
          <td>700</td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </section>

  <section id="emphasis-section">
    <div id="emphasis" title="Emphasis" class="inpage-anchor"></div>
    <h2>Emphasis</h2>
    <table class="table-content">
      <thead>
        <tr>
          <th><code>@extend</code></th>
          <th>Property: value</th>
          <th>Notes</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>%italic</code></td>
          <td>font-style: italic</td>
          <td></td>
        </tr>
        <tr>
          <td><code>%caps</code></td>
          <td>text-transform: uppercase</td>
          <td></td>
        </tr>
        <tr>
          <td><code>%lowercase</code></td>
          <td>text-transform: lowercase</td>
          <td></td>
        </tr>
        <tr>
          <td><code>%capitalize</code></td>
          <td>text-transform: capitalize</td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </section>

  <section id="alignment-section">
    <div id="alignment" title="Alignment" class="inpage-anchor"></div>
    <h2>Alignment</h2>
    <table class="table-content">
      <thead>
        <tr>
          <th><code>@extend</code></th>
          <th>text-align</th>
          <th>Notes</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>%text-left-xs</code></td>
          <td>left</td>
          <td></td>
        </tr>
        <tr>
          <td><code>%text-right-xs</code></td>
          <td>right</td>
          <td></td>
        </tr>
        <tr>
          <td><code>%text-center-xs</code></td>
          <td>center</td>
          <td></td>
        </tr>
        <tr>
          <td><code>%text-justify-xs</code></td>
          <td>justify</td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </section>


</lens-main>
"""
