import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 98vh;

  margin: 20px 0 0 0;

  display:flex;
  flex-direction: column;
  align-Items: center;
  justify-content: center;
  h1{
    margin:20px 0px;
  }
  .repositorios{
    display: flex;
    flex-direction: column;
    max-height:300px;
    width:80%;
    div{
      width: 100%;

    }
  }
`