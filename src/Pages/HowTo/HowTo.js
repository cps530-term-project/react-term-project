import React, {Component} from 'react';

class HowTo extends Component {
  render() {
    return (
      <div>
        <h1>How To</h1>
        <p>A short tutorial on how the demo page was made.</p>
        <ol>
          <li>
            Firstly you would have to create states for the user message and the message list.
            <code>
              <pre>
                state = &#123;
                  "userMessage" = "",
                  "messages": &#91;&#93;
                &#125;
              </pre>
            </code>
          </li>
          <li>
            You would have to use <code>ComponentDidMount()</code> function which is a lifecyle hook.
            It gets used once everytime when the page renders.
          </li>
          <li>Within <code>ComponentDidMount()</code> you would have to use <code>axios </code>
            which is a promise based HTTP client to fetch and retrieve data. More information on
            <a href="https://github.com/axios/axios"> axios</a>
          </li>
          <li>You would have to make methods for storing the user message, displaying the
            messages based on the response of the API, and clearing the message history.
          </li>
          <li>
            You bind those methods to HTML elements with the property type of <code> onClick </code>
            or <code> onChange</code> which handles the events. More information on
            <a href="https://reactjs.org/docs/handling-events.html"> handling events</a>
          </li>
          <li>You place your HTML code within the return function. The return function should only have one
            parent element and can have as many child elements within the parent element.
          </li>
        </ol>
      </div>
    );
  }
}

export default HowTo;
