# Getting Started With Lens

Lens provides a collection of UX guidelines, UI components and usable assets as an internal central resource for both designers & developers at Looker. This guide will help provide a step by step process on how to work with Lens Assets. 

#### Contents
- [How to Use Lens](#hot-to-use-lens)
- [Contributing to Lens](#contributing-to-lens)
- [Filing an Issue](#filing-a-github-issue)
- [Getting Started With Figma](#getting-started)
- [File Organization & Structure](#file-organization-and-structure)
- [Team Asset Library](#team-asset-library)
- [Giving Feedback & Collaboration](#giving-feedback)



## How to Use Lens
The provided assets in Lens can be approached in two ways. In Figma or within the code via Lens.looker.com.

- In Figma you can find design assets, usage best practices & specifications.

- On Lens.looker.com you can configure components directly in code.

## Contributing to Lens

### Types of Contribution
Lens provides wide range of content, documentation and resources that make up a design system from implementation in the codebase to design specification and usage best practices. Because of the many different types of assets, each deliverable has its own specifications to follow. Your contribution may apply to one or all of these categories but here are the steps of the different types of contributions in Lens: 

- Design Submissions: A change to an existing design or a net new component, pattern or feature. Click here to see more on how to  [Contribute to the design guidelines](#)

- Development Contribution: Bug fixes or implementation into the codebase. Learn more on how to [Contribute to development](#)

- Internal Documentation: References, Tutorials, & Resources [Contributing to Internal Documentation](#)

### Contributing to Design
At the beginning of a project it must go through the design process. All designer must connect with the Lens team to review or propose new components with dependent teams and start a dialog around how to integrate Lens into upcoming and current projects. Follow these steps:

1. Structure & Propose: 
  a. Go over the project brief for the upcoming cycle wit the [Lens](#) team
  b.Review existing components and assets that could be reused in your designs
  c.Discuss semantic naming slots, UI patterns, and best practices

2. Review & Revise: Set up times to review and continue the collaboration process. These reviews can be scheduled as weekly check ins or during open hours available on the design google calendar
  a.Walkthrough designs, proposals, and UI components with the Lens team
  b.Refine & resolve any questions or concerns





## Proposing a new component 

Include the following:

1. Duplicate the ‘Project Template” and rename it.
2. Add component specifications to the explore page
3. Explain the use cases and define the component elements
4. Include examples of the existing design in the product (if it exists)
5. Provide validation interaction and  error states
6. What are the edge cases
7. Include i18n/long text examples
8. Example of breakpoint reflow behavior on smaller devices
9. Accessibility recommendation (tooltips, keyboard navigation, ...)
10. Any interactions and animated transitions ( gifs or clickable prototypes)

## Filing a Github Issue
Create a Github issue in the Lens repository and include the following:

1. A link to the figma file in question
2. Provide a walkthrough, clickable prototype, or demo of the scenario
3. Include a visual in the the github issue by dragging a screen grab into the message field. 

## Figma and Lens

The product design team uses [Figma](https://www.figma.com/) for creating and managing our digital assets and prototypes. Figma is a design tool with first class collaboration and team library features that allows us to share and iterate on our Lens assets with the entire design team.

### Getting access to Figma

Reach out to someone on the [#design slack channel](https://looker.slack.com/messages/C45GCJ410) and we can get you an invite to Figma.

Figma is available as a web app but you can also download the [desktop app](https://www.figma.com/downloads/), which performs a bit better for larger files.

### Learning Figma

The best way to get started with how we use Figma is to reach out to someone on the design team for a walk through of the tool and how we use it. Feel free to ask for a tour in the  [#design slack channel](https://looker.slack.com/messages/C45GCJ410). Anyone on the team would be happy to guide you through our workflow and the ins-and-outs of the tool.

If you are more of a learn-by-doing type of person, Figma has a fantastic set of articles and videos with overviews of product features and how-to guides.

- [Figma Help and Guides](https://help.figma.com/)
    -  Searchable catalog of articles and instructions on how to use every feature in Figma
- [Figma Youtube Channel](https://www.youtube.com/channel/UCQsVmhSa4X-G3lHlUtejzLA)
  - In depth tutorials of features, getting started guides, and example projects
- [Figma Blog](https://blog.figma.com/product/home)
  - Great for quick tips and tricks and new features in the tool

## File Organization and Structure
All of the Lens related Files are in the **Lens Project** which you can find in the list of projects. If you star the project it will be listed in your sidebar so you can access it quickly.

### File Location

![Fimga Project List](/static/img/fimga_shots/figma-1.png)

### File Cover and Status

Every Lens file has a cover page so that you can quickly scan what type of file it is (e.g.a component, a pattern, a style). The cover page also has a color background which denotes the current state of the file.

![Lens Color key](/static/img/fimga_shots/files.png)
![Lens Color key](/static/img/fimga_shots/color-key.png)

### File Organization

Inside each file is a series of pages that maps to our design roadmap workflow. The page list is:
- Title (cover page)
- Define (scoping of file and design work)
- Explore (design explorations and iterations)
- Refine (refinement of explorations )
- Proposal (finalized proposals & best practices)
- Launch (Final page, contains finalized files and library assets)

By nature of how the design process works, these pages are a bit fluid and you may encounter documents with more pages, but as a team we do our best to standardize on the format above.

###Leaving Feedback in Figma
Figma allows you to give feedback right in the file you are looking at. You can leave a comment on a screen to start a conversation about any feedback you may have.

Read about using [Figma's commenting system here](https://help.figma.com/editor/1322329-toolbar/comments).

The Lens team also uses Github to track our issues and we welcome you to open an issue if you discover a bug or have feedback related to the design or functionality of a component or style in Figma.

You can open an issue [quickly here with the correct labels](https://github.com/looker/relens/issues/new?title=Design+Feedback&labels=design,figma) to ensure the design team will see it

### Team Library

Our team library is where we share design assets like components and styles. These include things like color swatches, drop shadows, spacing, low level ui elements like buttons and input boxes, all the way to high level components like Cards and Modals.

#### Using the team library

- Figma has a [great document on using the team library](https://help.figma.com/editor/team-library).
- [Figma team library tutorial](https://www.youtube.com/watch?v=PgRUEyw9xpo) video on youtube.

#### Adding items to the team library

- Search the Figma Lens project for existing components.
- Open or create a new component file by duplicating the Lens [project template](https://www.figma.com/file/aLKZ8fP9X3q0iLj8jknTy9iC/Project-Template) and rename the 'project template copy' to your components title.
- Copy and paste your design and proposal into the exploration page.
- Review with the design team during the weekly design review
- File a [Github issue](https://github.com/looker/relens/issues/new?title=Design+Feedback&labels=design,figma) and notify the [#lens](https://looker.slack.com/messages/C9NHFLY0G) that you that the component is ready for review


