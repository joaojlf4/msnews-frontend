import React, { useState, useEffect } from 'react';
// import isMultipleOfSix from '../../utils/isMultipleOfSix';

import Top from '../../components/Top';
import NewCard from '../../components/NewCard';
import AsideCard from '../../components/AsideCard';
import Footer from '../../components/Footer';
import { Container, MainContainer } from './styles';
import { Helmet } from 'react-helmet';

export default function Main(){
  const actualPage = 1;

  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadNews();
  }, []);
  async function loadNews(){
    try{
      // const response = await api.get(`news?page=${actualPage}`);
      // response.data.docs.reverse();
      // setNews(response.data.docs);
      setIsLoading(false);
    }catch(err){
      alert('Ocorreu um erro.')
    }
  }

  return (
    <>
      <Helmet>
        
      </Helmet>
      <Top></Top>
        <Container> 
          <MainContainer>
            {/* <main>
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
            </aside> */}
          </MainContainer>
        </Container>
      <Footer></Footer>
    </>
  );
}