import React from 'react';

import { Link } from 'react-router-dom';
import { Container } from './styles';

export default function AsideCard({ title, pictureUrl='', eye='', link='..' }) {

  return !title ? <></> : (
    <Container>
      <Link to={"news/" + link}>
        <img src={pictureUrl} alt="Saiba mais."/>
        <div>
          <h1>{title}</h1>
          {eye?(<p>{eye}</p>):(<></>)}
        </div>
      </Link>
    </Container>
  );
}
