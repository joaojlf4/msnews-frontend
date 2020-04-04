import styled from 'styled-components';

export const Container = styled.div`

  
  a{
    font-family: "Montserrat", Arial, Helvetica, sans-serif;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    padding: 11px;
    display: flex;
    align-items: center;
    cursor:pointer;
    position: relative;
    top: 0;
    transition: opacity 0.3s ease;
    transition: top ease 0.3s;
    display: flex;
    flex-direction: row;
    color: inherit;
    text-decoration: none;
    width: 100%;
    h1{
      font-size: 1em;
    }
    p{
      color: #666;
    }
    img{
      height: 5em;
    }
    div{
      margin-left: 12px;
    }
    &:hover{
      opacity: 0.8;
      top: -0.4em;
    }
  }
  
`;
