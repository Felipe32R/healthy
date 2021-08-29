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
        <div className="landing">
          <Header />
          <Landing />
        </div>
      </Scroll>

      <Scroll>
        <div className="recipes">
          <Recipes />
        </div>
      </Scroll>

      <Scroll>
        <div className="services">
          <Services />
        </div>
      </Scroll>

      <Scroll>
        <div className="blog">
          <Blog />
        </div>
      </Scroll>

      <Scroll>
        <div className="final">
          <Final />
        </div>
      </Scroll>
      <Footer />
    </>
  );
}
