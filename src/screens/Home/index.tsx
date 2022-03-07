import { useEffect, useState } from 'react';

import { Benefits } from '../../components/Benefits';
import { Country } from '../../components/Country';
import { EasyPay } from '../../components/EasyPay';
import { FAQ } from '../../components/FAQ';
import { Plans } from '../../components/Plans';
import { VideoApresentation } from '../../components/VideoApresentation';
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
          <img src={mockupImg} alt="mockup" />
        ) : (
          <img src={mockupMobileImg} width="400px" alt="mockup" />
        )}
      </Div>
      <Proud />
      <Benefits />
      <VideoApresentation width={width} />
      <Country width={width} />
      <EasyPay />
      <Plans />
      <FAQ />
    </>
  );
}
