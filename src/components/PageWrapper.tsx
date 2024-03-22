import {SafeAreaView, View} from 'react-native';
import React from 'react';

function PageWrapper({children}: {children: React.ReactNode}) {
  return (
    <SafeAreaView>
      <View>{children}</View>
    </SafeAreaView>
  );
}

export default PageWrapper;
