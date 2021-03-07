import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigation } from "./navigation/StackNavigation";

export default function App() {
  return (
      <NavigationContainer>
        <StackNavigation/>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  }
});