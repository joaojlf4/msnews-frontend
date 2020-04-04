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
`;

export const Head = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  h1{
    font-size: 3.5em;
  }
  p{
    font-size: 1.5em;
    color: #666;
    padding-bottom: 10px;
    border-bottom: 1px solid #CCC;
    margin-bottom: 15px;
  }
  img{
    width: 60%;
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
  line-height: 35px;
`;