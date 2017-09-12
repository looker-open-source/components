m = angular.module "lens.index", []


m.controller "IndexController", ["$scope", (
  $scope
) ->
  return this
]


m.directive "index", ->
  controller: "IndexController"
  restrict: "E"
  scope: {}
  template: template


template = """
<lens-main>

  <section id="index">
    <h4 class="subheading">
      Lens is a design system enabling developers and designers to build
       beautiful, usable, consistent, and scalable Looker experiences.</h4>

    <h2 class="headline">Design Principles</h2>
    <p>What are design principles and how should you use them? Design Principles...</p>
    <ul>
      <li>are simple</li>
      <li>help us make decisions</li>
      <li>reflect your brand</li>
      <li>have real world examples</li>
    </ul>

    <p><strong>Eliminate Ambiguity</strong>: Be clear. Enable people to see, understand, and feel secure so they
      can act with confidence.</p>

    <p><strong>Champion Efficiency</strong>: Be respectful of people’s time, streamline processes and be fast and
      performant.</p>

    <p><strong>Encourage Confidence</strong>: The design experience should feel safe to work with and provide
       orientation and security to gain the user’s trust.</p>

    <p><strong>Strive for Simplicity</strong>: Make it inviting and simple so it’s easy, orderly, and agile. Provide
       opportunities and affordances for growth.</p>

    <h2 class="headline">Environment Properties</h2>
    <p><a ui-sref="environment-properties">Environment properties</a> provide rules for how Lens elements look, interact
       and behave. The following themes are used to communicate the product
       principles and guide the design.</p>
    <p><strong>Visibility</strong> allows you to see the information
      you care about and have a clear path to understanding and insights.
      Presenting relevant content helps <em>eliminate ambiguity</em>.
    </p>

    <p><strong>Transparency</strong> means it is clear where you are and
      what action you can take on your data. To provide this clairty the design
      must <em>strive for simplicity</em>.
    </p>

    <p><strong>Fluidity</strong> for Looker is providing a versatile platform
       where you can easily move between tasks. By adapting to and anticipating
       different user needs, the design can <em>champion efficiency</em>.
    </p>

    <p><strong>Discovery</strong> means using clear signs and feedback to help
      you know where you and navigate your way. Providing orientation
      <em>encourages confidence</em> when using Looker.
    </p>

    <h2 class="headline">Core Objects</h2>
    <p>The words that define Looker's core objects, actions, and the relationships
       between them.</p>

    <p><strong>Model</strong>: A model defines the structure of your data for
       exploring.</p>

    <p><strong>Explore</strong>: An explore contains all the fields that allow
      you to construct a query.</p>

    <p><strong>Query</strong>: A query is a question made up of fields from an
       explore that asks your database for a result.</p>

    <p><strong>Result</strong>: A result is an answer that comes back from your
       database once you send it a query.</p>

    <p><strong>Report</strong>: A report is a saved result that can be copied,
       shared, and can serve as a starting point for further exploration.</p>

    <h2 class="headline">Platform Adaptation <code>Coming Soon!</code></h2>
    <p>How does Lens adapt in different situations? The goal is
       to have Looker products look and behave similarly across platforms for all of our users.</p>

    <p>What do we mean by Looker <em>products</em>?</p>
    <ul>
      <li>Looker core product offerings (Internal Instances, Customer Hosted, Customer On-Prem, Powered-by, Whitelabel, Embeded)</li>
      <li>Complimentary systems (Docs, Discource, Training Instances, Blocks, Bots)</li>
    </ul>

    <p>What do we mean by <em>platforms</em>?</p>
    <ul>
      <li>Display &amp; input (laptop, desktop/large screen, mobile, touchscreen, large-screen displays)</li>
      <li>Browser (Chrome, WebKit, IE, Firefox)</li>
    </ul>

    <p>What do we mean by <em>all of our users</em>?</p>
    <ul>
      <li>Internationailzation</li>
      <li>Accessibility</li>
    </ul>

  </section>

</lens-main>
"""
