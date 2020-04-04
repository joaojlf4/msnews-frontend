import styled from 'styled-components';

export const Container = styled.div`
  font-family: "Montserrat", Arial, Helvetica, sans-serif;
`;

export const EditorContainer = styled.div`
  margin-top: 130px;
  display: flex;
  flex-direction: column;
  font-size: 1.5em;
  outline: none;
  padding: 0 60px;
  section{
    display: flex;
    align-self: flex-end;
    margin-right: 25%;
    margin-bottom: 15px;
  }
  div{
    display: flex;
    flex-direction: row;
    align-items: center;
    .pictureUrl{
      width: 100%;
      height: 40px;
      padding: 0 11px;
      background: transparent;
      font-size: 20px;
      margin-bottom: 15px;
      border-left: 1px solid #CCC;
    }
  }
`;

export const Title = styled.h1`
  color: #555;
  font-size: 1.5em;
`;

export const ActionButton = styled.button`
  outline: none;
  color: ${props => props.action === 'publish' ? 'rgb(2,158,150)' : 'rgb(179, 0, 60)'};
  font-size: 0.6em;
  font-weight: bold;
  align-self: flex-end;
  margin-left: 15px;
  border: 2px solid ${props => props.action === 'publish' ? 'rgb(2,158,150)' : 'rgb(179, 0, 60)'};
  padding: 11px 25px;
  background: transparent;
  border-radius: 25px;
  cursor: pointer;
  &:hover{
    background: ${props => props.action === 'publish' ? 'rgb(2,158,150)' : 'rgb(179, 0, 60)'};
    color: #F0F0F0;
}`;

export const TitleInput = styled.input`
  padding: 11px;
  border-radius: 8px;
  background: transparent;
  font-size: 50px;
  margin-bottom: 10px;
  color: #333;
`;

export const EyeInput = styled.input`
  width: 100%;
  height: 60px;
  border-radius: 8px;
  padding: 0 11px;
  background: transparent;
  font-size: 20px;
  margin-bottom: 15px;
`;

export const MarkdownInput = styled.textarea`
  width: 100%;
  min-height: 42vh;
  color: #333;
  border-right: 2px solid #dcdce6;
  border-left: 2px solid #dcdce6;
  padding: 16px 24px;
  line-height: 24px;
  resize: vertical;
  font-size: 25px;
  background: transparent;
`;