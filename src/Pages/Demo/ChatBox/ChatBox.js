import React, { Component } from 'react';
import ChatMessage from './ChatMessage/ChatMessage';
import axios from 'axios';

import "./ChatBox.css"

class ChatBox extends Component {
  state = {
    userMessage: '',
    messages: []
  }
  componentDidMount() {
    axios.get('http://localhost:5000/')
      .then(response => {
        this.setState({messages: response.data.messages})
      });
  }

  renderMessageList = () => {
    const { messages } = this.state;
    return messages.map((message, index) => <ChatMessage key={index} message={message}/>)
  }

  userMessageHandler = (e) => {
    this.setState({userMessage: e.target.value})
  }

  submitMessageHandler = () => {
    const { messages, userMessage } = this.state;
    messages.push(userMessage);
    axios.post('http://localhost:5000/', {messages})
      .then(response => {
      })
    this.setState({userMessage: ''})
  }

  clearMessagesHandler = () => {
    axios.post('http://localhost:5000/', {messages: []})
      .then(response => {
        this.setState({messages: response.data.messages})
      })
  }

  render() {
    return (
      <div>
        <button onClick={this.clearMessagesHandler}>Clear Messages</button>
        <div className="header">
              Chat Message Form
          </div>
        <div className="flexContainer">
          <div>
            {this.renderMessageList()}
          </div>
        </div>
        <textarea
          className="textarea"
          placeholder="Please type your message here..."
          onChange={(e) => this.userMessageHandler(e)}
          value={this.state.userMessage}
          />
          <button onClick={this.submitMessageHandler}>Send</button>
      </div>

    );
  }
}

export default ChatBox;