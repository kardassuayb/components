I designed this React application that can simulate large projects where multiple engineers can work together. 
In the process of creating the application;
-	I created a component with button formats to ensure visual consistency between pages. I used the “prop-types” library to prevent multiple variations (such as primary-success) from being added to the buttons by different developers.
-	I used a simple JavaScript library “classnames” to conditionally combine classNames. In this way, I could easily add different CSS to elements that were repeated more than once, such as buttons. I also created a “reusable component” so that others can add classnames.
-	Instead of using CSS to show/hide an element, I did conditional rendering. For this, we take advantage of React's feature that does not print booleans, nulls, and undefined to the screen, and I used Javascript's && and || operators.
-	I used useEffect and useRef hooks to close the dropdown component when clicking anywhere on the screen.
-	I used the “ReactDOM.createPortal” feature to fix the modal page in the middle of the screen and add a gray background, and positioned the div containing the modal throughout the html document In this way, I prevented the modal from breaking when other developers created a new parent with the position prop.
-	Instead of hard-coding the rows and columns when creating the table, I created the given data and config object arrays using the map function within the map function. In this way, I can create rows/columns as long as the length of the data I have.
-	I designed my table component as sortable and reusable. This way, it will be easier for me to integrate this component into any other project I want.
-	For page address changes that are not made with the pushstate method, the page is completely refreshed when the forward/backward keys are used. Therefore, I set up a Navigation context and used the “popstate” event to prevent the page from reloading when the user switches between pages.





# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
