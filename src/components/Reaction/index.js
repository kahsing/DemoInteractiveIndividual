import React, { useState, useEffect, Component, Fragment } from "react";
import { Container, Row, Col, Card, Carousel, Image } from "react-bootstrap";
import io from "socket.io-client";
import FacebookEmoji from "react-facebook-emoji";

import Constants from "../../Constants";

const serverURL = `${Constants.CHANNEL.URL}:${Constants.CHANNEL.PORT}`;
const socketURL = `${serverURL}/${Constants.CHANNEL.NAMESPACE}`;
const m_socket = io(socketURL);

const ROOM = `|InteractiveScreen|individuals`;

m_socket.on("connect", socket => {
  m_socket.emit("room", ROOM);
});

const Landing = props => {
  const sendEmoji = e => {
    m_socket.emit("emoji", e);
  };

  return (
    <Container>
      <Row>
        <Row>
          <Col>
            <a className="button" onClick={() => sendEmoji("like")}>
              <FacebookEmoji type="like" size="xs" />
            </a>
          </Col>
          <Col>
            <a className="button" onClick={() => sendEmoji("love")}>
              <FacebookEmoji type="love" size="xs" />
            </a>
          </Col>
          <Col>
            <a className="button" onClick={() => sendEmoji("wow")}>
              <FacebookEmoji type="wow" size="xs" />
            </a>
          </Col>
          <Col>
            <a className="button" onClick={() => sendEmoji("haha")}>
              <FacebookEmoji type="haha" size="xs" />
            </a>
          </Col>
        </Row>
      </Row>
    </Container>
  );
};

export default Landing;
