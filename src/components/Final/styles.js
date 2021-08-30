import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100vh;

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
      height: 70%;
    }
  }
  @media screen and (max-width: 910px)
  {
      #img3{
      height: 60%;

    }
  }
  @media screen and (max-width: 820px)
  {
    display: flex;
    align-items: center;
    justify-content: center;
      #img3{
      display: none;
    }

  }
`;

export const InputBox = styled.div`
  width: 25rem;

  height: 8rem;
  margin-top: 17rem;
  margin-left: 12rem;
  .email{
    display: flex;
    align-items: center;
    gap: 1rem;
    padding-top: 1.5rem;

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
    button{
      height: 2.8rem;
      width: 4.5rem;
    }
  }
  @media screen and (max-width: 1300px)
  {

      margin-left: 10rem;
  }
  @media screen and (max-width: 1250px)
  {

      margin-left: 7rem;
  }
  @media screen and (max-width: 1060px)
  {
      margin-left: 5rem;
  }
  @media screen and (max-width: 820px)
  {
      margin: 0;

  }

  @media screen and (max-width: 430px)
  {
    width: 70%;
    height: 10rem;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
      .email{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
      }

  }


`;
