m = angular.module "lens.subnav", []


m.controller "SubnavController", (
  $scope
) ->
  return this


m.directive "subnav", ->
  controller: "SubnavController"
  restrict: "E"
  scope: {}
  template: template
  link: (scope, $el, attrs, ctrl) ->

    $(document).ready ->
      sections = $('.guide-content section').children('div.inpage-anchor')
      if sections.length > 0
        subnav = $('#subnav')

        # Looping through sections to make titles to use for subnav
        i = 0
        while i < sections.length
          section_id = sections[i].id
          section_title = sections[i].title
          subnav.append '<li class="guide-subnav-item"><a class="guide-subnav-anchor" href="#' + section_id + '">' + section_title + '</a></li>'
          i++

        $(subnav).on 'click', '.guide-subnav-anchor', () ->
          $(this).closest('#subnav').find('.guide-subnav-anchor').removeClass('active')
          $(this).addClass('active')

      else
        $('.guide-subnav').hide()

template = """
<ul id="subnav" class="guide-subnav"></ul>
"""
