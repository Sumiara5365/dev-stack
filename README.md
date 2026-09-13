# Dev Stack

Dev Stack is a simple and user-friendly web application where developers can explore different technologies and build their own technology stack.
Users can browse technologies, view their category, difficulty level and rating, and add their favorite technologies to their personal stack.

## Technologies Used

- React
- TypeScript
- Vite
- CSS
- JSON

## Features

1. **Explore Technologies**
   - Browse different technologies with their name, description, category, difficulty and rating.

2. **Build Your Own Stack**
   - Add technologies to your personal stack and remove them whenever needed.

3. **Responsive Design**
    The website works on desktop, tablet and mobile devices with a responsive layout.



## React Questions & Answers

### 1. What is JSX, and why is it used in React?

JSX is a syntax that lets us write HTML-like code inside JavaScript or TypeScript. It makes React code easier to read and helps us create UI components easily.

### 2. What is the difference between props and state?

Props are used to pass data from a parent component to a child component. State is data managed inside a component that can change over time.

### 3. What does the `useState` hook do, and where did you use it in this project?

`useState` is used to store and update data in a React component. In this project, I used it for the technologies list, selected stack, loading state, and mobile menu state.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` is used to run code after a component renders. I used it to fetch the technology data from the JSON file when the application loads.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

React uses the `key` to identify each item in a list. A unique key helps React efficiently track which items have changed, been added, or removed.

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI based on a condition.

I used it to show the loading message while the technology data is being loaded:

```tsx
{loading ? (
  <div className="loading">
    <p>Loading technologies...</p>
  </div>
) : (
  <div className="technology-section">
    ...
  </div>
)}
