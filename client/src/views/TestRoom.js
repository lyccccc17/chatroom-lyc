import React, { useState, useEffect } from 'react';
import socketIoClient from "socket.io-client";

const TestRoom = () => {
  const [userName, setUserName] = useState("");
  const [inputMessage, setInputMessage] = useState("");
  const [incomingMessages, setIncomingMessages] = useState([{ name: "", message: "" }]);
  const socket = socketIoClient('http://localhost:3000');
  // socket.on('new message', (data) => {
  //   addChatMessage(data);
  // });

  // // socket.on('user joined', (data) => {
  //   console.log(data.username + ' joined');
  // });
  useEffect(() => {
    if (socket) {
      //連線成功在 console 中打印訊息
      console.log('success connect!')
      //設定監聽
      initSocketIoClient()
    }
  }, [socket])


  const initSocketIoClient = () => {
    console.log("initSocketIoClient")
  }
  const login = (userName) => {
    console.log(userName)
    // // Tell the server username
    // socket.emit('add user', userName);
  }

  // const sendMessage = (inputMessage) => {
  //   var message = inputMessage;
  //   setInputMessage("");
  //   if (socket) {
  //     addChatMessage({
  //       name: userName,
  //       message: message
  //     });
  //   }
  //   socket.emit('new message', message);
  // }

  const addChatMessage = (data, options) => {
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
          onChange={(event) => setUserName(event.target.value)}></input>
        <button
          className="ml-2"
          disabled={(userName.length > 0) ? false : true}
          onClick={() => login(userName)}>OK</button>
      </div>

      <div className="MessageArea">
        <ul className="Messages">
          <li className="Message">{userName} 歡迎進入聊天室 :D</li>
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
        {/* <button
          className="ml-2"
          disabled={(inputMessage.length > 0) ? false : true}
          onClick={() => sendMessage(inputMessage)} >send</button> */}
      </div>
    </div>
  );
}

export default TestRoom;
