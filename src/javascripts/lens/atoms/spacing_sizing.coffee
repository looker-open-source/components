m = angular.module "lens.atoms.spacing_sizing", []


m.controller "SpacingSizingController", ['$scope', (
  $scope
) ->
  return this
]


m.directive "spacingSizing", ->
  controller: "SpacingSizingController"
  restrict: "E"
  scope: {}
  template: template


template = """
<lens-main>
  <section id="spacing-units-section">
    <div id="spacing-units" title="Spacing Units" class="inpage-anchor"></div>
    <h2>Spacing Units</h2>
    <p>Spacing units are used for margin, padding, and <a ui-sref="layout">positioning</a>.
       These comes in values from 0-27. </p>
     <p class="todo"> Add theory from Jeremy here on the scale ramp.</p>
    <div class="col-container">
      <div class="col col-30-lg">
        <ul class="list-unstyled">
          <li><code>0</code> = 0px</li>
          <li><code>1</code> = 1px</li>
          <li><code>2</code> = 2px</li>
          <li><code>3</code> = 3px</li>
          <li><code>4</code> = 4px</li>
          <li><code>5</code> = 5px</li>
          <li><code>6</code> = 6px</li>
          <li><code>7</code> = 7px</li>
          <li><code>8</code> = 12px</li>
          <li><code>9</code> = 14px</li>
        </ul>
      </div>
      <div class="col col-30-lg">
        <ul>
          <li><code>10</code> = 16px</li>
          <li><code>11</code> = 20px</li>
          <li><code>12</code> = 24px</li>
          <li><code>13</code> = 27px</li>
          <li><code>14</code> = 30px</li>
          <li><code>15</code> = 36px</li>
          <li><code>16</code> = 46px</li>
          <li><code>17</code> = 60px</li>
          <li><code>18</code> = 72px</li>
          <li><code>19</code> = 81px</li>
        </ul>
      </div>
      <div class="col col-30-lg">
        <ul>
          <li><code>20</code> = 96px</li>
          <li><code>21</code> = 121px</li>
          <li><code>22</code> = 144px</li>
          <li><code>23</code> = 182px</li>
          <li><code>24</code> = 216px</li>
          <li><code>25</code> = 273px</li>
          <li><code>26</code> = 324px</li>
          <li><code>27</code> = 410px</li>
        </ul>
      </div>
    </div>
  </section>



  <section id="margin-padding-section">
    <div id="margin-padding" title="Margin &amp; Padding" class="inpage-anchor"></div>
    <h2>Margin &amp; Padding</h2>
    <p>To specify margin and padding, Lens uses a shorthand of the Resolves to... name,
       side, spacing unit value and <a ui-sref="responsive">breakpoint</a> in the following format:
       <code>%Resolves to...-side-unit-breakpoint</code>.</p>
    <div class="col-container">
      <div class="col col-30-lg">
        <h4>Properties</h4>
        <ul class="list-unstyled">
          <li><code>m</code> = margin</li>
          <li><code>p</code> = padding</li>
        </ul>
      </div>
      <div class="col col-30-lg">
        <h4>Sides</h4>
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

    <h3>Margin</h3>
    <table class="table-content">
      <thead>
        <tr>
          <th><code>@extend</code></th>
          <th>Resolves to...</th>
          <th>Notes</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>%m-$n-xs</code></td>
          <td>margin: $n</td>
          <td>Equal margin on all sides of the element.</td>
        </tr>
        <tr>
          <td><code>%m-t-$n-xs</code></td>
          <td>margin-top: $n</td>
          <td></td>
        </tr>
        <tr>
          <td><code>%m-b-$n-xs</code></td>
          <td>margin-bottom: $n</td>
          <td></td>
        </tr>
        <tr>
          <td><code>%m-l-$n-xs</code></td>
          <td>margin-left: $n</td>
          <td></td>
        </tr>
        <tr>
          <td><code>%m-r-$n-xs</code></td>
          <td>margin-right: $n</td>
          <td></td>
        </tr>
        <tr>
          <td><code>%m-tb-$n-xs</code></td>
          <td>margin-top: $n<br/>margin-bottom: $n</td>
          <td></td>
        </tr>
        <tr>
          <td><code>%m-lr-$n-xs</code></td>
          <td>margin-left: $n<br/>margin-right: $n</td>
          <td></td>
        </tr>
        <tr>
          <td><code>%m-auto-xs</code></td>
          <td>margin-left: auto<br/>margin-right: auto</td>
          <td>horizontal center</td>
        </tr>
      </tbody>
    </table>

    <h3>Padding</h3>
    <table class="table-content">
      <thead>
        <tr>
          <th><code>@extend</code></th>
          <th>Resolves to...</th>
          <th>Notes</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>%p-$n-xs</code></td>
          <td>padding: $n</td>
          <td>Equal padding on all sides of the element.</td>
        </tr>
        <tr>
          <td><code>%p-t-$n-xs</code></td>
          <td>padding-top: $n</td>
          <td></td>
        </tr>
        <tr>
          <td><code>%p-b-$n-xs</code></td>
          <td>padding-bottom: $n</td>
          <td></td>
        </tr>
        <tr>
          <td><code>%p-l-$n-xs</code></td>
          <td>padding-left: $n</td>
          <td></td>
        </tr>
        <tr>
          <td><code>%p-r-$n-xs</code></td>
          <td>padding-right: $n</td>
          <td></td>
        </tr>
        <tr>
          <td><code>%p-tb-$n-xs</code></td>
          <td>padding-top: $n<br/>padding-bottom: $n</td>
          <td></td>
        </tr>
        <tr>
          <td><code>%p-lr-$n-xs</code></td>
          <td>padding-left: $n<br/>padding-right: $n</td>
          <td></td>
        </tr>
      </tbody>
    </table>

    <h3>Functions</h3>
    <p>The <code>spacing($n)</code> function can also be used to
      apply spacing units to your class definitions.</p>
    <div class="guide-example">
      <div class="guide-example-code">
        <pre><code class="language-css">.custom-element
  margin: spacing(1)
  padding: spacing(2)</code></pre>
      </div>
    </div>

  </section>


  <section id="widht-height-section">
    <div id="width-height" title="Width &amp; Height" class="inpage-anchor"></div>
    <h2>Width &amp; Height</h2>
    <p>Most widths will be set using a <a ui-sref="grid">grid layout</a> the following
    styles are also provided.</p>
    <table class="table-content">
      <thead>
        <tr>
          <th><code>@extend</code></th>
          <th>Resolves to...</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>%w-fit-xs</code> </td>
          <td>max-width: 100%</td>
        </tr>
        <tr>
          <td><code>%w-full-xs</code> </td>
          <td>width: 100%</td>
        </tr>
        <tr>
          <td><code>%h-full-xs</code> </td>
          <td>height: 100%</td>
        </tr>
        <tr>
          <td><code>%w-auto-xs</code> </td>
          <td>width: auto</td>
        </tr>
      </tbody>
    </table>

    <h3>Mixins</h3>
    <p>When defining your custom elements, you can also use the <code>width-height($n, $n)</code> mixin
    where <code>$n</code> is either a Lens spacing unit or a custom width/height value.
    <span class="todo">is that true that $n can be a spacing unit....?</span></p>
    <div class="guide-example">
      <div class="guide-example-code"><pre><code class="language-css">.custom-selector
  +width-height(100px, 200px)</code></pre>
      </div>
    </div>

  </section>


  <section id="overflow-section">
    <div id="overflow" title="Overflow" class="inpage-anchor"></div>
    <h2>Overflow</h2>
    <p>Overflow controls what happens to content when it is bigger than its container.</p>
    <table class="table-content">
      <thead>
        <tr>
          <th><code>@extend</code></th>
          <th>Resolves to...</th>
          <th>Notes</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>%overflow-hidden-xs</code> </td>
          <td>overflow: hidden</td>
          <td>clip content</td>
        </tr>
        <tr>
          <td><code>%overflow-auto-xs</code> </td>
          <td>overflow: auto</td>
          <td>only add scrollbars if content is too big</td>
        </tr>
        <tr>
          <td><code>%overflow-scroll-xs</code> </td>
          <td>overflow: scroll</td>
          <td>always have scrollbars</td>
        </tr>
        <tr>
          <td><code>%overflow-visible-xs</code> </td>
          <td>overflow: visible</td>
          <td>allow content to extend outside of container</td>
        </tr>
      </tbody>
    </table>
  </section>



</lens-main>
"""
