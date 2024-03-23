import {Carousel, Popup, Stories} from '@quinninc/rn-core/index';
import {IWidgetTypes} from '@quinninc/rn-core/types/app.types';

interface Props {
  handle: string;
  widgettype: IWidgetTypes;
  layer: number;
}

//This only works for general shop type

function QuinnVideoComp({handle, widgettype, layer}: Props) {
  function getWidgets() {
    if (widgettype === 'cards') {
      return (
        <Carousel
          showLoader
          layer={layer}
          playlistId={`${handle}_CARD_${layer}`}
        />
      );
    } else if (widgettype === 'story') {
      return (
        <Stories
          showLoader
          layer={layer}
          playlistId={`${handle}_STORY_${layer}`}
        />
      );
    } else if (widgettype === 'floating') {
      return <Popup layer={1} playlistId={`${handle}_HANDLE_${layer}`} />;
    }
  }

  return <>{getWidgets()}</>;
}

export default QuinnVideoComp;
