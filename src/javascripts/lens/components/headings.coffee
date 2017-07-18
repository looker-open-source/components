m = angular.module "lens.components.headings", []


m.controller "HeadingsController", (
  $scope
) ->
  return this


m.directive "headings", ->
  controller: "HeadingsController"
  restrict: "E"
  scope: {}
  template: template


template = """
<lens-main>

  <section id="Headings">
    <p>Feel free to use whatever heading element you need for the hierarchy of what you are working on. But to style them to match our type ramp, you'll need to apply one of the classes from this page.</p>

    <table>
      <thead>
        <tr>
          <th>Class</th>
          <th>PX Value</th>
          <th>Actual Size</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>.subheading</code></td>
          <td>21px</td>
          <td><span class="subheading">Data analytics everybody loves.</span></td>
        </tr>
        <tr>
          <td><code>.title-1</code></td>
          <td>18px</td>
          <td><span class="title-1">Data analytics everybody loves.</span></td>
        </tr>
        <tr>
          <td><code>.title-2</code></td>
          <td>15px</td>
          <td><span class="title-2">Data analytics everybody loves.</span></td>
        </tr>
        <tr>
          <td><code>.headline</code></td>
          <td>14px</td>
          <td><span class="headline">Data analytics everybody loves.</span></td>
        </tr>
        <tr>
          <td><code>.display-1</code></td>
          <td>13px</td>
          <td><span class="display-1">Data analytics everybody loves.</span></td>
        </tr>
        <tr>
          <td><code>.display-2</code></td>
          <td>12px</td>
          <td><span class="display-2">Data analytics everybody loves.</span></td>
        </tr>
        <tr>
          <td><code>.display-3</code></td>
          <td>11px</td>
          <td><span class="display-3">Data analytics everybody loves.</span></td>
        </tr>
      </tbody>
    </table>




    <h3>Subheading</h3>
    <p>To use our subheading style on an element, use the <code>.subheading</code> class on the element.</p>

    <p class="subheading">Here's a subheading!</p>

    <div class="guide-code">
      <pre><code class="language-html">&lt;p class="subheading"&gt;Here's a subheading!&lt;/p&gt;</code></pre>
    </div>

    <h3>Title 1</h3>
    <p>To use our Title 1 style on an element, use the <code>.title-1</code> class on the element.</p>

    <p class="title-1">Here's a Title 1</p>

    <div class="guide-code">
      <pre><code class="language-html">&lt;p class="title-1"&gt;Here's a Title 1&lt;/p&gt;</code></pre>
    </div>

    <h3>Title 2</h3>
    <p>To use our Title 2 style on an element, use the <code>.title-2</code> class on the element.</p>

    <p class="title-2">Here's a Title 2</p>

    <div class="guide-code">
      <pre><code class="language-html">&lt;p class="title-2"&gt;Here's a Title 2&lt;/p&gt;</code></pre>
    </div>

    <h3>Headline</h3>
    <p>To use our Headline style on an element, use the <code>.headline</code> class on the element.</p>

    <p class="headline">Here's a Headline</p>

    <div class="guide-code">
      <pre><code class="language-html">&lt;p class="headline"&gt;Here's a Headline&lt;/p&gt;</code></pre>
    </div>

    <h3>Display 1</h3>
    <p>To use our Display 1 style on an element, use the <code>.display-1</code> class on the element.</p>

    <p class="display-1">Here's a Display</p>

    <div class="guide-code">
      <pre><code class="language-html">&lt;p class="display-1"&gt;Here's a Display&lt;/p&gt;</code></pre>
    </div>

    <h3>Display 2</h3>
    <p>To use our Display 2 style on an element, use the <code>.display-2</code> class on the element.</p>

    <p class="display-2">Here's a Display</p>

    <div class="guide-code">
      <pre><code class="language-html">&lt;p class="display-2"&gt;Here's a Display&lt;/p&gt;</code></pre>
    </div>

    <h3>Display 3</h3>
    <p>To use our Display 3 style on an element, use the <code>.display-3</code> class on the element.</p>

    <p class="display-3">Here's a Display</p>

    <div class="guide-code">
      <pre><code class="language-html">&lt;p class="display-3"&gt;Here's a Display&lt;/p&gt;</code></pre>
    </div>
  </section>

</lens-main>
"""
