import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;

  div{
    height: 100vh;
    width: 100%;
    max-width: 62.5rem;
    margin-top: 2rem;

  }
`;
export const Title = styled.div`

  width: 100%;
  div{
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    h1{
    display: flex;
    margin-top: 2rem;
    width: 18.75;
    font-size: 2.2rem;
    }
    .text{
      margin-top: 1rem;
      &:last-child{
        padding-left: 5px;
      }
    }
  }


`;
