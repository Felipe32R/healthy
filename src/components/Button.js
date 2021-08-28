import styled from 'styled-components';

export const Button = styled.button`
  width: 6.5rem;
  height: 2.5rem;
  background: ${({ theme }) => theme.colors.main};
  border: 0;
  border-radius: .5rem;
  color: #FFFF;
  font-weight: 600;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: .2s ease;

  &:hover{
    background: ${({ theme }) => theme.colors.hover};
  }
`;
