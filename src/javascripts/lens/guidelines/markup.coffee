m = angular.module "lens.guidelines.markup", []


m.controller "MarkupController", (
  $scope
) ->
  return this


m.directive "markup", ->
  controller: "MarkupController"
  restrict: "E"
  scope: {}
  template: template


template = """
<lens-main>

  <section id="markup">
    <p class="m-b-8-xs">Lens includes resources to
      create user interfaces consistent with the Looker brand and best
      practices. Here are few things to consider before you start using Lens on
       your next project.</p>
    <h1><code>This page needs to be reorganized and slimmed</code></h1>

    <h2 id="Markup" class="m-b-2-xs">Markup Considerations</h2>
    <p class="m-b-6-xs">Lens contains a lot of utility classes that can be
      stacked up to quickly create layouts and components. While it may look a l
      ittle messier than you are used to on the markup side of things, this
      saves us a ton of extra CSS. These classes also make it much more clear
      what styles are applied to an element to anyone looking at the markup.
    </p>
    <h3 id="Layout" class="m-b-1-xs">A note on layouts</h2>
    <p class="m-b-8-xs">
       When building layouts with Lens, make sure you don't apply extra styles
       on containers and grid columns. Anything needing styles outside of
       utility classes should typically be nested inside those types of
       containers.</p>

    <h2 id="BEM" class="m-b-2-xs">BEM Class Naming</h2>
    <p class="m-b-4-xs">BEM is a well-known method of naming components — block,
       element, modifier. For those unfamiliar or who need a quick refresh,
       let’s briefly look at how BEM works. As an example, we’ll build a
       sandwich component.</p>
    <h3 class="m-b-1-xs">Block</h3>
    <p class="m-b-4-xs">A block represents the main component. If you were
      building a tasty sandwich, the class name would be <code>.sandwich</code>.
       All the properties that would be shared by all different sandwiches would
        be included within <code>.sandwich</code>.</p>
    <h3 class="m-b-1-xs">Element</h3>
    <p class="m-b-4-xs">An element is part of the main component and its class
      name is separated by two underscores. The bread of the sandwich would be
      reprented by the class <code>.sandwich__bread</code>. The cheese would be
      <code>.sandwich__cheese</code>. Be on the look out for smaller component
      possibilities within a larger component. If we were to take a look at
      sandwich condiments, which can be used on other things outside of
      sandwiches. We'd want to avoid a class name such as
      <code>.sandwich__condiment__mayo</code>. We could use something like
      <code>.sandwich__condiment--mayo</code> because a single dash doesn't
      represent anything in BEM. But, since condiments can be used on things
      other than sandwiches, we could make this a component in an of itself.
      In that case, we could name it <code>.condiment__mayo</code> and use
      that inside the sandwich element.</p>
    <h3 class="m-b-1-xs">Modifier</h3>
    <p class="m-b-4-xs">A modifier is a component or element variation that
      only slightly differes from the main element. The variation can be applied
       to the entire element or just a part of it. Since the properties that
       should apply to every sandwich are placed on the main
       <code>.sandwich</code> class, all sandwiches receive the
       <code>.sandwich</code> class as the base. If there is a variation of a
       sandwich &mdash; maybe it has wheat bread &mdash; the
       <code>.sandwich--wheat</code> class would be added the component in
       addition to the <code>.sandwich</code> class.</p>
    <p class="m-b-8-xs">If the sandwich has swiss cheese, a variation can be
      placed on the cheese element itself, like
      <code>.sandwich__cheese--swiss</code>.</p>

    <h2 id="Utilities" class="m-b-2-xs">Utility Classes</h2>
    <p class="m-b-8-xs">The one place we diverge from BEM is within our utility
      classes. These are immutable classes that use <code>!important</code> to
      ensure they never break. And for the most part are classes that only apply
       a single property, which is why we felt okay using the important
       declaration on them. Lens's utility classes should be used whenever
       possible to create the layout and style of a page or element. Each
       utility class end with a breakpoint suffix. Since Lens is built
       mobile-first, you'd apply the <code>-xs</code> suffix to make those s
       tyles work across all breakpoints. To modify those styles at a larger
       breakpoint, you'd apply an additional utility class that employs one of
       the other suffixes, such as <code>-sm</code>, <code>-md</code>,
       <code>-lg</code>, <code>-xl</code>. Whichever the highest suffix is,
       those styles will apply all the way up through any screen size. To learn
       more about these suffixes, take a gander at the
       <a href="/responsive">Responsive</a> page.</p>

    <h2 id="Sass" class="m-b-2-xs">Sass: Variables, Functions, and Mixins</h2>
    <p class="m-b-4-xs">Lens uses Sass to compile its CSS. This allows us to
    take advantage of variables, functions and mixins when writing our CSS.</p>

    <h3 class="m-b-1-xs">Variables</h3>
    <p class="m-b-4-xs">Most of our variables are built using Sass maps, which
      means they aren't easily accessible with a simple variable name. We've
      made functions to make access to those variables easier. All Sass
      variables use the typical <code>$</code> naming scheme.

    <h3 class="m-b-1-xs">Functions</h3>
    <p class="m-b-4-xs">As mentioned above, many variables are accessible via
      Sass function calls, for example <a href="/atoms/typography">font sizes</a>,
      <a href="atoms/layout">spacing units</a>, and <a href="/atoms/colors">colors</a>.
      <strong>Note:</strong> Functions don't use the typical <code>$</code>
      variable naming scheme, just the function name.</p>

    <h3 class="m-b-1-xs">Mixins</h3>
    <p class="m-b-4-xs">Lens has a
      <a href="http://bourbon.io/">Bourbon</a> dependency to give us access to
      many handy mixins. On top of that, we include many variables, mixins and
      functions that are specific to our needs at Looker.</p>



  </section>

</lens-main>
"""
