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
        <Header />
        <Landing />
      </Scroll>

      <Scroll>
        <Recipes />
      </Scroll>

      <Scroll>
        <Services />
      </Scroll>

      <Scroll>
        <div className="blog">
          <Blog />
        </div>
      </Scroll>

      <Scroll>
        <Final />
      </Scroll>
      <Footer />
    </>
  );
}
