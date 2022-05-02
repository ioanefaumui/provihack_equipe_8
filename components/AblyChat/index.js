import React, { useEffect, useState } from "react";
import { useChannel } from "./AblyReactEffect";
import { Container } from "./styles";
import Image from "next/image";

export default function AblyChatComponent() {
  let inputBox = null;
  let messageEnd = null;

  const [messageText, setMessageText] = useState("");
  const [receivedMessages, setMessages] = useState([]);
  const messageTextIsEmpty = messageText.trim().length === 0;

  const [channel, ably] = useChannel("chat-demo", (message) => {
    const history = receivedMessages.slice(-199);
    setMessages([...history, message]);
  });

  const sendChatMessage = (messageText) => {
    channel.publish({ name: "chat-message", data: messageText });
    setMessageText("");
    inputBox.focus();
  };

  const handleFormSubmission = (event) => {
    event.preventDefault();
    sendChatMessage(messageText);
  };

  const handleKeyPress = (event) => {
    if (event.charCode !== 13 || messageTextIsEmpty) {
      return;
    }
    sendChatMessage(messageText);
    event.preventDefault();
  };

  useEffect(() => {
    messageEnd.scrollIntoView({ behaviour: "smooth" });
  });

  return (
    <Container>
      <h2>Mensagens</h2>
      <div className="userChat">
          <div className="imgUser">
              <Image
                src="/user.png"
                alt="Imagem do usuário"
                layout="fill"
              />
          </div>
          <p>Juliana</p>
      </div>
      <div className="chatText">
        {receivedMessages.map((message, index) => {
          const author =
            message.connectionId === ably.connection.id ? "me" : "other";
          return (
            <p
              className="message"
              key={index}
              author={author}
              data-author={author}
            >
              {message.data}
            </p>
          );
        })}
        <div
          ref={(element) => {
            messageEnd = element;
          }}
        ></div>
        {/* empty element to control scroll to bottom */}
      </div>
      <form onSubmit={handleFormSubmission}>
        <textarea
          ref={(element) => {
            inputBox = element;
          }}
          value={messageText}
          placeholder="Escreva sua mensagem... "
          onChange={(e) => setMessageText(e.target.value)}
          onKeyPress={handleKeyPress}
        ></textarea>
        <button type="submit" disabled={messageTextIsEmpty}>
          Enviar
        </button>
      </form>
    </Container>
  );
}
