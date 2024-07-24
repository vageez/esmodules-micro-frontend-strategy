### July 2024

In the rapidly evolving landscape of web development, the need for scalable and maintainable architectures is paramount.
Traditional monolithic front-end applications often face challenges in scaling, maintainability, and development speed,
especially as teams grow and applications become more complex. Micro frontends, an architectural style where a front-end
application is decomposed into smaller, more manageable pieces, each owned by different teams, have emerged as a
solution to these challenges.

The adoption of micro frontends aims to bring the benefits of microservices, such as independent deployments, technology
diversity, and team autonomy, to the front-end world. However, implementing micro frontends introduces its own set of
complexities, particularly in terms of module sharing, dependency management, and ensuring consistent user experiences
across different parts of the application.

Some tools in existence today that enable the support of micro front end
architecture. [Single Spa](https://single-spa.js.org/), [Module Federation](https://module-federation.io/), [Luigi Project](https://luigi-project.io/)
and there are several more.

### Strategy

- Apps should run independently. Enabling the following...
    - Important. When one app fails, the rest of the App should continue to function.
    - Important. When working on one app, other apps should not be visible.
        - Unless it is related to the app being worked on. (Shared Graphical components etc)
    - Testing independently.
    - Deployed independently.
    - Developed independently.

### ESModules

The state of ESModules in 2024 may have opened the possibility of easy micro front end architectures. together with
services like [ESM SH](https://esm.sh/#docs), and remote importing of ESModules.

ESModules (ECMAScript Modules), a standardized module system in JavaScript that allows developers to import and export
functions, objects, and primitives across different files. ESModules are natively supported by modern browsers,
providing a lightweight, efficient way to load and manage dependencies directly in the browser without the need for
bundling tools.

This preamble sets the stage for exploring the hypothesis that creating micro frontends with ESModules can significantly
improve the modularity, scalability, and maintainability of large-scale web applications. By leveraging the inherent
capabilities of ESModules, developers can achieve seamless integration of independently developed front-end modules,
reducing the overhead associated with traditional module bundling.

### Basic (Only, CLIENT SIDE RENDERED) Micro Front End application architecture overview.

- A Parent application is required. Sometimes called the Host application.
- Each (Micro Front End) application can be developed independently and deployed independently.
- One or more Sub Applications contributing to a single application experience.
    - Sub apps are imported into the Host application.
    - Sub apps have their own development and deployment lifecycle

### Tools used.

- React 19/beta (ESM support)
- (ESM.SH)[https://esm.sh/]
    - Remotely hosted dependencies ESModules
- Javascript (Import Maps)[https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script/type/importmap]
    - Used to map to remote dependencies. IE: Micro Front Ends Sub Applications.
    - Consider this as a type of configuration that the host app and sub apps can use to ensure that they all use the
      same versions of dependencies.
- Importing remotely hosted javascript modules EG: `const React from import('https://esm.sh/react@beta')`

### Example

- Note: This example is a proof of concept and may not be suitable for production use. It is intended to demonstrate the
  feasibility of using dynamically fetching ESModules to create a micro frontend architecture.
- All sub applications MUST be built as ESModules.
- Sub application import path must be defined in the host applications import maps.

1. [Host Application](example/host.app):
    - Built with React and React Router for navigation.
    - Serves as the parent or host application integrating micro frontends (sub-applications).
    - Utilizes dynamic imports and React.lazy for loading sub-applications on demand.
    - Defines routes for the home page, login page, and placeholders for sub-applications.
    - Sub-applications are loaded as needed based on the route, demonstrating a lazy loading pattern to enhance
      performance and separation of concerns.


2. [Sub Application 1 ... Sub Application 2 ](example/sub.app1):
    - A simple React component that render a heading "Sub App 1... 2".
    - For simplicity the sub app examples are exporting an already transpiled version of the code.
    - Can be dynamically imported into the host application as demonstrated in the host application's code.

### EXAMPLE: Local development

- Since all dependencies are remotely hosted there are NO NODE MODULES to install.
- Host app is set up for local development.
    - There is no fancy tooling at the moment (HMR etc).
- Sub apps are simply there for demonstration purposes.
    - Setting up local development is trivial, as loong as the end result is an ESMODULE export file.
    - Although not in JSX, updating the sub apps index.js, and reloading the app should reflect the changes.

### Observations

- The browser caches the remote module.
    - So, once a remote module is fetched by the browser, it is not fetched again, unless there is a hard page reload.
- Challenges, versioning, and dependency management.
    - Import maps can be used to ensure that the host and sub apps are using the same versions of dependencies.
    - Fetching dependencies from ESM.sh required some manual work to include the correct versions of internal
      dependencies.
        - EG: `"react-router-dom": "https://esm.sh/react-router-dom?deps=react@beta,react-dom@beta/client&bundle=all"`

#### TODO

- Error handling.
    - https://www.npmjs.com/package/react-error-boundary
- Docker set up for local development.
 
    

