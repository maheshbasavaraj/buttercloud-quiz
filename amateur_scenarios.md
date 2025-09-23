# Amateur Level

# 1. E-commerce Product Page

*   Description:
    json
    {
      "summary": "Build a detailed product page for an e-commerce site.",
      "product_details": [
        "Display product name, description, price, and images.",
        "Allow users to select product variants (e.g., size, color).",
        "Show multiple product images in a gallery or carousel."
      ],
      "user_interactions": [
        "An 'Add to Cart' button that updates the cart state.",
        "Display customer reviews and ratings."
      ],
      "performance_and_seo": [
        "The page must load very quickly (<2s) to prevent user drop-off.",
        "Images must be optimized for web and lazy-loaded.",
        "The page should be server-side rendered (SSR) or statically generated (SSG) for SEO."
      ],
      "ui_ux": [
        "A clean, professional layout that highlights the product.",
        "High-resolution product images.",
        "Clear call-to-action (CTA) buttons.",
        "An intuitive way to select product variants.",
        "Easy access to customer reviews.",
        "The design must be responsive and work on all screen sizes."
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
            *   Server-Side Rendering (SSR) or Static Site Generation (SSG).
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