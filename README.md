### July 2024

In the rapidly evolving landscape of web development, the need for scalable and maintainable architectures is paramount. Traditional monolithic front-end applications often face challenges in scaling, maintainability, and development speed, especially as teams grow and applications become more complex. Micro frontends, an architectural style where a front-end application is decomposed into smaller, more manageable pieces, each owned by different teams, have emerged as a solution to these challenges.

The adoption of micro frontends aims to bring the benefits of microservices, such as independent deployments, technology diversity, and team autonomy, to the front-end world. However, implementing micro frontends introduces its own set of complexities, particularly in terms of module sharing, dependency management, and ensuring consistent user experiences across different parts of the application.

Some tools in existance today to support micro fronot end architecture. [Single Spa](https://single-spa.js.org/), [Module Federation](https://module-federation.io/), [Luigi Project](https://luigi-project.io/) and there are several more.

### ESModules

The state of ESModules in 2024 may have opened the possibility of easy micro front end architectures. together with services like [ESM SH](https://esm.sh/#docs), and remote importing of ESModules.

ESModules (ECMAScript Modules), a standardized module system in JavaScript that allows developers to import and export functions, objects, and primitives across different files. ESModules are natively supported by modern browsers, providing a lightweight, efficient way to load and manage dependencies directly in the browser without the need for bundling tools.

This preamble sets the stage for exploring the hypothesis that creating micro frontends with ESModules can significantly improve the modularity, scalability, and maintainability of large-scale web applications. By leveraging the inherent capabilities of ESModules, developers can achieve seamless integration of independently developed front-end modules, reducing the overhead associated with traditional module bundling and fostering a more agile and collaborative development environment.

### Definition of a Micro Front End application architecture. 
- A Parent application is required. Sometimes called the Host application.
- Each (Micro Front End) application can be developed independantly and deployed independantly.
- One or more Sub Applications contributing to a single application experience.
    - Sub apps are imported into the Host application.
    - Sub apps have their own development and deplopyment lifecycle

### What makes this possible. 
- Remotely hosted javascript modules (ESM.SH)[https://esm.sh/]
- Importing remotely hosted javascript modules `const React from import('https://esm.sh/react@beta')`
- Import Maps (IMPORTMAPS)[https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script/type/importmap]

