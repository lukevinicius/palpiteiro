import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
  FaYoutube,
} from 'react-icons/fa';
import { Col, Row } from 'react-bootstrap';
import LogoHorizontal from '../../assets/logos/logoHorizontalGreen.png';
import { Div, H2 } from './styles';

export function Footer() {
  return (
    <Div>
      <Row>
        <Col>
          <img src={LogoHorizontal} alt="Logo" />
          <H2 style={{ fontSize: '18px', textAlign: 'justify' }}>
            Os resultados referentes ao conteúdo dos serviços de TIP’s dos
            grupos VIP da Lance Milionário são avaliados e comprovados por
            nossos alunos. Não garantimos resultados IGUAIS para todos, uma vez
            que se trata de um mercado de renda variável e por isso criamos
            nosso método de gestão de banca para garantir um pouco mais de
            segurança sobre o capital dos alunos utilizados em suas casas de
            apostas. Não nos responsabilizados por{' '}
          </H2>
          <H2 style={{ marginTop: '20px', fontSize: '18px' }}>
            &copy; {new Date().getFullYear()} Todos os direitos reservados -
            Grupo Palpiteiro
          </H2>
        </Col>
        <Col>
          <H2 style={{ fontSize: '16px' }}>Atendimento personalizado</H2>
          <H2 style={{ fontSize: '36px', color: 'var(--primary)' }}>
            7-495-1234567
          </H2>
          <H2 style={{ fontSize: '18px', marginTop: '20px' }}>
            Av. Paulista, 777 - 15º andar, São Paulo, Brasil
          </H2>
          <H2 style={{ fontSize: '18px', marginTop: '20px' }}>
            Segunda a Sexta 8:00 - 17:00, Sábado 9:00 - 12:00
          </H2>
          <Row style={{ marginTop: '20px' }}>
            <Col>
              <a href="google.com">
                <FaInstagram size={50} style={{ color: 'var(--primary)' }} />
              </a>
            </Col>
            <Col>
              <a href="google.com">
                <FaFacebookF size={50} style={{ color: 'var(--primary)' }} />
              </a>
            </Col>
            <Col>
              <a href="google.com">
                <FaTwitter size={50} style={{ color: 'var(--primary)' }} />
              </a>
            </Col>
            <Col>
              <a href="google.com">
                <FaWhatsapp size={50} style={{ color: 'var(--primary)' }} />
              </a>
            </Col>
            <Col>
              <a href="google.com">
                <FaYoutube size={50} style={{ color: 'var(--primary)' }} />
              </a>
            </Col>
          </Row>
        </Col>
      </Row>
    </Div>
  );
}
