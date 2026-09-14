# DevStack
### 🌐 Live Preview
- **Live URL:** [View Project Live](https://zesty-lamington-0bb583.netlify.app/)
## Technologies Used

- React.js
- TypeScript
- Tailwind CSS
- React-Toastify
- JSON
- Vite



## 3 Features

 1. Duplicate Add Protection 
Once a technology is added to the stack, it can't be added again  the button becomes disabled and reads added to stack, so the user can instantly tell what's already been selected.

 2. Live Selection Counter 
The "Your Stack" panel always shows an up-to-date count of how many technologies have been selected. This number updates in real time the moment an item is added or removed, with no refresh needed.

 3. Real Time Notification Feedback 
Adding or removing a technology triggers a small toast notification via react-toastify, showing exactly what happened successfully added, removed, or all cleared. Users get a clear visual confirmation with every action instead of having to check the sidebar themselves.



## React Questions

 1. What is JSX, and why is it used? 
JSX is a syntax that lets you write HTML-like code inside JavaScript. It's used because it lets you write the UI and its logic together in one readable place.

 2. Difference between props and state? 
Props are data passed down from a parent component, and the child can only read them, not change them. State is data a component keeps and manages inside itself, and it can update on its own.

 3. What does useState do, and where did I use it? 
It lets a component remember a value and re-render whenever that value changes. I used it for the stackselected technologies and for the loading state.

 4. Why did useEffect need to be used to load the JSON data? 
Fetching data is a side effect, and doing it directly in the component body would cause it to run on every render. useEffect with an empty dependency array makes it run only once, when the component first mounts.

5. Why does every item in a .map() list need a unique key? 
React needs a unique identifier to track each item individually; without it, rerenders become slow and can behave incorrectly. I used each technology's id as the key.

6. What is conditional rendering? 
Showing different UI based on a condition. For example, if stack.length === 0 it shows an empty message; otherwise it shows the list of items.

7. How is data passed between parent and child? 
The parent passes data down to the child through props. If the child needs to send something back, the parent passes a function as a prop (like onAddClick), and the child calls it.
