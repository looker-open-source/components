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
<lens-main>

  <section id="index">
    <h4 class="subheading">
      Lens is a design system enabling developers and designers to build
       beautiful, usable, consistent, and scalable Looker experiences.</h4>

    <h2>Design Principles</h2>
    <p>What are design principles and how should you use them? Design Principles...</p>
    <ul>
      <li>are simple</li>
      <li>help us make decisions</li>
      <li>reflect your brand</li>
      <li>have real world examples</li>
    </ul>
    <div class="col-container col-gutters">
      <div class="col col-50-md col-25-lg">
        <h3>Eliminate Ambiguity</h3>
        <p>Be clear. Enable people to see, understand, and feel secure so they
          can act with confidence.</p>
      </div>
      <div class="col col-50-md col-25-lg">
        <h3>Champion Efficiency</h3>
        <p>Be respectful of people’s time, streamline processes and be fast and
          performant.</p>
      </div>
      <div class="col col-50-md col-25-lg">
        <h3>Encourage Confidence</h3>
        <p>The design experience should feel safe to work with and provide
           orientation and security to gain the user’s trust.</p>
      </div>
      <div class="col col-50-md col-25-lg">
        <h3>Strive for Simplicity</h3>
        <p>Make it inviting and simple so it’s easy, orderly, and agile. Provide
           opportunities and affordances for growth.</p>
      </div>
    </div>

    <h2>Environment &amp; Properties <code>Coming Soon!</code></h2>
    <p>The rules for how Lens elements look, behave, and interact.</p>

    <h2>Nouns &amp; Verbs <code>Coming Soon!</code></h2>
    <p>The words that define Looker's core objects, actions, and the relationships between them.</p>
    <dl>
      <dt>Model</dt>
      <dd>...</dd>

      <dt>Explore</dt>
      <dd>...</dd>

      <dt>Query</dt>
      <dd>A question made up of fields from an explore that asks your database for a result.</dd>

      <dt>Result</dt>
      <dd>...</dd>

      <dt>Report</dt>
      <dd>...</dd>
    </dl>

    <h2>Platform Adaptation <code>Coming Soon!</code></h2>
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
