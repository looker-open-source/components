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
    <p>When styling page headings, use the appropriate semantic tags, such as
      <code>&lt;h1&gt;</code> and <code>&lt;h2&gt;</code>. You'll also need to include
      the appropriate class to give the visual styling.
    </p>
    <p class="todo"> Write some nice examples for building a page.</p>

    <table>
      <thead>
        <tr>
          <th>Class</th>
          <th style="width: 20%">Style</th>
          <th>Actual Size</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>.subheading</code></td>
          <td>Regular 19px/27px</td>
          <td><span class="subheading overflow-hidden-xs">Data analytics everybody loves.</span></td>
        </tr>
        <tr>
          <td><code>.title-1</code></td>
          <td>Bold 19px/27px</td>
          <td><span class="title-1">Data analytics everybody loves.</span></td>
        </tr>
        <tr>
          <td><code>.title-2</code></td>
          <td>Bold 22px/30px</td>
          <td><span class="title-2">Data analytics everybody loves.</span></td>
        </tr>
        <tr>
          <td><code>.headline</code></td>
          <td>Regular 28px/36px</td>
          <td><span class="headline">Data analytics everybody loves.</span></td>
        </tr>
        <tr>
          <td><code>.display-1</code></td>
          <td>Regular 38px/46px</td>
          <td><span class="display-1">Data analytics everybody loves.</span></td>
        </tr>
        <tr>
          <td><code>.display-2</code></td>
          <td>Light 52px/60px</td>
          <td><span class="display-2">Data analytics everybody loves.</span></td>
        </tr>
        <tr>
          <td><code>.display-3</code></td>
          <td>Light 62px/72px</td>
          <td><span class="display-3">Data analytics everybody loves.</span></td>
        </tr>
      </tbody>
    </table>

  </section>

</lens-main>
"""
