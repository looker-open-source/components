m = angular.module "lens.components.headings", []


m.controller "HeadingsController", ['$scope', (
  $scope
) ->
  return this
]


m.directive "headings", ->
  controller: "HeadingsController"
  restrict: "E"
  scope: {}
  template: template


template = """
<lens-main>
  <section id="headings-section">
    <p class="todo">Add some rules about how to use...</p>
    <table class="table-content">
      <thead>
        <tr>
          <th>Class</th>
          <th>Tag</th>
          <th>Example</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>.display-3</code></td>
          <td></td>
          <td><h1 class="display-3"><span class="sample-text"></span></h1></td>
        </tr>
        <tr>
          <td><code>.display-2</code></td>
          <td></td>
          <td><h1 class="display-2"><span class="sample-text"></span></h1></td>
        </tr>
        <tr>
          <td><code>.display-1</code></td>
          <td></td>
          <td><h1 class="display-1"><span class="sample-text"></span></h1></td>
        </tr>
        <tr>
          <td><code>.headline</code></td>
          <td><code>&lt;h1&gt;</code></td>
          <td><h1><span class="sample-text"></span></h1></td>
        </tr>
        <tr>
          <td><code>.title-2</code></td>
          <td><code>&lt;h2&gt;</code></td>
          <td><h2><span class="sample-text"></span></h2></td>
        </tr>
        <tr>
          <td><code>.title-1</code></td>
          <td><code>&lt;h3&gt;</code></td>
          <td><h3><span class="sample-text"></span></h3></td>
        </tr>
        <tr>
          <td><code>.subheading</code></td>
          <td><code>&lt;h4&gt;</code></td>
          <td><h4><span class="sample-text"></span></h4></td>
        </tr>
        <tr>
          <td><code></code></td>
          <td><code>&lt;h5&gt;</code></td>
          <td><h5><span class="sample-text"></span></h5></td>
        </tr>
        <tr>
          <td><code></code></td>
          <td><code>&lt;h6&gt;</code></td>
          <td><h6><span class="sample-text"></span></h6></td>
        </tr>
      </tbody>
    </table>
  </section>

</lens-main>
"""
