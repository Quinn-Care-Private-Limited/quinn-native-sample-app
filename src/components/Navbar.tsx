import React from 'react';
import {Button, StyleSheet, View} from 'react-native';
import ViewSwitcher, {PAGES} from '..';

function Navbar({setScreen}: {setScreen: (screen: PAGES) => void}) {
  return (
    <View style={styles.container}>
      <View>
        <Button title={PAGES.HOME} onPress={() => setScreen(PAGES.HOME)} />
      </View>
      <View>
        <Button title={PAGES.LOGIN} onPress={() => setScreen(PAGES.LOGIN)} />
      </View>
      <View>
        <Button
          title={PAGES.PROFILE}
          onPress={() => setScreen(PAGES.PROFILE)}
        />
      </View>
      <View>
        <Button
          title={PAGES.WELCOME_VID_PAGE}
          onPress={() => setScreen(PAGES.WELCOME_VID_PAGE)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 0,
  },
});

export default Navbar;
