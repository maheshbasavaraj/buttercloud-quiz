# Noob Level

# 1. Personal Blog

*   Description:
    json
    {
      "summary": "Build a fast, secure, and beautiful personal blog with a focus on readability and low maintenance.",
      "key_priorities": [
        "Performance: Must be extremely fast (target <500ms LCP).",
        "Low Cost & Maintenance: Minimal to zero hosting/maintenance costs. No server management.",
        "Developer Experience: Publishing new articles should be as simple as a `git push`.",
        "Aesthetics: Visually appealing with a focus on typography and minimalist design."
      ],
      "user_stories": [
        "Readers can see a list of the latest posts on the homepage.",
        "Readers can read each article on its own dedicated page.",
        "Authors can write posts in Markdown.",
        "Readers can learn more about the author on an 'About' page."
      ],
      "scale_and_performance": {
        "Traffic": "Low to moderate (a few thousand visitors per month).",
        "Assets": "Images must be optimized; total page weight should be minimal."
      },
      "security_and_compliance": {
        "Security": "Must be secure against common web vulnerabilities.",
        "Compliance": "No user data is collected, so no specific privacy regulations apply."
      }
    }
    
*   Questions:
    1.  Frontend Framework?
        *   Options:
            *   Static Site Generator (e.g., Astro, Eleventy, Hugo):
                *   Rating: Best
                *   Score: +3
                *   Justification: The ideal choice for a personal blog. It produces a fast, secure, and highly optimized static site that is easy to deploy and maintain.
            *   Next.js or SvelteKit:
                *   Rating: Good
                *   Score: +2
                *   Justification: A good alternative, especially if you anticipate adding more complex, dynamic features later. While slightly more complex than a simple SSG, they offer a great developer experience and a clear path for growth.
            *   Create React App (CRA) or Vite with React (Client-Side Rendering):
                *   Rating: Acceptable
                *   Score: +1
                *   Justification: This works, but it's not the best tool for the job. A simple blog doesn't need a full client-side rendered application, and you lose the benefits of static generation (performance, SEO).
            *   WordPress:
                *   Rating: Poor
                *   Score: 0
                *   Justification: While popular, WordPress is a full-fledged CMS that requires a database and server-side processing (PHP). It's significant overkill, more complex to maintain, and can be slower and less secure if not managed carefully.
    2.  Styling?
        *   Options:
            *   Tailwind CSS:
                *   Rating: Best
                *   Score: +3
                *   Justification: A utility-first CSS framework that is perfect for creating custom designs quickly and efficiently. It's highly configurable and results in small, optimized CSS files.
            *   CSS Modules or Scoped CSS:
                *   Rating: Good
                *   Score: +2
                *   Justification: A good choice for component-based frameworks. It ensures that styles are scoped to individual components, preventing conflicts and improving maintainability.
            *   A full component library (e.g., Material-UI, Bootstrap):
                *   Rating: Acceptable
                *   Score: +1
                *   Justification: While easy to get started with, these libraries often come with a lot of pre-styled components that you might not need, leading to bloated CSS. They are better suited for more complex applications where consistency across a large number of components is key.
            *   A single, global `style.css` file:
                *   Rating: Poor
                *   Score: -1
                *   Justification: A poor practice for anything beyond a single-page experiment. This approach is not scalable, as it inevitably leads to style conflicts, specificity wars, and unmaintainable code.
    3.  Data Storage?
        *   Options:
            *   Markdown files in the project repository:
                *   Rating: Best
                *   Score: +3
                *   Justification: The best solution for a simple, developer-focused blog. Content lives alongside the code, is easily version-controlled with Git, and requires no external database or service.
            *   A headless CMS (e.g., Contentful, Sanity):
                *   Rating: Good
                *   Score: +2
                *   Justification: A great option if you want a non-technical user to manage content. It separates content from the presentation layer but adds an external dependency and potential cost.
            *   SQLite database:
                *   Rating: Acceptable
                *   Score: +1
                *   Justification: A lightweight, file-based database. While it could work, it adds unnecessary complexity for a simple blog. Managing content would require building a separate admin interface or using a database client.
            *   A cloud database like Firebase Firestore or Supabase:
                *   Rating: Poor
                *   Score: 0
                *   Justification: Complete overkill. These powerful real-time databases are designed for complex, dynamic applications and introduce significant architectural complexity and cost for no benefit in this context.
    4.  Deployment?
        *   Options:
            *   Vercel or Netlify:
                *   Rating: Best
                *   Score: +3
                *   Justification: The ideal choice for modern static and Jamstack sites. They offer seamless Git integration, automated builds, global CDN, and free tiers that are perfect for a personal blog.
            *   GitHub Pages:
                *   Rating: Good
                *   Score: +2
                *   Justification: A great, free option that is perfectly integrated with GitHub. It's slightly less feature-rich than Vercel or Netlify (e.g., no serverless functions out of the box) but is very easy to set up.
            *   AWS S3 bucket configured for static website hosting:
                *   Rating: Acceptable
                *   Score: +1
                *   Justification: A valid, scalable option, but it requires manual configuration of the S3 bucket, CloudFront for a CDN, and a separate CI/CD pipeline. It's more work for little to no benefit over Vercel/Netlify for this use case.
            *   A traditional shared hosting provider via FTP:
                *   Rating: Poor
                *   Score: -1
                *   Justification: An outdated and manual deployment method. It lacks automation, version control integration, and the performance benefits of a modern CDN-based platform.
    5.  Analytics?
        *   Options:
            *   A privacy-focused analytics service (e.g., Plausible, Fathom):
                *   Rating: Best
                *   Score: +3
                *   Justification: Provides valuable insights without the privacy concerns of Google Analytics. They are lightweight and easy to integrate. The trade-off is that they are usually not free.
            *   Google Analytics:
                *   Rating: Good
                *   Score: +2
                *   Justification: The industry standard and very powerful, but it can be heavy, complex, and raises privacy concerns for some users. It's a solid choice but might be overkill.
            *   No analytics:
                *   Rating: Acceptable
                *   Score: +1
                *   Justification: A perfectly acceptable choice for a personal blog if you don't care about tracking traffic. It's the most private and performant option.
            *   Rolling your own analytics with a database:
                *   Rating: Poor
                *   Score: -1
                *   Justification: A classic case of reinventing the wheel. Building a reliable, scalable, and useful analytics system is a massive undertaking and completely unnecessary for this project.

# 2. To-Do List Application

*   Description:
    json
    {
      "summary": "A client-side to-do list application to help users manage their tasks.",
      "functional_requirements": [
        "Users can add new tasks.",
        "Users can mark tasks as complete.",
        "Users can delete tasks.",
        "Users can see a list of all tasks.",
        "Tasks persist even after the browser is refreshed."
      ],
      "non_functional_requirements": [
        "The application must be fast and responsive.",
        "It should work offline.",
        "The application should be a single-page application (SPA).",
        "Easy to use and intuitive.",
        "Low development and maintenance cost."
      ],
      "ui_ux_requirements": [
        "A clean and simple interface.",
        "A clear visual distinction between completed and pending tasks.",
        "An input field to add new tasks.",
        "A button to delete each task.",
        "The application should be mobile-friendly."
      ]
    }
    
*   Questions:
    1.  How would you store the tasks?
        *   Options:
            *   Browser's Local Storage:
                *   Score: +3
                *   Justification: Perfect for this use case. It's a simple, client-side storage mechanism that persists data across browser sessions and is very easy to implement with JavaScript.
            *   A JavaScript variable:
                *   Score: +1
                *   Justification: This would work for adding, completing, and deleting tasks, but the data would be lost as soon as the user refreshes the page, failing a key requirement.
            *   A cloud database like Firebase:
                *   Score: 0
                *   Justification: Overkill for a simple client-side to-do list. It introduces unnecessary complexity, cost, and requires user authentication, which is not part of the requirements.
            *   A JSON file on the server:
                *   Score: -1
                *   Justification: This would require a backend to read and write the file, which goes against the single-page application and client-side nature of the project. It adds a lot of complexity for no reason.
    2.  Which JavaScript framework/library would you use?
        *   Options:
            *   Vanilla JavaScript:
                *   Score: +3
                *   Justification: A to-do list is a classic project for learning and demonstrating mastery of core JavaScript concepts. It's lightweight and requires no external dependencies.
            *   React or Vue:
                *   Score: +2
                *   Justification: A good choice for building a more structured and maintainable application, especially if you plan to add more features later. However, it might be slight overkill for the basic requirements.
            *   jQuery:
                *   Score: +1
                *   Justification: While jQuery could be used to build this, it's largely considered a legacy library. Modern JavaScript and frameworks like React/Vue offer better ways to handle DOM manipulation and state management.
            *   Angular:
                *   Score: 0
                *   Justification: A powerful but complex framework that is significant overkill for a simple to-do list. It has a steep learning curve and is better suited for large, enterprise-level applications.
    3.  How would you handle the "completed" state of a task?
        *   Options:
            *   Add a boolean property (e.g., `isCompleted`) to the task object:
                *   Score: +3
                *   Justification: This is the standard and most effective way to manage the state of a task. It's simple, clear, and easy to work with when rendering the UI and persisting the data.
            *   Move completed tasks to a separate array:
                *   Score: +2
                *   Justification: This can work, but it's less efficient than a boolean flag, especially if you need to toggle the completed state. It can also make re-ordering or filtering tasks more complex.
            *   Add a CSS class to the task's HTML element:
                *   Score: +1
                *   Justification: This only handles the visual representation of the completed state. It doesn't store the state itself, so the information would be lost on a refresh. The state should be stored in the data, not just the DOM.
            *   Remove the task from the list:
                *   Score: -1
                *   Justification: This doesn't meet the requirement of marking a task as complete. It's equivalent to deleting the task.
    4.  How would you make the app work offline?
        *   Options:
            *   Using Local Storage and a Service Worker:
                *   Score: +3
                *   Justification: This is the correct and modern approach. Local Storage persists the data, and a Service Worker can cache the application's assets (HTML, CSS, JS) to make it available offline.
            *   Using only Local Storage:
                *   Score: +2
                *   Justification: Local Storage ensures the *data* is available offline, but the application itself might not load if the user doesn't have an internet connection. It only solves half the problem.
            *   Using AppCache:
                *   Score: 0
                *   Justification: AppCache is a deprecated technology that is difficult to work with and has been replaced by Service Workers. Using it would be a poor choice.
            *   It's not possible to make a web app work offline:
                *   Score: -1
                *   Justification: This is incorrect. Progressive Web App (PWA) technologies like Service Workers are specifically designed for this purpose.
    5.  How would you approach styling?
        *   Options:
            *   A simple, single CSS file:
                *   Score: +3
                *   Justification: For a small, single-page application like this, a single CSS file is perfectly acceptable and easy to manage.
            *   A CSS-in-JS library (e.g., Styled Components):
                *   Score: +2
                *   Justification: This is a good option if you are using a component-based framework like React. It helps to keep styles scoped to components but adds a dependency and might be slight overkill.
            *   A full UI framework like Bootstrap or Materialize:
                *   Score: +1
                *   Justification: This would work, but it adds a lot of unused code and can make it harder to achieve a simple, custom look. It's more than what's needed for this project.
            *   Inline styles on every element:
                *   Score: -1
                *   Justification: This is a bad practice that leads to unmaintainable code. It mixes concerns, makes it hard to reuse styles, and clutters the HTML.

# 3. Portfolio Website

*   Description:
    json
    {
      "summary": "A personal portfolio website to showcase projects, skills, and experience.",
      "functional_requirements": [
        "A homepage with a brief introduction.",
        "A projects section with details about each project (description, tech stack, link).",
        "An about section with a more detailed bio and a resume download link.",
        "A contact form that sends an email.",
        "The site must be responsive and look good on all devices."
      ],
      "non_functional_requirements": [
        "Fast load times.",
        "SEO-friendly to rank for your name.",
        "Secure, especially the contact form.",
        "Easy to update with new projects.",
        "Low hosting costs."
      ],
      "ui_ux_requirements": [
        "A professional and modern design.",
        "High-quality images of projects.",
        "Clear and easy-to-read typography.",
        "Smooth navigation between sections.",
        "An intuitive layout."
      ]
    }
    
*   Questions:
    1.  What is the best way to build this site?
        *   Options:
            *   A Static Site Generator (e.g., Astro, Next.js, Gatsby):
                *   Score: +3
                *   Justification: Ideal for a portfolio. You get a fast, secure, and SEO-friendly site that's easy to deploy. Content can be managed with Markdown or a headless CMS.
            *   A website builder like Squarespace or Wix:
                *   Score: +2
                *   Justification: A good option for non-developers or those who want to get a site up quickly without coding. However, it offers less customization and can be more expensive.
            *   Plain HTML, CSS, and JavaScript:
                *   Score: +1
                *   Justification: While this works and is a great learning exercise, it can be harder to maintain, especially when adding new projects. A framework or SSG provides better structure.
            *   A dynamic CMS like WordPress:
                *   Score: 0
                *   Justification: Overkill. A portfolio is mostly static content, so a database and server-side rendering are unnecessary complexities.
    2.  How would you implement the contact form?
        *   Options:
            *   A serverless function (e.g., on Vercel or Netlify) that uses an email service like SendGrid:
                *   Score: +3
                *   Justification: This is a modern, secure, and scalable approach. It keeps your email credentials off the client-side and integrates perfectly with a static site.
            *   A third-party form service like Formspree or Netlify Forms:
                *   Score: +2
                *   Justification: Very easy to set up and requires no backend code. The downside is that you are relying on a third-party service, which may have limitations or costs.
            *   A `mailto:` link:
                *   Score: +1
                *   Justification: The simplest solution, but it provides a poor user experience as it forces the user to open their email client. It also can't be tracked and is a spam magnet.
            *   A PHP script on a shared host:
                *   Score: 0
                *   Justification: An outdated approach that requires a server that supports PHP. It's more complex to set up and maintain than a serverless function and doesn't fit well with a modern static site architecture.
    3.  How would you manage the project data?
        *   Options:
            *   Markdown files or a local JSON/YAML file in the repository:
                *   Score: +3
                *   Justification: Simple, effective, and keeps the content version-controlled with the code. Perfect for a developer's portfolio.
            *   A headless CMS (e.g., Contentful, Sanity):
                *   Score: +2
                *   Justification: A great choice if you want a GUI for managing your projects or if you want to update content without a code deployment. Adds a slight layer of complexity and an external dependency.
            *   Hardcoding the project data directly in the HTML/JSX components:
                *   Score: +1
                *   Justification: This works for a very small number of projects, but it's not scalable. It mixes content and presentation, making it harder to update the site later.
            *   A traditional database (e.g., MySQL, PostgreSQL):
                *   Score: -1
                *   Justification: Completely unnecessary for a portfolio. It adds significant complexity and cost for no real benefit.
    4.  What is a key consideration for performance?
        *   Options:
            *   Image optimization:
                *   Score: +3
                *   Justification: Portfolios are often image-heavy. Properly sizing, compressing, and lazy-loading images is crucial for fast load times.
            *   Minifying CSS and JavaScript:
                *   Score: +2
                *   Justification: Important for performance, but most modern frameworks and build tools handle this automatically.
            *   Using a CDN:
                *   Score: +1
                *   Justification: Also important, but platforms like Vercel and Netlify provide this by default. It's less of a direct implementation concern for the developer in many cases.
            *   Choosing a fast web host:
                *   Score: 0
                *   Justification: While hosting matters, the way the site is built (e.g., static vs. dynamic) and optimized (e.g., images) has a much larger impact on performance.
    5.  How would you ensure the site is SEO-friendly?
        *   Options:
            *   Using semantic HTML and providing proper meta tags (title, description) for each page:
                *   Score: +3
                *   Justification: This is the foundation of good on-page SEO. Search engines use this information to understand and rank your content. Static generation also helps by providing fast, easily crawlable HTML.
            *   Submitting a sitemap to Google Search Console:
                *   Score: +2
                *   Justification: A good practice that helps search engines discover all the pages on your site, but it's secondary to having high-quality, well-structured content.
            *   Using a framework with built-in SEO features:
                *   Score: +1
                *   Justification: Frameworks like Next.js make SEO easier, but you still need to know *what* to do (e.g., which meta tags to add). The framework is a tool, not a complete solution.
            *   Stuffing keywords into the content:
                *   Score: -1
                *   Justification: An outdated and harmful "black hat" SEO technique that will get your site penalized by search engines.

# 4. Simple Calculator

*   Description:
    json
    {
      "summary": "A basic calculator that can perform simple arithmetic operations.",
      "functional_requirements": [
        "The calculator should support addition, subtraction, multiplication, and division.",
        "It should have a display to show the current input and the result.",
        "There should be buttons for numbers 0-9.",
        "A clear button (C) to reset the calculation.",
        "An equals button (=) to compute the result."
      ],
      "non_functional_requirements": [
        "The calculator must be highly responsive to user input.",
        "It should be a purely client-side application.",
        "The code should be simple and easy to understand.",
        "It must handle basic error cases like division by zero.",
        "No external dependencies are required."
      ],
      "ui_ux_requirements": [
        "A familiar and intuitive calculator layout.",
        "Large, easy-to-click buttons.",
        "Clear visual feedback when a button is pressed.",
        "The display should be easy to read.",
        "The layout should be responsive and usable on mobile devices."
      ]
    }
    
*   Questions:
    1.  What would be the best technology to build this with?
        *   Options:
            *   Vanilla HTML, CSS, and JavaScript:
                *   Score: +3
                *   Justification: Perfect for this project. It's a simple UI with straightforward logic, making it an excellent exercise for fundamental web development skills without the overhead of a framework.
            *   React or Vue:
                *   Score: +1
                *   Justification: While it would work, using a framework like React is overkill. The state management is simple enough that a framework's power is not needed.
            *   A Python backend with a simple frontend:
                *   Score: -1
                *   Justification: Completely unnecessary. A calculator does not need a backend. All operations can and should be handled on the client-side for immediate feedback.
            *   WebAssembly with C++ or Rust:
                *   Score: 0
                *   Justification: Massive overkill. While technically possible, using WebAssembly is for performance-intensive tasks like 3D graphics or video editing, not a simple calculator.
    2.  How would you manage the state of the calculator (e.g., the current number, the previous number, the operator)?
        *   Options:
            *   Using a few JavaScript variables to track the state.
                *   Score: +3
                *   Justification: This is the most straightforward and efficient way. You only need to store a few pieces of information, and simple variables are perfect for that.
            *   Using a single state object in a framework like React (`useState`).
                *   Score: +2
                *   Justification: If you are using a framework, this is the correct approach. It's a clean way to manage state, but the framework itself is not strictly necessary.
            *   Storing the state in the DOM (e.g., using `data-` attributes).
                *   Score: 0
                *   Justification: A bad practice. The DOM should be a reflection of the state, not the state itself. This makes the logic harder to manage and debug.
            *   Using Local Storage.
                *   Score: -1
                *   Justification: Not appropriate for this use case. Local Storage is for persisting data across sessions. The calculator's state is ephemeral and should be reset on page load.
    3.  How would you handle the user clicking on a number, then an operator, then another number?
        *   Options:
            *   Have an event listener on each button. When a number is clicked, append it to the current number string. When an operator is clicked, store the current number and the operator, then clear the current number string.
                *   Score: +3
                *   Justification: This is the standard logic for a basic calculator. It correctly separates the different parts of the expression and prepares for the final calculation.
            *   Use the `eval()` function on the entire string of input.
                *   Score: -1
                *   Justification: While `eval()` can work, it's a huge security risk and is considered very bad practice. It can execute arbitrary code, and it's also slower than direct calculations.
            *   Send the expression to a server to be calculated.
                *   Score: -1
                *   Justification: Adds unnecessary network latency and complexity for a simple arithmetic operation that the browser can handle instantly.
            *   Build a complex abstract syntax tree (AST) for the mathematical expression.
                *   Score: 0
                *   Justification: This is how a real, advanced calculator or programming language works, but it is massive overkill for this simple project.
    4.  How would you implement the layout?
        *   Options:
            *   CSS Grid Layout:
                *   Score: +3
                *   Justification: CSS Grid is the perfect tool for creating the two-dimensional grid of a calculator. It's clean, powerful, and makes the layout code very easy to read.
            *   CSS Flexbox:
                *   Score: +2
                *   Justification: Flexbox could also work, but you would need to create rows and then use flexbox within each row. It's less direct than Grid for a grid-based layout.
            *   HTML Tables:
                *   Score: 0
                *   Justification: A very old and semantically incorrect way to create layouts. Tables should be used for tabular data, not for page layout.
            *   Absolute positioning for every button.
                *   Score: -1
                *   Justification: This would be a nightmare to maintain and would not be responsive at all. It's a very brittle and incorrect approach to layout.
    5.  How do you handle division by zero?
        *   Options:
            *   Check if the divisor is zero before performing the division. If it is, display an error message like "Error" or "Cannot divide by zero".
                *   Score: +3
                *   Justification: This is the correct and user-friendly way to handle this edge case. It prevents the application from crashing or showing `Infinity` and informs the user of the problem.
            *   Let the division happen and display the result (`Infinity`).
                *   Score: +1
                *   Justification: While technically correct from a JavaScript perspective, it's not a good user experience. Most users won't understand what `Infinity` means in this context.
            *   Do nothing and let the app crash.
                *   Score: -1
                *   Justification: This is a bug. The application should always handle predictable errors gracefully.
            *   Show a browser `alert()` message.
                *   Score: 0
                *   Justification: While it informs the user, `alert()` is blocking and generally considered to be a poor user experience in modern web applications. Displaying the error in the calculator's own display is much better.

# 5. Weather App

*   Description:
    json
    {
      "summary": "A simple weather application that shows the current weather for a given city.",
      "functional_requirements": [
        "Users can search for a city.",
        "Display the current temperature, weather condition (e.g., \"Cloudy\"), and an icon representing the condition.",
        "Show additional details like humidity, wind speed, and pressure.",
        "The app should remember the last searched city.",
        "Provide a button to switch between Celsius and Fahrenheit."
      ],
      "non_functional_requirements": [
        "The weather data must be accurate and come from a reliable API.",
        "The application should handle API errors gracefully.",
        "The API key must be kept secure and not exposed on the client-side.",
        "The app should have a fast and responsive interface.",
        "Low budget, so a free weather API is preferred."
      ],
      "ui_ux_requirements": [
        "A clean and visually appealing design.",
        "An intuitive search bar.",
        "Weather icons that are easy to understand.",
        "A clear and readable display of weather information.",
        "A loading state while fetching data and an error state for failed requests."
      ]
    }
    
*   Questions:
    1.  How would you fetch the weather data?
        *   Options:
            *   Use a free weather API like OpenWeatherMap or WeatherAPI.
                *   Score: +3
                *   Justification: This is the most practical and common approach. These services are designed for this purpose and are generally reliable for a simple application.
            *   Scrape the weather data from a major weather website.
                *   Score: 0
                *   Justification: This is brittle and unreliable. The website's HTML structure could change at any time, breaking your app. It also likely violates the site's terms of service.
            *   Build your own weather station and an API for it.
                *   Score: -1
                *   Justification: Completely out of scope and impractical for a simple software project.
            *   Ask the user to manually input the weather.
                *   Score: -1
                *   Justification: This defeats the purpose of the application.
    2.  Where would you make the API call from?
        *   Options:
            *   From a backend or serverless function that you create.
                *   Score: +3
                *   Justification: This is the most secure method. It allows you to hide your API key on the server, preventing it from being stolen from your client-side code. This is a best practice.
            *   Directly from the client-side JavaScript.
                *   Score: +1
                *   Justification: While this is the simplest way to get started, it's insecure. Your API key will be exposed in the browser, and anyone can take it and use it, potentially causing you to go over your free limit.
            *   Use a framework's server-side rendering capabilities (e.g., Next.js `getServerSideProps`).
                *   Score: +2
                *   Justification: A great option. It's similar to having a separate backend but is integrated into your frontend framework. It keeps the API key secure.
            *   Hardcode the API response as a JSON file.
                *   Score: -1
                *   Justification: This would not provide real, live weather data, which is the core requirement of the app.
    3.  How would you handle the Celsius/Fahrenheit conversion?
        *   Options:
            *   Fetch the data in a standard unit (like Kelvin or Celsius) and then perform the conversion on the client-side based on the user's selection.
                *   Score: +3
                *   Justification: This is the most flexible and efficient approach. You only need to fetch the data once, and you can toggle the display instantly on the client-side.
            *   Make a new API call to fetch the data in the other unit.
                *   Score: 0
                *   Justification: This is inefficient. It makes an unnecessary network request for data you already have and can easily calculate.
            *   Store two sets of data in your state, one for Celsius and one for Fahrenheit.
                *   Score: +1
                *   Justification: This works, but it's redundant. You are storing more data than you need. It's better to store the raw data and calculate the display value.
            *   Find an API that returns both units at the same time.
                *   Score: +2
                *   Justification: This is also a good option if the API supports it, as it offloads the calculation. However, client-side calculation is simple and more common.
    4.  How would you remember the last searched city?
        *   Options:
            *   Browser's Local Storage.
                *   Score: +3
                *   Justification: Perfect for this. Local Storage is designed to persist small amounts of data across browser sessions for a specific domain.
            *   A cookie.
                *   Score: +1
                *   Justification: While cookies can be used for this, they are sent with every request to your server, which is unnecessary overhead for a purely client-side preference. Local Storage is better.
            *   A server-side database.
                *   Score: 0
                *   Justification: Overkill. This would require user accounts and a backend, which is far too complex for this simple requirement.
            *   A JavaScript variable.
                *   Score: -1
                *   Justification: This would not persist the data after the user refreshes the page.
    5.  How would you handle a failed API request?
        *   Options:
            *   Use a `try...catch` block (for `async/await`) or a `.catch()` block (for promises) to catch the error and update the UI to show a user-friendly error message.
                *   Score: +3
                *   Justification: This is the standard and correct way to handle errors in asynchronous JavaScript. It prevents the app from crashing and allows you to provide feedback to the user.
            *   Do nothing and let the error show up in the console.
                *   Score: -1
                *   Justification: This provides a terrible user experience. The user will see a broken or empty interface with no explanation of what went wrong.
            *   Show a generic browser `alert('Error!')`.
                *   Score: +1
                *   Justification: Better than nothing, but `alert()` is blocking and not a great user experience. A message integrated into the app's UI is much better.
            *   Automatically retry the API call several times.
                *   Score: +2
                *   Justification: This can be a good strategy for transient network errors, but you should use it with caution (e.g., with exponential backoff) and still show an error message to the user after a few failed attempts.

# 6. Quote of the Day App

*   Description:
    json
    {
      "summary": "A simple app that displays a new quote each day.",
      "functional_requirements": [
        "Display a quote and its author.",
        "Show a new quote every 24 hours.",
        "A button to manually fetch a new quote.",
        "A feature to share the quote on social media.",
        "The app should store a collection of quotes to choose from."
      ],
      "non_functional_requirements": [
        "The app should be very lightweight and fast.",
        "It should be a client-side only application.",
        "The quote fetching mechanism should be efficient.",
        "Easy to add new quotes to the collection.",
        "The app should work on all modern browsers."
      ],
      "ui_ux_requirements": [
        "A visually pleasing and minimalist design.",
        "The quote should be the main focus of the page.",
        "Clear and legible typography.",
        "An intuitive share button.",
        "A subtle animation when a new quote appears."
      ]
    }
    
*   Questions:
    1.  How would you store the collection of quotes?
        *   Options:
            *   A local JSON file bundled with the application.
                *   Score: +3
                *   Justification: For a simple app with a finite number of quotes, this is the easiest and most efficient method. The quotes are available immediately on load with no network request.
            *   An external API that provides quotes.
                *   Score: +2
                *   Justification: A good option if you want a vast and ever-changing supply of quotes, but it adds a network dependency and potential rate limits.
            *   Hardcode the quotes in a JavaScript array.
                *   Score: +1
                *   Justification: This works, but it's less clean than a separate JSON file. It mixes data and code, making it harder to manage the quotes.
            *   A server-side database.
                *   Score: -1
                *   Justification: Massive overkill for a simple client-side application. It adds unnecessary complexity and cost.
    2.  How would you ensure a new quote is shown each day?
        *   Options:
            *   Use Local Storage to store the last shown quote and the date it was shown. On page load, check if the date is today. If not, pick a new quote and update the stored date.
                *   Score: +3
                *   Justification: This is a robust client-side solution. It correctly handles the daily refresh logic without needing a server.
            *   Pick a random quote every time the page loads.
                *   Score: 0
                *   Justification: This doesn't meet the requirement of showing a new quote *each day*. The user would get a new quote on every refresh.
            *   Use the current date to mathematically pick an index from the quotes array (e.g., `dayOfYear % quotes.length`).
                *   Score: +2
                *   Justification: A clever solution that requires no storage. The downside is that the quote is tied to the date, so every user sees the same quote on the same day, and you can't have a manual refresh button that picks a truly new one.
            *   Use a server with a cron job to determine the quote of the day.
                *   Score: -1
                *   Justification: Over-engineering. This simple logic can and should be handled on the client-side.
    3.  How would you implement the "Share" feature?
        *   Options:
            *   Use the Web Share API if available, with a fallback to generating direct links for Twitter, Facebook, etc.
                *   Score: +3
                *   Justification: The Web Share API provides a native sharing experience on supported devices (mostly mobile). Providing manual fallback links is a great way to ensure the feature works everywhere.
            *   Only provide a button to copy the quote to the clipboard.
                *   Score: +1
                *   Justification: This is a useful feature, but it's not as user-friendly as direct sharing options.
            *   Implement a custom sharing solution with a backend.
                *   Score: -1
                *   Justification: Unnecessary complexity. Sharing can be handled entirely on the client-side.
            *   Use a third-party sharing library that adds many buttons.
                *   Score: +1
                *   Justification: This can work, but these libraries often add a lot of bloat and tracking that isn't necessary for a simple app.
    4.  What technology would you use to build this?
        *   Options:
            *   Vanilla JavaScript, HTML, and CSS.
                *   Score: +3
                *   Justification: This project is simple enough that a framework is not needed. It's a great way to practice core web technologies.
            *   A lightweight framework like Svelte or Preact.
                *   Score: +2
                *   Justification: A good choice if you want a little more structure than vanilla JS without the overhead of a larger framework like React or Angular.
            *   React (with Create React App).
                *   Score: +1
                *   Justification: This is overkill. The component model and state management features of React are not really necessary for such a simple UI.
            *   A static site generator like Astro.
                *   Score: +1
                *   Justification: While it would work, the app has dynamic client-side logic (fetching a new quote) that makes a purely static site generator a slightly awkward fit.
    5.  How would the manual "New Quote" button work?
        *   Options:
            *   It would simply pick a new random quote from the collection, display it, and update the state and Local Storage.
                *   Score: +3
                *   Justification: This is the correct and straightforward implementation. It fulfills the requirement directly.
            *   It would reload the entire page.
                *   Score: -1
                *   Justification: This is a poor user experience. The page would flash, and it's an inefficient way to update a small part of the UI.
            *   It would increment a counter to pick the next quote in the array.
                *   Score: +1
                *   Justification: This works, but it's predictable. A random quote provides a better user experience.
            *   It would make an API call to a server for a new quote.
                *   Score: 0
                *   Justification: This is only necessary if the quotes are stored on a server. If they are local, no API call is needed.

# 7. Simple Image Gallery

*   Description:
    json
    {
      "summary": "A simple, responsive image gallery.",
      "functional_requirements": [
        "Display a grid of thumbnail images.",
        "When a thumbnail is clicked, display the full-size image in a lightbox overlay.",
        "Users can navigate between full-size images within the lightbox (next/previous).",
        "A close button to exit the lightbox view.",
        "The gallery should be populated from a list of image URLs."
      ],
      "non_functional_requirements": [
        "The gallery page should load quickly, even with many images.",
        "Images should be lazy-loaded to save bandwidth.",
        "The lightbox should be accessible (e.g., keyboard navigable).",
        "The layout must be responsive and work on all devices.",
        "The code should be maintainable and easy to add new images to."
      ],
      "ui_ux_requirements": [
        "An aesthetically pleasing grid layout.",
        "Smooth animations for opening and closing the lightbox.",
        "Clear next/previous and close controls in the lightbox.",
        "Thumbnails should have a consistent aspect ratio.",
        "The lightbox background should be semi-transparent to dim the page content."
      ]
    }
    
*   Questions:
    1.  How would you implement the thumbnail grid?
        *   Options:
            *   CSS Grid or Flexbox.
                *   Score: +3
                *   Justification: These are the modern and correct tools for creating a responsive grid layout. They are powerful, flexible, and designed for this purpose.
            *   Using `float: left` on the thumbnail elements.
                *   Score: 0
                *   Justification: An outdated legacy technique for layouts. It's harder to work with and can cause issues with clearing floats. Flexbox or Grid are far superior.
            *   HTML Tables.
                *   Score: -1
                *   Justification: Semantically incorrect. Tables are for tabular data, not for visual layout.
            *   Positioning each thumbnail absolutely with JavaScript.
                *   Score: -1
                *   Justification: This would be a nightmare for responsiveness and maintenance. Layout should be handled with CSS.
    2.  What is the most important performance optimization for this gallery?
        *   Options:
            *   Lazy loading the images.
                *   Score: +3
                *   Justification: This is crucial. If you have 100 images, you don't want to load all of them at once. Lazy loading means you only load the images that are currently in the viewport, which dramatically improves initial page load time.
            *   Using a CDN for the images.
                *   Score: +2
                *   Justification: Also very important for performance, as it serves images from a location close to the user. However, it doesn't solve the problem of trying to load too many images at once.
            *   Minifying the CSS and JavaScript.
                *   Score: +1
                *   Justification: A standard optimization, but the impact is usually much smaller than the impact of loading many large images.
            *   Choosing a fast web host.
                *   Score: 0
                *   Justification: The hosting matters, but the way the application itself is built and optimized is far more important.
    3.  How would you implement the lightbox?
        *   Options:
            *   Use a well-established, accessible lightbox library.
                *   Score: +3
                *   Justification: Building an accessible, responsive, and bug-free lightbox is surprisingly difficult. A good library has already solved all the edge cases (keyboard navigation, focus trapping, mobile support).
            *   Build a custom lightbox with a fixed-position `div` and some JavaScript.
                *   Score: +2
                *   Justification: A great learning exercise. It's possible to build a good custom lightbox, but it requires careful attention to details like accessibility and stacking context.
            *   Use the `:target` pseudo-class in CSS to show the lightbox.
                *   Score: +1
                *   Justification: A clever, CSS-only trick. However, it has limitations. It requires changing the URL hash, and it's harder to add complex features like next/previous navigation.
            *   Open the full-size image in a new browser tab.
                *   Score: -1
                *   Justification: This is a very poor user experience. It takes the user away from your site and doesn't provide the expected gallery-style navigation.
    4.  How would you manage the state of the active image in the lightbox?
        *   Options:
            *   A JavaScript variable or a component state (e.g., `useState` in React) that holds the index or URL of the currently displayed image.
                *   Score: +3
                *   Justification: This is the standard approach. The UI (the lightbox) is a reflection of this state. When the user clicks next, you update the state, and the UI re-renders to show the new image.
            *   Store the current image URL in a `data-` attribute on the lightbox element.
                *   Score: 0
                *   Justification: This is storing state in the DOM, which is a bad practice. It's harder to manage and debug than keeping state in JavaScript.
            *   Have a separate lightbox `div` for every single image and just show/hide the correct one.
                *   Score: -1
                *   Justification: This would be very inefficient and would create a huge number of unnecessary DOM elements.
            *   No state is needed; just swap the `src` attribute of an `<img>` tag.
                *   Score: +1
                *   Justification: This is the imperative way to do it. While it works, a declarative, state-based approach is cleaner and more idiomatic in modern web development.
    5.  How would you make the lightbox accessible?
        *   Options:
            *   Ensure it can be closed with the Escape key, navigated with arrow keys, and that focus is trapped inside the lightbox while it's open.
                *   Score: +3
                *   Justification: These are the key requirements for an accessible modal dialog. It ensures that keyboard-only and screen reader users can use the feature effectively.
            *   Add an `alt` attribute to every image.
                *   Score: +2
                *   Justification: This is crucial for image accessibility in general, but it doesn't address the specific accessibility challenges of the lightbox *widget* itself.
            *   Add a close button.
                *   Score: +1
                *   Justification: This is important, but it's only one part of accessibility. Keyboard navigation and focus management are just as critical.
            *   Assume users will just click the background to close it.
                *   Score: -1
                *   Justification: This is not accessible. Keyboard-only users cannot "click the background."

# 8. Markdown Previewer

*   Description:
    json
    {
      "summary": "A simple web app that converts Markdown text into HTML in real-time.",
      "functional_requirements": [
        "A textarea for users to input Markdown text.",
        "A preview pane that shows the rendered HTML.",
        "The preview should update in real-time as the user types.",
        "The app should support basic Markdown syntax (headings, bold, italics, lists, links).",
        "A button to copy the rendered HTML to the clipboard."
      ],
      "non_functional_requirements": [
        "The conversion process must be fast to feel real-time.",
        "The application should be entirely client-side.",
        "The parsing should be secure and sanitize the output to prevent XSS attacks.",
        "The app should be lightweight with minimal dependencies.",
        "The layout should be responsive."
      ],
      "ui_ux_requirements": [
        "A side-by-side layout with the editor on one side and the preview on the other.",
        "The preview pane should have good default styling for the rendered HTML.",
        "A clear and obvious input area.",
        "The scroll position of the editor and preview panes should be synchronized.",
        "A clean and distraction-free interface."
      ]
    }
    
*   Questions:
    1.  How would you handle the Markdown to HTML conversion?
        *   Options:
            *   Use a well-known, secure Markdown parsing library like `marked` or `DOMPurify`.
                *   Score: +3
                *   Justification: Building a Markdown parser is complex, and handling security (XSS) is critical. A battle-tested library is the correct and safe choice.
            *   Write your own Markdown parser using regular expressions.
                *   Score: 0
                *   Justification: While a fun exercise, this is very difficult to get right and is a huge security risk. It's very easy to write regexes that are inefficient or can be bypassed for XSS attacks.
            *   Send the Markdown to a backend server to be converted.
                *   Score: -1
                *   Justification: Unnecessary. This can and should be done on the client-side for real-time feedback without network latency.
            *   Use a simple find-and-replace for basic syntax like `text` to `<b>text</b>`.
                *   Score: -1
                *   Justification: This is extremely brittle and will fail on any nested or complex syntax. It's not a real solution.
    2.  How would you implement the real-time update?
        *   Options:
            *   Listen for the `input` event on the textarea. On every event, get the content, run it through the parser, and update the `innerHTML` of the preview pane.
                *   Score: +3
                *   Justification: This is the standard and most efficient way to create a real-time preview. The `input` event fires for every change.
            *   Use a `setInterval` to check for changes in the textarea every 100ms.
                *   Score: 0
                *   Justification: This is inefficient. You would be checking for changes even when the user isn't typing. The `input` event is much better.
            *   Use the `change` event on the textarea.
                *   Score: -1
                *   Justification: The `change` event only fires when the element loses focus, so the preview would not update in real-time as the user types.
            *   Reload the entire page on every keypress.
                *   Score: -1
                *   Justification: This would be unusable.
    3.  What is the most significant security concern?
        *   Options:
            *   Cross-Site Scripting (XSS).
                *   Score: +3
                *   Justification: If a user types `<script>alert('XSS')</script>` or `<img src=x onerror=alert(1)>` into the Markdown, and you render the resulting HTML without sanitizing it, you will execute malicious code. This is the biggest risk.
            *   SQL Injection.
                *   Score: -1
                *   Justification: This is a client-side only application with no database, so SQL injection is not possible.
            *   Cross-Site Request Forgery (CSRF).
                *   Score: -1
                *   Justification: CSRF is an attack against authenticated server-side actions. It is not relevant to this client-side application.
            *   The user typing in a password.
                *   Score: 0
                *   Justification: While a user could accidentally paste a password, it's not a vulnerability in the application itself. XSS is a direct vulnerability.
    4.  How would you synchronize the scroll position of the two panes?
        *   Options:
            *   Listen for the `scroll` event on one pane. Calculate the scroll percentage, and then set the `scrollTop` of the other pane to the same percentage of its total scroll height.
                *   Score: +3
                *   Justification: This is the correct logic for synchronizing scroll positions between two elements of potentially different heights.
            *   Set the `scrollTop` of the second pane to be the exact same pixel value as the first.
                *   Score: +1
                *   Justification: This will only work if the rendered HTML has the exact same height as the raw Markdown, which is almost never the case.
            *   Use a library that provides this feature.
                *   Score: +2
                *   Justification: A good option if you can find a lightweight library that does this well. It saves you from writing the logic yourself.
            *   It's not possible to synchronize scroll positions.
                *   Score: -1
                *   Justification: This is incorrect. It is a common feature in Markdown editors.
    5.  How would you implement the "Copy HTML" button?
        *   Options:
            *   Use the `navigator.clipboard.writeText()` API.
                *   Score: +3
                *   Justification: This is the modern, secure, and asynchronous way to write text to the clipboard. It's the best practice.
            *   Use the deprecated `document.execCommand('copy')` method.
                *   Score: +1
                *   Justification: This is the older, synchronous method. While it still works in many browsers, it's deprecated and should be avoided in new code.
            *   Show a popup with the HTML in a textarea and ask the user to manually copy it.
                *   Score: 0
                *   Justification: This is a poor user experience. The button should perform the copy action directly.
            *   Send the HTML to a server and have the server email it to the user.
                *   Score: -1
                *   Justification: Absurdly over-engineered and doesn't meet the requirement.

# 9. Countdown Timer

*   Description:
    json
    {
      "summary": "A simple application that counts down to a specific date and time.",
      "functional_requirements": [
        "Users can input a target date and time.",
        "The application displays the remaining days, hours, minutes, and seconds.",
        "The timer should tick down every second.",
        "When the countdown reaches zero, it should display a message (e.g., \"Time's up!\").",
        "The target date should be saved so it persists after a refresh."
      ],
      "non_functional_requirements": [
        "The timer must be accurate.",
        "The application should be lightweight and performant.",
        "It should be a client-side only application.",
        "The code should be easy to read and understand.",
        "It should handle invalid date inputs gracefully."
      ],
      "ui_ux_requirements": [
        "A clear and large display of the remaining time.",
        "An intuitive date and time picker for setting the target.",
        "A visually distinct state for when the timer is running versus when it's finished.",
        "The design should be clean and focused on the timer.",
        "The application should be responsive."
      ]
    }
    
*   Questions:
    1.  How would you implement the one-second tick?
        *   Options:
            *   Use `setInterval` to call a function every 1000 milliseconds.
                *   Score: +3
                *   Justification: This is the standard JavaScript method for repeatedly executing a function at a fixed time interval. It's the perfect tool for a timer.
            *   Use a `while(true)` loop.
                *   Score: -1
                *   Justification: This would block the main thread and freeze the browser completely. It's a fundamental misunderstanding of the JavaScript event loop.
            *   Use `requestAnimationFrame`.
                *   Score: +1
                *   Justification: `requestAnimationFrame` is for visual animations and tries to sync with the browser's repaint cycle (usually 60fps). It's not ideal for a once-per-second timer, as it's not guaranteed to run at a specific interval.
            *   Use recursive `setTimeout` calls.
                *   Score: +2
                *   Justification: This is also a valid way to create a timer. The advantage is that the next timeout is only set after the current one has finished, which can prevent issues if the function takes a long time to run. For a simple timer, `setInterval` is more direct.
    2.  How would you calculate the remaining time?
        *   Options:
            *   In the timer function, get the *current* timestamp, subtract it from the *target* timestamp, and then calculate the days, hours, minutes, and seconds from the difference.
                *   Score: +3
                *   Justification: This is the most accurate and robust method. It ensures the timer stays correct even if the `setInterval` drifts or the browser tab is inactive for a while. You are always calculating from the true source of time.
            *   Create a variable for the total seconds remaining and just subtract 1 from it every second.
                *   Score: 0
                *   Justification: This is inaccurate and will drift over time. `setInterval` is not perfectly precise, and if the browser tab is backgrounded, the intervals may be throttled, causing the timer to become significantly out of sync.
            *   Ask a server for the remaining time every second.
                *   Score: -1
                *   Justification: Inefficient and adds unnecessary network latency. Time calculations should be done on the client.
            *   Use a library like Moment.js or date-fns to get the difference.
                *   Score: +2
                *   Justification: Using a date library is a great way to simplify date and time calculations and avoid common pitfalls. It's a very good choice, though not strictly necessary for this specific calculation.
    3.  How would you store the target date so it persists?
        *   Options:
            *   Browser's Local Storage.
                *   Score: +3
                *   Justification: Perfect for this use case. It allows you to save the target date string and retrieve it the next time the user opens the app.
            *   A cookie.
                *   Score: +1
                *   Justification: This would work, but Local Storage is generally preferred for storing client-side data that doesn't need to be sent to a server.
            *   In the URL as a query parameter.
                *   Score: 0
                *   Justification: This would make the date shareable, but it wouldn't persist if the user just closes and reopens the tab without the parameter.
            *   A server-side database.
                *   Score: -1
                *   Justification: Overkill for a simple client-side application.
    4.  What kind of input would you use for setting the date and time?
        *   Options:
            *   The native HTML `<input type="datetime-local">`.
                *   Score: +3
                *   Justification: This is the semantically correct element. It provides a native date and time picker UI on supported browsers (especially mobile), which is a great user experience.
            *   A third-party date picker library.
                *   Score: +2
                *   Justification: A good option if you need a more custom or consistent UI across all browsers, as the native picker's appearance can vary.
            *   Separate text inputs for year, month, day, hour, etc.
                *   Score: 0
                *   Justification: This is a poor user experience and is prone to input errors. A proper date picker is much better.
            *   A single text input where the user has to type the date in a specific format.
                *   Score: -1
                *   Justification: Very user-unfriendly and error-prone.
    5.  What happens if the user sets a date that is in the past?
        *   Options:
            *   The application should handle this gracefully, either by showing the Times up! message immediately or by displaying a validation error.
                *   Score: +3
                *   Justification: This is a predictable edge case that should be handled with clear feedback to the user.
            *   The timer will show negative numbers.
                *   Score: 0
                *   Justification: While mathematically correct, this is not a good user experience and doesn't meet the spirit of the requirements.
            *   The application will crash.
                *   Score: -1
                *   Justification: This is a bug. The application should not crash on valid, albeit logical, user input.
            *   The timer will count up instead of down.
                *   Score: +1
                *   Justification: This could be a feature (a "count-up" timer), but it's not what the user asked for. The primary requirement is a countdown.

# 10. BMI Calculator

*   Description:
    json
    {
      "summary": "A simple tool to calculate Body Mass Index (BMI).",
      "functional_requirements": [
        "Inputs for height and weight.",
        "Support for both metric (cm/kg) and imperial (ft/in/lbs) units.",
        "A Calculate button to compute the BMI.",
        "Display the calculated BMI score.",
        "Display the BMI category (e.g., Underweight, Normal, Overweight)."
      ],
      "non_functional_requirements": [
        "The calculation must be accurate.",
        "The application must be client-side only.",
        "The interface should be fast and responsive.",
        "It should be lightweight with no external dependencies.",
        "Input validation for non-numeric values."
      ],
      "ui_ux_requirements": [
        "A simple and clear layout.",
        "Intuitive input fields for height and weight.",
        "A toggle or radio buttons to switch between metric and imperial units.",
        "The result should be displayed clearly and prominently.",
        "The UI should be responsive and usable on mobile."
      ]
    }
    
*   Questions:
    1.  How would you structure the calculation logic?
        *   Options:
            *   A single JavaScript function that takes height, weight, and unit system as arguments and returns an object with the BMI score and category.
                *   Score: +3
                *   Justification: This is a clean and testable approach. It separates the calculation logic from the UI and DOM manipulation.
            *   Put all the calculation logic inside the button's click event listener.
                *   Score: +1
                *   Justification: This works, but it mixes concerns. It makes the code harder to read, test, and reuse.
            *   Send the data to a server to be calculated.
                *   Score: -1
                *   Justification: Unnecessary. This is a simple formula that can be easily calculated on the client-side.
            *   Use a third-party BMI calculation library.
                *   Score: 0
                *   Justification: The BMI formula is so simple (`weight / height^2`) that adding a library for it is unnecessary bloat.
    2.  How would you handle the unit conversion (metric/imperial)?
        *   Options:
            *   Internally, always convert the input values to a single, standard unit system (e.g., metric) before performing the BMI calculation.
                *   Score: +3
                *   Justification: This is the best approach. It simplifies the main calculation logic, as it only ever has to deal with one unit system. The conversion logic is handled separately.
            *   Write two separate calculation functions, one for metric and one for imperial.
                *   Score: +1
                *   Justification: This works, but it leads to code duplication. The core BMI logic is the same; only the inputs are different.
            *   Ask the user to do the conversion themselves.
                *   Score: -1
                *   Justification: This is a poor user experience. The application should handle the complexity.
            *   Find a BMI formula that works with mixed units.
                *   Score: 0
                *   Justification: Such a formula would just be a more complex version of the standard formula with conversion factors built-in. It's cleaner to separate the conversion and calculation steps.
    3.  How would you manage the state of the inputs and the result?
        *   Options:
            *   If using vanilla JS, read the values from the input fields directly when the button is clicked. If using a framework, use local component state (e.g., `useState`).
                *   Score: +3
                *   Justification: This is the standard and most direct way to handle state for a simple form like this. The state is self-contained and doesn't need to be shared globally.
            *   Use a global state manager like Redux.
                *   Score: -1
                *   Justification: Massive overkill. There is no shared state that needs to be accessed by multiple, distant components.
            *   Store the input values in Local Storage.
                *   Score: 0
                *   Justification: Not appropriate for managing the active state of a form. Local Storage could be used to *remember* the last calculation, but not to handle the input values themselves.
            *   Bind the input values to JavaScript variables and update them on the `keyup` event.
                *   Score: +1
                *   Justification: This is a form of two-way binding. It works, but it can be less performant than simply reading the values on submit for a simple form.
    4.  How would you implement the UI for switching units?
        *   Options:
            *   A set of radio buttons (`<input type="radio">`) grouped by a `<fieldset>`.
                *   Score: +3
                *   Justification: This is semantically correct and very accessible. It clearly indicates a choice between a small number of options.
            *   A dropdown/select menu.
                *   Score: +1
                *   Justification: This would work, but it's generally considered less user-friendly for a small number of choices (2-3) than radio buttons.
            *   A custom-styled toggle switch.
                *   Score: +2
                *   Justification: A visually appealing option. It's important to ensure it's built accessibly (e.g., using a checkbox or radio button underneath).
            *   Two separate forms, one for metric and one for imperial.
                *   Score: -1
                *   Justification: This would be a confusing user experience and would lead to a lot of duplicated code.
    5.  How would you handle invalid input, like text in the weight field?
        *   Options:
            *   Use `<input type="number">` and perform a check with `parseFloat` or `isNaN` before calculating. If the input is invalid, show a user-friendly error message.
                *   Score: +3
                *   Justification: This is a robust solution. `<input type="number">` provides some browser-level filtering, and the JavaScript check ensures the data is valid before you use it.
            *   Let the calculation happen, which will result in `NaN` (Not a Number), and display that to the user.
                *   Score: 0
                *   Justification: This is not user-friendly. The user will not understand what `NaN` means. The application should provide a clear error message.
            *   Do nothing and let the application crash.
                *   Score: -1
                *   Justification: A bug. The application must handle predictable user errors.
            *   Use a regular expression to prevent the user from typing non-numeric characters.
                *   Score: +1
                *   Justification: This can be a good user experience, but it can also be tricky to get right (e.g., what about decimal points or copy-pasting?). It's often better to validate the input rather than trying to restrict it.

---

# Amateur Level

# 1. E-commerce Product Page

*   Description:
    json
    {
      "summary": "A detailed product page for an e-commerce site.",
      "functional_requirements": [
        "Display product name, description, price, and images.",
        "Allow users to select product variants (e.g., size, color).",
        "An Add to Cart button that updates the cart state.",
        "Show multiple product images in a gallery or carousel.",
        "Display customer reviews and ratings."
      ],
      "non_functional_requirements": [
        "The page must load very quickly (<2s) to prevent user drop-off.",
        "Images must be optimized for web and lazy-loaded.",
        "The Add to Cart functionality must be reliable and provide clear feedback.",
        "The page should be server-side rendered (SSR) or statically generated (SSG) for SEO.",
        "The design must be responsive and work on all screen sizes."
      ],
      "ui_ux_requirements": [
        "A clean, professional layout that highlights the product.",
        "High-resolution product images.",
        "Clear call-to-action (CTA) buttons.",
        "An intuitive way to select product variants.",
        "Easy access to customer reviews."
      ]
    }
    
*   Questions:
    1.  How would you fetch the product data?
        *   Options:
            *   From a REST or GraphQL API endpoint on the initial page load (e.g., using `getServerSideProps` in Next.js).
                *   Score: +3
                *   Justification: This is the best approach for SEO and performance. The data is fetched on the server, so the fully rendered page is sent to the client, which is great for search engines and perceived performance.
            *   Fetch the data on the client-side after the page loads (e.g., in a `useEffect` hook in React).
                *   Score: +1
                *   Justification: This is a poor choice for a product page. The page will initially load without product data, showing a loading spinner. This is bad for SEO and user experience.
            *   Bundle the product data as a JSON file in the frontend code.
                *   Score: 0
                *   Justification: This is not scalable. It would require a full site redeployment every time a product's price or description changes. Product data should be dynamic and managed in a database or CMS.
            *   Scrape the data from another website.
                *   Score: -1
                *   Justification: This is unreliable, likely violates the other site's terms of service, and is not a professional or robust solution for an e-commerce business.
    2.  How would you manage the state of the shopping cart?
        *   Options:
            *   A global state management library (e.g., Redux, Zustand, or React Context).
                *   Score: +3
                *   Justification: The cart is a piece of global state that needs to be accessed and updated by multiple components (product page, cart icon in the header, checkout page). A global state manager is the perfect tool for this.
            *   Local component state (e.g., `useState` in React).
                *   Score: 0
                *   Justification: This would not work. The cart state needs to be shared across different components. Storing it in a single component's local state would make it inaccessible to others.
            *   Store the entire cart in Local Storage.
                *   Score: +1
                *   Justification: While you should use Local Storage to *persist* the cart data across sessions, it shouldn't be the primary *state management* tool. You should read from Local Storage to initialize your state manager, but not use it for all state updates, as it can be slow and doesn't trigger re-renders.
            *   Make an API call to the server every time an item is added to the cart.
                *   Score: +2
                *   Justification: This is a valid approach, especially if you need to sync the cart across devices immediately. However, it can be slower and more complex than managing the cart on the client-side and only syncing with the server at key moments (like checkout). A hybrid approach is often best.
    3.  How would you handle the product image gallery?
        *   Options:
            *   Use a well-established library like `react-image-gallery` or `swiper.js`.
                *   Score: +3
                *   Justification: Building a feature-rich, accessible, and mobile-friendly image gallery is complex. Using a battle-tested library saves a lot of time and ensures a high-quality result.
            *   Build a custom gallery using CSS Scroll Snap and JavaScript.
                *   Score: +2
                *   Justification: A good learning experience and can result in a very lightweight solution. However, it's easy to miss edge cases and accessibility features that libraries provide out of the box.
            *   Just display all the images in a vertical list.
                *   Score: 0
                *   Justification: This would be a very poor user experience, especially for products with many images. It would force the user to scroll a lot and wouldn't look professional.
            *   Use an `<iframe>` to embed an image gallery from another service.
                *   Score: -1
                *   Justification: This is a terrible idea. It would be slow, not customizable, and would likely look out of place with the rest of the site's design.
    4.  What is the most important factor for this page's SEO?
        *   Options:
            *   Server-side rendering (SSR) or static site generation (SSG).
                *   Score: +3
                *   Justification: This ensures that search engine crawlers can see the full content of the page (product name, description, etc.) immediately, which is crucial for indexing and ranking.
            *   Using the product name in the URL and `<h1>` tag.
                *   Score: +2
                *   Justification: Very important for on-page SEO, but it's not as fundamental as ensuring the content is crawlable in the first place.
            *   Having a fast load speed.
                *   Score: +1
                *   Justification: Page speed is a ranking factor, but if the content isn't crawlable (due to client-side rendering), even a fast-loading empty page won't rank.
            *   Getting backlinks from other websites.
                *   Score: 0
                *   Justification: This is off-page SEO. While important for overall domain authority, it's not something you directly control when building the product page itself.
    5.  How would you implement the product variant selection (e.g., size/color)?
        *   Options:
            *   Manage the selected variant in the component's state. When a variant changes, update the state and re-render the component to show the correct price/image.
                *   Score: +3
                *   Justification: This is the standard and correct way to handle interactive elements in a component-based framework. The UI is a reflection of the state.
            *   Have a separate page for each product variant.
                *   Score: -1
                *   Justification: This would be a terrible user experience and an SEO nightmare. It would create a huge number of duplicate pages and make it impossible for users to easily compare variants.
            *   Use JavaScript to manually show/hide different divs for each variant.
                *   Score: +1
                *   Justification: This is an older, jQuery-style approach. It's less declarative and harder to maintain than a state-based approach in a modern framework.
            *   Reload the entire page with a query parameter for the selected variant.
                *   Score: 0
                *   Justification: This would be very slow and clunky. It would provide a poor user experience compared to a dynamic update on the client-side.

# 2. Multi-step Form

*   Description:
    json
    {
      "summary": "A multi-step form for a user registration or checkout process.",
      "functional_requirements": [
        "The form should be broken down into several logical steps (e.g., Personal Info, Address, Payment).",
        "Users can navigate between the next and previous steps.",
        "Input validation should be performed on each step before proceeding.",
        "A progress bar or step indicator should show the user's current position.",
        "All form data should be collected and submitted only at the final step."
      ],
      "non_functional_requirements": [
        "The form's state must be preserved when navigating between steps.",
        "The form should be highly responsive and work well on mobile.",
        "The validation feedback should be clear and immediate.",
        "The form should be accessible, with proper labels and ARIA attributes.",
        "The submission process should be secure."
      ],
      "ui_ux_requirements": [
        "A clean and uncluttered layout for each step.",
        "Clear and concise labels for all form fields.",
        "Obvious navigation buttons (Next, Previous, Submit).",
        "A visually engaging progress indicator.",
        "Error messages should be displayed inline, next to the relevant field."
      ]
    }
    
*   Questions:
    1.  How would you manage the state of the entire form?
        *   Options:
            *   Use a state management library or the React Context API to hold all form data in a single, shared state object.
                *   Score: +3
                *   Justification: This is the ideal approach. A multi-step form has shared state that needs to be accessed and updated by multiple components (the steps). A centralized state store makes this easy to manage.
            *   Lift state up to the parent component that renders the steps.
                *   Score: +2
                *   Justification: This is a valid and common pattern in React for smaller forms. However, for a complex form with many fields, it can lead to a lot of props being passed down ("prop drilling").
            *   Store the data for each step in Local Storage.
                *   Score: 0
                *   Justification: This is not a good way to manage active application state. It's slow, not designed for frequent updates, and doesn't trigger UI re-renders. It's better for persisting data across sessions, not for managing it during a single session.
            *   Each step component manages its own state, and you try to combine it at the end.
                *   Score: -1
                *   Justification: This would be very difficult to manage. The parent component would have no way to access the data from the child steps until the very end, making validation and a final submission very complex.
    2.  How would you handle form validation?
        *   Options:
            *   Use a dedicated form library like Formik, React Hook Form, or Zod.
                *   Score: +3
                *   Justification: These libraries are designed specifically for this purpose. They provide robust, declarative, and efficient ways to handle complex validation logic, manage form state, and display error messages.
            *   Write custom validation logic for each field within the component.
                *   Score: +2
                *   Justification: This is feasible for simple forms, but for a multi-step form, it can quickly become repetitive and hard to maintain. A library is usually a better choice.
            *   Rely only on built-in HTML5 validation attributes (e.g., `required`, `type='email'`).
                *   Score: +1
                *   Justification: This is a good starting point and should always be used for accessibility, but it's not sufficient. The styling is inconsistent across browsers, and you can't implement complex or conditional validation rules.
            *   Perform validation only on the server after the final submission.
                *   Score: -1
                *   Justification: This provides a terrible user experience. The user would fill out the entire form, submit it, and only then find out there was an error on the first step. Validation should be done on the client-side before submission.
    3.  How would you implement the step navigation?
        *   Options:
            *   Use a state variable to keep track of the current step index. Render the appropriate step component based on this index.
                *   Score: +3
                *   Justification: This is the standard, declarative way to handle conditional rendering in a component-based framework. The UI is a direct function of the `currentStep` state.
            *   Use CSS to show/hide the different step `div`s.
                *   Score: +1
                *   Justification: This is an older approach. It means all form steps are always in the DOM, which can be inefficient. A state-based rendering approach is cleaner and more idiomatic in modern frameworks.
            *   Use a router and have a different URL for each step.
                *   Score: +2
                *   Justification: This is a valid and powerful approach, especially for very long or complex forms (like a checkout flow). It has the benefit of making steps bookmarkable and shareable. However, it can add complexity to state management.
            *   Use jQuery's `show()` and `hide()` methods.
                *   Score: 0
                *   Justification: This is a legacy, imperative approach that doesn't fit with the declarative nature of modern frontend frameworks.
    4.  What is a key accessibility concern for a multi-step form?
        *   Options:
            *   Ensuring the focus is managed correctly when the user navigates between steps.
                *   Score: +3
                *   Justification: This is crucial. When a new step appears, the focus should be moved to the top of that step (e.g., the heading) so that screen reader users know what has changed.
            *   Using the correct semantic HTML elements (e.g., `<form>`, `<label>`, `<input>`).
                *   Score: +2
                *   Justification: This is fundamental to all forms, not just multi-step ones. It's very important but not the unique challenge of a multi-step form.
            *   Making the progress bar accessible using ARIA attributes.
                *   Score: +2
                *   Justification: Also very important. The progress bar should communicate its state (e.g., "Step 2 of 4") to screen reader users.
            *   Ensuring the colors have enough contrast.
                *   Score: +1
                *   Justification: This is a general accessibility requirement for all web content, not specific to the functionality of a multi-step form.
    5.  How would you persist the form data if the user accidentally refreshes the page?
        *   Options:
            *   Save the form state to Local Storage on every change, and re-hydrate the state from Local Storage when the form first loads.
                *   Score: +3
                *   Justification: This is a robust and common solution to prevent data loss. It provides a much better user experience.
            *   Tell the user not to refresh the page.
                *   Score: -1
                *   Justification: This is not a solution. You cannot control user behavior, and accidents happen. The application should be resilient.
            *   Store the data on the server after each step.
                *   Score: +2
                *   Justification: This is a very robust solution, often used in critical flows like e-commerce checkouts. It ensures data is safe even if the user switches devices. However, it's more complex to implement than Local Storage.
            *   Do nothing and let the data be lost.
                *   Score: 0
                *   Justification: This leads to a frustrating user experience, especially for long forms.

# 3. Simple Blog with Admin Panel

*   Description:
    json
    {
      "summary": "A simple blog with a private, password-protected admin panel to create and edit posts.",
      "functional_requirements": [
        "Public-facing blog that lists all posts.",
        "A separate page for each post.",
        "An `/admin` route that is password protected.",
        "In the admin panel, an authenticated user can create, edit, and delete posts.",
        "The admin panel should have a rich text editor for writing posts."
      ],
      "non_functional_requirements": [
        "The public-facing blog should be fast and SEO-friendly (statically generated is preferred).",
        "The admin panel must be secure.",
        "The application requires a database to store posts and user credentials.",
        "The technology choice should balance ease of development and performance.",
        "The deployment process should be automated."
      ],
      "ui_ux_requirements": [
        "A clean, readable design for the public blog.",
        "A simple, functional interface for the admin panel.",
        "A user-friendly rich text editor (WYSIWYG).",
        "The public blog must be responsive.",
        "Clear feedback for actions in the admin panel (e.g., Post saved successfully)."
      ]
    }
    
*   Questions:
    1.  What is the most suitable architectural approach?
        *   Options:
            *   A full-stack framework like Next.js or SvelteKit.
                *   Score: +3
                *   Justification: These frameworks are perfect for this. You can statically generate the public-facing blog pages for performance and SEO, while using server-side rendering and API routes for the dynamic, secure admin panel.
            *   A separate frontend (e.g., Create React App) and a separate backend (e.g., Express).
                *   Score: +2
                *   Justification: A classic and valid approach. However, it can be more complex to manage two separate projects and deployments compared to an integrated full-stack framework.
            *   A traditional monolithic CMS like WordPress.
                *   Score: +1
                *   Justification: WordPress provides this functionality out of the box, but it's less flexible, can be slower, and offers a less modern developer experience than a JavaScript-based full-stack solution.
            *   A static site generator with a Git-based CMS.
                *   Score: +1
                *   Justification: This is a great option for developer-centric blogs, but it doesn't meet the requirement for a password-protected `/admin` route and a traditional database.
    2.  How would you handle authentication for the admin panel?
        *   Options:
            *   Session-based authentication using cookies.
                *   Score: +3
                *   Justification: This is a standard, secure, and well-understood method for authenticating users in a web application. After a user logs in, the server creates a session and sends a session ID back to the client in a secure, HTTP-only cookie.
            *   JWT (JSON Web Tokens) stored in Local Storage.
                *   Score: +1
                *   Justification: While common for SPAs talking to a separate API, storing JWTs in Local Storage is vulnerable to XSS attacks. For a web-based admin panel, session cookies are generally safer.
            *   HTTP Basic Authentication.
                *   Score: 0
                *   Justification: This is not secure. The credentials are sent with every request in a non-encrypted format (Base64). It also doesn't provide a good user experience (no logout feature).
            *   Hardcoding a password in the frontend code.
                *   Score: -1
                *   Justification: This is extremely insecure. The password would be visible to anyone who inspects the code.
    3.  Which database would you choose?
        *   Options:
            *   PostgreSQL or MySQL.
                *   Score: +3
                *   Justification: These are robust, reliable, and feature-rich relational databases that are a perfect fit for storing blog posts and user data. They are the industry standard for a reason.
            *   MongoDB (NoSQL).
                *   Score: +2
                *   Justification: MongoDB could also work. While the data is relational (users have posts), MongoDB is flexible and easy to get started with. However, a relational database is arguably a more natural fit.
            *   SQLite.
                *   Score: +1
                *   Justification: SQLite is a file-based database. It's very simple to set up but can be difficult to manage and scale in a server-based deployment environment (especially serverless).
            *   Storing posts as JSON files on the server's file system.
                *   Score: 0
                *   Justification: This would be difficult to manage, especially with concurrent writes. A proper database is designed to handle these issues safely.
    4.  How would you achieve a fast, static public blog while having a dynamic admin panel?
        *   Options:
            *   Use Incremental Static Regeneration (ISR) or on-demand revalidation in a framework like Next.js.
                *   Score: +3
                *   Justification: This is the best of both worlds. The blog pages are served statically for speed. When a post is updated in the admin panel, you can trigger a re-build of only that specific page, so the content stays fresh without rebuilding the entire site.
            *   Set up a webhook that triggers a full rebuild of the static site every time a post is saved.
                *   Score: +2
                *   Justification: This is a common and valid pattern. The downside is that if you have many posts, a full rebuild can be slow.
            *   Make the public blog a client-side rendered React app that fetches post data from an API.
                *   Score: 0
                *   Justification: This would make the public blog slow to load and bad for SEO, failing a key non-functional requirement.
            *   Serve the entire application, including the public blog, dynamically from the server.
                *   Score: +1
                *   Justification: This would work, but you would lose the performance and cost benefits of a statically generated site for your public-facing pages.
    5.  What kind of rich text editor would you use?
        *   Options:
            *   Integrate a well-supported open-source library like TipTap, Slate, or TinyMCE.
                *   Score: +3
                *   Justification: Building a rich text editor is incredibly complex. Using a battle-tested library will save a huge amount of time and provide a much better user experience.
            *   Use a simple `<textarea>` and allow users to write HTML.
                *   Score: 0
                *   Justification: This is not user-friendly and is a security risk. Allowing users to write raw HTML can open you up to XSS attacks if the output is not properly sanitized.
            *   Build a custom rich text editor from scratch using `contenteditable`.
                *   Score: -1
                *   Justification: This is a massive undertaking with countless edge cases and browser inconsistencies. It's a classic case of reinventing the wheel for no good reason.
            *   Use a Markdown editor instead of a WYSIWYG editor.
                *   Score: +2
                *   Justification: This is a great alternative, especially for a developer-focused blog. It's simpler and produces clean, structured content. However, the requirement was for a "rich text editor," which usually implies WYSIWYG.

# 4. Recipe Finder App

*   Description:
    json
    {
      "summary": "An application for users to discover recipes based on ingredients they have.",
      "functional_requirements": [
        "Users can input a list of ingredients they own.",
        "The app searches a recipe database and shows recipes that can be made with those ingredients.",
        "Display recipe details including ingredients, instructions, and an image.",
        "Users can filter recipes by cuisine, difficulty, or cooking time.",
        "Users can save their favorite recipes."
      ],
      "non_functional_requirements": [
        "The recipe data should come from a third-party API or a pre-existing database.",
        "The search functionality must be fast and return relevant results.",
        "The application needs a backend to handle user accounts and saved recipes.",
        "The API key for the recipe source must be kept secure.",
        "The app should be responsive and mobile-friendly."
      ],
      "ui_ux_requirements": [
        "An intuitive interface for inputting ingredients.",
        "A visually appealing grid or list view for search results.",
        "A clean and easy-to-read recipe detail page.",
        "Clear filtering options.",
        "A loading state for searches and a clear no results state."
      ]
    }
    
*   Questions:
    1.  What kind of backend and database would you choose?
        *   Options:
            *   A Node.js (Express/Fastify) backend with a PostgreSQL or MongoDB database.
                *   Score: +3
                *   Justification: A standard, flexible, and powerful choice. Node.js is great for I/O-bound tasks like calling external APIs. PostgreSQL is excellent for structured data like users and favorites, while MongoDB offers flexibility.
            *   A serverless backend (e.g., AWS Lambda + API Gateway) with DynamoDB.
                *   Score: +2
                *   Justification: A great, scalable, and potentially cost-effective option. It requires a different mindset but is excellent for event-driven applications. DynamoDB is a good fit for simple key-value lookups (like user profiles).
            *   A monolithic framework like Ruby on Rails or Django.
                *   Score: +2
                *   Justification: Also a very strong choice. These frameworks are mature and make it very fast to build full-stack applications with user authentication and database integration.
            *   A frontend-only application that calls the recipe API directly.
                *   Score: -1
                *   Justification: This fails to meet the requirements. You cannot securely store an API key on the client-side, nor can you save user-specific favorite recipes without a backend.
    2.  How would you implement the ingredient-based search?
        *   Options:
            *   Pass the list of ingredients as query parameters to your backend. The backend then calls the third-party recipe API with the ingredients.
                *   Score: +3
                *   Justification: This is the correct approach. The backend acts as a proxy, securely handling the API key and abstracting the third-party service from the client.
            *   If using your own database, use a full-text search index or a dedicated search engine like Elasticsearch.
                *   Score: +3
                *   Justification: For a large recipe database, a simple `LIKE` query would be too slow. A proper search index is crucial for fast and relevant results.
            *   Fetch all recipes from the API and then filter them on the client-side.
                *   Score: -1
                *   Justification: This is extremely inefficient and would not scale. You would be transferring a huge amount of unnecessary data.
            *   Use a complex SQL query with many `LIKE` clauses.
                *   Score: 0
                *   Justification: This would be very slow and inefficient on a large dataset. A full-text search index is the proper tool for this job.
    3.  How would you handle user authentication and saving favorites?
        *   Options:
            *   Implement session-based authentication or JWTs. Create a `favorites` table in the database with a many-to-many relationship between users and recipes.
                *   Score: +3
                *   Justification: This is the standard and correct database design for a feature like this. It's normalized and allows users to have many favorites and recipes to be favorited by many users.
            *   Store favorite recipes in Local Storage.
                *   Score: 0
                *   Justification: This would not persist the favorites across devices or browsers, as it's tied to a single client. It doesn't meet the requirement of a backend-based user system.
            *   Store a JSON array of favorite recipe IDs in the `users` table.
                *   Score: +1
                *   Justification: This is a denormalized approach. While it can work for a small number of favorites, it's much harder to query and analyze than a proper many-to-many table. For example, you couldn't easily find out which recipe is the most favorited.
            *   Create a new table for every user to store their favorites.
                *   Score: -1
                *   Justification: This is a terrible database design that would lead to a massive number of tables and would be impossible to manage.
    4.  How would you choose a third-party recipe API?
        *   Options:
            *   Evaluate APIs based on the quality and breadth of their data, the clarity of their documentation, their pricing and rate limits, and their search capabilities.
                *   Score: +3
                *   Justification: This is a comprehensive and professional approach. You need to consider all these factors to ensure the API meets the technical and business needs of your application.
            *   Just pick the first one that shows up on Google.
                *   Score: -1
                *   Justification: This is a lazy approach that could lead to choosing an unreliable or expensive API that doesn't fit the project's needs.
            *   Try to scrape recipes from a popular food blog.
                *   Score: -1
                *   Justification: This is unreliable, unethical, and likely a violation of copyright and terms of service.
            *   Build your own database by manually entering thousands of recipes.
                *   Score: 0
                *   Justification: This is a massive amount of work and is not a practical approach for this project. The requirement is to use a pre-existing source.
    5.  How would you implement the filtering functionality?
        *   Options:
            *   The frontend sends the filter criteria (cuisine, etc.) to the backend along with the search query. The backend then adds these criteria to the API call or database query.
                *   Score: +3
                *   Justification: This is the most efficient approach. The filtering is done at the data source, so only the relevant data is sent to the client.
            *   The frontend fetches all the search results and then filters them on the client-side.
                *   Score: +1
                *   Justification: This can work if the result sets are small, but it's inefficient. You are potentially fetching a lot of data that the user will never see.
            *   Have a separate API endpoint for every possible filter combination.
                *   Score: -1
                *   Justification: This is not scalable and would lead to a huge number of endpoints. Filters should be handled with query parameters.
            *   Reload the page with the filters as query parameters.
                *   Score: 0
                *   Justification: This would work, but it provides a poor user experience compared to updating the results dynamically on the client-side.

# 5. Job Board

*   Description:
    json
    {
      "summary": "A platform for companies to post job listings and for candidates to apply.",
      "functional_requirements": [
        "Public view to browse and search for job listings.",
        "Job listings can be filtered by location, job type (full-time, part-time), and keywords.",
        "A separate page for each job listing with a detailed description.",
        "Companies can create an account, post new job listings, and manage their existing ones.",
        "Candidates can apply for a job through the platform (e.g., by uploading a resume)."
      ],
      "non_functional_requirements": [
        "The site must be fast and SEO-friendly, especially for the public job listings.",
        "The application must be secure, protecting user and company data.",
        "The system requires a robust database to handle relationships between companies, jobs, and applications.",
        "The search functionality must be powerful and fast.",
        "The platform should be scalable to handle many listings and users."
      ],
      "ui_ux_requirements": [
        "A clean and professional design.",
        "An intuitive search and filtering interface for job seekers.",
        "A simple and straightforward process for companies to post jobs.",
        "Job listings should be easy to read and scan.",
        "The application process for candidates should be as simple as possible."
      ]
    }
    
*   Questions:
    1.  What database schema would you propose for the core entities?
        *   Options:
            *   Three main tables: `Companies`, `Jobs` (with a foreign key to `Companies`), and `Applications` (with foreign keys to `Jobs` and `Users`).
                *   Score: +3
                *   Justification: This is a standard, normalized relational database design that correctly models the relationships between the core entities.
            *   A single, large `Jobs` table that contains all the company and application information as JSON blobs.
                *   Score: -1
                *   Justification: This is a heavily denormalized and inefficient design. It would be very difficult to query and would lead to a lot of data duplication.
            *   A NoSQL document-based approach with a `Jobs` collection where each job document embeds the company information.
                *   Score: +2
                *   Justification: This is a valid approach in a NoSQL database like MongoDB. It can be efficient for reading job listings, as you don't need to perform a join. The trade-off is that updating a company's information would require updating it in every job document.
            *   Separate tables for each job type (e.g., `full_time_jobs`, `part_time_jobs`).
                *   Score: -1
                *   Justification: This is a bad design. It leads to duplicated schemas and makes it very hard to query for all jobs at once.
    2.  How would you implement the job search functionality?
        *   Options:
            *   Use a dedicated search engine like Elasticsearch or Algolia, which is synchronized with the database.
                *   Score: +3
                *   Justification: For a content-heavy site with requirements for fast, relevant, and faceted search (filtering), a dedicated search engine is the best tool. It provides features that are very difficult to implement with a traditional database alone.
            *   Use the full-text search capabilities of your primary database (e.g., PostgreSQL).
                *   Score: +2
                *   Justification: A very good and often sufficient option. Modern relational databases have solid full-text search features that can handle keyword searching and filtering without the complexity of a separate search service.
            *   Use SQL `LIKE` queries.
                *   Score: 0
                *   Justification: This will be too slow and inefficient for a large dataset. `LIKE %keyword%` queries cannot use standard indexes and will result in full table scans.
            *   Fetch all jobs to the client and search/filter there.
                *   Score: -1
                *   Justification: This is not scalable and would be incredibly slow for the user.
    3.  How would you handle resume uploads?
        *   Options:
            *   Upload the file directly to a cloud storage service like AWS S3 or Google Cloud Storage from the client. The client then sends the file's URL to the backend to be stored in the database.
                *   Score: +3
                *   Justification: This is the standard and most scalable approach. It avoids tying up your backend server with large file uploads and leverages the reliability and scalability of cloud storage.
            *   The client uploads the file to your backend server, which then saves it to its local file system.
                *   Score: 0
                *   Justification: This is not a scalable or robust solution. It makes deployments more complex (you have to manage the uploaded files), and it won't work in a serverless or multi-server environment.
            *   Store the resume file directly in the database as a BLOB.
                *   Score: -1
                *   Justification: This is generally considered a bad practice. It bloats the database, makes it slower to back up and query, and is less efficient than storing the files in a dedicated object store.
            *   Ask the user to paste the content of their resume into a `<textarea>`.
                *   Score: -1
                *   Justification: This would ruin all formatting and provide a terrible experience for both the candidate and the company.
    4.  What architectural choice is most important for the public-facing job listings?
        *   Options:
            *   Server-Side Rendering (SSR) or Static Site Generation (SSG).
                *   Score: +3
                *   Justification: This is critical for SEO. You want search engines like Google to be able to crawl and index every job listing. A client-side rendered app would be a disaster for discoverability.
            *   Using a CDN.
                *   Score: +2
                *   Justification: Also very important for performance, as it ensures the pages are served quickly to users around the world. Most modern hosting platforms for SSR/SSG apps include this.
            *   Using a microservices architecture.
                *   Score: 0
                *   Justification: This is a backend architecture choice. While it affects the overall system, it doesn't directly address the SEO requirement for the public pages.
            *   Client-side rendering with a good caching strategy.
                *   Score: -1
                *   Justification: Even with caching, client-side rendering is fundamentally bad for SEO for content-driven sites.
    5.  How would you handle different roles (candidate vs. company)?
        *   Options:
            *   Implement Role-Based Access Control (RBAC). The `Users` table would have a `role` column, and the backend would check this role to authorize actions (e.g., only a user with the 'company' role can post a job).
                *   Score: +3
                *   Justification: This is the standard and most flexible way to handle permissions in an application with different user types.
            *   Have two separate applications, one for candidates and one for companies.
                *   Score: 0
                *   Justification: This would lead to a lot of duplicated code and would be more complex to manage than a single application with RBAC.
            *   Have two separate user tables (`Candidates` and `Companies`).
                *   Score: +1
                *   Justification: This can work, but it's often less flexible than a single `Users` table with a `role` field, especially if you later want to add more roles (like 'admin') or have users that can be both candidates and recruiters.
            *   In the frontend, just show or hide the buttons based on the user type.
                *   Score: -1
                *   Justification: This is insecure. Hiding a button in the UI does not prevent a malicious user from making the API request directly. Authorization *must* be enforced on the backend.

# 6. Chat Application

*   Description:
    json
    {
      "summary": "A real-time chat application for multiple users.",
      "functional_requirements": [
        "Users can join different chat rooms.",
        "Users can send messages in real-time.",
        "Message history is preserved.",
        "Users can see who is currently online.",
        "Basic user authentication (login/logout)."
      ],
      "non_functional_requirements": [
        "Messages must be delivered in real-time with low latency.",
        "The system must handle multiple concurrent users.",
        "Messages must be persistent and not lost.",
        "The application should be secure against XSS and injection attacks.",
        "Scalable architecture to support many rooms and users."
      ],
      "ui_ux_requirements": [
        "Clean and intuitive chat interface.",
        "Real-time message display.",
        "Clear indication of online users.",
        "Responsive design for mobile and desktop.",
        "Easy room switching interface."
      ]
    }
    
*   Questions:
    1.  What technology would you use for real-time messaging?
        *   Options:
            *   WebSockets:
                *   Score: +3
                *   Justification: WebSockets provide full-duplex communication and are ideal for real-time chat applications with low latency requirements.
            *   Server-Sent Events (SSE):
                *   Score: +1
                *   Justification: SSE only allows server-to-client communication, which is insufficient for a chat app where clients need to send messages.
            *   HTTP Polling:
                *   Score: 0
                *   Justification: This creates unnecessary server load and doesn't provide true real-time experience.
            *   Email-based messaging:
                *   Score: -1
                *   Justification: This is not real-time and doesn't meet the basic requirements of a chat application.
    2.  How would you structure the database schema?
        *   Options:
            *   Tables for Users, Rooms, Messages with foreign key relationships:
                *   Score: +3
                *   Justification: This is a normalized, scalable design that efficiently handles relationships between users, rooms, and messages.
            *   Single table with all data:
                *   Score: -1
                *   Justification: This leads to data duplication and poor performance as the application scales.
            *   NoSQL document store with embedded messages:
                *   Score: +2
                *   Justification: This can work well for chat applications, especially with document databases like MongoDB.
            *   File-based storage:
                *   Score: -1
                *   Justification: File storage is not suitable for concurrent real-time operations and lacks ACID properties.
    3.  How would you handle user authentication?
        *   Options:
            *   JWT tokens with secure storage:
                *   Score: +3
                *   Justification: JWT tokens are stateless, scalable, and work well with real-time applications like WebSocket connections.
            *   Session-based authentication:
                *   Score: +2
                *   Justification: Traditional but effective, though can be more complex with WebSocket connections and load balancing.
            *   Basic HTTP authentication:
                *   Score: +1
                *   Justification: Simple but not suitable for a modern web application with persistent connections.
            *   No authentication:
                *   Score: -1
                *   Justification: This fails to meet the functional requirement for user authentication.
    4.  How would you handle message persistence?
        *   Options:
            *   Store messages in a relational database with proper indexing:
                *   Score: +3
                *   Justification: Provides reliable persistence, ACID properties, and efficient querying with proper indexes.
            *   Store messages in memory only:
                *   Score: -1
                *   Justification: Messages would be lost on server restart, failing the persistence requirement.
            *   Store in local browser storage:
                *   Score: -1
                *   Justification: This is client-side only and doesn't provide shared message history across devices.
            *   Use a message queue like Redis:
                *   Score: +2
                *   Justification: Redis can provide both caching and persistence, though may need additional backup strategies.
    5.  How would you handle scaling for multiple chat rooms?
        *   Options:
            *   Use WebSocket rooms/namespaces to group connections:
                *   Score: +3
                *   Justification: This efficiently manages connections and ensures messages are only sent to relevant users.
            *   Broadcast all messages to all connected users:
                *   Score: -1
                *   Justification: This is extremely inefficient and doesn't scale as it sends irrelevant messages to all users.
            *   Create separate server instances for each room:
                *   Score: 0
                *   Justification: This is unnecessarily complex and doesn't scale well for dynamic room creation.
            *   Use a pub/sub system like Redis:
                *   Score: +2
                *   Justification: This can work well for scaling across multiple server instances.

# 7. Content Management System (CMS)

*   Description:
    json
    {
      "summary": "A content management system for creating and managing blog posts and pages.",
      "functional_requirements": [
        "Admin interface for creating, editing, and deleting posts.",
        "Rich text editor for content creation.",
        "Media management for uploading and organizing images.",
        "User role management (admin, editor, viewer).",
        "Public-facing website to display published content."
      ],
      "non_functional_requirements": [
        "SEO-friendly URLs and meta tags.",
        "Fast loading times for public pages.",
        "Secure admin area with proper authentication.",
        "Backup and recovery capabilities.",
        "Scalable architecture for high traffic."
      ],
      "ui_ux_requirements": [
        "Intuitive admin dashboard.",
        "WYSIWYG editor for content creation.",
        "Responsive design for all screen sizes.",
        "Clean and professional public website design.",
        "Easy navigation and content discovery."
      ]
    }
    
*   Questions:
    1.  What approach would you take for the admin interface?
        *   Options:
            *   Server-side rendered admin panel with traditional forms:
                *   Score: +2
                *   Justification: Simple, reliable, and works well for content management. SEO is not a concern for admin areas.
            *   Single Page Application (SPA) with React/Vue:
                *   Score: +3
                *   Justification: Provides excellent user experience with rich interactions, perfect for a dashboard-style admin interface.
            *   Mobile app for content management:
                *   Score: +1
                *   Justification: While possible, a web interface is more practical for content creation and management tasks.
            *   Command-line interface:
                *   Score: -1
                *   Justification: Not user-friendly for typical content creators and doesn't meet UI/UX requirements.
    2.  How would you handle rich text editing?
        *   Options:
            *   Use a proven WYSIWYG editor like TinyMCE or CKEditor:
                *   Score: +3
                *   Justification: These editors are mature, feature-rich, and handle complex formatting and media insertion well.
            *   Build a custom rich text editor:
                *   Score: 0
                *   Justification: Very complex to implement properly and reinvents the wheel when good solutions exist.
            *   Use markdown with live preview:
                *   Score: +2
                *   Justification: Simpler and more reliable than WYSIWYG, but may not be user-friendly for non-technical users.
            *   Plain text only:
                *   Score: -1
                *   Justification: Doesn't meet the requirement for rich text editing and poor user experience.
    3.  What's the best approach for SEO optimization?
        *   Options:
            *   Server-side rendering with proper meta tags and structured data:
                *   Score: +3
                *   Justification: Essential for SEO. Search engines can properly crawl and index the content.
            *   Client-side rendering with JavaScript:
                *   Score: 0
                *   Justification: Poor for SEO as search engines may not execute JavaScript properly.
            *   Static site generation:
                *   Score: +2
                *   Justification: Excellent for SEO and performance, but may not be suitable for frequently updated content.
            *   Single page application:
                *   Score: -1
                *   Justification: Generally poor for SEO without additional complexity like server-side rendering.
    4.  How would you implement user role management?
        *   Options:
            *   Role-based access control (RBAC) with middleware:
                *   Score: +3
                *   Justification: Standard, secure, and scalable approach that can handle complex permission structures.
            *   Hard-coded user types in the application:
                *   Score: +1
                *   Justification: Simple but not flexible. Difficult to modify roles without code changes.
            *   File-based user management:
                *   Score: 0
                *   Justification: Not scalable and difficult to manage, especially for role assignments.
            *   No role management:
                *   Score: -1
                *   Justification: Fails to meet the functional requirement and creates security risks.
    5.  What's the best strategy for media management?
        *   Options:
            *   Cloud storage (AWS S3, Cloudinary) with database metadata:
                *   Score: +3
                *   Justification: Scalable, reliable, and offloads media serving from your main server.
            *   Local file system storage:
                *   Score: +1
                *   Justification: Simple but doesn't scale well and complicates backups and deployments.
            *   Database BLOB storage:
                *   Score: -1
                *   Justification: Poor performance and bloats the database. Not recommended for media files.
            *   Third-party media embedding only:
                *   Score: 0
                *   Justification: Limits control and functionality. Users should be able to upload their own media.

# 8. API Gateway Service

*   Description:
    json
    {
      "summary": "An API gateway that routes requests to different microservices.",
      "functional_requirements": [
        "Route requests to appropriate backend services.",
        "Handle authentication and authorization.",
        "Rate limiting and throttling.",
        "Request/response logging and monitoring.",
        "Load balancing between service instances."
      ],
      "non_functional_requirements": [
        "High availability and fault tolerance.",
        "Low latency for request routing.",
        "Scalable to handle high traffic volumes.",
        "Security features to protect backend services.",
        "Comprehensive monitoring and alerting."
      ],
      "ui_ux_requirements": [
        "Admin dashboard for monitoring and configuration.",
        "Real-time metrics and analytics display.",
        "Easy-to-use configuration interface.",
        "Clear error messages and status indicators.",
        "Mobile-responsive admin interface."
      ]
    }
    
*   Questions:
    1.  What's the best approach for service discovery?
        *   Options:
            *   Service registry with health checks (Consul, Eureka):
                *   Score: +3
                *   Justification: Provides dynamic service discovery, health monitoring, and automatic failover capabilities.
            *   Static configuration files:
                *   Score: +1
                *   Justification: Simple but not suitable for dynamic environments where services scale up/down frequently.
            *   DNS-based service discovery:
                *   Score: +2
                *   Justification: Works well but lacks advanced features like health checks and load balancing algorithms.
            *   Hard-coded service endpoints:
                *   Score: -1
                *   Justification: Not scalable or maintainable in a microservices environment.
    2.  How would you implement rate limiting?
        *   Options:
            *   Token bucket algorithm with Redis:
                *   Score: +3
                *   Justification: Efficient, distributed, and provides smooth rate limiting with burst capabilities.
            *   Simple counter in memory:
                *   Score: +1
                *   Justification: Works for single-instance deployments but doesn't scale across multiple gateway instances.
            *   Database-based rate limiting:
                *   Score: 0
                *   Justification: Can work but adds latency and database load for every request.
            *   No rate limiting:
                *   Score: -1
                *   Justification: Fails to meet functional requirements and leaves services vulnerable to abuse.
    3.  What's the best pattern for handling authentication?
        *   Options:
            *   JWT token validation with caching:
                *   Score: +3
                *   Justification: Stateless, scalable, and can be validated without hitting the auth service for every request.
            *   Forward all requests to auth service:
                *   Score: 0
                *   Justification: Creates a bottleneck and single point of failure at the auth service.
            *   API key validation:
                *   Score: +2
                *   Justification: Simple and effective for service-to-service communication but less suitable for user authentication.
            *   No authentication at gateway level:
                *   Score: -1
                *   Justification: Pushes authentication responsibility to individual services, which is less efficient and secure.
    4.  How would you handle load balancing?
        *   Options:
            *   Round-robin with health checks:
                *   Score: +2
                *   Justification: Simple and effective for most use cases, ensures requests don't go to unhealthy instances.
            *   Weighted round-robin based on instance capacity:
                *   Score: +3
                *   Justification: More sophisticated approach that considers different instance capabilities and current load.
            *   Random selection:
                *   Score: +1
                *   Justification: Simple but doesn't consider instance health or load, can lead to uneven distribution.
            *   Always route to the first available service:
                *   Score: -1
                *   Justification: Poor load distribution and can overload single instances.
    5.  What's essential for monitoring and observability?
        *   Options:
            *   Distributed tracing with metrics and logs:
                *   Score: +3
                *   Justification: Comprehensive observability stack that provides end-to-end request visibility and debugging capabilities.
            *   Basic request/response logging:
                *   Score: +1
                *   Justification: Better than nothing but lacks the depth needed for complex distributed systems.
            *   Only error logging:
                *   Score: 0
                *   Justification: Insufficient for understanding system behavior and performance patterns.
            *   No monitoring:
                *   Score: -1
                *   Justification: Fails to meet requirements and makes system maintenance and debugging extremely difficult.

# 9. Video Streaming Platform

*   Description:
    json
    {
      "summary": "A platform for uploading, storing, and streaming video content.",
      "functional_requirements": [
        "Video upload with multiple format support.",
        "Video transcoding to different resolutions and formats.",
        "Adaptive bitrate streaming for optimal viewing experience.",
        "User authentication and content access control.",
        "Video metadata management and search functionality."
      ],
      "non_functional_requirements": [
        "Low latency video streaming globally.",
        "Scalable storage for large video files.",
        "High availability and fault tolerance.",
        "Cost-effective content delivery.",
        "Security for content protection."
      ],
      "ui_ux_requirements": [
        "Responsive video player with quality controls.",
        "Intuitive upload interface with progress indicators.",
        "Clean video catalog and search interface.",
        "Mobile-friendly design for all screen sizes.",
        "Smooth playback experience across devices."
      ]
    }
    
*   Questions:
    1.  What's the best approach for video storage and delivery?
        *   Options:
            *   Cloud storage with CDN (AWS S3 + CloudFront):
                *   Score: +3
                *   Justification: Provides global distribution, scalability, and optimized delivery for video content.
            *   Local server storage:
                *   Score: 0
                *   Justification: Limited scalability and global reach, poor performance for international users.
            *   Peer-to-peer distribution:
                *   Score: +1
                *   Justification: Can reduce costs but introduces complexity and reliability concerns.
            *   Database blob storage:
                *   Score: -1
                *   Justification: Completely inappropriate for large video files, will cause severe performance issues.
    2.  How would you handle video transcoding?
        *   Options:
            *   Cloud-based transcoding service (AWS Elemental, FFmpeg on containers):
                *   Score: +3
                *   Justification: Scalable, cost-effective, and handles the complexity of different formats and resolutions.
            *   Real-time transcoding on upload:
                *   Score: +1
                *   Justification: Can work but creates bottlenecks and long upload times for users.
            *   Client-side transcoding:
                *   Score: 0
                *   Justification: Unreliable due to varying client capabilities and bandwidth limitations.
            *   Single format only (no transcoding):
                *   Score: -1
                *   Justification: Poor user experience as not all devices support all formats.
    3.  What streaming protocol would you choose?
        *   Options:
            *   HLS (HTTP Live Streaming) with adaptive bitrate:
                *   Score: +3
                *   Justification: Industry standard, widely supported, and provides adaptive streaming for optimal user experience.
            *   Progressive HTTP download:
                *   Score: +1
                *   Justification: Simple but doesn't provide adaptive streaming or efficient bandwidth usage.
            *   RTMP streaming:
                *   Score: +1
                *   Justification: Good for live streaming but requires special servers and isn't suitable for on-demand content.
            *   Raw video file download:
                *   Score: -1
                *   Justification: Not streaming at all, poor user experience with large file downloads.
    4.  How would you implement user access control?
        *   Options:
            *   JWT tokens with signed URLs for video access:
                *   Score: +3
                *   Justification: Secure, scalable, and prevents unauthorized direct access to video files.
            *   Session-based authentication:
                *   Score: +2
                *   Justification: Works but can be more complex to scale and doesn't protect direct file access.
            *   IP-based restrictions:
                *   Score: 0
                *   Justification: Limited security and doesn't work well for mobile users or shared networks.
            *   No access control:
                *   Score: -1
                *   Justification: Fails to meet functional requirements and exposes all content publicly.
    5.  What's crucial for video player implementation?
        *   Options:
            *   HTML5 video with JavaScript controls and quality selection:
                *   Score: +3
                *   Justification: Standard, cross-platform compatible, and provides full control over playback experience.
            *   Third-party embedded players only:
                *   Score: +1
                *   Justification: Quick to implement but limits customization and control over user experience.
            *   Flash-based video player:
                *   Score: -1
                *   Justification: Deprecated technology with poor security and limited browser support.
            *   Download-only, no streaming player:
                *   Score: -1
                *   Justification: Poor user experience and doesn't meet streaming requirements.

# 10. IoT Device Management Platform

*   Description:
    json
    {
      "summary": "A platform for managing and monitoring IoT devices at scale.",
      "functional_requirements": [
        "Device registration and authentication.",
        "Real-time telemetry data collection and storage.",
        "Remote device configuration and firmware updates.",
        "Device status monitoring and alerting.",
        "Dashboard for visualizing device data and metrics."
      ],
      "non_functional_requirements": [
        "Support for thousands of concurrent device connections.",
        "Low latency for critical device communications.",
        "High reliability and uptime for device connectivity.",
        "Secure communication protocols.",
        "Scalable data storage for time-series data."
      ],
      "ui_ux_requirements": [
        "Real-time dashboard with device status overview.",
        "Interactive charts and graphs for telemetry data.",
        "Device management interface for configuration.",
        "Mobile-responsive design for field technicians.",
        "Intuitive alert and notification system."
      ]
    }
    
*   Questions:
    1.  What protocol would you use for device communication?
        *   Options:
            *   MQTT with message broker:
                *   Score: +3
                *   Justification: Lightweight, designed for IoT, supports pub/sub patterns, and handles unreliable networks well.
            *   HTTP REST APIs:
                *   Score: +2
                *   Justification: Simple and widely supported, but more overhead and less suitable for real-time communication.
            *   WebSockets:
                *   Score: +1
                *   Justification: Good for real-time communication but not optimized for IoT devices with limited resources.
            *   Email-based communication:
                *   Score: -1
                *   Justification: Not suitable for real-time IoT communication and lacks the necessary reliability.
    2.  How would you handle device authentication?
        *   Options:
            *   X.509 certificates with mutual TLS:
                *   Score: +3
                *   Justification: Industry standard for IoT security, provides strong device identity verification.
            *   API keys:
                *   Score: +1
                *   Justification: Simple but less secure than certificates and harder to rotate safely.
            *   Username/password:
                *   Score: 0
                *   Justification: Not ideal for devices as credentials are harder to manage and rotate securely.
            *   No authentication:
                *   Score: -1
                *   Justification: Major security vulnerability and fails to meet functional requirements.
    3.  What's the best approach for storing telemetry data?
        *   Options:
            *   Time-series database (InfluxDB, TimescaleDB):
                *   Score: +3
                *   Justification: Optimized for time-series data with efficient storage and querying capabilities.
            *   Regular relational database:
                *   Score: +1
                *   Justification: Can work but not optimized for time-series data patterns and may scale poorly.
            *   NoSQL document database:
                *   Score: +2
                *   Justification: Flexible schema and can handle varying data structures well.
            *   File-based storage:
                *   Score: -1
                *   Justification: Not suitable for real-time querying and concurrent access patterns.
    4.  How would you implement firmware updates?
        *   Options:
            *   OTA (Over-The-Air) updates with staged rollouts:
                *   Score: +3
                *   Justification: Industry standard approach that minimizes risk and provides rollback capabilities.
            *   Manual physical updates:
                *   Score: -1
                *   Justification: Not scalable and defeats the purpose of remote device management.
            *   Automatic updates without controls:
                *   Score: 0
                *   Justification: Risky as bad updates could brick entire device fleets simultaneously.
            *   No update capability:
                *   Score: -1
                *   Justification: Fails to meet functional requirements and leaves devices vulnerable.
    5.  What's essential for monitoring device health?
        *   Options:
            *   Real-time metrics with configurable alerts:
                *   Score: +3
                *   Justification: Enables proactive monitoring and quick response to device issues.
            *   Daily email reports:
                *   Score: +1
                *   Justification: Better than nothing but not suitable for time-critical issues.
            *   Manual device checking:
                *   Score: -1
                *   Justification: Not scalable and defeats the purpose of automated monitoring.
            *   No monitoring:
                *   Score: -1
                *   Justification: Fails to meet functional requirements and provides no visibility into device status.

---

# Fresher Level

# 1. Collaborative Whiteboard

*   Description:
    json
    {
      "summary": "A real-time collaborative whiteboard application where multiple users can draw simultaneously.",
      "functional_requirements": [
        "Users can draw freeform lines on a canvas.",
        "Users can choose different colors and brush sizes.",
        "Changes made by one user should appear on all other users' screens in real-time.",
        "An undo feature to revert the last action.",
        "The whiteboard state should be saved so users can return to it later."
      ],
      "non_functional_requirements": [
        "Low latency for drawing updates (<100ms).",
        "The application must handle multiple concurrent users smoothly.",
        "The server must be scalable to handle many simultaneous sessions.",
        "The application should be secure, preventing unauthorized users from joining a session.",
        "Efficient data transfer to minimize bandwidth usage."
      ],
      "ui_ux_requirements": [
        "A large, unobstructed canvas for drawing.",
        "An intuitive toolbar for selecting tools (pen, color, size).",
        "A smooth and natural drawing experience.",
        "A visual indicator of other users cursors or presence.",
        "The interface should be simple and not distract from the drawing area."
      ]
    }
    
*   Questions:
    1.  What is the best technology for the real-time communication between clients?
        *   Options:
            *   WebSockets:
                *   Score: +3
                *   Justification: WebSockets provide a persistent, bidirectional communication channel between the client and server, which is ideal for the low-latency, high-frequency updates required for a real-time drawing application.
            *   HTTP Long Polling:
                *   Score: +1
                *   Justification: This is a fallback for environments where WebSockets are not supported. It's less efficient and has higher latency, as it involves repeatedly opening and closing HTTP connections.
            *   Server-Sent Events (SSE):
                *   Score: 0
                *   Justification: SSE is a one-way communication channel (server to client). It would not work for this application because the client needs to send drawing data *to* the server.
            *   Repeatedly fetching data with `setInterval`.
                *   Score: -1
                *   Justification: This is extremely inefficient and would create a huge amount of unnecessary network traffic and server load. It's not a real-time solution.
    2.  How would you manage the state of the whiteboard?
        *   Options:
            *   The server maintains the authoritative state of the whiteboard, and clients receive updates.
                *   Score: +3
                *   Justification: This is the most robust architecture. It ensures that all clients are in sync and provides a single source of truth. It also makes it easier to save the state and handle new users joining.
            *   Each client broadcasts its changes to all other clients (peer-to-peer).
                *   Score: +1
                *   Justification: While this can work for very small groups, it's hard to scale and can lead to inconsistencies. It's also difficult to save the state or have an authoritative "undo" history.
            *   The first user to join becomes the "host" and is the source of truth.
                *   Score: 0
                *   Justification: This is a brittle architecture. If the host user disconnects, the entire session could be lost. A server-based approach is much more reliable.
            *   The client manages its own state and only sends final drawings to the server.
                *   Score: -1
                *   Justification: This would not be a real-time collaborative application. Other users would not see the drawing as it happens.
    3.  How would you implement the drawing on the canvas?
        *   Options:
            *   Using the HTML5 Canvas API.
                *   Score: +3
                *   Justification: The Canvas API is designed for this exact purpose. It provides a low-level, pixel-based drawing surface that is highly performant.
            *   Using SVG (Scalable Vector Graphics).
                *   Score: +2
                *   Justification: SVG could also work. The advantage is that every line is a DOM element, which can make it easier to manipulate individual lines later. However, for freeform drawing with many points, the Canvas is generally more performant.
            *   Dynamically creating and positioning thousands of tiny `<div>` elements.
                *   Score: -1
                *   Justification: This would be extremely slow and would crash the browser very quickly. It's not a viable approach.
            *   Using a library like Three.js.
                *   Score: 0
                *   Justification: Three.js is a 3D graphics library. While it uses a canvas, it's designed for 3D scenes and is overkill for a 2D drawing application.
    4.  How would you design the data structure for a single line drawing?
        *   Options:
            *   An object containing an array of coordinates `[x, y]`, along with properties like `color` and `brushSize`.
                *   Score: +3
                *   Justification: This is a clean, efficient, and scalable way to represent a line. It's easy to serialize into JSON to send over WebSockets and easy to render on the canvas.
            *   A single, very long string of comma-separated coordinates.
                *   Score: +1
                *   Justification: This is less structured and harder to parse and work with than a proper object. It also makes it difficult to store metadata like color.
            *   A bitmap image of the line.
                *   Score: 0
                *   Justification: Sending a bitmap for every small segment of a line would be very inefficient in terms of bandwidth. Vector data (coordinates) is much smaller.
            *   A function that knows how to draw the line.
                *   Score: -1
                *   Justification: You cannot easily serialize and send a function over a network. You need to send data, not code.
    5.  How would you handle the "undo" feature in a collaborative environment?
        *   Options:
            *   The server maintains a stack of all drawing actions. When a user undoes, it pops their last action from the stack and broadcasts a "redraw" event to all clients.
                *   Score: +3
                *   Justification: This is a robust way to handle undo. The server has the complete history and can correctly manage the state for all users.
            *   Each client manages its own undo stack.
                *   Score: 0
                *   Justification: This would not work. If one user undoes their action, the other users would not see that change, leading to an inconsistent state.
            *   The server sends the entire whiteboard state every time someone draws or undoes.
                *   Score: -1
                *   Justification: This would be extremely inefficient. You should only send the specific action (e.g., "draw line X" or "remove line Y"), not the entire state, on every update.
            *   The "undo" button is disabled because it's too complex.
                *   Score: -1
                *   Justification: This fails to meet a functional requirement of the project.

# 2. Food Delivery App (Simplified)

*   Description:
    json
    {
      "summary": "A simplified version of a food delivery app like Uber Eats or DoorDash.",
      "functional_requirements": [
        "Users can browse a list of restaurants.",
        "Each restaurant has a menu of items that can be added to a cart.",
        "Users can place an order from their cart.",
        "The restaurant receives the order in real-time.",
        "Users can see the status of their order (e.g., Placed, Preparing, Out for Delivery, Delivered)."
      ],
      "non_functional_requirements": [
        "The system must be reliable; orders cannot be lost.",
        "The real-time order status updates must have low latency.",
        "The system needs a backend with a database to manage users, restaurants, menus, and orders.",
        "The application must be secure, especially around user data and payments (even if simulated).",
        "The architecture should be scalable to add more restaurants and users."
      ],
      "ui_ux_requirements": [
        "A visually appealing and easy-to-navigate list of restaurants.",
        "An intuitive menu interface.",
        "A simple and clear shopping cart and checkout process.",
        "A real-time order tracking screen.",
        "The app must be mobile-first."
      ]
    }
    
*   Questions:
    1.  What technology would you use for real-time order updates for both the user and the restaurant?
        *   Options:
            *   WebSockets or a service like Pusher/Ably.
                *   Score: +3
                *   Justification: This is the best tool for real-time, bidirectional communication. The backend can push status updates to the user and new orders to the restaurant instantly.
            *   HTTP polling from the client every 5 seconds.
                *   Score: 0
                *   Justification: This is inefficient and does not provide true real-time updates. It creates a lot of unnecessary network traffic and can feel sluggish.
            *   Server-Sent Events (SSE).
                *   Score: +1
                *   Justification: SSE could work for pushing updates *to* the user, but it's a one-way channel. The restaurant client also needs to send updates back to the server (e.g., 'order accepted'), making WebSockets a better fit.
            *   Push notifications.
                *   Score: +2
                *   Justification: Push notifications are a great way to alert a user when the app is in the background, but they are not the right tool for in-app, real-time UI updates.
    2.  How would you model the database schema for menus?
        *   Options:
            *   Tables for `Restaurants`, `MenuItems`, and a join table `Menu` that links them. `MenuItems` would have properties like name, price, description.
                *   Score: +3
                *   Justification: A standard, normalized relational design. It's flexible and allows menu items to potentially belong to multiple menus or categories.
            *   A `Restaurants` table with a JSON column that contains the entire menu.
                *   Score: +1
                *   Justification: This is denormalized and can be fast for reading a whole menu. However, it makes it very difficult to query for individual menu items across all restaurants or to manage items that might be shared.
            *   In a NoSQL database, have a `restaurants` collection where each document contains an array of menu item objects.
                *   Score: +2
                *   Justification: A common and effective approach in document databases. It keeps all of a restaurant's information in one place, which is good for retrieval.
            *   A single giant `MenuItems` table with a `restaurant_id` column.
                *   Score: +2
                *   Justification: This is also a valid relational approach and is simpler than the many-to-many design. It's a very strong choice.
    3.  What is a critical component for ensuring orders are not lost?
        *   Options:
            *   Using database transactions when an order is placed.
                *   Score: +3
                *   Justification: This is crucial. Placing an order might involve multiple database operations (creating the order, updating inventory, processing payment). A transaction ensures that all these steps succeed or fail together, preventing the system from getting into an inconsistent state (e.g., payment taken but no order created).
            *   Writing good code with no bugs.
                *   Score: 0
                *   Justification: While important, it's not a strategy. You must design the system to be resilient to failure.
            *   Having a reliable internet connection.
                *   Score: 0
                *   Justification: This is outside the control of the application's architecture. The system must be designed to handle network failures.
            *   Using a message queue like RabbitMQ or Kafka to process orders.
                *   Score: +2
                *   Justification: This is an excellent pattern for reliability. When an order is placed, it's added to a queue. A separate worker process then handles the order. This ensures that the order is persisted and will be processed even if the worker crashes and restarts.
    4.  How would you handle the restaurant side of the application?
        *   Options:
            *   A separate web application, likely for a tablet, that is always on and connected via WebSockets to receive new orders.
                *   Score: +3
                *   Justification: This is how real-world systems work. The restaurant needs a dedicated, persistent interface to manage incoming orders in real-time.
            *   Send an email to the restaurant for every new order.
                *   Score: -1
                *   Justification: This is not reliable or real-time. Emails can be delayed, go to spam, or be missed entirely. It doesn't allow for real-time status updates.
            *   Send an SMS message to the restaurant owner.
                *   Score: 0
                *   Justification: Better than email, but still not a proper interface for managing a high volume of orders.
            *   Require the restaurant to log in to a web page and manually refresh to see new orders.
                *   Score: -1
                *   Justification: This is not real-time and would be a terrible user experience for the restaurant.
    5.  What is a major scalability concern?
        *   Options:
            *   The database. As the number of users, restaurants, and orders grows, the database will be the biggest bottleneck. It needs to be designed with good indexes and a clear scaling strategy (e.g., read replicas).
                *   Score: +3
                *   Justification: In most applications of this type, the database is the first and most critical bottleneck. A poorly designed schema or slow queries can bring the entire system to a halt at scale.
            *   The number of WebSocket connections.
                *   Score: +2
                *   Justification: This is also a significant concern. A single server can only handle a certain number of persistent connections. You would need a strategy for load balancing WebSocket connections across multiple servers.
            *   The frontend application bundle size.
                *   Score: 0
                *   Justification: While important for client performance, it's not a backend scalability concern.
            *   The cost of the third-party map API.
                *   Score: +1
                *   Justification: This is a business/financial scaling concern, not a technical one in the same way as the database or WebSockets.

# 3. Real-Time Chat Application

*   Description:
    json
    {
      "summary": "A real-time messaging application like Slack or Discord for team communication.",
      "functional_requirements": [
        "Users can join different chat channels or rooms.",
        "Users can send and receive messages in real-time.",
        "Message history should be persisted and searchable.",
        "Users can see when other users are typing.",
        "Support for file uploads and sharing."
      ],
      "non_functional_requirements": [
        "Messages must be delivered with minimal latency (<200ms).",
        "The system must handle thousands of concurrent users across multiple channels.",
        "Message delivery must be reliable - no messages should be lost.",
        "The application should work on both web and mobile platforms.",
        "Offline users should receive messages when they come back online."
      ],
      "ui_ux_requirements": [
        "A clean, organized interface showing channels and messages.",
        "Real-time message updates without manual refresh.",
        "Clear indicators for unread messages and online status.",
        "Intuitive file upload and sharing interface.",
        "Responsive design that works well on all devices."
      ]
    }
    
*   Questions:
    1.  What's the best approach for real-time message delivery?
        *   Options:
            *   WebSockets with a message broker like Redis:
                *   Score: +3
                *   Justification: WebSockets provide persistent, low-latency bidirectional communication. Redis can handle message fanout to multiple users efficiently and provides pub/sub capabilities.
            *   HTTP long polling:
                *   Score: +1
                *   Justification: Works but less efficient than WebSockets. Higher latency and more resource intensive due to connection overhead.
            *   Server-Sent Events (SSE):
                *   Score: +2
                *   Justification: Good for pushing messages to clients, but one-way only. Would need separate HTTP requests for sending messages.
            *   Regular HTTP requests every few seconds:
                *   Score: -1
                *   Justification: Not real-time and very inefficient. Creates unnecessary server load and poor user experience.
    2.  How would you design the database schema for messages?
        *   Options:
            *   Separate tables for Channels, Users, and Messages with proper foreign keys:
                *   Score: +3
                *   Justification: Clean, normalized relational design that's easy to query and maintain. Supports complex queries for search and analytics.
            *   Single Messages table with channel_id and user_id columns:
                *   Score: +2
                *   Justification: Simpler design that works well for basic functionality. Less normalized but easier to query for message history.
            *   NoSQL document store with messages grouped by channel:
                *   Score: +2
                *   Justification: Good for high-volume writes and natural data grouping. Works well with modern scaling patterns.
            *   Store all messages in Redis only:
                *   Score: +1
                *   Justification: Fast but risky for persistence. Redis is better as a cache layer rather than primary storage for important data.
    3.  How would you implement message search functionality?
        *   Options:
            *   Full-text search using PostgreSQL or MySQL built-in features:
                *   Score: +2
                *   Justification: Good starting point that leverages existing database. Works well for moderate scale and basic search requirements.
            *   Elasticsearch or Solr for advanced search capabilities:
                *   Score: +3
                *   Justification: Dedicated search engines provide powerful full-text search, faceting, and analytics. Best for comprehensive search functionality.
            *   Simple LIKE queries on message content:
                *   Score: +1
                *   Justification: Basic approach that works for small datasets but doesn't scale well and lacks advanced search features.
            *   Client-side search through loaded messages:
                *   Score: -1
                *   Justification: Very limited and doesn't work for searching historical messages beyond what's currently loaded.
    4.  What's crucial for handling file uploads in chat?
        *   Options:
            *   Upload to cloud storage (S3, CloudFront) with virus scanning:
                *   Score: +3
                *   Justification: Scalable, secure approach that offloads storage and provides CDN benefits. Virus scanning is essential for user safety.
            *   Store files directly in the database:
                *   Score: -1
                *   Justification: Poor practice that bloats the database and hurts performance. Databases aren't optimized for large binary data.
            *   Save files to local server filesystem:
                *   Score: 0
                *   Justification: Works for small scale but doesn't scale horizontally and lacks redundancy. Single point of failure.
            *   Allow unlimited file uploads without restrictions:
                *   Score: -1
                *   Justification: Security and resource risk. Could lead to server overload and potential security vulnerabilities.
    5.  How would you handle user presence (online/offline status)?
        *   Options:
            *   Heartbeat mechanism with Redis to track active connections:
                *   Score: +3
                *   Justification: Efficient approach using Redis's expiration features. Accurately tracks real-time presence with minimal overhead.
            *   Database timestamp updated on every user action:
                *   Score: +1
                *   Justification: Simple but creates excessive database writes. Not efficient for high-traffic applications.
            *   WebSocket connection status only:
                *   Score: +2
                *   Justification: Works but doesn't handle edge cases like network interruptions gracefully. No persistence across reconnections.
            *   Manual user status updates only:
                *   Score: 0
                *   Justification: Unreliable as users often forget to update status. Doesn't provide accurate real-time presence information.

# 4. Video Streaming Platform

*   Description:
    json
    {
      "summary": "A video streaming platform like YouTube or Vimeo for uploading and watching videos.",
      "functional_requirements": [
        "Users can upload videos in various formats.",
        "Videos should be transcoded to multiple quality levels (480p, 720p, 1080p).",
        "Users can search for videos by title, description, and tags.",
        "Video playback with adaptive quality based on connection speed.",
        "Users can like, comment, and subscribe to channels."
      ],
      "non_functional_requirements": [
        "Fast video upload and processing pipeline.",
        "Scalable video delivery with global CDN support.",
        "High availability for video streaming (99.9% uptime).",
        "Cost-effective storage and bandwidth usage.",
        "Support for mobile and web platforms."
      ],
      "ui_ux_requirements": [
        "Intuitive video player with quality controls.",
        "Smooth video upload progress indication.",
        "Organized video library and playlist management.",
        "Responsive design for all screen sizes.",
        "Fast search results with relevant suggestions."
      ]
    }
    
*   Questions:
    1.  What's the best approach for video transcoding?
        *   Options:
            *   Cloud-based transcoding service (AWS Elemental, Google Transcoder):
                *   Score: +3
                *   Justification: Managed services handle the complexity of transcoding at scale. Cost-effective and provides multiple output formats automatically.
            *   Self-hosted FFmpeg on dedicated servers:
                *   Score: +2
                *   Justification: More control and potentially cost-effective for high volume, but requires significant infrastructure management.
            *   Client-side transcoding before upload:
                *   Score: +1
                *   Justification: Reduces server load but limits quality control and creates inconsistent user experience across devices.
            *   No transcoding, serve original files only:
                *   Score: -1
                *   Justification: Poor user experience with varying quality and file sizes. Doesn't support adaptive streaming.
    2.  How would you implement adaptive video streaming?
        *   Options:
            *   HLS (HTTP Live Streaming) or DASH protocols:
                *   Score: +3
                *   Justification: Industry-standard protocols that automatically adapt quality based on bandwidth. Supported by most players and CDNs.
            *   Progressive download with quality selection:
                *   Score: +2
                *   Justification: Simpler implementation but less efficient. Requires manual quality selection and doesn't adapt to changing network conditions.
            *   Single quality stream only:
                *   Score: +1
                *   Justification: Simplest approach but poor user experience for users with varying connection speeds.
            *   WebRTC for video streaming:
                *   Score: 0
                *   Justification: WebRTC is designed for real-time communication, not on-demand video streaming. Wrong tool for this use case.
    3.  What's critical for video search functionality?
        *   Options:
            *   Elasticsearch with video metadata and transcripts:
                *   Score: +3
                *   Justification: Powerful search engine that can index metadata, descriptions, and even video transcripts for comprehensive search.
            *   Database full-text search on titles and descriptions:
                *   Score: +2
                *   Justification: Good starting point for basic search. Works well for smaller catalogs but may not scale to large video libraries.
            *   Simple SQL LIKE queries:
                *   Score: +1
                *   Justification: Basic approach that works for small datasets but lacks relevance ranking and advanced search features.
            *   Manual categorization only:
                *   Score: 0
                *   Justification: Doesn't provide search functionality and doesn't scale with large video catalogs.
    4.  How would you optimize video delivery performance?
        *   Options:
            *   Global CDN with edge caching (CloudFront, CloudFlare):
                *   Score: +3
                *   Justification: Essential for global video delivery. Reduces latency and bandwidth costs by serving content from locations close to users.
            *   Single data center with high bandwidth:
                *   Score: +1
                *   Justification: Works for regional service but poor experience for global users due to latency and limited bandwidth.
            *   Peer-to-peer video delivery:
                *   Score: +2
                *   Justification: Can reduce bandwidth costs but complex to implement and may have reliability issues. Good as supplementary approach.
            *   Local server storage only:
                *   Score: -1
                *   Justification: Doesn't scale and provides poor performance for users far from the server location.
    5.  What's important for video storage strategy?
        *   Options:
            *   Tiered storage with hot/cold data classification:
                *   Score: +3
                *   Justification: Cost-effective approach that keeps frequently accessed videos in fast storage and archives older content to cheaper storage.
            *   Store everything in fastest storage tier:
                *   Score: +1
                *   Justification: Good performance but very expensive at scale. Most videos aren't accessed frequently after initial period.
            *   Local disk storage only:
                *   Score: 0
                *   Justification: Doesn't provide redundancy or scalability. Risk of data loss and limited capacity.
            *   No storage strategy, keep everything the same:
                *   Score: -1
                *   Justification: Inefficient and expensive approach that doesn't optimize for access patterns or cost.

# 5. Multi-Tenant SaaS Application

*   Description:
    json
    {
      "summary": "A multi-tenant Software as a Service application like Salesforce or Slack where multiple organizations share the same application instance.",
      "functional_requirements": [
        "Multiple organizations (tenants) can use the same application.",
        "Each tenant data must be completely isolated from others.",
        "Tenants can customize certain aspects of the application (branding, workflows).",
        "Admin users can manage their organization users and settings.",
        "Support for different subscription tiers with varying features."
      ],
      "non_functional_requirements": [
        "Strong data isolation and security between tenants.",
        "Scalable architecture to handle thousands of tenants.",
        "High availability with minimal downtime.",
        "Efficient resource utilization across tenants.",
        "Support for tenant-specific compliance requirements."
      ],
      "ui_ux_requirements": [
        "Tenant-specific branding and customization.",
        "Role-based access control interface.",
        "Admin dashboard for tenant management.",
        "Consistent user experience across all features.",
        "Mobile-responsive design for all tenant interfaces."
      ]
    }
    
*   Questions:
    1.  What's the best approach for tenant data isolation?
        *   Options:
            *   Row-level security with tenant_id in shared tables:
                *   Score: +3
                *   Justification: Most efficient approach for large numbers of tenants. Shared infrastructure with strong logical isolation through database-level security.
            *   Separate database per tenant:
                *   Score: +2
                *   Justification: Strongest isolation but expensive and complex to manage. Good for high-security requirements or large tenants.
            *   Separate application instance per tenant:
                *   Score: +1
                *   Justification: Highest isolation but very expensive and doesn't scale well. Only viable for very large enterprise customers.
            *   Schema-based separation within same database:
                *   Score: +2
                *   Justification: Good middle ground between shared tables and separate databases. Easier management than separate databases.
    2.  How would you handle tenant-specific customizations?
        *   Options:
            *   Configuration-driven UI with database-stored settings:
                *   Score: +3
                *   Justification: Flexible approach that allows runtime customization without code changes. Scalable and maintainable.
            *   Separate code branches for each tenant:
                *   Score: -1
                *   Justification: Maintenance nightmare that doesn't scale. Makes updates and bug fixes extremely complex.
            *   Template-based theming system:
                *   Score: +2
                *   Justification: Good for visual customizations but limited for functional changes. Works well for branding requirements.
            *   No customization, identical experience for all:
                *   Score: 0
                *   Justification: Simplest to maintain but doesn't meet tenant-specific requirements that drive SaaS adoption.
    3.  What's critical for subscription tier management?
        *   Options:
            *   Feature flags with role-based access control:
                *   Score: +3
                *   Justification: Flexible system that can enable/disable features based on subscription level. Easy to manage and update.
            *   Separate application versions for each tier:
                *   Score: +1
                *   Justification: Clear separation but creates maintenance overhead and deployment complexity.
            *   Hard-coded feature restrictions:
                *   Score: 0
                *   Justification: Inflexible approach that requires code changes for tier modifications. Doesn't scale well.
            *   Honor system with no enforcement:
                *   Score: -1
                *   Justification: No business protection and doesn't prevent unauthorized feature usage.
    4.  How would you ensure data security between tenants?
        *   Options:
            *   Database-level row security policies + application-level checks:
                *   Score: +3
                *   Justification: Defense in depth approach with both database and application security. Prevents data leakage even with application bugs.
            *   Application-level filtering only:
                *   Score: +2
                *   Justification: Common approach but relies entirely on application code correctness. Risk of bugs exposing data.
            *   Separate encryption keys per tenant:
                *   Score: +2
                *   Justification: Additional security layer that protects data even if other isolation fails. Good for compliance requirements.
            *   Trust application logic completely:
                *   Score: -1
                *   Justification: Risky approach that provides no protection against application bugs or security vulnerabilities.
    5.  What's important for scaling multi-tenant applications?
        *   Options:
            *   Horizontal database sharding by tenant:
                *   Score: +3
                *   Justification: Effective way to distribute load across multiple database instances. Allows scaling to thousands of tenants.
            *   Vertical scaling only (bigger servers):
                *   Score: +1
                *   Justification: Limited scalability approach that eventually hits hardware limits. More expensive than horizontal scaling.
            *   Load balancing application servers:
                *   Score: +2
                *   Justification: Important for application layer scaling but doesn't address database bottlenecks which are often the limiting factor.
            *   No specific scaling strategy:
                *   Score: -1
                *   Justification: Will inevitably hit performance and capacity limits as tenant count grows.

---

# Senior Level

# 1. Ride-Sharing App (like Uber/Lyft)

*   Description:
    json
    {
      "summary": "A large-scale, real-time ride-sharing application connecting drivers and riders.",
      "functional_requirements": [
        "Riders can request a ride from their current location to a destination.",
        "Available drivers are notified of nearby ride requests.",
        "A driver can accept a ride request.",
        "The system should calculate the optimal route and estimated fare.",
        "Both rider and driver can see each other real-time location on a map."
      ],
      "non_functional_requirements": [
        "High availability and fault tolerance (the service must always be online).",
        "Low latency for location updates and ride requests (<200ms).",
        "Scalability to handle millions of users and tens of thousands of concurrent rides.",
        "High accuracy for GPS location tracking and route calculation.",
        "Secure payment processing and user data protection."
      ],
      "ui_ux_requirements": [
        "A map-centric interface for both riders and drivers.",
        "A seamless and intuitive ride booking flow.",
        "Clear and constant communication (e.g., Driver is arriving).",
        "A simple and secure payment experience.",
        "A rating and review system for both drivers and riders."
      ]
    }
    
*   Questions:
    1.  What is the core architectural pattern you would use for this system?
        *   Options:
            *   Microservices Architecture:
                *   Score: +3
                *   Justification: This is the ideal choice for a complex system like a ride-sharing app. It allows you to break down the system into smaller, independent services (e.g., user management, driver management, trip management, payments) that can be developed, deployed, and scaled independently.
            *   Monolithic Architecture:
                *   Score: 0
                *   Justification: A monolith would be very difficult to scale and maintain for a system of this complexity. A single change could require redeploying the entire application, and a failure in one part could bring down the whole system.
            *   Serverless Architecture (e.g., AWS Lambda for everything):
                *   Score: +1
                *   Justification: While some parts of the system could be serverless (e.g., processing a new user signup), it's not a good fit for the core real-time components that require persistent connections and low-latency state management (like tracking driver locations).
            *   Peer-to-peer Architecture:
                *   Score: -1
                *   Justification: This would not work. You need a central authority to manage ride matching, payments, and safety. You cannot have riders and drivers connecting directly without a trusted intermediary.
    2.  How would you handle the real-time location tracking of thousands of drivers?
        *   Options:
            *   Use a combination of WebSockets for communication and a geospatial database (like PostgreSQL with PostGIS) or a specialized service (like Redis with its geospatial features) to efficiently query for nearby drivers.
                *   Score: +3
                *   Justification: This is a robust and scalable solution. WebSockets provide the real-time communication, and a geospatial index is crucial for performing "find drivers within X radius" queries efficiently without scanning the entire database.
            *   Have every driver's app constantly send its location to a standard relational database (like MySQL).
                *   Score: 0
                *   Justification: This would not scale. A standard relational database is not optimized for the high volume of writes and the complex geospatial queries required. The database would quickly become a bottleneck.
            *   Use HTTP polling from the rider's app to constantly ask for the driver's location.
                *   Score: -1
                *   Justification: This is very inefficient and would create a massive amount of unnecessary network traffic. A push-based system (WebSockets) is far superior.
            *   Use a message queue like RabbitMQ or Kafka for location updates.
                *   Score: +2
                *   Justification: This is a very good component of a larger solution. A message queue can decouple the ingestion of location data from its processing, which is great for scalability and resilience. However, you still need a way to store and query the latest location, which is where the geospatial database comes in.
    3.  How would you design the driver-rider matching algorithm?
        *   Options:
            *   A service that first queries for the N closest drivers using a geospatial index, and then filters and ranks them based on other factors (e.g., driver rating, vehicle type, estimated time to pickup).
                *   Score: +3
                *   Justification: This is a practical and effective approach. It balances geographical proximity with other important business rules to find the *best* match, not just the closest one.
            *   Iterate through every available driver in the system and calculate their distance to the rider.
                *   Score: -1
                *   Justification: This is a brute-force approach that would be far too slow to work at scale. It would have O(N) complexity, where N is the number of drivers.
            *   Divide the map into a grid and only search for drivers in the same grid cell as the rider.
                *   Score: +2
                *   Justification: This is a good optimization technique (a form of sharding or geohashing). It's a great way to narrow down the search space before applying more fine-grained logic. It's a key part of a scalable solution.
            *   Let the rider manually choose a driver from a list of all available drivers.
                *   Score: 0
                *   Justification: This would provide a poor user experience. It puts the burden of choice on the rider and doesn't optimize the system for efficiency.
    4.  What is a major challenge related to payments, and how would you address it?
        *   Options:
            *   Ensuring security and PCI compliance. This is addressed by using a third-party payment processor (like Stripe or Braintree) to handle all credit card data, so sensitive information never touches your servers.
                *   Score: +3
                *   Justification: This is the most critical aspect of handling payments. Building a PCI-compliant system yourself is incredibly complex and expensive. Offloading this to a trusted third party is the standard and correct approach.
            *   Calculating the fare.
                *   Score: +1
                *   Justification: While fare calculation can be complex (with surge pricing, tolls, etc.), it's a business logic problem, not a fundamental security or infrastructure challenge like PCI compliance.
            *   Handling multiple currencies.
                *   Score: +2
                *   Justification: This is an important internationalization feature, and payment processors like Stripe provide tools to handle it. It's a significant but solvable problem.
            *   Making sure drivers get paid on time.
                *   Score: +1
                *   Justification: This is a business operations issue. While important for driver satisfaction, the technical implementation of payouts is usually handled by the payment processor's APIs.
    5.  How would you ensure the system is highly available?
        *   Options:
            *   Deploying the microservices across multiple availability zones (AZs) in a cloud provider, with load balancers, health checks, and auto-scaling groups.
                *   Score: +3
                *   Justification: This is the standard approach to achieving high availability in the cloud. It ensures that the failure of a single server or even an entire data center does not bring down the application.
            *   Running the entire application on a single, very powerful server.
                *   Score: -1
                *   Justification: This is a single point of failure. If that server goes down, the entire service is offline.
            *   Having a hot standby server that you can manually switch to if the primary one fails.
                *   Score: 0
                *   Justification: This is better than nothing, but it's not true high availability. It involves manual intervention and will result in downtime during the switchover.
            *   Writing very good code with no bugs.
                *   Score: 0
                *   Justification: While important, it's impossible to write perfect code. You must design the system to be resilient to failures, which are inevitable in a complex, distributed environment.

# 2. Social Network with News Feed

*   Description:
    json
    {
      "summary": "A large-scale social network with a personalized news feed.",
      "functional_requirements": [
        "Users can create posts (text, images).",
        "Users can follow other users.",
        "A personalized news feed shows posts from followed users.",
        "The feed should be sorted by a relevance algorithm, not just chronologically.",
        "Users can like and comment on posts."
      ],
      "non_functional_requirements": [
        "The system must be highly scalable to handle millions of users and posts.",
        "The news feed generation must be fast (sub-second).",
        "High availability is critical.",
        "The system should have low latency for writing new posts and interactions.",
        "The architecture must be cost-effective."
      ],
      "ui_ux_requirements": [
        "An infinitely scrolling news feed.",
        "A simple and intuitive interface for creating posts.",
        "Clear and engaging display of posts, likes, and comments.",
        "The app must be mobile-first.",
        "A responsive design that works on all screen sizes."
      ]
    }
    
*   Questions:
    1.  What is the biggest challenge in designing the news feed?
        *   Options:
            *   The "fan-out" problem: When a popular user posts, that post needs to be delivered to millions of followers' feeds quickly and efficiently.
                *   Score: +3
                *   Justification: This is the classic, fundamental challenge of feed-based systems. A naive approach of querying all followed users for every feed load (the "pull" model) is too slow. A "push" model, where the post is written to followers' feeds, is better but has issues with popular users.
            *   Storing the posts.
                *   Score: 0
                *   Justification: While storing posts at scale has its challenges, it's a relatively solved problem compared to the complexity of fanning out writes to millions of feeds.
            *   Sorting the feed chronologically.
                *   Score: -1
                *   Justification: A simple chronological sort is the easiest version of the problem, but the requirement is for a relevance-based sort, which is much harder.
            *   Handling user authentication.
                *   Score: 0
                *   Justification: This is a standard feature and not the unique, core challenge of this specific system.
    2.  How would you architect the feed generation?
        *   Options:
            *   A hybrid push-pull model. For most users, pre-calculate the feed by pushing posts into a cache (e.g., Redis) for each of their followers. For celebrities, don't push; instead, merge their posts into the feed at read time.
                *   Score: +3
                *   Justification: This is a standard and effective solution used by companies like Twitter and Facebook. It balances the low latency of pre-calculated feeds with a practical solution for handling users with millions of followers, where a pure push would be too slow and expensive.
            *   A pure pull model: When a user requests their feed, query the database for all posts from all users they follow, sort them, and return.
                *   Score: -1
                *   Justification: This will not scale. For users who follow hundreds or thousands of people, this query would be far too slow.
            *   A pure push model: When a user posts, write that post to a "feed" data structure for every single one of their followers.
                *   Score: +1
                *   Justification: This works well for users with a small number of followers, but it fails completely for celebrities. A post from a user with 10 million followers would require 10 million database writes, which is too slow.
            *   Do all the logic on the client-side.
                *   Score: -1
                *   Justification: Impossible. The client doesn't have access to the full social graph or all the posts.
    3.  What kind of database would you use to store the social graph (who follows whom)?
        *   Options:
            *   A graph database like Neo4j or a standard relational database with a `followers` table (e.g., `user_id`, `follower_id`).
                *   Score: +3
                *   Justification: Both are excellent choices. A graph database is naturally suited for this kind of data and can handle complex queries (e.g., "friends of friends") very efficiently. A simple relational table is also very effective and can scale extremely well with proper indexing.
            *   A key-value store like Redis.
                *   Score: +2
                *   Justification: This can also work very well. You could have a key for each user, and the value would be a set of user IDs they follow. Redis sets are very fast for this kind of operation.
            *   A document database like MongoDB.
                *   Score: +1
                *   Justification: You could store an array of followed users in each user document. This can work, but it can be inefficient if the number of followers/following is very large (the "unbounded array" problem).
            *   A single text file.
                *   Score: -1
                *   Justification: Not a database. This would not be performant, scalable, or reliable.
    4.  How would you implement the relevance algorithm for the feed?
        *   Options:
            *   Start with a simple scoring system based on factors like recency, number of likes/comments, and the type of post. This would be calculated offline by a separate service and the score stored with the post.
                *   Score: +3
                *   Justification: This is a practical and iterative approach. You start with a simple model and can make it more complex over time. Calculating the score offline is important for keeping the feed generation fast.
            *   Use a complex machine learning model from day one.
                *   Score: 0
                *   Justification: This is likely over-engineering. You don't have the data to train a complex model yet. It's better to start simple and iterate.
            *   Sort purely by the number of likes.
                *   Score: -1
                *   Justification: This would create a feedback loop where popular posts become even more popular, and users would miss new content. It doesn't meet the requirement of a *personalized* feed.
            *   Do the calculation in real-time when the user requests their feed.
                *   Score: -1
                *   Justification: This would be too slow. Feed generation needs to be sub-second, which means the ranking and sorting should be pre-calculated as much as possible.
    5.  How would you handle the "infinite scroll" feature?
        *   Options:
            *   Implement cursor-based pagination for the feed API.
                *   Score: +3
                *   Justification: This is the standard and correct way to handle pagination for a feed that is constantly changing. Offset-based pagination can skip or show duplicate items if new posts are added while the user is scrolling.
            *   Use traditional offset-based pagination (e.g., `page=1`, `page=2`).
                *   Score: 0
                *   Justification: This is problematic for a real-time feed. If a new post is added to the top of the feed, all subsequent pages will be shifted, and the user will see duplicates when they load the next page.
            *   Fetch all of the user's feed posts at once and just show them as the user scrolls.
                *   Score: -1
                *   Justification: This would be a huge amount of data and would be very slow and memory-intensive for the client.
            *   Use a library that handles it automatically.
                *   Score: +2
                *   Justification: A good choice for the frontend implementation, but you still need to design the backend API correctly (i.e., with cursor-based pagination) for the library to work properly.

# 6. API Gateway Service

*   Description:
    json
    {
      "summary": "A centralized API gateway that routes requests to multiple microservices and handles cross-cutting concerns.",
      "functional_requirements": [
        "Route incoming requests to appropriate backend services.",
        "Handle authentication and authorization for all requests.",
        "Implement rate limiting to prevent abuse.",
        "Provide request/response transformation capabilities.",
        "Aggregate responses from multiple services when needed."
      ],
      "non_functional_requirements": [
        "High throughput handling thousands of requests per second.",
        "Low latency overhead (< 50ms additional latency).",
        "High availability with failover capabilities.",
        "Horizontal scalability to handle load spikes.",
        "Comprehensive monitoring and analytics."
      ],
      "ui_ux_requirements": [
        "Developer portal for API documentation.",
        "Admin dashboard for configuration management.",
        "Real-time monitoring and analytics dashboards.",
        "API versioning and deprecation notices.",
        "Easy-to-use testing interface for developers."
      ]
    }
    
*   Questions:
    1.  What's the best approach for routing requests to backend services?
        *   Options:
            *   Configuration-based routing with URL patterns and service discovery:
                *   Score: +3
                *   Justification: Flexible and maintainable approach that allows runtime configuration changes. Service discovery enables dynamic routing to healthy instances.
            *   Hard-coded routing table in application code:
                *   Score: +1
                *   Justification: Simple but inflexible. Requires code changes and redeployment for routing modifications.
            *   Database-driven routing configuration:
                *   Score: +2
                *   Justification: Allows runtime changes but adds database dependency and potential latency. Good for complex routing rules.
            *   Random load balancing to all services:
                *   Score: -1
                *   Justification: Doesn't work as different services handle different functionality. Would result in errors and poor performance.
    2.  How should you implement authentication and authorization?
        *   Options:
            *   JWT tokens with role-based access control:
                *   Score: +3
                *   Justification: Stateless authentication that scales well. JWTs can carry authorization information and be validated without database calls.
            *   Session-based authentication with database storage:
                *   Score: +2
                *   Justification: Traditional approach that works but creates state dependency and database load for every request.
            *   API key authentication only:
                *   Score: +1
                *   Justification: Simple but limited security model. Good for service-to-service communication but insufficient for user authentication.
            *   No authentication, rely on backend services:
                *   Score: -1
                *   Justification: Defeats the purpose of centralized security and creates inconsistent authentication across services.
    3.  What's the best strategy for rate limiting?
        *   Options:
            *   Distributed rate limiting using Redis:
                *   Score: +3
                *   Justification: Accurate rate limiting across multiple gateway instances. Redis provides fast counters and expiration capabilities.
            *   In-memory rate limiting per gateway instance:
                *   Score: +2
                *   Justification: Fast but inaccurate with multiple instances. Total rate may exceed limits when load is distributed.
            *   Database-based rate limiting:
                *   Score: +1
                *   Justification: Accurate but slow. Database operations add latency and can become a bottleneck.
            *   No rate limiting, let backend services handle it:
                *   Score: 0
                *   Justification: Misses the opportunity for centralized protection and may overwhelm backend services.
    4.  How would you handle failures in backend services?
        *   Options:
            *   Circuit breaker pattern with health checks:
                *   Score: +3
                *   Justification: Prevents cascading failures and automatically recovers when services are healthy. Essential for resilient systems.
            *   Simple retry with exponential backoff:
                *   Score: +2
                *   Justification: Good basic resilience but doesn't prevent overloading failed services. Should be combined with circuit breakers.
            *   Immediate failure propagation to clients:
                *   Score: +1
                *   Justification: Fast failure detection but poor user experience. No attempt at recovery or graceful degradation.
            *   Infinite retries until success:
                *   Score: -1
                *   Justification: Can overwhelm failed services and cause resource exhaustion. May never succeed and blocks other requests.
    5.  What's important for monitoring API gateway performance?
        *   Options:
            *   Comprehensive metrics (latency, throughput, error rates) with alerting:
                *   Score: +3
                *   Justification: Essential for operations. Provides visibility into performance and enables proactive issue resolution.
            *   Basic request logging only:
                *   Score: +1
                *   Justification: Provides audit trail but lacks performance insights and real-time monitoring capabilities.
            *   No monitoring, rely on user reports:
                *   Score: -1
                *   Justification: Reactive approach that leads to poor user experience and slow issue resolution.
            *   Application performance monitoring (APM) tools:
                *   Score: +2
                *   Justification: Good for detailed performance insights but should be combined with basic operational metrics.

# 7. Content Management System

*   Description:
    json
    {
      "summary": "A flexible content management system like WordPress or Drupal for creating and managing website content.",
      "functional_requirements": [
        "WYSIWYG editor for creating and editing content.",
        "User roles and permissions management.",
        "Template system for different page layouts.",
        "Media library for managing images and files.",
        "SEO optimization features (meta tags, URLs)."
      ],
      "non_functional_requirements": [
        "Fast page load times (< 2 seconds).",
        "Scalable to handle high traffic volumes.",
        "Security against common web vulnerabilities.",
        "Database optimization for content queries.",
        "Mobile-responsive output for all content."
      ],
      "ui_ux_requirements": [
        "Intuitive admin interface for content creators.",
        "Drag-and-drop page builder functionality.",
        "Preview capability before publishing.",
        "Clean, semantic HTML output.",
        "Accessible content creation tools."
      ]
    }
    
*   Questions:
    1.  What's the best approach for content storage and retrieval?
        *   Options:
            *   Relational database with proper indexing and caching:
                *   Score: +3
                *   Justification: Proven approach that handles complex relationships and queries well. Caching layer provides performance for high-traffic sites.
            *   NoSQL document database for flexible content structure:
                *   Score: +2
                *   Justification: Good for variable content structures and fast reads. May lack complex querying capabilities needed for advanced features.
            *   File-based storage with flat files:
                *   Score: +1
                *   Justification: Simple and fast but lacks scalability and complex querying capabilities. Good for static site generators.
            *   In-memory storage only:
                *   Score: -1
                *   Justification: Not persistent and doesn't scale. Content would be lost on server restart.
    2.  How should you implement the template system?
        *   Options:
            *   Template engine with inheritance and component system:
                *   Score: +3
                *   Justification: Provides flexibility and reusability. Template inheritance reduces code duplication and enables consistent design.
            *   PHP/HTML files with embedded logic:
                *   Score: +2
                *   Justification: Simple approach but can become hard to maintain. Mixing logic and presentation isn't ideal.
            *   Single template for all content types:
                *   Score: 0
                *   Justification: Too limiting for diverse content types. Doesn't provide the flexibility needed for different page layouts.
            *   Client-side rendering only:
                *   Score: +1
                *   Justification: Fast interaction but poor SEO and slower initial load. Not ideal for content-focused websites.
    3.  What's critical for CMS security?
        *   Options:
            *   Input validation, SQL injection prevention, and CSRF protection:
                *   Score: +3
                *   Justification: Addresses the most common web vulnerabilities. Essential foundation for any web application handling user input.
            *   HTTPS encryption only:
                *   Score: +1
                *   Justification: Important for data in transit but doesn't protect against application-level vulnerabilities.
            *   Regular security updates and patches:
                *   Score: +2
                *   Justification: Important for maintaining security but reactive approach. Should be combined with proactive security measures.
            *   Security through obscurity:
                *   Score: -1
                *   Justification: Not effective security strategy. Attackers can discover hidden features and vulnerabilities.
    4.  How would you optimize performance for high-traffic websites?
        *   Options:
            *   Multi-layer caching (database, page, CDN):
                *   Score: +3
                *   Justification: Comprehensive caching strategy that addresses performance at multiple levels. Essential for high-traffic sites.
            *   Database optimization only:
                *   Score: +2
                *   Justification: Important but incomplete. Database is often not the only bottleneck in web applications.
            *   CDN for static assets only:
                *   Score: +1
                *   Justification: Helps with asset delivery but doesn't address dynamic content performance.
            *   No caching, rely on hardware scaling:
                *   Score: 0
                *   Justification: Expensive approach that doesn't address inefficient content delivery patterns.
    5.  What's important for SEO optimization in CMS?
        *   Options:
            *   Clean URLs, meta tags, structured data, and sitemap generation:
                *   Score: +3
                *   Justification: Comprehensive SEO approach that covers technical SEO fundamentals. Essential for content discoverability.
            *   Meta tags only:
                *   Score: +1
                *   Justification: Basic SEO but misses many important ranking factors like URL structure and structured data.
            *   Keyword stuffing optimization:
                *   Score: -1
                *   Justification: Outdated and harmful SEO practice that can result in search engine penalties.
            *   No SEO features, rely on content quality:
                *   Score: +2
                *   Justification: Content quality is important but technical SEO is also necessary for search engine visibility.

# 8. Distributed File Storage System

*   Description:
    json
    {
      "summary": "A distributed file storage system like Amazon S3 or Google Cloud Storage for storing and retrieving files at scale.",
      "functional_requirements": [
        "Store and retrieve files of varying sizes (KB to GB).",
        "Provide unique URLs for accessing stored files.",
        "Support file versioning and metadata storage.",
        "Implement access control and permissions.",
        "Offer REST API for programmatic access."
      ],
      "non_functional_requirements": [
        "High durability (99.999999999% - 11 9s) for stored data.",
        "High availability with multiple geographic regions.",
        "Scalable to handle petabytes of data.",
        "Fast file upload and download speeds.",
        "Cost-effective storage with different tiers."
      ],
      "ui_ux_requirements": [
        "Web interface for file management.",
        "Drag-and-drop file upload functionality.",
        "Folder organization and search capabilities.",
        "Progress indicators for large file transfers.",
        "Sharing and collaboration features."
      ]
    }
    
*   Questions:
    1.  What's the best approach for ensuring data durability?
        *   Options:
            *   Replication across multiple data centers with checksums:
                *   Score: +3
                *   Justification: Industry standard for high durability. Multiple copies in different locations protect against various failure modes.
            *   RAID storage on single server:
                *   Score: +1
                *   Justification: Protects against disk failure but not against server or data center failures. Insufficient for distributed system.
            *   Single copy with regular backups:
                *   Score: +2
                *   Justification: Better than no backup but still has significant risk window between backups.
            *   No redundancy, rely on hardware quality:
                *   Score: -1
                *   Justification: Unacceptable risk for production system. Hardware failures are inevitable.
    2.  How would you implement file versioning?
        *   Options:
            *   Immutable file objects with version metadata:
                *   Score: +3
                *   Justification: Clean approach that prevents accidental overwrites and enables easy rollback. Used by major cloud storage providers.
            *   Copy-on-write with delta storage:
                *   Score: +2
                *   Justification: More storage efficient but complex to implement correctly. Good for frequently modified files.
            *   Full file copies for each version:
                *   Score: +1
                *   Justification: Simple but storage intensive. Acceptable for small files or infrequent versioning.
            *   Overwrite files, no versioning:
                *   Score: -1
                *   Justification: Fails to meet functional requirements and provides no protection against accidental data loss.
    3.  What's critical for implementing access control?
        *   Options:
            *   Role-based access control with fine-grained permissions:
                *   Score: +3
                *   Justification: Flexible system that supports complex organizational needs. Allows precise control over who can access what.
            *   Simple public/private flag per file:
                *   Score: +2
                *   Justification: Easy to implement but limited flexibility. Works for basic use cases but not enterprise needs.
            *   Owner-only access control:
                *   Score: +1
                *   Justification: Very simple but doesn't support collaboration or organizational access patterns.
            *   No access control, all files public:
                *   Score: -1
                *   Justification: Major security risk and fails to meet basic privacy requirements.
    4.  How would you optimize performance for large file uploads?
        *   Options:
            *   Multipart uploads with resume capability:
                *   Score: +3
                *   Justification: Industry standard that allows parallel upload of chunks and recovery from network failures. Essential for large files.
            *   Single-stream upload only:
                *   Score: +1
                *   Justification: Simple but slow for large files and vulnerable to network interruptions.
            *   Client-side compression before upload:
                *   Score: +2
                *   Justification: Reduces transfer time but may not be appropriate for all file types and adds processing overhead.
            *   No optimization, standard HTTP POST:
                *   Score: 0
                *   Justification: Works for small files but poor experience for large uploads and no fault tolerance.
    5.  What's important for cost optimization in distributed storage?
        *   Options:
            *   Tiered storage with automated lifecycle policies:
                *   Score: +3
                *   Justification: Cost-effective approach that automatically moves infrequently accessed data to cheaper storage tiers.
            *   Single storage tier for all data:
                *   Score: +1
                *   Justification: Simple but not cost-optimized. Most data becomes cold over time and could be stored cheaper.
            *   Frequent data migration to cheapest storage:
                *   Score: +2
                *   Justification: Cost-conscious but may impact access times. Should be balanced with performance requirements.
            *   Premium storage for everything:
                *   Score: 0
                *   Justification: Good performance but unnecessarily expensive for archived or infrequently accessed data.

# 9. Real-Time Analytics Dashboard

*   Description:
    json
    {
      "summary": "A real-time analytics dashboard like Google Analytics or DataDog for monitoring and visualizing system metrics.",
      "functional_requirements": [
        "Collect metrics from multiple sources and services.",
        "Display real-time charts and graphs of key metrics.",
        "Support custom dashboards and alert configuration.",
        "Provide data filtering and aggregation capabilities.",
        "Enable data export and API access to metrics."
      ],
      "non_functional_requirements": [
        "Handle high-volume data ingestion (millions of events/second).",
        "Low latency for dashboard updates (< 5 seconds).",
        "Scalable storage for historical data retention.",
        "High availability for monitoring critical systems.",
        "Cost-effective data storage and processing."
      ],
      "ui_ux_requirements": [
        "Interactive and responsive dashboard interface.",
        "Drag-and-drop dashboard builder functionality.",
        "Real-time chart updates without page refresh.",
        "Mobile-friendly interface for on-the-go monitoring.",
        "Intuitive alert and notification management."
      ]
    }
    
*   Questions:
    1.  What's the best approach for high-volume data ingestion?
        *   Options:
            *   Message queue with batch processing pipeline:
                *   Score: +3
                *   Justification: Scalable architecture that can handle spikes and provides fault tolerance. Batch processing optimizes storage writes.
            *   Direct database writes for every metric:
                *   Score: +1
                *   Justification: Simple but doesn't scale well with high volume. Database becomes bottleneck quickly.
            *   Real-time stream processing (Kafka, Kinesis):
                *   Score: +3
                *   Justification: Excellent for high-volume, low-latency requirements. Can handle complex event processing and routing.
            *   File-based data collection:
                *   Score: +2
                *   Justification: Works for some use cases but lacks real-time capabilities and is harder to scale.
    2.  How would you store time-series data efficiently?
        *   Options:
            *   Time-series database (InfluxDB, TimescaleDB):
                *   Score: +3
                *   Justification: Optimized for time-series data with efficient compression and querying. Purpose-built for analytics workloads.
            *   Regular relational database with time-based partitioning:
                *   Score: +2
                *   Justification: Can work but requires careful design and maintenance. Less efficient than specialized time-series databases.
            *   NoSQL document database:
                *   Score: +1
                *   Justification: Flexible but not optimized for time-series queries and aggregations. Can become expensive at scale.
            *   In-memory storage only:
                *   Score: -1
                *   Justification: Fast but not persistent and limited capacity. Loses all historical data on restart.
    3.  What's critical for real-time dashboard performance?
        *   Options:
            *   WebSockets for live updates with caching layer:
                *   Score: +3
                *   Justification: Efficient real-time communication with caching to reduce database load. Provides smooth user experience.
            *   HTTP polling every few seconds:
                *   Score: +2
                *   Justification: Works but less efficient than WebSockets. Higher latency and more server resources required.
            *   Page refresh for data updates:
                *   Score: 0
                *   Justification: Not real-time and poor user experience. Interrupts user workflow.
            *   Pre-computed static reports only:
                *   Score: +1
                *   Justification: Fast to load but not real-time and limited interactivity.
    4.  How would you implement alerting functionality?
        *   Options:
            *   Rule-based alerting with multiple notification channels:
                *   Score: +3
                *   Justification: Flexible system that can notify via email, SMS, Slack, etc. Essential for operational monitoring.
            *   Email alerts only:
                *   Score: +2
                *   Justification: Basic functionality but limited for urgent alerts. Email may be delayed or missed.
            *   Dashboard-only visual indicators:
                *   Score: +1
                *   Justification: Requires active monitoring and doesn't notify when issues occur. Not suitable for critical systems.
            *   No alerting, manual monitoring only:
                *   Score: -1
                *   Justification: Defeats the purpose of automated monitoring and leads to delayed incident response.
    5.  What's important for data retention and storage costs?
        *   Options:
            *   Automated data aggregation and archival policies:
                *   Score: +3
                *   Justification: Cost-effective approach that maintains high-resolution recent data while compacting historical data.
            *   Keep all raw data forever:
                *   Score: +1
                *   Justification: Maximum data fidelity but expensive and often unnecessary for most analytics use cases.
            *   Delete old data after fixed period:
                *   Score: +2
                *   Justification: Simple cost control but loses valuable historical trends and doesn't optimize for access patterns.
            *   No data retention strategy:
                *   Score: -1
                *   Justification: Will eventually lead to storage costs spiraling out of control.

# 10. Microservices Orchestration Platform

*   Description:
    json
    {
      "summary": "A platform like Kubernetes or Docker Swarm for orchestrating and managing containerized microservices at scale.",
      "functional_requirements": [
        "Deploy and manage containers across multiple nodes.",
        "Service discovery and load balancing between services.",
        "Health monitoring and automatic restart of failed containers.",
        "Rolling updates and rollback capabilities.",
        "Resource allocation and scaling based on demand."
      ],
      "non_functional_requirements": [
        "High availability with multi-node cluster support.",
        "Scalable to handle thousands of containers.",
        "Low orchestration overhead on application performance.",
        "Fault tolerance with automatic failover.",
        "Efficient resource utilization across the cluster."
      ],
      "ui_ux_requirements": [
        "Web dashboard for cluster management.",
        "Real-time monitoring and logging interface.",
        "Intuitive deployment and scaling controls.",
        "Visual representation of service topology.",
        "Alert and notification management interface."
      ]
    }
    
*   Questions:
    1.  What's the best approach for service discovery?
        *   Options:
            *   DNS-based service discovery with health checks:
                *   Score: +3
                *   Justification: Standard, reliable approach that integrates well with existing infrastructure. DNS provides natural load balancing.
            *   Hard-coded service endpoints in configuration:
                *   Score: +1
                *   Justification: Simple but doesn't handle dynamic scaling or failures gracefully. Requires manual updates.
            *   Database-driven service registry:
                *   Score: +2
                *   Justification: Flexible but adds complexity and potential single point of failure. Good for complex routing rules.
            *   No service discovery, services find each other manually:
                *   Score: -1
                *   Justification: Doesn't scale and defeats the purpose of dynamic orchestration.
    2.  How would you implement container health monitoring?
        *   Options:
            *   Multi-level health checks (liveness, readiness, startup):
                *   Score: +3
                *   Justification: Comprehensive approach that handles different failure scenarios appropriately. Industry best practice.
            *   Simple process monitoring only:
                *   Score: +2
                *   Justification: Basic but insufficient. A running process doesn't guarantee the application is healthy.
            *   Application-level health endpoints:
                *   Score: +2
                *   Justification: Good for detecting application issues but should be combined with infrastructure monitoring.
            *   No health monitoring, rely on user reports:
                *   Score: -1
                *   Justification: Reactive approach that leads to poor availability and user experience.
    3.  What's critical for rolling updates and deployments?
        *   Options:
            *   Blue-green or rolling deployment with automated rollback:
                *   Score: +3
                *   Justification: Minimizes downtime and provides safety mechanisms. Essential for production systems.
            *   Stop all instances then start new ones:
                *   Score: +1
                *   Justification: Simple but causes downtime. Not acceptable for production services.
            *   Manual deployment process:
                *   Score: 0
                *   Justification: Error-prone and doesn't scale with microservices architecture.
            *   Update instances one by one manually:
                *   Score: +2
                *   Justification: Reduces downtime but slow and still error-prone for large deployments.
    4.  How would you handle resource allocation and scaling?
        *   Options:
            *   Horizontal Pod Autoscaler based on CPU/memory metrics:
                *   Score: +3
                *   Justification: Automated scaling that responds to actual load. Essential for efficient resource utilization.
            *   Manual scaling only:
                *   Score: +1
                *   Justification: Gives control but requires constant monitoring and doesn't handle sudden traffic spikes well.
            *   Fixed resource allocation per service:
                *   Score: +2
                *   Justification: Simple and predictable but wasteful during low-traffic periods.
            *   No resource limits or scaling:
                *   Score: -1
                *   Justification: Can lead to resource starvation and instability when one service consumes too many resources.
    5.  What's important for cluster security?
        *   Options:
            *   Network policies, RBAC, and container image scanning:
                *   Score: +3
                *   Justification: Multi-layered security approach that addresses network, authentication, and supply chain security.
            *   Network isolation only:
                *   Score: +2
                *   Justification: Important but incomplete. Doesn't address authentication or vulnerable container images.
            *   Security through obscurity:
                *   Score: -1
                *   Justification: Not effective against determined attackers and doesn't address common security vulnerabilities.
            *   No specific security measures:
                *   Score: -1
                *   Justification: Unacceptable risk for production systems. Orchestration platforms are attractive targets for attackers.

---

# Senior Level

# 1. Global E-commerce Platform

*   Description:
    json
    {
      "summary": "A large-scale e-commerce platform like Amazon or Alibaba serving millions of users globally.",
      "functional_requirements": [
        "Product catalog with millions of items across multiple categories.",
        "Shopping cart and checkout with multiple payment methods.",
        "Order management and tracking system.",
        "Inventory management across multiple warehouses.",
        "Recommendation engine for personalized product suggestions."
      ],
      "non_functional_requirements": [
        "Handle millions of concurrent users during peak shopping events.",
        "99.99% uptime with global load distribution.",
        "Sub-second response times for search and browsing.",
        "PCI-DSS compliance for payment processing.",
        "Multi-region deployment with data sovereignty compliance."
      ],
      "ui_ux_requirements": [
        "Intuitive product search with advanced filtering.",
        "Responsive design optimized for mobile commerce.",
        "Seamless checkout process with minimal friction.",
        "Real-time inventory updates and availability.",
        "Multilingual and multi-currency support."
      ]
    }
    
*   Questions:
    1.  What's the most critical architectural decision for global scale?
        *   Options:
            *   Microservices with database sharding and CDN distribution:
                *   Score: +3
                *   Justification: Essential for scaling different components independently. Database sharding handles data volume, CDN reduces latency globally.
            *   Monolithic architecture with powerful servers:
                *   Score: +1
                *   Justification: Simpler initially but becomes bottleneck at scale. Single points of failure and deployment complexity.
            *   Serverless functions for everything:
                *   Score: +2
                *   Justification: Good for certain components but cold starts and vendor lock-in can be problematic for core e-commerce flows.
            *   Single data center with high bandwidth:
                *   Score: -1
                *   Justification: Doesn't address global latency and creates single point of failure for worldwide operations.
    2.  How would you handle peak traffic during shopping events?
        *   Options:
            *   Auto-scaling with queue-based order processing and caching:
                *   Score: +3
                *   Justification: Comprehensive approach that handles traffic spikes while ensuring order reliability through queuing.
            *   Pre-provision maximum capacity:
                *   Score: +2
                *   Justification: Guarantees performance but very expensive. Wasteful during normal traffic periods.
            *   Rate limiting to prevent overload:
                *   Score: +1
                *   Justification: Protects systems but poor customer experience. Customers may go to competitors.
            *   Manual scaling when needed:
                *   Score: -1
                *   Justification: Too slow to respond to sudden traffic spikes. Will result in poor performance and lost sales.
    3.  What's critical for payment processing security?
        *   Options:
            *   PCI-DSS compliant payment processor with tokenization:
                *   Score: +3
                *   Justification: Industry standard that reduces liability and security risk. Tokenization protects stored payment data.
            *   Encrypt payment data in application database:
                *   Score: +1
                *   Justification: Better than plaintext but still requires PCI compliance and creates security risks.
            *   Use HTTPS for payment pages only:
                *   Score: +2
                *   Justification: Basic security but insufficient for handling payment data securely.
            *   Store payment information for convenience:
                *   Score: -1
                *   Justification: Major security risk and regulatory violation. Creates liability and target for attackers.
    4.  How would you implement the recommendation engine?
        *   Options:
            *   Machine learning with collaborative filtering and real-time feature stores:
                *   Score: +3
                *   Justification: Modern approach that provides personalized recommendations. Real-time features enable immediate personalization.
            *   Simple rule-based recommendations:
                *   Score: +2
                *   Justification: Good starting point but limited effectiveness. Doesn't leverage user behavior patterns.
            *   Popular products only:
                *   Score: +1
                *   Justification: Easy to implement but not personalized. Misses opportunity for conversion optimization.
            *   No recommendations:
                *   Score: -1
                *   Justification: Misses major revenue opportunity. Recommendations typically drive 20-35% of e-commerce revenue.
    5.  What's essential for inventory management at scale?
        *   Options:
            *   Distributed inventory with eventual consistency and reservation system:
                *   Score: +3
                *   Justification: Realistic approach for global scale. Reservation system prevents overselling while allowing for distributed inventory.
            *   Real-time inventory synchronization globally:
                *   Score: +2
                *   Justification: Ideal but challenging to implement consistently across global network with varying latencies.
            *   Single inventory database:
                *   Score: +1
                *   Justification: Consistent but becomes bottleneck and single point of failure.
            *   No inventory tracking:
                *   Score: -1
                *   Justification: Leads to overselling and poor customer experience. Essential business function.

# 2. Distributed Banking System

*   Description:
    json
    {
      "summary": "A core banking system handling millions of financial transactions with strict consistency and regulatory requirements.",
      "functional_requirements": [
        "Account management with real-time balance updates.",
        "Money transfers between accounts with transaction history.",
        "Interest calculation and automated billing.",
        "Fraud detection and prevention systems.",
        "Regulatory reporting and audit trails."
      ],
      "non_functional_requirements": [
        "ACID compliance for all financial transactions.",
        "99.999% uptime with zero data loss tolerance.",
        "Sub-100ms response times for critical operations.",
        "SOX, PCI-DSS, and regional banking regulation compliance.",
        "Multi-region disaster recovery with RTO < 15 minutes."
      ],
      "ui_ux_requirements": [
        "Secure customer portal with multi-factor authentication.",
        "Real-time transaction notifications and alerts.",
        "Accessible interface compliant with WCAG guidelines.",
        "Mobile banking app with biometric authentication.",
        "Admin dashboard for fraud monitoring and compliance."
      ]
    }
    
*   Questions:
    1.  What's the most critical requirement for banking transactions?
        *   Options:
            *   ACID transactions with distributed consensus (two-phase commit):
                *   Score: +3
                *   Justification: Absolutely essential for financial consistency. Money cannot be created or lost due to system failures.
            *   Eventually consistent transactions:
                *   Score: -1
                *   Justification: Unacceptable for banking. Could lead to money creation/loss and regulatory violations.
            *   Best-effort transaction processing:
                *   Score: -1
                *   Justification: Completely inappropriate for financial systems. No tolerance for transaction failures.
            *   Optimistic locking only:
                *   Score: +1
                *   Justification: Insufficient alone but can be part of a broader strategy. Must be combined with stronger consistency guarantees.
    2.  How would you implement fraud detection?
        *   Options:
            *   Real-time ML models with rule-based fallbacks:
                *   Score: +3
                *   Justification: Comprehensive approach that combines ML adaptability with deterministic rule-based detection.
            *   Rule-based detection only:
                *   Score: +2
                *   Justification: Reliable but limited adaptability. Fraudsters can learn to avoid known patterns.
            *   Manual review of all transactions:
                *   Score: 0
                *   Justification: Not scalable and introduces significant delays in transaction processing.
            *   No fraud detection:
                *   Score: -1
                *   Justification: Regulatory requirement and business necessity. Exposes bank to massive losses.
    3.  What's essential for regulatory compliance?
        *   Options:
            *   Immutable audit logs with cryptographic verification:
                *   Score: +3
                *   Justification: Required for regulatory audits. Cryptographic verification ensures log integrity.
            *   Database transaction logs only:
                *   Score: +2
                *   Justification: Basic requirement but may not meet all regulatory standards for auditability.
            *   Application-level logging:
                *   Score: +1
                *   Justification: Helpful but insufficient for regulatory compliance. Can be modified and lacks verification.
            *   No specific audit requirements:
                *   Score: -1
                *   Justification: Regulatory violation that could result in massive fines and loss of banking license.
    4.  How would you ensure high availability?
        *   Options:
            *   Active-active multi-region with synchronous replication:
                *   Score: +3
                *   Justification: Highest availability with immediate failover. Required for critical banking operations.
            *   Active-passive with asynchronous replication:
                *   Score: +2
                *   Justification: Good availability but potential data loss during failover. May not meet banking requirements.
            *   Single data center with backup:
                *   Score: +1
                *   Justification: Basic disaster recovery but extended downtime during regional failures.
            *   No disaster recovery plan:
                *   Score: -1
                *   Justification: Regulatory violation and business risk. Banking systems require comprehensive DR.
    5.  What's critical for data security?
        *   Options:
            *   End-to-end encryption with hardware security modules:
                *   Score: +3
                *   Justification: Bank-grade security that protects data at all stages. HSMs provide tamper-resistant key management.
            *   Database encryption only:
                *   Score: +2
                *   Justification: Good but doesn't protect data in transit or in application memory.
            *   Application-level encryption:
                *   Score: +1
                *   Justification: Better than nothing but vulnerable to application-level attacks.
            *   No encryption, rely on network security:
                *   Score: -1
                *   Justification: Completely inadequate for banking. Regulatory violation and major security risk.

# 3. Cloud Infrastructure Management Platform

*   Description:
    json
    {
      "summary": "A comprehensive cloud management platform like AWS CloudFormation or Terraform Cloud for infrastructure as code.",
      "functional_requirements": [
        "Infrastructure provisioning using declarative templates.",
        "Multi-cloud support across AWS, Azure, and GCP.",
        "State management and drift detection.",
        "Policy enforcement and compliance checking.",
        "Cost optimization and resource tracking."
      ],
      "non_functional_requirements": [
        "Handle thousands of concurrent infrastructure deployments.",
        "99.9% uptime for critical infrastructure operations.",
        "Secure handling of cloud credentials and secrets.",
        "Audit trails for all infrastructure changes.",
        "Integration with CI/CD pipelines and GitOps workflows."
      ],
      "ui_ux_requirements": [
        "Visual infrastructure topology and dependency mapping.",
        "Real-time deployment progress and status updates.",
        "Policy violation alerts and remediation suggestions.",
        "Cost analysis dashboard with optimization recommendations.",
        "Role-based access control for different environments."
      ]
    }
    
*   Questions:
    1.  What's the most important aspect of infrastructure state management?
        *   Options:
            *   Distributed state with locking and consistency checks:
                *   Score: +3
                *   Justification: Essential for preventing conflicts in multi-user environments. Consistency checks prevent drift.
            *   Local state files only:
                *   Score: +1
                *   Justification: Simple but doesn't work for team collaboration. No protection against concurrent modifications.
            *   No state management:
                *   Score: -1
                *   Justification: Makes infrastructure management unreliable and prone to inconsistencies.
            *   Database-only state storage:
                *   Score: +2
                *   Justification: Better than local files but needs proper locking mechanisms to prevent race conditions.
    2.  How would you handle multi-cloud deployments?
        *   Options:
            *   Abstraction layer with provider-specific adapters:
                *   Score: +3
                *   Justification: Clean architecture that allows consistent interface while leveraging provider-specific features.
            *   Single cloud provider only:
                *   Score: +1
                *   Justification: Simpler but creates vendor lock-in and doesn't meet multi-cloud requirements.
            *   Separate tools for each cloud:
                *   Score: +2
                *   Justification: Works but creates operational complexity and inconsistent workflows.
            *   Manual configuration for each cloud:
                *   Score: -1
                *   Justification: Not scalable and defeats the purpose of infrastructure automation.
    3.  What's critical for policy enforcement?
        *   Options:
            *   Pre-deployment validation with customizable rules:
                *   Score: +3
                *   Justification: Prevents policy violations before they occur. Customizable rules support different organizational needs.
            *   Post-deployment scanning only:
                *   Score: +2
                *   Justification: Useful but reactive. Policy violations may already cause security or compliance issues.
            *   Manual policy reviews:
                *   Score: +1
                *   Justification: Not scalable and error-prone. Can't keep up with automated deployments.
            *   No policy enforcement:
                *   Score: -1
                *   Justification: Creates security and compliance risks. Essential for enterprise infrastructure management.
    4.  How would you implement cost optimization?
        *   Options:
            *   Automated resource rightsizing with ML-based recommendations:
                *   Score: +3
                *   Justification: Proactive cost optimization that adapts to usage patterns. ML provides intelligent recommendations.
            *   Manual cost reviews only:
                *   Score: +2
                *   Justification: Better than nothing but doesn't scale and may miss optimization opportunities.
            *   Fixed resource allocation:
                *   Score: +1
                *   Justification: Predictable costs but likely wasteful during low-usage periods.
            *   No cost management:
                *   Score: -1
                *   Justification: Can lead to significant cost overruns and budget surprises.
    5.  What's important for credential security?
        *   Options:
            *   Integration with secret management services and short-lived tokens:
                *   Score: +3
                *   Justification: Best practice that minimizes credential exposure. Short-lived tokens reduce impact of compromise.
            *   Encrypted configuration files:
                *   Score: +2
                *   Justification: Better than plaintext but still stores long-lived credentials.
            *   Environment variables only:
                *   Score: +1
                *   Justification: Slightly better than hardcoded but still visible in process lists and logs.
            *   Hardcoded credentials:
                *   Score: -1
                *   Justification: Major security risk that can lead to credential theft and unauthorized access.

# 4. Real-Time Fraud Detection System

*   Description:
    json
    {
      "summary": "A real-time fraud detection system for financial transactions processing millions of events per second.",
      "functional_requirements": [
        "Real-time transaction scoring and risk assessment.",
        "Machine learning model deployment and A/B testing.",
        "Rule engine for configurable fraud patterns.",
        "Case management system for fraud investigation.",
        "Integration with multiple payment processors and banks."
      ],
      "non_functional_requirements": [
        "Sub-100ms latency for transaction scoring.",
        "Handle millions of transactions per second.",
        "99.99% accuracy with minimal false positives.",
        "24/7 availability with global deployment.",
        "Model retraining and deployment without downtime."
      ],
      "ui_ux_requirements": [
        "Real-time fraud analyst dashboard with case management.",
        "Model performance monitoring and drift detection.",
        "Configurable rule engine interface.",
        "Alert management and notification system.",
        "Audit trail and investigation workflow tools."
      ]
    }
    
*   Questions:
    1.  What's the most critical architecture decision for real-time fraud detection?
        *   Options:
            *   Stream processing with feature stores and real-time ML inference:
                *   Score: +3
                *   Justification: Required for real-time decision making. Feature stores provide consistent features for ML models.
            *   Batch processing with scheduled model updates:
                *   Score: +1
                *   Justification: Too slow for real-time fraud detection. Fraudulent transactions would complete before detection.
            *   Database-driven rule evaluation:
                *   Score: +2
                *   Justification: Can work for simple rules but doesn't scale for complex ML models and high throughput.
            *   Manual transaction review:
                *   Score: -1
                *   Justification: Not scalable for millions of transactions per second. Defeats the purpose of automation.
    2.  How would you handle model deployment and updates?
        *   Options:
            *   Blue-green deployment with canary testing:
                *   Score: +3
                *   Justification: Safe deployment strategy that allows testing new models without risking the entire system.
            *   Direct model replacement:
                *   Score: +1
                *   Justification: Risky approach that could introduce performance issues or accuracy degradation.
            *   Manual model updates during maintenance windows:
                *   Score: +2
                *   Justification: Safe but introduces downtime and delays in fraud detection improvements.
            *   No model updates:
                *   Score: -1
                *   Justification: Fraud patterns evolve constantly. Static models become less effective over time.
    3.  What's essential for feature engineering at scale?
        *   Options:
            *   Real-time feature computation with caching and aggregation:
                *   Score: +3
                *   Justification: Enables complex features like transaction velocity and behavior patterns that are crucial for fraud detection.
            *   Pre-computed features only:
                *   Score: +2
                *   Justification: Faster but misses real-time patterns that are often the strongest fraud indicators.
            *   Simple transaction attributes only:
                *   Score: +1
                *   Justification: Limited effectiveness. Advanced fraud detection requires behavioral and contextual features.
            *   No feature engineering:
                *   Score: -1
                *   Justification: Raw transaction data alone is insufficient for accurate fraud detection.
    4.  How would you minimize false positives while maintaining security?
        *   Options:
            *   Ensemble models with confidence scoring and human-in-the-loop:
                *   Score: +3
                *   Justification: Combines multiple models for better accuracy and allows human review of edge cases.
            *   Single high-threshold model:
                *   Score: +2
                *   Justification: Reduces false positives but may miss sophisticated fraud patterns.
            *   Rule-based detection only:
                *   Score: +1
                *   Justification: Predictable but limited adaptability to new fraud patterns.
            *   Block all suspicious transactions:
                *   Score: -1
                *   Justification: Poor customer experience that could drive legitimate customers away.
    5.  What's critical for system observability?
        *   Options:
            *   Real-time model performance monitoring with business metrics:
                *   Score: +3
                *   Justification: Essential for detecting model drift and ensuring fraud detection effectiveness.
            *   System metrics only (CPU, memory, latency):
                *   Score: +2
                *   Justification: Important but doesn't capture fraud detection effectiveness or model performance.
            *   Manual performance reviews:
                *   Score: +1
                *   Justification: Too slow to detect issues in real-time fraud detection systems.
            *   No monitoring:
                *   Score: -1
                *   Justification: Blind to system performance and fraud detection effectiveness.
