m = angular.module "lens.components.body_copy", []


m.controller "BodyCopyController", (
  $scope
) ->
  return this


m.directive "bodyCopy", ->
  controller: "BodyCopyController"
  restrict: "E"
  scope: {}
  template: template


template = """
<lens-main>

  <section id="body-copy-section">
    <div id="body-copy" class="inpage-anchor"></div>
    <h2>Body Copy</h2>
    <table class="table-content">
      <thead>
        <tr>
          <th>Class</th>
          <th>Tag</th>
          <th>Example</th>
          <th>Markup</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>.body</code></td>
          <td><code>&lt;p&gt;</code></td>
          <td><p>Data analytics everyone loves.</p></td>
          <td><code class="language-html">&lt;p&gt;Data analytics everyone loves.&lt;/p&gt;</code></td>
        </tr>
        <tr>
          <td><code>.caption</code></td>
          <td></td>
          <td><p class="caption">Data analytics everyone loves.</td>
          <td><code class="language-html">&lt;p class="caption"&gt;Data analytics everyone loves.&lt;/p&gt;</code></td>
        </tr>
        <tr>
          <td><code>.bold</code></td>
          <td><code>&lt;strong&gt;</code></td>
          <td><p>Data <strong>analytics</strong> everyone loves.</p></td>
          <td><code class="language-html">&lt;p&gt;Data &lt;strong&gt;analytics&lt;/strong&gt; everyone loves.&lt;/p&gt;</code></td>
        </tr>
        <tr>
          <td><code>.regular</code></td>
          <td></td>
          <td><p class="bold">Data <span class="regular">analytics</span> everyone loves.</p></td>
          <td><code class="language-html">&lt;p class="bold"&gt;Data &lt;span class="regular"&gt;analytics&lt;/span&gt; everyone loves.&lt;/p&gt;</code></td>
        </tr>
        <tr>
          <td><code>.light</code></td>
          <td></td>
          <td><p class="light"><span class="sample-text"></span></td>
          <td><code class="language-html">&lt;p class="light"&gt;Data analytics everyone loves.&lt;/p&gt;</code></td>
        </tr>
        <tr>
          <td><code>.italic</code></td>
          <td><code>&lt;em&gt;</code></td>
          <td><p>Data <em>analytics</em> everyone loves.</p></td>
          <td><code class="language-html">&lt;p&gt;Data &lt;em&gt;analytics&lt;/em&gt; everyone loves.&lt;/p&gt;</code></td>
        </tr>
        <tr>
          <td><code>.caps</code></td>
          <td></td>
          <td><p class="caps"><span class="sample-text"></span></td>
          <td><code class="language-html">&lt;p class="caps"&gt;Data analytics everyone loves.&lt;/p&gt;</code></td>
        </tr>
        <tr>
          <td><code>.lowercase</code></td>
          <td></td>
          <td><p class="lowercase"><span class="sample-text"></span></td>
          <td><code class="language-html">&lt;p class="lowercase"&gt;Data analytics everyone loves.&lt;/p&gt;</code></td>
        </tr>
        <tr>
          <td><code>.titlecase</code></td>
          <td></td>
          <td><p class="titlecase"><span class="sample-text"></span></td>
          <td><code class="language-html">&lt;p class="titlecase"&gt;Data analytics everyone loves.&lt;/p&gt;</code></td>
        </tr>
      </tbody>
    </table>
  </section>

  <section id="links-section">
    <div id="links" class="inpage-anchor"></div>
    <h2>Links</h2>
    <table>
      <thead>
        <tr>
          <th>State</th>
          <th>Example</th>
          <th>Style Notes</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Normal</td>
          <td><a href="https://www.looker.com">Looker</a></td>
          <td>Brand border-values</td>
        </tr>
        <tr>
          <td>Visited</td>
          <td><a href="https://www.looker.com">Looker</a></td>
          <td>Same as normal?</td>
        </tr>
        <tr>
          <td>Hover, Active</td>
          <td><a href="https://www.looker.com">Looker</a></td>
          <td>Brand blue darkened 10% ?! always show pointer! no underline.</td>
        </tr>
        <tr>
          <td>Disabled</td>
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
