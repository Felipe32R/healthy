import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1.5rem;
  justify-content: center;

  img{
    position: absolute;
    right: 0px;
    top: 0px;
    z-index: -1;
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  max-width: 62.5rem;
  height: 2.8rem;
  padding: 0rem 1rem;

  h1{
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
`;
