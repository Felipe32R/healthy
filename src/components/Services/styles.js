import styled from 'styled-components';

export const Container = styled.div`

  display: flex;

  .container{
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: center;
    margin-right: 2rem;
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
    justify-content: center;
    align-items: center;
    height: 160%;
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
