import {SafeAreaView, Text} from 'react-native';
import React, {useEffect} from 'react';
import QuinnVideoComp from '../components/QuinnVideoComp';

function Home() {
  return (
    <SafeAreaView>
      <Text>Home</Text>
      <QuinnVideoComp handle="/index" layer={1} widgettype={'cards'} />
      <Text>Another text</Text>
      <QuinnVideoComp handle="/index" layer={2} widgettype={'cards'} />
    </SafeAreaView>
  );
}

export default Home;
