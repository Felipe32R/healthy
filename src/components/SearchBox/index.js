import { Container } from './styles';

import lupe from '../../assets/icons/lupe.svg';

export default function SearchBox() {
  return (
    <Container>

      <div className="title">
        <h1>Ready for Trying a new recipe?</h1>

        <div className="search">
          <input type="text" placeholder="Search healthy recipes" />
          <button type="button">
            <img src={lupe} alt="Search" />
          </button>
        </div>
      </div>

    </Container>
  );
}
