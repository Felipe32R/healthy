import Header from '../../Header';
import Landing from '../../Landing';
import Recipes from '../../Recipes';
import Services from '../../Services';
import { Scroll } from './styles';

export default function Home() {
  return (
    <>
      <Scroll>
        <Header />
        <Landing />
      </Scroll>

      <Scroll>
        <Recipes />
      </Scroll>

      <Scroll>
        <Services />
      </Scroll>
    </>
  );
}
