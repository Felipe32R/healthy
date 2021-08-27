// import RecipeBlock from '../RecipeBlock';
import { Container, RecipeBlocks } from './styles';

import brocoli from '../../assets/images/recipes/brocoli.svg';
import bowl from '../../assets/images/recipes/bowl.svg';
import burger from '../../assets/images/recipes/burger.svg';
import cake from '../../assets/images/recipes/cake.svg';

import { Button } from '../Button';

export default function Recipes() {
  return (

    <Container>
      <h1>Our Best Recipes</h1>
      <div className="text">
        <small>
          Far far away, behind the word mountains,
          far from the countries
        </small>
        <br />
        <small>
          Vakalia and Consonantia,
          there live the blind texts.
        </small>
      </div>

      <RecipeBlocks>
        <div className="block">
          <img src={brocoli} alt="Broccoli" />

          <div className="description">
            <h3>
              Broccoli and Salad
              {' '}
              <br />
              with Bacon
            </h3>
            <Button type="button">See Recipe</Button>
          </div>
        </div>

        <div className="block">
          <img src={burger} alt="Burger" />

          <div className="description">
            <h3>
              Broccoli and Salad
              {' '}
              <br />
              with Bacon
            </h3>
            <Button type="button">See Recipe</Button>
          </div>
        </div>

        <div className="block">
          <img src={bowl} alt="Bowl" />

          <div className="description">
            <h3>
              Classic Beef
              {' '}
              <br />
              Burgers
            </h3>
            <Button type="button">See Recipe</Button>
          </div>
        </div>

        <div className="block">
          <img src={cake} alt="Cake" />

          <div className="description">
            <h3>
              Cherry Cobbler
              {' '}
              <br />
              on the Grill
            </h3>
            <Button type="button">See Recipe</Button>
          </div>
        </div>

      </RecipeBlocks>
    </Container>

  );
}
