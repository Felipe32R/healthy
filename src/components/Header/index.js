import { Link } from 'react-router-dom';
import { Nav } from './styles';
// import Recipes from '../Recipes';

export default function Header() {
  return (
    <Nav>
      <h1>Healthy Food</h1>
      <div className="navBar">
        <a href="/">HEALTHY RECIPES</a>
        <a href="/">BLOG</a>
        <a href="/">JOIN</a>
        <div className="register"><Link to="/register">REGISTER</Link></div>
      </div>
    </Nav>

  );
}
