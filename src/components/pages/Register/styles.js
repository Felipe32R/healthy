import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  height: auto;
  max-width: 500px;
  margin: 0 auto;
  padding: 0 16px;
  justify-content: center;
  flex-direction: column;


  h1{
    margin-bottom: 1rem;
    margin-top: 5rem;
  }
  `;

export const ButtonsContainer = styled.div`
  width: 100%;
  margin-top: 2rem;
  margin-bottom: 5rem;
  display: flex;
  gap: .5rem;
  align-items: center;
  justify-content: space-between;
  a{

      padding: 10px 30px;
      text-decoration: none;
      color: #FFF;
  }

  button{
  width: 100%;
  height: 2.5rem;
  background: ${({ theme }) => theme.colors.main};
  border: 0;
  border-radius: .5rem;
  color: #FFFF;
  font-weight: 600;
  transition: .2s ease;


  &:disabled {
    background: ${({ theme }) => theme.colors.text};
    cursor: default;
    &:hover{
    background: ${({ theme }) => theme.colors.text};
  }
  }

  &:hover{
    background: ${({ theme }) => theme.colors.hover};
  }
  }
  button:first-child{
    width: 10rem;
    background: gray;
    transition: .2s ease;
    display: flex;


    &:hover{
      background: ${({ theme }) => theme.colors.darkText};
    }
  }



`;
