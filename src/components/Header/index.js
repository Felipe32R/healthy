import { Container, Nav } from './styles';
import Illustration from '../../assets/images/art/Illustration.svg';

export default function Header() {
  return (
    <Container>
      <img src={Illustration} alt="Landing" />
      <Nav>
        <h1>Healthy Food</h1>
        <div className="navBar">
          <a href="/">HEALTHY RECIPES</a>
          <a href="/">BLOG</a>
          <a href="/">JOIN</a>
          <div><button type="button">REGISTER</button></div>
        </div>
      </Nav>
    </Container>
  );
}
