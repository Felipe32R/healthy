import styled from 'styled-components';

export const Nav = styled.nav`
  margin-top: 2rem;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;



  h1{
    margin-left: 80px;
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.main};
  }
  .navBar {

    display: flex;
    align-items: center;
    gap: 1rem;

    &:first-child{
      padding-left: 2rem;
    }
    a {
    font-size: 1rem;
    color: #FFFF;
    text-decoration:none;
    font-weight: 700;

    }

    button{
      height: 2.8rem;
      width: 7.5rem;
      margin-right: 80px;
      border: 2px solid #FFFF;
      background: #FFFF;
      border-radius: .5rem;
      font-size: 1rem;
      font-weight: 700;
      color: ${({ theme }) => theme.colors.main};
      transition: .2s ease;
      &:hover{
        background: transparent;
        color: #FFFF;

      }
    }
  }

  @media screen and (max-width: 820px)
  {
    display: flex;
    justify-content: center;
    flex-direction: column;

    h1{
      color: #FFFF;
      margin: 0;
    }
    .navBar{
      margin-top: 1rem;
      display: flex;
      flex-direction: column;
      background:rgba(45, 53, 97, 0.8);
      padding: 1rem;
      border: none;
      border-radius: 5px;

      button{
        margin: 0;
        color: ${({ theme }) => theme.colors.title};
      }
    }
  }

`;
