import Header from '../Header';
import SearchBox from '../SearchBox';
import { Container } from './styles';
import Recipes from '../Recipes';

export default function Landing() {
  return (
    <>
      <Header />
      <Container>
        <div>
          <SearchBox />
        </div>
      </Container>

      <Recipes>
        <div />
      </Recipes>
    </>
  );
}
