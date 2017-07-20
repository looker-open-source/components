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
      subnav = $('#subnav')

      # Looping through sections to make titles to use for subnav
      i = 0
      while i < sections.length
        section_id = sections[i].id
        section_title = sections[i].title
        subnav.append '<li class="guide-subnav-item"><a class="guide-subnav-anchor" href="#' + section_id + '">' + section_title + '</a></li>'
        i++
      return

    $(document).ready ->
      # attach click action
      $subnav_link = $('.guide-subnav-anchor')

      $subnav_link.on 'click', ->
        $subnav_link.removeClass('active')
        $(this).addClass('active')

      if sections.length == 0
        $('.guide-subnav').hide()



template = """
<ul id="subnav" class="guide-subnav"></ul>
"""
