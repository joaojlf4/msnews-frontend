import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import msToDateString from '../../utils/msToDateString';
import api from '../../services/api';
import { Container, Head, DateText, MarkdownContainer } from './styles';
import Markdown from 'react-markdown';
import { Helmet } from 'react-helmet';

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
    let data = history.location.state;

    if(!data){
      try{
        const response = await api.get(`news?title=${paramTitle}`, {
          params: {
            title: paramTitle
          }
        });
        if(response.status === 200){
          data = response.data;
        }else{
          setIsLoading(false);
          return history.push('/nao-encontrado')
        }
      }catch(err){
        return history.push('/nao-encontrado')
      }
    } 
    setTitle(data.title);
    setEye(data.eye);
    setImgSrc(data.pictureUrl);
    setPublishedAt(msToDateString(data.publishedAt).getReadableDate());
    setMarkdown(data.markdown);
    setIsLoading(false);
  }

  return (
    <Container>
      {
        isLoading ? <h1>Carregando...</h1> : <>
          <Helmet>
            <title>{title}</title>
            <meta name="description" content={eye} />
            <meta name="image" content={imgSrc} />
          </Helmet>
          <Head>
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
