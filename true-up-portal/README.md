# True-Up Portal Documentation

This document outlines the changes made to `index.html`, `main.css`, `index.css`, `dropdown.js`, and `responsive.css`. These modifications were implemented to improve the portal's design consistency, accessibility, and responsiveness. The rationale behind each change is also discussed to provide insight into the design choices.

## index.html

### Modifications Made:
- Incorporated semantic HTML elements such as `<nav>`, `<header>`, `<footer>`, and `<section>` to enhance the document's structure, aiding in improved accessibility and SEO.
- Added a `<div>` or `<ul>` with appropriate ARIA roles for implementing an accessible dropdown menu.

### Rationale:
The use of semantic elements improves the accessibility of the site for users and search engines. A structured HTML document also aids search engines in understanding the page content, which can improve SEO rankings. Implementing an accessible dropdown menu ensures that the website is usable for people with disabilities who rely on assistive technologies, aligning with modern web accessibility standards.

## main.css & index.css

### Modifications Made:
- Ensured both CSS files follow a unified color scheme to maintain visual consistency across the portal.
- Set base typography guidelines in `main.css` to include font sizes, families, and styles. Adjusted `index.css` to follow these guidelines without overriding the base settings unnecessarily.

### Rationale:
A consistent color scheme and typography across the website enhance the user experience by providing a cohesive visual flow. It simplifies the process for future development and design updates, making the portal easier to maintain.

## dropdown.js

### Modifications Made:
- Implemented keyboard navigation for the dropdown menu, enabling users to navigate through options using keyboard inputs.
- Adjusted the dropdown's responsive behavior to ensure it adapts to different viewport sizes seamlessly.

### Rationale:
Adding keyboard navigation makes the dropdown menu accessible to users who rely on keyboard input instead of a mouse, catering to accessibility needs. Ensuring the dropdown is responsive enhances the user experience on varying devices and screen sizes, following best practices for modern web design.

## responsive.css

### Modifications Made:
- Introduced media queries to alter layout, font sizes, and menu visibility based on the user's viewport size.
- Applied styles to make images within the portal flexible, using `max-width: 100%;` and `height: auto;` so they scale properly on different devices.

### Rationale:
Implementing responsive design through media queries and flexible images ensures that the portal is accessible and legible on any device, providing a consistent and positive user experience regardless of how the site is accessed.

## Maintaining Design Ethos 

When adding new elements or pages to the portal, it is crucial to adhere to the established design principles outlined above:

- **Consistency in Typography and Color Usage:** Ensure to reference `main.css` for typography and color variables. This practice helps in integrating new elements with the existing design smoothly.
- **Responsive Design:** Follow the responsive design patterns established in `responsive.css` for any new elements. Testing on various devices and screen sizes is paramount to ensure a uniform experience across the portal.
- **Accessibility:** New code should maintain high accessibility standards, including the use of semantic HTML, ARIA roles where applicable, and support for keyboard navigation.

Following these guidelines will ensure that the portal continues to offer a cohesive, user-friendly, and accessible experience as it grows and evolves.
```