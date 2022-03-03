import { Container, Content } from './styles';

import vivaMetodo from '../../assets/images/vivaMetodo.png';

interface widthProps {
  width: number;
}

export function VideoApresentation({ width }: widthProps) {
  return (
    <Container>
      <Content>
        {
          // eslint-disable-next-line no-restricted-globals
          width > 768 ? <img src={vivaMetodo} alt="vivaMetodo" /> : <div />
        }
        <iframe
          src="https://www.youtube.com/embed/yaTutg-rnwU"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="video"
        />
      </Content>
    </Container>
  );
}
