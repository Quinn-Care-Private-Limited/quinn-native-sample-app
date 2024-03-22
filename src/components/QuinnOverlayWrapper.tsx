import {IOpenOverlayAction} from '@quinninc/rn-core';
import {AppActions, Overlay} from '@quinninc/rn-core/index';
import {useState} from 'react';
import {Modal, View} from 'react-native';

function QuinnOverlayWrapper({children}: {children: any}) {
  const [overlayData, setOverlayData] = useState<IOpenOverlayAction | null>(
    null,
  );
  AppActions.onOverlayOpen((data: any) => {
    console.log(data);
    setOverlayData(data);
  });

  AppActions.onOverlayClose(() => {
    setOverlayData(null);
  });
  return (
    <View>
      {children}
      <Modal animationType="slide" visible={!!overlayData} transparent>
        <Overlay
          data={overlayData}
          direction="horizontal"
          disableGradient
          videoResizeMode="contain"
          // renderOverlaySlideItem={(props) => <CustomSideComponent {...props} />}
          // playlistId={playlistId}
        />
      </Modal>
    </View>
  );
}

export default QuinnOverlayWrapper;
