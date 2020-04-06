import React, { useState, useEffect, useRef } from 'react';
import api from '../../services/api';
import isMultipleOfSix from '../../utils/isMultipleOfSix';

import Top from '../../components/Top';
import NewCard from '../../components/NewCard';
import AsideCard from '../../components/AsideCard';
import Footer from '../../components/Footer';
import { Container, MainContainer } from './styles';

export default function Main(){
  const actualPage = 1;
  const containerRef = useRef(null);

  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadNews();
  }, []);
  async function loadNews(){
    try{
      const response = await api.get(`news?page=${actualPage}`);
      setNews(response.data.docs);
      setIsLoading(false);
    }catch(err){
      alert('Ocorreu um erro.')
    }
  }

  return (
    <>
      <Top></Top>
        <Container ref={containerRef} > 
          <MainContainer>
            <main>
              {
                isLoading ? <h1>Carregando...</h1> : 
                news.map(n => isMultipleOfSix(news.indexOf(n)) ? 
                  <NewCard 
                    key={n._id}
                    title={n.title}
                    pictureUrl={n.pictureUrl}
                    eye={n.eye}
                    link={n.slug}
                    index={news.indexOf(n)}
                    state={n}/> : false)
              }
            </main>
            <aside>
              {isLoading ? <></> : 
                news.map(n => !isMultipleOfSix(news.indexOf(n)) ? 
                  <AsideCard 
                    key={n._id}
                    title={n.title}
                    pictureUrl={n.pictureUrl}
                    eye={n.eye}
                    link={n.slug}
                    index={news.indexOf(n)}
                    state={n}/> : false)}
            </aside>
          </MainContainer>
        </Container>
      <Footer></Footer>
    </>
  );
}