import Meta from '@/components/Meta';
import { FullSizeCenteredFlexBox } from '@/components/styled';
import { YMaps, Map } from '@pbe/react-yandex-maps';

function Page1() {
  return (
    <>
      <Meta title="page 1" />
      <FullSizeCenteredFlexBox>
        <YMaps>
          <Map width="100%" height="100%" defaultState={{ center: [55.75, 37.57], zoom: 9 }} />
        </YMaps>
      </FullSizeCenteredFlexBox>
    </>
  );
}

export default Page1;
