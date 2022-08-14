<h1 align="center">Handcrafted by BarbaraRuth</h1>
 
<h2 align="center">Purpose of the Website/App:</h2>
 
<h3 align="center">To provide a marketing website for a local business.</h3>
 
<h2 align="center">Technology used:</h2>
 
<div align="center">
  <img align="center" src="/assets/readme-icons/react-logo.svg" alt="HTML" height="50"/>
  <p align="center">React</p>
</div>
   
<div align="center">
  <img align="center" src="/assets/readme-icons/gatsbyjs-logo.svg" alt="HTML" height="50"/>
  <p align="center">GatsbyJS</p>
</div>

<div align="center">
  <img align="center" src="/assets/readme-icons/tailwindcss-logo.svg" alt="HTML" height="50"/>
  <p align="center">TailwindCSS</p>
</div>

<div align="center">
  <img align="center" src="/assets/readme-icons/graphql-logo.svg" alt="HTML" height="50"/>
  <p align="center">Graphql</p>
</div>

<div align="center">
  <img align="center" src="/assets/readme-icons/contentful-logo.svg" alt="HTML" height="50"/>
  <p align="center">Contentful</p>
</div>

<h2 align="center">How The Website Works</h2>

- The website uses GatsbyJS (React) to render the components of the website. Gatsby also handles the routing for the static/dynamic pages and uses plugins to the access the Contentful CMS.
- TailwindCSS provides the styling, both with inline properties and the Tailwind UI library for components.
- Contentful is the headless CMS I have used as it supplies the assets for the static site to build with. If the content changes, the site will re-build with the new content added in.
- Graphql is part of GatsbyJS as this is what bridges the gap between Contentful and React. I use static or dynamic queries inside my components to supply specific assets that are only relevant to that component.

<h2 align="center">What I learnt</h2>
 
- How to create a React project utilising its component based architecture and ecosystem of plugins.
- Develop my ability to use React hooks, mainly useState, useReducer and useEffect in this project.
- Using Typescript with React to allow static typing during development to prevent possible bugs and grant better scalability.
- Utilising GatsbyJS (meta framework of React) to provide SSG for my site alongside built in routing, pagination and image optimisation.
- Using Graphql to pull data from the Contentful CMS to allow page content to be easily updated.
- Using Tailwind CSS and Tailwind UI to style my components and allow an effective mobile first approach.
- How to communicate with a client to relay progress, updates and issues. Maintaining consistency with their initial design draft.
- Utilise webhooks with Netlify to rebuild the site when Contentful data is updated.

<h2 align="center">What Was The Biggest Challenge</h2>

The biggest challenge was following using React for the first time as my previous project had been made with only HTMl, CSS and JS. React was a completely different way of creating a project as it uses JSX which combines those previous three technologies into one file. I also used TypeScript and Tailwind for the first time so this project had plenty of trial and error to get working. TypeScript certainly slowed me down intially as I had to type and create interfaces for all my props and this became more difficult as the project grew. Tailwind also invovled learning the utility classes to apply styles which can get confusing when they are all layered ontop of each other. Overall it was a great introduction to React as I learnt how you can leverage a framework to make developing far easier!
