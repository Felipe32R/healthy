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

export const RecipeBlocks = styled.div`
  width: 100%;
  margin-top: 2rem;
  display: grid;
  grid-template-columns: auto auto;
  justify-content: center;

  grid-gap: 10px;
  padding: 10px;

  .block{
    width: 28rem;
    margin: 1rem 1rem 0 0;
    height: 11.5rem;
    background: #fff;
    border-radius: .5rem ;
    box-shadow: 8px 4px 10px rgba(0, 0, 0, 0.4);
    display: flex;

    img{
      height: 11.5rem;
      border-radius: inherit.5rem;
    }
    .description{
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      button{
        margin-top: 1rem;
      }
    }
  }

  @media screen and (max-width: 960px)
  {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

  }

  @media screen and (max-width: 550px)
  {
      .block{
        width: 16rem;
        height: 20rem;
        display: flex;

        align-items: center;
        justify-content: center;
        flex-direction: column;

        h3{
          margin-top: 1rem;
        }
      }
  }
`;
