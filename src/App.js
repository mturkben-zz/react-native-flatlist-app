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
  View,
  Text,
} from 'react-native';

import ListComponent from "./components/ListComponent";


const App = () => {
  return (
    <SafeAreaView>
      <ListComponent/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default App;
