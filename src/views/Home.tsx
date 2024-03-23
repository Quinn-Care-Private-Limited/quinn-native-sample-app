import {SafeAreaView, Text} from 'react-native';
import React, {useEffect} from 'react';
import QuinnVideoComp from '../components/QuinnVideoComp';

function Home() {
  return (
    <SafeAreaView>
      <Text>Home</Text>
      <QuinnVideoComp handle="/index" layer={1} widgettype={'cards'} />
      <Text>Another text</Text>
      <QuinnVideoComp handle="/login" layer={1} widgettype={'story'} />
    </SafeAreaView>
  );
}

export default Home;
