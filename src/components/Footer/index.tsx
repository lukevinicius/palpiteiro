import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  /* FaWhatsapp, */
  FaYoutube,
} from 'react-icons/fa';
import LogoHorizontal from '../../assets/logos/logoHorizontalGreen.png';
import { Attendance, Container } from './styles';

export function Footer() {
  return (
    <Container>
      <div>
        <img src={LogoHorizontal} alt="Logo" />
        <h2>
          Esse produto é comercializado com apoio da Hotmart. A plataforma não
          faz controle editorial prévio dos produtos comercializados, nem avalia
          a tecnicidade e experiência daqueles que os produzem. A existência de
          um produto e sua aquisição, por meio da plataforma, não podem ser
          consideradas como garantia de qualidade de conteúdo e resultado, em
          qualquer hipótese. Ao adquiri-lo, o comprador declara estar ciente
          dessas informações. Os termos e políticas da Hotmart podem ser
          acessados aqui, antes mesmo da conclusão da compra.
        </h2>
        <h2>
          &copy; {new Date().getFullYear()} Todos os direitos reservados - O
          Palpiteiro
        </h2>
      </div>
      <Attendance>
        <h2>Atendimento online 24/7</h2>
        <div className="d-flex" style={{ marginTop: '20px' }}>
          <div>
            <a href="https://www.instagram.com/opalpiteirooficial/">
              <FaInstagram size={50} />
            </a>
          </div>
          <div>
            <a href="https://facebook.com/opalpiteirooficial">
              <FaFacebookF size={45} />
            </a>
          </div>
          <div>
            <a href="https://twitter.com/@palpiteiroofc">
              <FaTwitter size={50} />
            </a>
          </div>
          {/* <div>
              <a href="google.com">
                <FaWhatsapp size={50} />
              </a>
            </div> */}
          <div>
            <a href="https://www.youtube.com/channel/UCjr6X52dSbdRbKdIfqMdqrA">
              <FaYoutube size={50} />
            </a>
          </div>
        </div>
      </Attendance>
    </Container>
  );
}
