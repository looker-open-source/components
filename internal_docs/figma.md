## Figma and Lens

The product design team uses [Figma](https://www.figma.com/) for creating and managing our digital assets and prototypes. Figma is a design tool with first class collaboration and team library features that allows us to share and iterate on our Lens assets with the entire design team.


### Contents
- [Getting Started With Figma](#getting-started)
- [File Organization & Structure](#file-organization-and-structure)
- [Team Library](#team-library)
- [Giving Feedback & Collaboration](#giving-feedback)

### Getting Started

#### Getting access to Figma

Reach out to someone on the [#design slack channel](https://looker.slack.com/messages/C45GCJ410) and we can get you an invite to Figma.

Figma is available as a web app but you can also download the [desktop app](https://www.figma.com/downloads/), which performs a bit better for larger files.

#### Learning Figma

The best way to get started with how we use Figma is to reach out to someone on the design team for a walk through of the tool and how we use it. Feel free to ask for a tour in the  [#design slack channel](https://looker.slack.com/messages/C45GCJ410). Anyone on the team would be happy to guide you through our workflow and the ins-and-outs of the tool.

If you are more of a learn-by-doing type of person, Figma has a fantastic set of articles and videos with overviews of product features and how-to guides.

- [Figma Help and Guides](https://help.figma.com/)
    -  Searchable catalog of articles and instructions on how to use every feature in Figma
- [Figma Youtube Channel](https://www.youtube.com/channel/UCQsVmhSa4X-G3lHlUtejzLA)
  - In depth tutorials of features, getting started guides, and example projects
- [Figma Blog](https://blog.figma.com/product/home)
  - Great for quick tips and tricks and new features in the tool

### File Organization and Structure
All of the Lens related Files are in the **Lens Project** which you can find in the list of projects. If you star the project it will be listed in your sidebar so you can access it quickly.

#### File Location

![Fimga Project List](/static/img/fimga_shots/figma-1.png)

#### File Cover and Status

Every Lens file has a cover page so that you can quickly scan what type of file it is (e.g.a component, a pattern, a style). The cover page also has a color background which denotes the current state of the file.

![Lens Color key](/static/img/fimga_shots/files.png)
![Lens Color key](/static/img/fimga_shots/color-key.png)

#### File Organization

Inside each file is a series of pages that maps to our design roadmap workflow. The page list is:
- Title (cover page)
- Define (scoping of file and design work)
- Explore (design explorations and iterations)
- Refine (refinement of explorations )
- Proposal (finalized proposals & best practices)
- Launch (Final page, contains finalized files and library assets)

By nature of how the design process works, these pages are a bit fluid and you may encounter documents with more pages, but as a team we do our best to standardize on the format above.

#### Contribution to Lens

At the beginning of a project it is important to connect, review, or propose new components with dependent teams and start a dialog around how to integrate Lens into upcoming and current projects.

<strong>Structure & Propose:</strong> Please start this process by reaching out to the [#lens](https://looker.slack.com/messages/C9NHFLY0G) team to set up some time to:

- Go over the project brief for the upcoming cycle
- Review existing components and assets that could be reused in your designs
- Discuss semantic naming slots, UI patterns, and best practices

<strong>Review & Revise:</strong> After the initial project kickoff we want to set up several times to review and continue the collaboration process. These reviews can be scheduled as weekly checkins or during open hours available on the design teams google calendar

- Walkthrough designs, proposals, and UI components with the Lens team
- Refine & Resolve any questions or concerns 

### Team Library

Our team library is where we share design assets like components and styles. These include things like color swatches, drop shadows, spacing, low level ui elements like buttons and input boxes, all the way to high level components like Cards and Modals.

#### Using the team library

- Figma has a [great document on using the team library](https://help.figma.com/editor/team-library).
- [Figma team library tutorial](https://www.youtube.com/watch?v=PgRUEyw9xpo) video on youtube.

#### Adding items to the team library

- Search the Figma Lens project for existing components.
- Open or create a new component file by duplicating the Lens [project template](https://www.figma.com/file/aLKZ8fP9X3q0iLj8jknTy9iC/Project-Template) and rename the 'project template copy' to your components title.
- Copy and paste your design and proposal into the exploration page.
- Review the design team during the weekly design review

### Giving Feedback & Collaboration

<strong>Approve & Publish:</strong> After the proposal is approved by the Lens team it can be added to the team asset library. 

- File a  [Github issue](https://github.com/looker/relens/issues/new?title=Design+Feedback&labels=design,figma)and notify the [#lens](https://looker.slack.com/messages/C9NHFLY0G) that you that the component is ready for review

<strong>Adding feedback in Figma</strong>

Figma allows you to give feedback right in the file you are looking at. You can leave a comment on a screen to start a conversation about any feedback you may have.

Read about using [Figma's commenting system here](https://help.figma.com/editor/1322329-toolbar/comments).

The Lens team also uses Github to track our issues and we welcome you to open an issue if you discover a bug or have feedback related to the design or functionality of a component or style in Figma.

You can open an issue [quickly here with the correct labels](https://github.com/looker/relens/issues/new?title=Design+Feedback&labels=design,figma) to ensure the design team will see it

### FAQ

How do I know if my new component can be added to Lens?

Identify the elements that are the smaller parts that make up the whole. Which of these elements already exist in Lens and which do not? You can search the existing components in Lens to make sure these components don't already have specifications outlined. Once you have identified these items, then create a proposal that illustrations the sizing, color, interaction behavior and the reusability of the UI component. Once you are ready to review please reach out to the Lens team to set up a demo and walkthrough of your proposed components.

What if the styling of the new component looks different to the existing ones on Helltool?

Each component will have a unique issue around styling coherence on the existing product. However, generally we want to assign Lens styling that will then gradually be adopted into the current product. There will be differences at first but eventually the current styling will deprecated and replaced. As long as the new styling doesn't break the UI, fail accessibility or muddys up the visual hierarchy you can assign the Lens styling. 

What if I need something that doesn't exist in Lens yet? 

Please feel free to file a [Github issue](https://github.com/looker/relens/issues/new?title=Design+Feedback&labels=design,figma)
and let us know what you are missing. Then feel free to put together a proposal and add it to the issue as a reference or with examples. 
