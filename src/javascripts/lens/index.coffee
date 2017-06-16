m = angular.module "lens.index", []


m.controller "IndexController", (
  $scope
) ->
  return this


m.directive "index", ->
  controller: "IndexController"
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

  <section id="index">
    <p class="guide-content-description text-4-xs m-b-4-xs">Well-organized collections of assets for anyone making Looker software, providing Looker services, or telling Looker stories.</p>

    <h2 class="guide-content-subtitle m-b-2-xs">Goals <code>Coming Soon!</code></h2>
    <div class="col-container col-gutters m-b-4-xs">
      <div class="col col-50-md col-25-lg">
        <h3 class="guide-content-h3 m-b-1-xs">Goal</h3>
        <p>Gummi bears pudding cotton candy danish candy biscuit croissant liquorice. Brownie chocolate cake fruitcake bear claw. Cake wafer jujubes wafer macaroon. Dessert halvah wafer cheesecake.</p>
      </div>
      <div class="col col-50-md col-25-lg">
        <h3 class="guide-content-h3 m-b-1-xs">Goal</h3>
        <p>Cake sesame snaps brownie. Gingerbread tootsie roll caramels marzipan toffee soufflé cotton candy. Sweet roll tart chocolate cake cupcake jujubes candy canes pastry soufflé. Muffin carrot cake wafer cookie caramels donut apple pie.</p>
      </div>
      <div class="col col-50-md col-25-lg">
        <h3 class="guide-content-h3 m-b-1-xs">Goal</h3>
        <p>Topping jelly-o cake liquorice sesame snaps carrot cake toffee jelly icing. Powder pudding chupa chups pudding tart jelly beans pastry bear claw gingerbread.</p>
      </div>
      <div class="col col-50-md col-25-lg">
        <h3 class="guide-content-h3 m-b-1-xs">Goal</h3>
        <p>Cotton candy lemon drops danish toffee candy tootsie roll. Bonbon chupa chups chocolate bar cotton candy chocolate bar pie. Danish bear claw tiramisu chocolate bar bonbon macaroon gummies. Jelly-o jelly-o sugar plum.</p>
      </div>
    </div>

    <h2 class="guide-content-subtitle m-b-2-xs">Design Principles <code>Coming Soon!</code></h2>
    <p class="m-b-1-xs">What are design principles and how should you use them?</p>
    <ul class="m-b-2-xs">
      <li>are simple</li>
      <li>help us make decisions</li>
      <li>reflect your brand</li>
      <li>have real world examples</li>
    </ul>
    <h3>Eliminate Ambiguity</h3>
    <p class="m-b-1-xs">Be clear. Enable people to see, understand, and feel secure so they can act with confidence.</p>
    <h3>Champion Efficiency</h3>
    <p class="m-b-1-xs">Be respectful of people’s time, streamline processes and be fast and performant.</p>
    <h3>Encourage Confidence</h3>
    <p class="m-b-1-xs">The design experience should feel safe to work with and provide orientation and security to gain the user’s trust.</p>
    <h3>Strive for Simplicity</h3>
    <p class="m-b-4-xs">Make it inviting and simple so it feels easy. Provides Opportunity. Agility. Provide Order.</p>

    <h2 class="guide-content-subtitle m-b-2-xs">Environment &amp; Properties <code>Coming Soon!</code></h2>
    <p class="m-b-4-xs">The rules for how Lens elements look, behave, and interact.</p>

    <h2 class="guide-content-subtitle m-b-2-xs">Nouns & Verbs <code>Coming Soon!</code></h2>
    <p class="m-b-4-xs">The words that define Looker's core objects, actions, and the relationships between them.</p>


    <h2 class="guide-content-subtitle m-b-2-xs">Platform Adaptation <code>Coming Soon!</code></h2>
    <p class="m-b-1-xs">How does Lens adapt in different situations?</p>

    <ul class="m-b-1-xs">
      <li>Looker core product offerings (Internal Instances, Customer Hosted, Customer On-Prem, Powered-by, Whitelabel, Embeded)</li>
      <li>Complimentary systems (Docs, Discource, Training Instances, Blocks, Bots)</li>
      <li>Display &amp; input (laptop, desktop/large screen, mobile, touchscreen, large-screen displays)</li>
      <li>Browser (Chrome, WebKit, IE, Firefox)
      <li>Internationailzation</li>
      <li>Accessibility</li>
    </ul>

<!--
    <p class="guide-content-description text-4-xs m-b-4-xs">Lens is a front-end framework and style guide that is used internally at Looker to build our app. We've architected it in a way that gives the entire Engineering team a way to quickly prototype or write front-end code. It contains atomic helper classes and components that ensure everything we build is consistent and flexible. For most thing we build, additional CSS won't be necessary. Lens gets the entire Engineering team to speak the same language, whether engineer or designer.</p>

    <h2 class="guide-content-subtitle m-b-2-xs">Why build our own Design System?</h2>
    <div class="col-container col-gutters m-b-4-xs">
      <div class="col col-50-md col-25-lg">
        <h3 class="guide-content-h3 m-b-1-xs">Consistency</h3>
        <p>With well defined documentation, everyone using Lens will be on the same page. Nobody will be wondering what class to create and what styles to duplicate because it's all contained within Lens.</p>
      </div>
      <div class="col col-50-md col-25-lg">
        <h3 class="guide-content-h3 m-b-1-xs">Efficiency</h3>
        <p>No longer waste time trying to get a layout to work by adding custom CSS. Let the atomic utility classes within Lens make your life easier again. Projects will get done quicker than ever.</p>
      </div>
      <div class="col col-50-md col-25-lg">
        <h3 class="guide-content-h3 m-b-1-xs">Cleanliness</h3>
        <p>Goodbye CSS bloat, hello clean code. Without a framework we end up duplicating various styles across multiple selectors that are specific to pages within our app. Lens lets you apply classes to markup and be done.</p>
      </div>
      <div class="col col-50-md col-25-lg">
        <h3 class="guide-content-h3 m-b-1-xs">Rapidness</h3>
        <p>Designers and Engineers can both create rapid prototypes to help get features off the ground. From there, its easy to change how things look and feel by just making simple changes to your markup.</p>
      </div>
    </div>
-->

  </section>

</lens-main>
"""
