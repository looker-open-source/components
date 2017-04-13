m = angular.module "lens.sass", []


m.controller "SassController", (
  $scope
) ->
  return this


m.directive "sass", ->
  controller: "SassController"
  restrict: "E"
  scope: {}
  template: template


template = """
<header class="guide-banner" role="banner">
  <a ui-sref="index" ui-sref-active="active" class="guide-name">Lens</a>
  <div class="guide-skip-content">
    <a href="#navigation">Skip to Navigation</a>
  </div>
  <a href="#" id="hamburger" class="hamburger-button">
    <span class="hamburger"></span>
  </a>
</header>

<lens-main>

  <section>
    <p class="text-4-xs m-b-4-xs">Lens uses Sass to compile its CSS and has a <a href="http://bourbon.io/">Bourbon</a> dependency to give us access to many handy mixins. On top of that, we include many variables, mixins and functions that are specific to our needs at Looker.</p>

    <h2 id="Variables" class="m-b-1-xs">Variables</h2>
    <p class="m-b-2-xs">Most of our variables are built using Sass maps, which means they aren't easily accessible with a simple variable name. We've made functions to make access to those variables easier, we'll cover those below. Here are the variables that use regular variable names:</p>

    <h3 class="m-b-05-xs">Typography</h3>
    <p class="m-b-1-xs">Used to set font family a font size.</p>
    <p class="bold">Font-family</p>
    <div class="guide-code">
  <pre class="m-tb-05-xs"><code class="language-css">.custom-element
    font-family: $brand-font
  </code></pre>
    <p class="m-b-2-xs"><code>$brand-font</code></p>

    <p class="bold">Font-weight</p>
    <div class="guide-code">
  <pre class="m-tb-05-xs"><code class="language-css">.custom-element
    font-weight: $bold
  </code></pre>
    <p class="m-b-3-xs"><code>$bold</code></p>
    </div>

    <h3 class="m-b-05-xs">Borders</h3>
    <p class="m-b-1-xs">Used in the <a href="border.html">border</a> utility classes.</p>
    <p class="bold">Border Color</p>
    <div class="guide-code">
  <pre class="m-tb-05-xs"><code class="language-css">.custom-element
    border-color: $border-color-dark
  </code></pre>
    <p class="m-b-2-xs"><code>
      $border-color-dark<br />
      $border-color-mid<br />
      $border-color-normal<br />
      $border-color-light
    </code></p>

    <p class="bold">Border Radius</p>
    <div class="guide-code">
  <pre class="m-tb-05-xs"><code class="language-css">.custom-element
    border-radius: $border-radius
  </code></pre>
    <p class="m-b-3-xs"><code>
      $border-radius<br />
    </code></p>

    <h3 class="m-b-05-xs">Grid</h3>
    <p class="m-b-1-xs">Used in the <a href="grid.html">grid</a> and <a href="responsive.html">breakpoint</a> utility classes. Our <code>-xs</code> breakpoint doesn't have a variable because it is simply styling <code>@media screen</code>.</p>
    <p class="bold">Grid Container</p>
    <div class="guide-code">
  <pre class="m-tb-05-xs"><code class="language-css">.custom-element
    border-color: $grid-width
  </code></pre>
    <p class="m-b-3-xs"><code>
      $grid-width
    </code></p>

    <p class="bold">Breakpoints</p>
    <div class="guide-code">
  <pre class="m-tb-05-xs"><code class="language-css">+media(min-width $sm)
    property: value
  </code></pre>
    <p class="m-b-4-xs"><code>
      $sm <br />
      $md <br />
      $lg <br />
      $xl
    </code></p>



    <h2 id="Functions" class="m-b-1-xs">Functions</h2>
    <p class="m-b-2-xs">The rest of our variables are made with Sass maps, so we've created handy functions that make accessing them super easy. <strong>Note:</strong> these don't use the typical <code>$</code> variable naming scheme, just the function name.</p>

    <h3 class="m-b-05-xs">Typography</h3>
    <p class="m-b-1-xs">Used in our <a href="typography.html">font size</a> utility classes.</p>
    <p class="bold">Font Size</p>
    <div class="guide-code">
  <pre class="m-tb-05-xs"><code class="language-css">.custom-element
    font-size: text-size(1)
  </code></pre>
    <p class="m-b-3-xs"><code>
      text-size(1)<br />
      text-size(2)<br />
      text-size(3)<br />
      text-size(4)<br />
      text-size(5)<br />
      text-size(6)
    </code></p>

    <h3 class="m-b-05-xs">Spacing</h3>
    <p class="m-b-1-xs">Used in our <a href="layout.html">layout</a> utility classes.</p>
    <p class="bold">Spacing Units</p>
    <div class="guide-code">
  <pre class="m-tb-05-xs"><code class="language-css">.custom-element
    margin: spacing(1)
    padding: spacing(2)
  </code></pre>
    <p class="m-b-3-xs"><code>
      spacing(0)<br />
      spacing(0.5)<br />
      spacing(1)<br />
      spacing(2)<br />
      spacing(3)<br />
      spacing(4)<br />
      spacing(5)<br />
      spacing(6)
    </code></p>

    <h3 class="m-b-05-xs">Colors</h3>
    <p class="m-b-1-xs">Used in our <a href="color.html">color</a> utility classes.</p>
    <p class="bold">Brand Colors</p>
    <div class="guide-code">
  <pre class="m-tb-05-xs"><code class="language-css">.custom-element
    background-color: brand-color(purple)
  </code></pre>
    <p class="m-b-3-xs"><code>
      brand-color(purple)<br />
      brand-color(gray)
      brand-color(blue)
    </code></p>

    <p class="bold">Gray Colors</p>
    <div class="guide-code">
  <pre class="m-tb-05-xs"><code class="language-css">.custom-element
    fill: gray-color(gray-dark)
  </code></pre>
    <p class="m-b-3-xs"><code>
      gray-color(white)<br />
      gray-color(gray-1)<br />
      gray-color(gray-2)<br />
      gray-color(gray-3)<br />
      gray-color(gray-4)<br />
      gray-color(gray-5)<br />
      gray-color(gray-6)<br />
      gray-color(gray-7)
    </code></p>

    <p class="bold">UI Colors</p>
    <div class="guide-code">
  <pre class="m-tb-05-xs"><code class="language-css">.custom-element
    background-color: ui-color(blue)
  </code></pre>
    <p class="m-b-3-xs"><code>
      ui-color(purple)<br />
      ui-color(purple-light)<br />
      ui-color(purple-dark)<br />
      ui-color(red)<br />
      ui-color(red-light)<br />
      ui-color(red-dark)<br />
      ui-color(green)<br />
      ui-color(teal)<br />
      ui-color(teal-dark)<br />
      ui-color(yellow)<br />
      ui-color(orange)<br />
      ui-color(orange-dark)
    </code></p>

    <h2 id="Mixins" class="m-b-1-xs">Mixins</h2>
    <p class="m-b-2-xs">Lens includes a few helpful mixins for common occuring styles or selectors.</p>

    <p class="bold">Clearfix</p>
    <div class="guide-code">
  <pre class="m-tb-05-xs"><code class="language-css">.custom-selector
    +clearfix
  </code></pre>
    <p class="m-b-3-xs"><code>
      +clearfix
    </code></p>

    <p class="bold">Positioning</p>
    <div class="guide-code">
  <pre class="m-tb-05-xs"><code class="language-css">.custom-selector
    +absolute(top 0 left 10px)
  </code></pre>
    <p class="m-b-3-xs"><code>
      +absolute($direction $amount)
      +relative($direction $amount)
      +fixed($direction $amount)
    </code></p>

    <p class="bold">Media</p>
    <div class="guide-code">
  <pre class="m-tb-05-xs"><code class="language-css">.custom-selector
    +media(min-width $sm) {
      property: value
    }
  </code></pre>
    <p class="m-b-3-xs"><code>
      +media($rule $breakpoint)
    </code></p>

    <p class="bold">Placeholder Style</p>
    <div class="guide-code">
  <pre class="m-tb-05-xs"><code class="language-css">.custom-selector
    +placeholder-style
      property: value
  </code></pre>
    <p class="m-b-3-xs"><code>
      +placeholder-style
    </code></p>

    <p class="bold">Hover, Active, Focus</p>
    <p>Can remove <code>:focus</code> by passing <code>false</code> into the mixin.</p>
    <div class="guide-code">
  <pre class="m-tb-05-xs"><code class="language-css">.custom-selector
    +selected
      property: value
  </code></pre>
    <p class="m-b-3-xs"><code>
      +selected<br />
      +selected(false)
    </code></p>

    <p class="bold">Width and Height</p>
    <div class="guide-code">
  <pre class="m-tb-05-xs"><code class="language-css">.custom-selector
    +width-height(100px, 200px)
  </code></pre>
    <p><code>
      +width-height($width, $height)
    </code></p>
  </section>
  
</lens-main>

<main-nav></main-nav>

<footer class="guide-contentinfo" role="contentinfo">
  <p class="guide-contentinfo-copy">Copyright &copy; 2017 Looker. All rights reserved.</p>
</footer>
"""
