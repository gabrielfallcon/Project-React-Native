import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Login from './src/pages/Login'
import NewTicket from './src/pages/NewTicket'

export default function App() {
  return (
    // <Login/>
    <NewTicket />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
