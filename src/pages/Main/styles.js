import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const MainContainer = styled.main`
  min-height: 70vh;
  display: flex;
  justify-content: space-between;
  width: 95%;
  padding: 50px;
  margin-top: 80px;
  aside{
    display: flex;
    flex-direction: column;
    flex: 0.8;
    margin-top: 12px;
    position: relative;
    div + div {
      margin-top: 12px;
    }
  }
  main{
    display: flex;
    flex: 0.8;
    flex-direction: column;
  }
  @media (max-width: 1119px){
    /* width: 100%;
    main{
      width: 37%;
    }
    aside{ 
      width: 45%;
    } */
  }
  @media (max-width: 1080px){
    /* display: inline; */
    width: 100%;
    aside{ 
      width: 30em;
    }
    main{
    }
  }
  @media (max-width: 966px){
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    height: fit-content;
    main{
      text-align: start;
    }
  }
  @media (max-width: 600px){
    align-items: center;

    aside{
      width: 110%;
    }
    main{
    }
  }
  @media (max-width: 465px){
    main{
    }
    aside{
      width: 140%;
    }
  }
  @media (max-width: 380px){
    main{
      transform: scale(0.8)
    }
  }
  @media (max-width: 355px){
    main{
      transform: scale(0.6)
    }
  }
`;

