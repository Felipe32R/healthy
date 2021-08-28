import styled from 'styled-components';

export const Scroll = styled.div`
  height: 100vh;
  & + & {
    margin-top: 10rem;
  }

  .blog{
    overflow-x:hidden;
    height: 100%;
    width: 100%;
    z-index: 999;
    background-image: linear-gradient(to right, rgba(255,0,0,0), rgba(255, 255, 255, 0.35));
  }
`;
