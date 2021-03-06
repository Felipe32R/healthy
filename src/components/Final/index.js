import { Container, InputBox } from './styles';
import { Button } from '../Button';

import finalImg from '../../assets/images/art/bloco_final_image.svg';

export default function Final() {
  return (
    <Container>
      <img src={finalImg} alt="Final" id="img3" />

      <InputBox>
        <h2>
          Join our membership
          {' '}
          <br />
          to get a special offer
        </h2>

        <div className="email">
          <input
            type="text"
            placeholder="Enter your
            email address"
          />
          <Button>Join</Button>
        </div>
      </InputBox>
    </Container>
  );
}
