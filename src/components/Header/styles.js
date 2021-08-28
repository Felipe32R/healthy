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

    .register{
      height: 2.8rem;
      width: 7.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 80px;
      border: 2px solid #FFFF;
      background: #FFFF;
      border-radius: .5rem;
      a{
        padding-top: .7rem;
        font-size: 1rem;
        font-weight: 700;
        color: ${({ theme }) => theme.colors.main};
        text-align: center;
        justify-items: center;
        width: 100%;
        height: 100%;

      }

      transition: .2s ease;
      &:hover{
        background: transparent;
        cursor: pointer;
        a{
          color: #FFFF;
        }
      }
    }
  }

  @media screen and (max-width: 820px)
  {
    display: flex;
    justify-content: center;
    flex-direction: column;

    h1{
      margin: 0;
    }
    .navBar{
      margin-top: 2rem;
      display: flex;
      flex-direction: column;
      background:rgba(45, 53, 97, 0.75);
      backdrop-filter: blur(6px);
      padding: 1rem;
      border: none;
      border-radius: 5px;

      .register{
        margin: 0;
        a{
          color: ${({ theme }) => theme.colors.title};

        }
      }
    }
  }

`;

// a{
//   color: ${({ theme }) => theme.colors.primary.main};
//   text-decoration: none;
//   font-weight: bold;
//   border: 2px solid ${({ theme }) => theme.colors.primary.main};
//   padding: 8px 16px;
//   border-radius: 4px;
//   transition: all 0.2s ease-in;

//   &:hover{
//     background: ${({ theme }) => theme.colors.primary.main};
//     color: #fff;
//   }
