import styled from 'styled-components';

export const Container = styled.div`
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
  background: red;
  height: 23rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 15rem;
  gap: 1rem;

`;

export const ScrollRecipe = styled.div`
  width: 18rem;
  height: 100%;
  background: white;

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
