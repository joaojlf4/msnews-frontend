import React, { useState } from 'react';
import { Redirect, Link, useHistory } from 'react-router-dom';
import { 
  Container, 
  EditorContainer, 
  ActionButton,
  TitleInput,
  EyeInput,
  MarkdownInput
 } from './styles';

import Footer from '../../components/Footer';
import Top from '../../components/Top';

import api from '../../services/api';

export default function Write(){

  const history = useHistory();

  const [title, setTitle] = useState('');
  const [eye, setEye] = useState('');
  const [markdown, setMarkdown] = useState('');
  const [pictureUrl, setPictureUrl] = useState('');

  // const [titleFill, setTitleFill] = useState(false);
  // const [eyeFill, setEyeFill] = useState(false);
  // const [markdownFill, setMarkdownFill] = useState(false);

  async function handleSave(){
    try{
      await api.post('news', {
        title,
        eye,
        pictureUrl,
        markdown
      }, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem('accessToken')
        }
      });
      history.push('/');
    }catch(err){
      alert('Ocorreu um erro.');
      history.push('/');
    }
  }

  return (
    <>
      {true ? (
        <Container>
          <Top page="write"></Top>
          <EditorContainer>
            <TitleInput 
              value={title}
              onChange={e => setTitle(e.target.value)}
              placeholder="Título"/>
            <div> 
              <EyeInput 
                value={eye}
                onChange={e => setEye(e.target.value)}
                placeholder="Olho"/>
                <input 
                  className="pictureUrl"
                  placeholder="URL da imagem"
                  value={pictureUrl}
                  onChange={e => setPictureUrl(e.target.value)}/>
            </div>
            <MarkdownInput 
              value={markdown}
              onChange={e => setMarkdown(e.target.value)}
              placeholder={"Markdown"}></MarkdownInput>
            <section>
              <Link to="/">
                <ActionButton 
                  action='decline'
                  >Descartar</ActionButton>
              </Link>
                <ActionButton 
                  action='publish'
                  onClick={handleSave}>
                    Publicar
                </ActionButton>
            </section>
          </EditorContainer>
        </Container>
      ) : (
        <Redirect to="/" from="/write"/>
      )}
      <Footer></Footer>
    </>
  );
}