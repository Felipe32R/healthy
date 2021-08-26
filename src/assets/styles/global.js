import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-family: 'Sora', sans-serif;
  }

  body{
    background: #FFFF;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.text};

  }

  button{
    cursor: pointer;
  }
  h1,h2,h3,h4,h5,h6 {
    color: ${({ theme }) => theme.colors.title};
  }
`;
