Welcome to the ReadMe for my first solo web dev project. Leaving all the React & npm stuff below in case I need to reference it.

This is going to be more of a living document for my development phase ideas for this project. Potentially not conventional but I think it will help me refine my ideas- may shift to a Trello board if this idea gets larger.

Development plans:

My plan is to start simple with hard coded data to get a proof-of-concept site up, and then refactor the code as I add more complex functionality. 

Initial goal: 
-Web uses user-entered zip code to display weather data. The background of the page will conditionally render based on the weather data pulled by the provided zip (sunshine, rainy day, etc.). 
-Data pulled is hardcoded into the database. Data needed initially: Image assets, cooresponding messages for the user, zip codes, weather forecast that cooresponds to each zip code.
-When the zip is submitted, the web page will conditionally render a weather-based image and phrase for user. (ex: if the weather is rainy, the image will be of a rainy day, and the message will be something like
        "Don't forget an umbrella, it's raining most of the day")
-Intial site is styled for web & mobile.

Improvements to be made:
-The most important is pivoting off of hard coded data to using a weather API to pull in live data for any zip. Will need to check all weather forecasts and assign an image asset for each to test across global zip codes.
-From here, I'll want to add functionality to automatically pull the user's location from their IP and give them the forecast on page load, with an option to look up weather at a specific zip code. Alternatively, I can ask them for their location data in browser. 
        (This is probably the step in most fuzzy on at this time, will do more research once I get the intitial iteration working)
-Next, replace the image assets with animations of the weather. This will be a more polished look.
-Styling for all screens (tablet, etc.), and look into making it a PWA. I attended a lecture on PWAs a few years ago so this idea may be out of date. Again, one I know less about going into things, but the idea behind this is making it
        something I can pull up on the web or have as an app on my phone. I am usually bad at checking the weather so this is a requirement from my favorite stakeholder, myself! 
    -If I can get it to be a mobile app without too much refactoring, I'd like to add functionality to send a push notification if my local forecast has rain in the forecast (as an example, you could set up notifications for many types of selectable forecasts)
-Add cheeky dialogues for more weather types. Light vs heavy rain for example, recommending sunscreen for high UV levels, etc.






*******************************************************************************************************







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
