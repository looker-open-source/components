m = angular.module "lens.components.modals", []


m.controller "ModalsController", (
  $scope
) ->
  return this


m.directive "modals", ->
  controller: "ModalsController"
  restrict: "E"
  scope: {}
  template: template


template = """
<lens-main>

  <section id="Modals">

    <p class="m-b-4-xs">To build a modal, create a <code>&lt;div&gt;</code> with a class of <code>.modal</code> and place it on the page. For the sake of documentation, these modals are not in an overlay. Typically, you'd see a semi-transparent black overlay that covers the entire screen with a modal inside it.</p>

    <div class="modal-tarp__styleguide">
      <div class="modal col-65-xs">
        <div class="modal--header">
          <a href="#" class="modal--close">
            <img class="modal--close-icon" src="src/images/icons/close.svg" />
          </a>
          <h2 class="modal--header-title regular">Create Dashboard</h2>
        </div>
        <div class="modal--body">
          <p>Paragraph text...</p>
        </div>
        <div class="modal--footer">
          <div class="modal--footer-actions">
            <a class="button" href="#">Cancel</a>
            <a class="button button--primary" href="#">Create Dashboard</a>
          </div>
        </div>
      </div>
    </div>

  </section>

</lens-main>
"""
