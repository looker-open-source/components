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
      subnav = $('#subnav')
      sections = $('section').children('div:first-child')

      # Title Case function from https://www.sitepoint.com/community/t/capitalizing-first-letter-of-each-word-in-string/209644/2
      titleCase = (str) ->
        words = str.toLowerCase().split(' ')
        i = 0
        while i < words.length
          letters = words[i].split('')
          letters[0] = letters[0].toUpperCase()
          words[i] = letters.join('')
          i++
        words.join ' '

      # Looping through section ids to make titles to use for subnav
      i = 0
      while i < sections.length
        section_ids = sections[i].id
        section_ids_no_dash = section_ids.replace(/-/g, ' ')
        section_titles = titleCase(section_ids_no_dash)
        subnav.append '<li class="guide-subnav-item"><a class="guide-subnav-anchor" href="#' + section_ids + '">' + section_titles + '</a></li>'
        i++
      return

    $(document).ready ->
      # Handling clicks and states of subnav link-single
      $subnav_link = $('.guide-subnav-anchor')

      $subnav_link.on 'click', ->
        $subnav_link.removeClass('active')
        $(this).addClass('active')



template = """
<ul id="subnav" class="guide-subnav"></ul>
"""
