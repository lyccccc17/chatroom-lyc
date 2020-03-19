import React, { useState } from 'react';

const TestRoom = () => {
  const [incomingMessages, setIncomingMessages] = useState([{name:"lyc",message: "hellow lyc"}]);
  const [inputMessage, setInputMessage] = useState("");
  const [inputUserName, setInputUserName] = useState("");

  // var socket = io();
  const login = (inputUserName) => {
    
  }

  const sendMessage = (inputMessage) => {
    var message = inputMessage;
    addChatMessage({name:"lyc", message:message});
    setInputMessage("");
  }

  const addChatMessage = (data, options) => {
    setIncomingMessages([...incomingMessages, {name:data.name, message:data.message}]);
  }

  return (
    <div className="TestRoom">
      {/* 進入視窗 */}
      <div className="IntoView">
        <h2>你的綽號是啥?</h2>
        <input
          value={inputUserName}
          placeholder="ex: ㄩㄑ"
          onChange={(event) => setInputUserName(event.target.value)}></input>
        <button
          className="ml-2"
          disabled={(inputUserName.length > 0) ? false : true}
          onClick={() => login(inputUserName)}>OK</button>
      </div>

      <div className="MessageArea">
        <ul className="Messages">
          <li className="Message">{inputUserName} 歡迎進入聊天室 :D</li>
          {incomingMessages.map((item) => (
            <li key={item.mseeage} className="Message">{item.name} {item.message}</li>
          ))}
        </ul>
      </div>
      <div className="InputeArea">
        <input
          value={inputMessage}
          placeholder="say something :)"
          onChange={(event) => setInputMessage(event.target.value)}></input>
        <button
          className="ml-2"
          disabled={(inputMessage.length > 0) ? false : true}
          onClick={() => sendMessage(inputMessage)} >send</button>
      </div>
    </div>
  );
}

export default TestRoom;
