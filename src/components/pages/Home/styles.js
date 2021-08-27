import styled from 'styled-components';

export const Scroll = styled.div`
  height: 100vh;
  & + & {
    margin-top: 10rem;
  }
`;
