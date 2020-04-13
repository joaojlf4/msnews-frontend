import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
// import api from '../../services/api';
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

  function handleShareWhatsapp(){
    const message = `${title} http://msnews.netlify.com/news/${paramTitle}`;
    history.push(`whatsapp://send?text=${message}`)
  }

  useEffect(() => {
    history.push('http://facebook.com')
  }, [eye, history, imgSrc]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  // async function getData(){
  //   let data = history.location.state;

  //   if(!data){
  //     try{
  //       // const response = await api.get(`news?title=${paramTitle}`, {
  //         params: {
  //           title: paramTitle
  //         }
  //       });
  //       if(response.status === 200){
  //         data = response.data;
  //       }else{
  //         setIsLoading(false);
  //         return history.push('/nao-encontrado')
  //       }
  //     }catch(err){
  //       return history.push('/nao-encontrado')
  //     }
  //   } 
  //   setTitle(data.title);
  //   setEye(data.eye);
  //   setImgSrc(data.pictureUrl);
  //   setPublishedAt(msToDateString(data.publishedAt).getReadableDate());
  //   setMarkdown(data.markdown);
  //   setIsLoading(false);
  //   document.title = title;
  // }

  return (
    <Container>
      {
        isLoading ? <h1>Carregando...</h1> : <>
        <Helmet>
          <meta property="og:image" content={imgSrc}/>
          <meta property="twitter:image" content={imgSrc}/>
          <meta itemProp="image" content={imgSrc}/>
        </Helmet>
          <Head>
            <h1>{title}</h1>
            <DateText>{publishedAt}</DateText>
            {/* <Icon 
              path={mdiWhatsapp}
              title="Whatsapp"
              size={1.5}
              style={{
                marginBottom: 10,
                cursor: 'pointer',
              }}
              onClick={handleShareWhatsapp}/> */}
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
