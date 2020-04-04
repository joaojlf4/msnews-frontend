import styled from 'styled-components';

export const Container = styled.div`
  z-index: 4;
  display: flex;
  width: 100%;
  position: fixed;
  top: 0;
  flex-direction: row;
  align-items: center;
  height: 13vh;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  border: 1px solid #FFF;
  font-family: "Poppins", Arial, Helvetica, sans-serif;
  font-weight: bold;
  padding: 2em 5%;
`;

export const Navigation = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  nav{
    display: flex;
    align-items: center;
  }
  ul{
    list-style: none;
    display: flex;
    flex: 0.5;
    justify-content: space-between;
    a{
      text-decoration: none;
      color: #666;
      transition: color 0.2s ease;
      &:hover{
        color: #888;
      }
    }
  }
  @media (max-width: 800px){
    ul {
      display: none;
    }
  }
  .hamburger{
    display: none;
    position: fixed;
    right: 25px;
    height: 25px;
    width: 30px;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;
    div{
      background: #333;
      height: 4px;
    }
    @media (max-width: 800px){
      display: flex;
    }
  }
  
`;

export const Hamburger = styled.div`
`;
export const Logo = styled.div`
  a{
    width: fit-content;
    font-family: "Montserrat", Arial, Helvetica, sans-serif;
    font-size: 30px;
    display: flex;
    align-items: center;
    span{
      background: #333;
      color: #f0f0f0;
      font-size: 0.8em;
      font-weight: bold;
      padding: 7px 6px;
      border-radius: 4px;
      margin-right: 4px;
    }
  }
`;

export const ResponsiveNav = styled.div`
  position: absolute;
  background: #f0f0f0;
  width: 100%;
  height: 100%;
  bottom: 0;
  z-index: 6;
  flex-direction: column;
  padding: 15px 15px;
  align-items: center;
  div{
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }
  ul{
    height: 100%;
    list-style: none;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    li a{
      text-decoration: none;
      color: #333;
      font-weight: 500;
      font-size: 4em;
    }
  }
  .on{
    height: 25px;
    width: 30px;
    flex-direction: column;
    cursor: pointer;
    transform: scale(1.2);
    div:first-child{
      background: #333;
      height: 4px;
      position: relative;
      transform: rotate(45deg);
      top: 2.5px;
    }
    div{
      background: #333;
      height: 4px;
      transform: rotate(-45deg);
    }
    
    div:last-child{
      display: none;
    }
  }
  overflow: hidden;
`;