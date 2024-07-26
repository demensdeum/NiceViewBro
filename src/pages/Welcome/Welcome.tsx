import Meta from '@/components/Meta';
import { FullSizeCenteredFlexBox } from '@/components/styled';
import useOrientation from '@/hooks/useOrientation';

import useEmblaCarousel from 'embla-carousel-react';

function Welcome() {
  const isPortrait = useOrientation();

  const [emblaRef] = useEmblaCarousel();

  const css = `
    .embla {  overflow: hidden; width: 100%; height: 100% }
    .embla__container {  display: flex;}
    .embla__slide {  flex: 0 0 100%;  min-width: 0;}  
  `;

  return (
    <>
      <Meta title="Welcome" />
      <FullSizeCenteredFlexBox flexDirection={isPortrait ? 'column' : 'row'}>
        <style>{css}</style>
        <div className="embla" ref={emblaRef}>
          <div className="embla__container">
            <div className="embla__slide">
              <img src="images/slide1.jpg" />
            </div>
            <div className="embla__slide">
              <img src="images/slide2.jpg" />
            </div>
            <div className="embla__slide">
              <img src="images/slide3.jpg" />
            </div>
          </div>
        </div>
      </FullSizeCenteredFlexBox>
    </>
  );
}

export default Welcome;
