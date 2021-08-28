import { Container } from './styles';

import servicesImg from '../../assets/images/art/bloco_services.svg';
import { Button } from '../Button';

export default function Services() {
  return (
    <Container>
      <img src={servicesImg} alt="Services" id="img2" />
      <div className="container">
        <h2>
          The best services ready
          {' '}
          <br />
          To serve you
        </h2>
        <p>
          Far far away, behind the word mountains, far from
          {' '}
          <br />
          the countries Vokalia and Consonantia, there live the
          {' '}
          <br />
          blind texts.
        </p>
        <p>
          Separated they live in Bookmarksgrove right at the
          {' '}
          <br />
          coast of the Semantics, a large language ocean.
        </p>
        <p>
          A small river named Duden flows by their place and
          {' '}
          <br />
          supplies it with the necessary regelialia
        </p>
        <Button>Know More</Button>
      </div>
    </Container>
  );
}
