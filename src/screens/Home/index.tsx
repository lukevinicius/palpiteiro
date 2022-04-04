import { useEffect, useState } from 'react';

import { Benefits } from './Benefits';
import { Country } from './Country';
import { EasyPay } from './EasyPay';
import { FAQ } from './FAQ';
import { Plans } from './Plans';
import { VideoApresentation } from './VideoApresentation';
import { Div } from './styles';

import mockupImg from '../../assets/images/mockup.png';
import mockupMobileImg from '../../assets/images/mockupMobile.png';
import { Proud } from './Proud';

export function Home() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    // subscribe to window resize event "onComponentDidMount"
    window.addEventListener('resize', handleResizeWindow);
    return () => {
      // unsubscribe "onComponentDestroy"
      window.removeEventListener('resize', handleResizeWindow);
    };
  });

  return (
    <>
      <Div data-aos="fade-down" data-aos-duration="500">
        {width > 768 ? (
          <img src={mockupImg} alt="mockup" loading="lazy" />
        ) : (
          <img
            src={mockupMobileImg}
            width="400px"
            alt="mockup"
            loading="lazy"
          />
        )}
      </Div>
      <Proud />
      <Benefits />
      <VideoApresentation width={width} />
      <Country />
      <EasyPay />
      <Plans />
      <FAQ width={width} />
    </>
  );
}
