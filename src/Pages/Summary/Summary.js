import React, { Component } from 'react';
import logo from "./logo.svg";
import './Summary.css';

class Summary extends Component {
  render() {
    return (
      <div className="Summary">
	  <header className= "Summary-header">
	  <a href="https://reactjs.org/"><img src={logo} className="Summary-logo" alt="logo" /></a>
         <h1 className="Summary-title">React Summary</h1>
		 </header>
		<h2> What is it? </h2>
		<p> It is a JavaScript library that is used to build user interfaces. It is lightweight, fast and is one of the most convenient ways to execute code on your computer. It can be used as a base in the development of single page or mobile applications. It was made by Facebook in 2013. </p>
				<hr/>
		<h2> Strengths </h2>
		        <ul>
              <li>Virtual DOM in ReactJS makes updates really quick and allows for the building of a highly dynamic UI</li>
              <li>Open-source Facebook library which is constantly developing and is also open to the community</li>
              <li>ReactJS allows for direct work with components, and also uses downward data binding to make sure that changes of child structures don’t affect their parents, which makes the code stable</li>
        </ul>
				<h2> Weaknesses </h2>
		        <ul>
              <li>React technologies are updating and accelerating so fast that there is no time to write proper instructions</li>
              <li>Uses JSX, which allows mixing of HTML with Javascript, which takes some time to get used to</li>
              <li>Environment is constantly changing, so developers must regularly relearn the new ways of doing things</li>
        </ul>
		<hr/>
		<h2> Who is it for? </h2>
		<p> React has become very popular among developers and is because of its large potential to do many things. It is mainly used by developers who want to create larger than normal web applications which use data that can change over time, without reloading the page. React is currently being used by Facebook, Instagram, Netflix, New York Times, Yahoo! Mail, Khan Academy, WhatsApp and DropBox. React helps all these applications with their startup speed, runtime performance and modularity.</p>
		</div>
    );
  }
}

export default Summary;
