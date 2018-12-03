import React, { Component } from 'react';

class Setup extends Component {
  render() {
    return (
      <div>
      <h1>
        Setup
      </h1>
      <h2>
      React:
      </h2>
      <ol>
      <li>Install node.js</li>
      <li>Run 'npm install react'</li>
      <li>Run 'npx create-react-app *Name-of-app*' </li>
      <li>Run 'cd *Name-of-app*'</li>
      <li>You'll be in the directory which contains your app. the sub directory src contains all of the js code</li>
      <li>Run 'npm start' to run the app localy</li>
      </ol>
      <h2>
      Rest:
      </h2>
      <ol>
      <li>Install python3</li>
      <li>Install <code> python-virtualenv</code></li>
      <li>Create python3 virtualenv</li>
      <li>Within the virtualenv <code> pip3 install flask</code> and <code> pip3 install flask-cors</code></li>
      <li>After creating a simple flask app. To run use <code> python app.py</code></li>
      <li>the app will be accesable at <code> http://localhost:5000/</code> by default</li>
      </ol>
      </div>

    );
  }
}

export default Setup;
