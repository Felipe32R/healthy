import styled from 'styled-components';

export const Container = styled.div`

  #img1{
    position: absolute;
    right: 0px;
    top: 0px;
    z-index: -1;
  }

  @media screen and (max-width: 1190px)
  {
      #img1{
      height: 80%;
    }
  }
  @media screen and (max-width: 990px)
  {
      #img1{
      height: 62%;
    }
  }
  @media screen and (max-width: 820px)
  {
      #img1{
      height: 60%;
    }
  }
  @media screen and (max-width: 590px)
  {
      #img1{
      height: 60%;
    }
  }
  @media screen and (max-width: 460px)
  {
      #img1{
      height: 50%;
    }
  }
`;

export const SearchBox = styled.div`
  width: 100%;
  .title{
    width: 21.5rem;
    height: 15rem;
    margin-top: 12rem;
    margin-left: 5rem;

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

  @media screen and (max-width:520px)
  {
    .title{
      margin-right: 5rem;
    }
  }

`;
