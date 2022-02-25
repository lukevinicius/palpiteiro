import { Container, Content } from './styles';

import vivaMetodo from '../../assets/images/vivaMetodo.png';
import video1 from '../../assets/video/video1.mp4';

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
          src={video1}
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="video"
        />
      </Content>
    </Container>
  );
}
