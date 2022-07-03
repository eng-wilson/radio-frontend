import React, { useContext, useEffect, useState } from 'react';
import Player from '../../components/Player';

import { SocketContext } from '../../services/socket';

type MessageProps = {
  username: string;
  body: string;
};

const Home: React.FC = () => {
  const socket = useContext(SocketContext);

  const [username, setUsername] = useState('');
  const [videoId, setVideoId] = useState('');
  const [videoTimer, setVideoTimer] = useState(0);
  const [body, setBody] = useState('');
  const [chatHistory, setChatHistory] = useState<MessageProps[]>([]);

  const handleSendMessage = () => {
    socket.emit('message', { username, body });
  };

  useEffect(() => {
    socket.on('message', (history) => {
      setChatHistory(history);
    });

    socket.on('nowPlaying', (id, timer) => {
      if (timer) {
        setVideoTimer(timer);
      } else {
        setVideoTimer(0);
      }
      setVideoId(id);
    });
  }, [socket]);

  return (
    <div>
      {videoId && <Player videoId={videoId} startAt={videoTimer} />}
      <input
        type='text'
        name='user'
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <input
        type='text'
        name='message'
        value={body}
        onChange={(e) => {
          setBody(e.target.value);
        }}
      />
      <button onClick={() => handleSendMessage()}>Send</button>

      <ul>
        {chatHistory.map((message) => (
          <li>{`${message.username}: ${message.body}`}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
