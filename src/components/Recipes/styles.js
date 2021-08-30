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
    .block{
    width: 22rem;
    margin: 1rem 1rem 0 0;
    height: 12rem;

    img{
      height: 12rem;
      width: 90%;
    }

    .description{
     h3{
       text-align: center;
     }
    }
  }

  }

  @media screen and (max-width: 830px)
  {
    display: flex;
    margin-top: -2px;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    max-width: 500px;
    height: 100%;
      .block{
        width: 14rem;
        height: 6rem;

        img{
          height: 100%;
          width: 100%;

        }
        .description{
          padding-top: 2.6rem;
          width: 50%;
          height: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 75%;

        }
      }
  }
`;
