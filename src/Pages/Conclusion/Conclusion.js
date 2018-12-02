import React, { Component } from 'react';
import logo from "./logo.svg";
import './Conclusion.css';

class Conclusion extends Component {
  render() {
    return (
      <div className="Conclusion">
	  <header className= "Conclusion-header">
	    <img src={logo} className="Summary-logo" alt="logo" />
         <h1 className="Conclusion-title">Conclusion</h1>
		 </header>
		<h2> Did they perform to your expectations? </h2>
		<p> Yes, React and Rest did perform to our expectations. They were perfect for creating a website in a short time. They are two the most popular frameworks right now, and it was easy for us to get it set up and running. </p>
				<hr/>
		<h2> Were they difficult to install or configure? </h2>
		<p> No, they were both easy to install.</p>
		<h2> Was it easy to create the page(s) with it? </h2>
		<p>It was easy after we got used to it and practiced a few times. Javascript, HTML and CSS were used.</p>
		<hr/>
		<h2> Was the learning curve steep? </h2>
		<p>No, It was not very steep because majority of it was coding using a mixture of Javascript and HTML.</p>
		<h2> Would you have done things differently in retrospect? Did you regret your choice of frameworks? </h2>
		<p>No, we would not have because we learned a lot about these particular frameworks, especially how they are currently being used in many large-scaled, popular websites and applications, such as Facebook and Netflix . As developers, we thought that these frameworks were perfect and it let us build exactly what we wanted to and it gave us a lot of control over the project. </p>
		</div>
    );
  }
}

export default Conclusion;
