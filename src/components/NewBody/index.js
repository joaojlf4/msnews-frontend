import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import api from '../../services/api';
import msToDateString from '../../utils/msToDateString';
import { Container, Head, DateText, MarkdownContainer } from './styles';
import Markdown from 'react-markdown';

export default function NewBody() {

  const history = useHistory();

  const { title: paramTitle } = useParams();

  const [title, setTitle] = useState('');
  const [eye, setEye] = useState('');
  const [imgSrc, setImgSrc] = useState('');
  const [publishedAt, setPublishedAt] = useState(0);
  const [markdown, setMarkdown] = useState(''); 
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getData();
  }, [getData]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  async function getData(){
    try {
      const response = await api.get(`news?title=${paramTitle}`)
    
      if(response.status === 200){
        const { data } = response;
        setTitle(data.title);
        setEye(data.eye);
        setImgSrc(data.pictureUrl);
        setPublishedAt(msToDateString(data.publishedAt).getReadableDate());
        setMarkdown(data.markdown);
        document.title = data.title;
        setIsLoading(false);
      }else{
        history.push('/nao-encontrado')
      }
    } catch (error) {
      history.push('/nao-encontrado')
    }
  }

  return (
    <Container>
      {
        isLoading ? <h1>Carregando...</h1> : <><Head>
          <h1>{title}</h1>
          <DateText>{publishedAt}</DateText>
          <p>{eye}</p>
          <img src={imgSrc} alt={paramTitle}/>
        </Head>
        <MarkdownContainer>
          <Markdown source={markdown}/>
        </MarkdownContainer>
      </>}
    </Container>
  );
}
