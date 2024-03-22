import {
  Carousel,
  Overlay,
  Popup,
  Stories,
  setPage,
} from '@quinninc/rn-core/index';
import {
  IOpenOverlayAction,
  IWidgetTypes,
} from '@quinninc/rn-core/types/app.types';
import {useEffect, useState} from 'react';
import {Modal} from 'react-native';

interface Props {
  handle: string;
  widgettype: IWidgetTypes;
  layer: number;
}

function QuinnVideoComp({handle, widgettype, layer}: Props) {
  const [viewLoaded, setViewLoaded] = useState(false);
  const [overlayData, setOverlayData] = useState<IOpenOverlayAction | null>(
    null,
  );

  useEffect(() => {
    setPage({
      page_handle: handle,
      page_id: handle,
      page_type: '',
    });
    setViewLoaded(true);
  }, []);

  function getWidgets() {
    if (widgettype === 'cards') {
      return <Carousel showLoader layer={layer} />;
    } else if (widgettype === 'story') {
      return <Stories showLoader layer={layer} />;
    } else if (widgettype === 'floating') {
      return <Popup layer={1} />;
    }
  }

  if (viewLoaded) {
    return (
      <>
        {getWidgets()}
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
      </>
    );
  }
  return null;
}

export default QuinnVideoComp;
