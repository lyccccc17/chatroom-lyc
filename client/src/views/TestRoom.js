import React, { useState, useEffect } from 'react';
// import socketIoClient from "socket.io-client";

const TestRoom = () => {
  const [userName, setUserName] = useState("");
  const [inputMessage, setInputMessage] = useState("");
  const [incomingMessages, setIncomingMessages] = useState([{ name: "", message: "" }]);

  const login = (userName) => {
    console.log(userName);
    setUserName(userName);
  }

  const sendMessage = (inputMessage) => {
    console.log("sendMessage")
    var message = inputMessage;
    setInputMessage("");
    addChatMessage({
      name: userName,
      message: message
    });
  }

  const addChatMessage = (data, options) => {
    console.log("new message")
    setIncomingMessages([...incomingMessages, { name: data.name, message: data.message }]);
  }

  return (
    <div className="TestRoom">
      {/* 進入視窗 */}
      <div className="IntoView">
        <h2>你的綽號是啥?</h2>
        <input
          value={userName}
          placeholder="ex: ㄩㄑ"
          onChange={(event) => login(event.target.value)}></input>
        <button
          className="ml-2"
          disabled={(userName.length > 0) ? false : true}
          onClick={() => sendMessage("進入聊天室")}>OK</button>
      </div>

      <div className="MessageArea">
        <ul className="Messages">
          <li className="Message">{userName} 歡迎進入聊天室 :D</li>
          {incomingMessages.map((item, index) => (
            <li key={index} className="Message">{item.name} {item.message}</li>
          ))}
        </ul>
      </div>
      <form className="InputeArea" onSubmit={sendMessage}>
        <input
          value={inputMessage}
          placeholder="say something :)"
          onChange={(event) => setInputMessage(event.target.value)}></input>
        <button
          type="submit"
          className="ml-2"
          disabled={(inputMessage.length > 0) ? false : true}
          onClick={() => sendMessage(inputMessage)} >send</button>
      </form>
    </div>
  );
}

export default TestRoom;
