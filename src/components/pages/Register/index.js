import { Link } from 'react-router-dom';
import FormGroup from '../../FormGroup';
import Input from '../../Input';
import { Container, ButtonsContainer } from './styles';

export default function Register() {
  return (
    <Container>
      <h1>Healthy Food</h1>
      <FormGroup>
        <Input placeholder="Name" />
        <Input placeholder="Date of birth" />
        <Input placeholder="CPF" />
        <Input disabled value="CEP" />
        <ButtonsContainer>
          <button type="button">
            <Link to="/">Cancel</Link>
          </button>
          <button type="submit">Register</button>

        </ButtonsContainer>
      </FormGroup>
    </Container>
  );
}
