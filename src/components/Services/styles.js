import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  .container{
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: center;

    gap: 2rem;

    p{
      color: ${({ theme }) => theme.colors.text};
    }
  }

  #img2{

    z-index: -1;
  }

  @media screen and (max-width: 960px)
  {
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    padding: 0 16px 0 16px;
    margin-top: 50%;
    h2, p, button{
      width: 100%;
      align-items: center;
    }
    #img2{
      display: none;
    }

  }

  @media screen and (max-width: 1190px)
  {
      #img2{
      height: 80%;
    }
  }
  @media screen and (max-width: 1020px)
  {
      #img2{
      height: 62%;
    }
  }



`;
