import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 10rem;
  display: flex;
  justify-content: center;


  div{
    height: 100%;
    width: 100%;
    max-width: 62.5rem;

    height: 50px;
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
}
`;
