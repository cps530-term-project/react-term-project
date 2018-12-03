## Project Requirements

**CPS530 - Term Project**

Subject: Demonstration and Website tutorial of web application frameworks or content management frameworks.

**Teams: Minimum 3 students, maximum 4 students**

Pick two frameworks your choice, one for the front-end (client side) (CSS/JS: ex: SemanticUI, Foundation, Materialize, VueJS, Material UI, React, Pure, Skeleton, Bulma...) and one for the back end (server side) (PHP/Python/Perl/C#/Ruby...: ex: Laravel, Ruby on Rails, Mojolicious, Flask, Express, Django, ASP.NET, ...). You create a website that presents the frameworks in a concise fashion as a tutorial.
**Note: You are permitted to use Bootstrap but it will not count as your front-end choice. You will need to pick another front-end framwork in addition to Bootstrap.**

Your website shall have at least 6 pages, all done using the frameworks of your choice. Following are the requirements for each of the six pages.

**Page 1**. A summary snapshot presentation of the chosen frontend Framework: Popularity, strengths, weaknesses, which developers mostly use it and for what kind of websites. A summary snapshot presentation of the chosen backend Framework: Popularity, strengths, weaknesses, which developers mostly use it and for what kind of websites.

**Page 2**. A tutorial showing in short simple steps how to install the frameworks on your chosen platform. Back-end frameworks cannot be installed on the Ryerson servers, you will have to host on an external server. You can use shared hosting or better yet a VPS service or something similar, or set your own server on your own machine (must have permanant connection). Digital Ocean is an inexpensive and versatile option. Provide installation instructions for both frameworks.

**Page 3**. A short tutorial showing how to create a great looking page (or more) with text, images, and styles using your chosen Frameworks. The subject of your page(s) is entirely yours.

**Page 4**. The actual page that is the result of step #3. Again up to you. This is your actual demo website. Don't forget to mention the URL/link that goes directly to the page here.

**Page 5**. The conclusion. Rate your experience with the frameworks that you chose. Did they perform to your expectations? Were they difficult to install or configure? Was it easy to create the page(s) with it? Was the learning curve steep compared with regular HTML/CSS/Javascript/PHP? Would you have done things differently in retrospect? Did you regret your choice of frameworks?

**Page 6**. A credits page. Identify the team members (with pictures if possible) and mention the different members responsibilities. Also mention references here if non original material was used.

Optional:
Explore some options of monetizing. We you successful in implementing monetization solutions? Did you make any money? Enough to actually get a payment? Share your experience. Here are a few monetization solutions for small traffic websites:

H12-Media

Yllix

Click Viper

Submission of the project is do be done on the D2L/Brightspace system. You will need to submit two URLs:

[1] The URL to the main entry point of your project site.

[2] The URL of the demonstration website. Project is due Monday December 3, 5:00 pm.


## Editting Pages 

You can see all the pages within `src/Pages/{directoryName}/{directoryFile}.js` and edit them accordingly.
Within the `return` method. You would always need to wrap the content with a parent element. Which in this case is a `div`.
```js
import React, { Component } from 'react';

class Example extends Component {
  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <h1>Hello again</h1> // CORRECT WAY
      </div>
    );
  }
}

export default Example;
```
You can have as many elements within the parent element. But elements can't be on the same level as the parent element. For example you can't do this: 
```js
import React, { Component } from 'react';

class Example extends Component {
  render() {
    return (
      <div>
        <h1>Hello World</h1>
      </div>
      <div>
        <h1>Hello again</h1> // THIS IS INCORRECT
      </div>
    );
  }
}

export default Example;
```



## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
