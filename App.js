import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// import Login from './src/pages/Login'
// import NewTicket from './src/pages/NewTicket'
// import Confirmed from './src/pages/Confirmed'
// import Map from './src/pages/Map'

import Routes from './src/routes';

export default function App() {
  return (
    <Routes />
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
