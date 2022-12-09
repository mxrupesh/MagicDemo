/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

import { Magic } from '@magic-sdk/react-native';
import { OAuthExtension } from '@magic-ext/react-native-oauth';


const App = () => {

  const magic = new Magic('pk_live_6A77481771D607F6', {
    extensions: [new OAuthExtension()],
  });

  const googleLogin = async () => {

    const result = await magic.oauth.loginWithPopup({
      provider: 'google' /* 'google', 'facebook', 'apple', or 'github' */,
      redirectURI: 'demo://',
    });

    console.log(result);
  }

  return (
    <SafeAreaView style={[styles.container]} >
      <TouchableOpacity onPress={() => { googleLogin() }}>
        <Text style={[styles.sectionTitle]}>Click to Login</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'

  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
});

export default App;
