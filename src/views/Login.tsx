import {Text, View} from 'react-native';
import React from 'react';
import QuinnVideoComp from '../components/QuinnVideoComp';

function Login() {
  return (
    <View>
      <Text>Login</Text>
      <QuinnVideoComp handle="/login" layer={1} widgettype={'story'} />
      <QuinnVideoComp handle="/login" layer={1} widgettype={'cards'} />
    </View>
  );
}

export default Login;
