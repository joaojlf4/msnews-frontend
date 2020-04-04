import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 60%;
  flex-direction: column;
  align-items: center;
  min-height: 70vh;
  text-align: start;
  align-self: center;
  margin-top: 100px;
  font-size: 16px;
  line-height: 36px;
  @media (max-width: 1000px){
    font-size: 14px;
  }
  @media (max-width: 820px){
    font-size: 12px;
    line-height: 25px;
  }
  @media (max-width: 680px){
    width: 90%;
    font-size: 12px;
  }
  @media (max-width: 565px){
    font-size: 10px;
  }
  @media (max-width: 375px){
    img{
      width: 100%;
    }
  }
  @media (max-width: 375px){
    h1{
      font-size: 2.2em;
    }
  }
  @media (max-width: 250px){
    font-size: 8px;
  }
`;

export const Head = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  h1{
    font-size: 3em;
    line-height: 1.2em;
  }
  p{
    width: 100%;
    font-size: 1.5em;
    color: #666;
    padding-bottom: 10px;
    border-bottom: 1px solid #CCC;
    margin-bottom: 15px;
  }
  img{
    align-self: flex-start;
    width: 30em;
    max-width: 100%;
  }
`;

export const DateText = styled.h4`
  font-size: 1.2em;
  font-weight: normal;
  margin-bottom: 10px;
`;

export const MarkdownContainer = styled.div`
  font-size: 1.5em;
  text-align: start;
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  margin-top: 25px;
  margin-bottom: 25px;
  h1, h2, h3, h4, h5, h6{
    margin-top: 25px;
    margin-bottom: 15px;
  }
  border-bottom: 2px solid #CCC;
  padding-bottom: 25px;
`;