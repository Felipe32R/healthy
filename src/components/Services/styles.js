import styled from 'styled-components';

export const Container = styled.div`

  display: flex;


  #img2{
    position: absolute;
    z-index: -1;
  }

  @media screen and (max-width: 960px)
  {
    margin-top: 30rem;
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
  @media screen and (max-width: 800px)
  {
      #img2{
      display: none;

    }
  }


`;
