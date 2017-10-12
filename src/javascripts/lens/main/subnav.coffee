m = angular.module "lens.subnav", []

m.directive "subnav", ->
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
          section_active = ''
          if window.location.hash.substring(1) == section_id
            section_active = ' active'
          subnav.append '<li class="guide-subnav-item"><a class="guide-subnav-anchor' + section_active + '" href="#' + section_id + '">' + section_title + '</a></li>'
          i++

        $(subnav).on 'click', '.guide-subnav-anchor', () ->
          $(this).closest('#subnav').find('.guide-subnav-anchor').removeClass('active')
          $(this).addClass('active')

      else
        $('.guide-subnav').hide()

      if window.location.hash
        # scroll to the section linked. Totally a hack. I don't know how to do this in the ui-view router
        $('html, body').animate({
          scrollTop: $(window.location.hash).offset().top
        }, 50)

template = """
<ul id="subnav" class="guide-subnav"></ul>
"""
