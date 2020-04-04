import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  bottom: 0;
  height: 25vh;
  width: 100%;

  background: #000;
  color: #e5e5e5;
  font-family: "Montserrat", Arial, Helvetica, sans-serif;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 40px 100px;
  div{
    display: flex;
    flex-direction: column;
    font-size: 100%;
    a{
      color: #e5e5e5;
      padding-top: 10px;
    }
  }
`;

export const Logo = styled.a`
  font-size: 32px;
  span{
    background: #e5e5e5;
    color: #333;
    font-size: 1em;
    font-weight: bold;
    padding: 7px 6px;
    border-radius: 4px;
    margin-right: 4px;
  }
`;
