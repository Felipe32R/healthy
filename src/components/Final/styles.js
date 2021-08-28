import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  #img3{
    position: absolute;
    right: 0%;
    z-index: -1;
  }

  @media screen and (max-width: 1190px)
  {
      #img3{
      height: 80%;
    }
  }
  @media screen and (max-width: 1020px)
  {
      #img3{
      height: 62%;
    }
  }
  @media screen and (max-width: 820px)
  {
      #img3{
      display: none;

    }
  }
`;

export const InputBox = styled.div`

  margin-top: 15rem;

  .title{
    width: 21.5rem;
    height: 15rem;

    margin-left: 5rem;

    h3{
      width: 25rem;
      font-size: 2rem;
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
    input:focus{
      border: 2px solid ${({ theme }) => theme.colors.main};
    }

  }

`;
