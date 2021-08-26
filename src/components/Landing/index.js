import { Container, SearchBox } from './styles';

import Illustration from '../../assets/images/art/Illustration.svg';
import lupe from '../../assets/icons/lupe.svg';

export default function Landing() {
  return (
    <Container>
      <img src={Illustration} alt="Landing" id="img1" />

      <SearchBox>
        <div className="title">
          <h1>Ready for Trying a new recipe?</h1>

          <div className="search">
            <input type="text" placeholder="Search healthy recipes" />
            <button type="button">
              <img src={lupe} alt="Search" />
            </button>
          </div>
        </div>
      </SearchBox>
    </Container>
  );
}
