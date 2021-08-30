import {
  Container, TitleContainer, ScrollContainer, ScrollRecipe,
} from './styles';

import arrow from '../../assets/icons/arrow1.svg';

import kevin from '../../assets/images/chiefs/kevin.png';
import mike from '../../assets/images/chiefs/mike.png';
import bryan from '../../assets/images/chiefs/bryan.png';
import luca from '../../assets/images/chiefs/luca.png';

import nuts from '../../assets/images/recipes/nuts.svg';
import water from '../../assets/images/recipes/water.svg';
import grapes from '../../assets/images/recipes/grapes.svg';
import angryplate from '../../assets/images/recipes/angryplate.svg';

export function Blog() {
  return (
    <Container>
      <TitleContainer>
        <h1>Read Our Blog</h1>
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

      </TitleContainer>

      <ScrollContainer>
        <button type="button">
          <img src={arrow} alt=">" />
        </button>
        <ScrollRecipe>
          <img src={nuts} alt="Recipe1" className="recipe" />
          <div className="description">
            <h3>
              Quick-start guide
              {' '}
              <br />
              to nuts and seeds
            </h3>
            <div>
              <img src={kevin} alt="Chief1" />
              <p>Kevin Ibrahim</p>
            </div>
          </div>
        </ScrollRecipe>

        <ScrollRecipe>
          <img src={water} alt="Recipe1" className="recipe" />
          <div className="description">
            <h3>
              Nutrition: Tips for
              {' '}
              <br />
              improving your health
            </h3>
            <div>
              <img src={mike} alt="Chief1" />
              <p>Mike Jackson</p>
            </div>
          </div>
        </ScrollRecipe>

        <ScrollRecipe>
          <img src={grapes} alt="Recipe1" className="recipe" />
          <div className="description">
            <h3>
              The top 10 benefits
              {' '}
              <br />
              of eating heathy
            </h3>
            <div>
              <img src={bryan} alt="Chief1" />
              <p>Bryan McGregor</p>
            </div>
          </div>
        </ScrollRecipe>

        <ScrollRecipe>
          <img src={angryplate} alt="Recipe1" className="recipe" />
          <div className="description">
            <h3>
              What to know about
              {' '}
              <br />
              Healthy behaviors
            </h3>
            <div>
              <img src={luca} alt="Chief1" />
              <p>Luca Mòdric</p>
            </div>
          </div>
        </ScrollRecipe>

      </ScrollContainer>
    </Container>
  );
}
