import React, { useState, useEffect } from 'react';
// import socketIoClient from "socket.io-client";

const TestRoom = () => {
  const [userName, setUserName] = useState("");
  const [inputMessage, setInputMessage] = useState("");
  const [incomingMessages, setIncomingMessages] = useState([{ name: "", message: "" }]);
  // const [socket, setSocket] = useState(null);

  // const socket = socketIoClient('http://localhost:3000');
  // useEffect(() => {
  //   console.log('ss');
  //   if (socket) {
  //     //連線成功在 console 中打印訊息
  //     console.log('success connect!')
  //     //設定監聽
  //     initSocketIoClient()
  //   }
  // }, [socket])

  // socket.on('new message', (data) => {
  //   addChatMessage(data);
  // });

  // // socket.on('user joined', (data) => {
  //   console.log(data.username + ' joined');
  // });

  // const initSocketIoClient = () => {
  //   console.log("initSocketIoClient")
  // }
  const login = (userName) => {
    console.log(userName);
    setUserName(userName);
  }

  const sendMessage = (inputMessage) => {
    var message = inputMessage;
    console.log(inputMessage)
    setInputMessage("");
    addChatMessage({
      name: userName,
      message: message
    });
    // if (socket) {
    //   addChatMessage({
    //     name: userName,
    //     message: message
    //   });
    // }
    // socket.emit('new message', message);
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
          placeholder="ex: ㄩㄑxxss"
          onChange={(event) => login(event.target.value)}></input>
        {/* <button
            type="submit"
            className="ml-2"
            disabled={(userName.length > 0) ? false : true}
            onClick={() => login(userName)}>OK</button> */}

      </div>

      <div className="MessageArea">
        <ul className="Messages">
          <li className="Message">{userName} 歡迎進入聊天室 :D</li>
          {incomingMessages.map((item) => (
            <li key={item.message} className="Message">{item.name} {item.message}</li>
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
