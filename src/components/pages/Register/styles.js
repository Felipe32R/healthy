import styled from 'styled-components';

export const Container = styled.div`
 display: flex;
  align-items: center;
  width: 100%;
  height: 100vh;
  max-width: 500px;
  margin: 0 auto;
  padding: 0 16px;
  justify-content: center;
  flex-direction: column;

  h1{
    margin-bottom: 2rem;
  }
  `;

export const ButtonsContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  gap: .5rem;
  align-items: center;
  justify-content: space-between;

  button{
  width: 100%;
  height: 2.5rem;
  background: ${({ theme }) => theme.colors.main};
  border: 0;
  border-radius: .5rem;
  color: #FFFF;
  font-weight: 600;
  transition: .2s ease;

  &:hover{
    background: ${({ theme }) => theme.colors.hover};
  }
  }
  button:first-child{
    width: 10rem;
    background: gray;
    transition: .2s ease;
    display: flex;
    a{
      width: 100%;
      height: 100%;
      padding-top: .7rem;
      text-decoration: none;
      color: #FFF;
    }

    &:hover{
      background: ${({ theme }) => theme.colors.darkText};
    }
  }


`;
