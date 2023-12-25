/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;
const colors = {
  COLOR_PRIMARY: '#072E33',
  COLOR_SECONDARY: '#0C7078',
  COLOR_LIGHT: '#6DA5C0',
  COLOR_MINIMUM_LIGHT: '#0F9690',
};

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.container}>
      <View
        style={[
          styles.red,
          {
            backgroundColor: colors.COLOR_PRIMARY,
            height: null,
            alignSelf: 'stretch',
          },
        ]}
      />
      <View style={[styles.red, {backgroundColor: colors.COLOR_SECONDARY, alignSelf: 'center',}]} />
      <View style={[styles.red, {backgroundColor: colors.COLOR_LIGHT,alignSelf: 'flex-end'}]} />
      <View
        style={[styles.red, {backgroundColor: colors.COLOR_MINIMUM_LIGHT}]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
    marginTop: 30,
    backgroundColor: '#E8BCB9',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-start',

    // justifly content is from horizontal movements and alignItems is for vertical
  },
  boldAndBlue: {
    fontWeight: 'bold',
    color: 'blue',
  },
  bigAndGreen: {
    fontSize: 24,
    color: 'green',
  },
  red: {
    height: 60,
    width: 60,
    backgroundColor: colors.COLOR_SECONDARY,
    borderRadius: 15,
    borderColor: 'gray',
    borderWidth: 5,
  },
});

export default App;
