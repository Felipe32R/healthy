import Header from '../../Header';
import Landing from '../../Landing';
import Recipes from '../../Recipes';

export default function Home() {
  return (
    <>
      <div id="scroll0" style={{ height: '100vh' }}>
        <Header />
        <Landing />
      </div>
      <div id="scroll1" style={{ height: '100vh', background: 'red' }}>
        <Recipes />
      </div>
    </>
  );
}
