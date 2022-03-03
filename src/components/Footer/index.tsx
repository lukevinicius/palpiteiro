import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  /* FaWhatsapp, */
  FaYoutube,
} from 'react-icons/fa';
import LogoHorizontal from '../../assets/logos/logoHorizontalGreen.png';
import { Attendance, Container, H2 } from './styles';

export function Footer() {
  return (
    <Container>
      <div>
        <img src={LogoHorizontal} alt="Logo" />
        <H2 style={{ textAlign: 'justify' }}>
          Os resultados referentes ao conteúdo dos serviços de TIP’s dos grupos
          VIP da Lance Milionário são avaliados e comprovados por nossos alunos.
          Não garantimos resultados IGUAIS para todos, uma vez que se trata de
          um mercado de renda variável e por isso criamos nosso método de gestão
          de banca para garantir um pouco mais de segurança sobre o capital dos
          alunos utilizados em suas casas de apostas. Não nos responsabilizados
          por eventuais perdas.
        </H2>
        <H2>
          &copy; {new Date().getFullYear()} Todos os direitos reservados - O
          Palpiteiro
        </H2>
      </div>
      <Attendance>
        <h2>Atendimento online:</h2>
        <p style={{ fontSize: '18px' }}>
          Segunda a Sexta 8:00 - 17:00 Sábado 9:00 - 12:00
        </p>
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
