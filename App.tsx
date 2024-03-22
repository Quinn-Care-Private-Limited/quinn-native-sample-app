import React from 'react';
import ViewSwitcher from './src';
import {initApp} from '@quinninc/rn-core/index';
import QuinnOverlayWrapper from './src/components/QuinnOverlayWrapper';
import {SafeAreaView} from 'react-native';
import QuinnOverlayContextProvider from './src/Context/QuinnOverlayContext';
function App(): React.JSX.Element {
  //DO this in the highest order component
  initApp({
    cdn: '',
    shop_domain: '',
    shop_type: 'GENERAL',
  });

  return (
    // <SafeAreaView>
    <QuinnOverlayContextProvider>
      <ViewSwitcher />
    </QuinnOverlayContextProvider>
    // </SafeAreaView>
  );
}

export default App;
