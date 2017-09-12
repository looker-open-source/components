m = angular.module "lens.guidelines.environment_properties", []


m.controller "EnvironmentPropertiesController", ['$scope', (
  $scope
) ->
  return this
]

m.directive "environmentProperties", ->
  controller: "EnvironmentPropertiesController"
  restrict: "E"
  scope: {}
  template: template


template = """
<lens-main>

  <section id="environment-properties">
    <p>Environment properties provide rules for how Lens elements look, interact
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
    <p>Example design choices that reflect visibility and transparency:</p>
    <ul>
      <li>Clear button styles for primary, secondary and inactive states</li>
      <li>Brighter color palette that compliments Looker's brand to provide
      areas and levels of focus</li>
      <li>Establish a harmonious type ramp with a larger base font</li>
      <li>Padding, margins and radii are presented in ratios that synchronize
      with the type ramp, buttons, modals, form elements and notifications</li>
      <li>Leverage Material Design icons for a single icon language that scales
      consistently in weight, size and color</li>
    </ul>

    <p><strong>Discovery</strong> means using clear signs and feedback to help
      you know where you and navigate your way. Providing orientation
      <em>encourages confidence</em> when using Looker. Some examples:</p>
    <ul>
      <li>Consistent use of interactive elements, such as tabs, toggles and switches</li>
      <li>Consistent placement of interactive elements across pages</li>
      <li>Predictable browser history navigation</li>
    </ul>

    <p><strong>Fluidity</strong> for Looker is providing a versatile platform
       where you can easily move between tasks. By adapting to and anticipating
       different user needs, the design can <em>champion efficiency</em>. Some
       examples:</p>
    <ul>
      <li>The elements you interact with are immedately responsive and provide
        feedback, including animations for loading</li>
      <li>Relevant next steps and actions are provided in context</li>
    </ul>

  </section>

</lens-main>
"""
