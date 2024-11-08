import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import './Chatbot.css'; // Import the advanced CSS

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [userMessage, setUserMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [botMood, setBotMood] = useState('🙂'); // Default bot mood (neutral)

  const handleSend = () => {
    if (userMessage.trim()) {
      setMessages([...messages, { user: true, text: userMessage }]);
      setUserMessage('');

      // Simulate bot response
      setIsTyping(true);
      setTimeout(() => {
        setMessages(prevMessages => [
          ...prevMessages,
          { user: false, text: `How can I assist you today? ${botMood}` },
        ]);
        setBotMood('😊'); // Change bot mood to happy after response
        setIsTyping(false);
      }, 1000);
    }
  };

  return (
    <div className="chatbot-container animated bounceInUp">
      <div className="chatbot-header">
        Chat with Us
        <span className="chatbot-face">{botMood}</span> {/* Display bot mood here */}
      </div>
      <div className="chatbot-messages">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`message ${message.user ? 'user-message' : 'bot-message'}`}
          >
            {message.text}
          </div>
        ))}
        {isTyping && (
          <div className="message bot-message">...</div> // Simulating typing
        )}
      </div>
      <div className="chatbot-input">
        <Form.Control
          type="text"
          placeholder="Type your message..."
          value={userMessage}
          onChange={(e) => setUserMessage(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === 'Enter') handleSend();
          }}
        />
        <Button onClick={handleSend} className="send-button">
          Send
        </Button>
      </div>
    </div>
  );
};

export default Chatbot;
