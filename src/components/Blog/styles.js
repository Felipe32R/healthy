import styled from 'styled-components';

export const Container = styled.div`


`;
export const TitleContainer = styled.div`
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
      color: ${({ theme }) => theme.colors.text};
      font-size: 1.2rem;
      &:last-child{
        padding-left: 5px;
      }
    }

    @media screen and (max-width: 960px)
  {
      .text{
        width: 25rem;
        padding-left: 2rem;
      }
  }
    @media screen and (max-width: 590px)
  {
      h1{
        width: 10rem;

      }

      .text{
        width: 15rem;
        padding-left: 2rem;
      }
  }

`;

export const ScrollContainer = styled.div`
  width: 100vw;
  margin-top: 2rem;
  height: 23rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 15rem;
  gap: 2rem;

  button{
    background: #FFF;
    right: 0;
    margin-right: 2rem;
    position: absolute;
    box-shadow: 5px 5px 20px ${({ theme }) => theme.colors.main};
    width: 3rem;
    height: 3rem;
    border: 2px solid ${({ theme }) => theme.colors.main};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    img{
      width: 2.2rem;
      height: 2.2rem;
    }
    transition: .2s ease;
    &:hover{
      transform: translate(-7px,0);
    }
  }

  @media screen and (max-width: 800px)
    {
      padding-left: 5rem;
    }
  @media screen and (max-width: 740px)
  {
      padding-left: 10rem;
  }
  @media screen and (max-width: 690px)
  {
      padding-left: 15rem;
  }
  @media screen and (max-width: 590px)
  {
      padding-left: 20rem;
      margin-bottom:2rem;
  }
  @media screen and (max-width: 480px)
  {
      padding-left: 25rem;
  }


`;

export const ScrollRecipe = styled.div`
  width: 18rem;
  height: 100%;
  background: white;
  z-index:-1;
  border-radius: .5rem;
  box-shadow: 8px 4px 10px rgba(0, 0, 0, 0.4);


  .recipe{
    width: 18.45rem;
    height: 12.5rem;



  }
  .description{
    margin: 1rem;

    div{
    margin-top: 1rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 1rem;
    img{
      width: 3rem;
      height: 3rem;

      border-radius: 50%;
    }
  }
}


`;
