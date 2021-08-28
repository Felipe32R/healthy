import styled from 'styled-components';

export const FooterContainer = styled.footer`
display: flex;
justify-content: center;
background: #FFF;
height: 5rem;
width: 100%;

.center{
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  small{
    color: ${({ theme }) => theme.colors.title};
  }

  .footer-links{
    display: flex;
    align-items: center;
    a{
      text-decoration: none;
      color: ${({ theme }) => theme.colors.text};
    }
    gap: 1rem;
  }
}


`;
