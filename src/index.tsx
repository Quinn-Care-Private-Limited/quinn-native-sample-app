import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import Navbar from './components/Navbar';
import Home from './views/Home';
import Profile from './views/Profile';
import Login from './views/Login';
import {Carousel, setPage} from '@quinninc/rn-core/index';
import QuinnOverlayWrapper from './components/QuinnOverlayWrapper';
import WelcomeVidPage from './views/WelcomeVidPage';
// import {Carousel, initApp, setPage} from '@quinninc/rn-core/index';

export enum PAGES {
  HOME = 'HOME',
  PROFILE = 'PROFILE',
  LOGIN = 'LOGIN',
  WELCOME_VID_PAGE = 'WELCOME_VID_PAGE',
}

function ViewSwitcher() {
  const [currentScreen, setCurrentScreen] = useState(PAGES.HOME);
  return (
    <View style={styles.container}>
      <View>
        {currentScreen === PAGES.HOME && <Home />}
        {currentScreen === PAGES.PROFILE && <Profile />}
        {currentScreen === PAGES.LOGIN && <Login />}
        {currentScreen === PAGES.WELCOME_VID_PAGE && <WelcomeVidPage />}
      </View>
      <Navbar
        setScreen={(screen: PAGES) => {
          setCurrentScreen(screen);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    paddingTop: 50,
  },
});

export default ViewSwitcher;
