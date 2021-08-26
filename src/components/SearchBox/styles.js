import styled from 'styled-components';

export const Container = styled.div`


  .title{
    width: 21.5rem;
    height: 15rem;
    margin-top: 12rem;
    margin-left: 1rem;

    h1{
      width: 18.75;
      font-size: 3rem;
    }

    .search{
      margin-top: 1.5rem;
      height: 2.8rem;
      display: flex;
      align-items: center;
      gap: 1rem;
    }
    input{
      height: 2.8rem;
      width: 17.5rem;
      outline: none;
      border: 1px solid ${({ theme }) => theme.colors.text};
      border-radius: .5rem;
      padding: 0 16px;
    }
    button{
      height: 2.8rem;
      width: 3rem;
      border: none;
      border-radius: .5rem;
      background: ${({ theme }) => theme.colors.main};
      transition: .2s ease;
      &:hover{
      background: ${({ theme }) => theme.colors.hover};
      }
    }
  }

`;
