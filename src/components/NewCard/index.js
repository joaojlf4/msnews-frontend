import React from 'react';

import { Link } from 'react-router-dom';
import { Container } from './styles';

export default function MainNewCard({ title, pictureUrl, eye='', link='..', state }) {
  return (
    <Container>
      <Link to={{
        pathname: "news/" + link,
        state
        }}>
        <img src={pictureUrl} alt="Saiba mais."/>
        <h1>{title}</h1>
        {eye ? <p>{eye}</p> : <></>}
      </Link>
    </Container>
  );
}
