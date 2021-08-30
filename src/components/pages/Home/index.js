import { Blog } from '../../Blog';
import Final from '../../Final';
import Header from '../../Header';
import Landing from '../../Landing';
import Recipes from '../../Recipes';
import Services from '../../Services';
import { Scroll } from './styles';
import Footer from '../../Footer';

export default function Home() {
  return (
    <>
      <Scroll>
        <div id="landing">
          <Header />
          <Landing />
        </div>
      </Scroll>

      <Scroll>
        <div id="recipes">
          <Recipes />
        </div>
      </Scroll>

      <Scroll>
        <div id="services">
          <Services />
        </div>
      </Scroll>

      <Scroll>
        <div id="blog">
          <Blog />
        </div>
      </Scroll>

      <Scroll>
        <div id="final">
          <Final />
        </div>
      </Scroll>
      <Footer />
    </>
  );
}
