import { Container } from './styles';

import servicesImg from '../../assets/images/art/bloco_services.svg';

export default function Services() {
  return (
    <Container>
      <img src={servicesImg} alt="Services" id="img2" />
    </Container>
  );
}
