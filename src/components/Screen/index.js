import React, { useState, useEffect, Component } from "react";
import io from "socket.io-client";
import Constants from "../../Constants";

import { Image, Container, Row, Carousel } from "react-bootstrap";

import { useToasts } from "react-toast-notifications";
import FacebookEmoji from "react-facebook-emoji";

const socketURL = `${Constants.CHANNEL.URL}:${Constants.CHANNEL.PORT}/${Constants.CHANNEL.NAMESPACE}`;

const Screen = () => {
  const { addToast } = useToasts();
  const [emoji, setEmoji] = useState(false);

  useEffect(() => {
    const m_socket = io(socketURL);

    m_socket.on("connect", socket => {
      m_socket.emit("room", `|InteractiveScreen|screen`);
    });

    m_socket.on("emoji", function(messages) {
      console.log("messages", messages);
      if (messages) {
        let msg = <FacebookEmoji type={messages} size="sm" />;
        addToast(msg, {
          autoDismiss: true,
          autoDismissTimeout: 3000,
          appearance: "success"
        });
        setEmoji(messages);
      }
    });
  }, []);

  return (
    <Container>{emoji ? `You have sent Emoji -- ${emoji}` : ``}</Container>
  );
};

export default Screen;
