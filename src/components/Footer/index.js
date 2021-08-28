import { FooterContainer } from './styles';

export default function Footer() {
  return (
    <FooterContainer>
      <div className="center">
        <small>
          © Copyrights 2019 Stack. All rights
          reserved.
        </small>
        <div className="footer-links">
          <a href="/">Privacy Policy</a>
          <a href="/">Terms and Conditions</a>
        </div>
      </div>
    </FooterContainer>
  );
}
