import {useContext, useEffect} from 'react';
import {Text, View} from 'react-native';
import {QuinnOverlayContext} from '../Context/QuinnOverlayContext';

function WelcomeVidPage() {
  const overlayContext = useContext(QuinnOverlayContext);

  useEffect(() => {
    //TO
    overlayContext.setOverlayData({
      handle: '/index_CARD_1',
      initialIndex: 0,
      onClose: () => {
        overlayContext.setOverlayData(null);
      },
      playlistId: '/index_CARD_1',
      widgetType: 'cards',
    });
  }, []);

  return (
    <View>
      <Text>Welcome vid page</Text>
    </View>
  );
}

export default WelcomeVidPage;
