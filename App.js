import React from 'react';
import { StyleSheet, Text, View, CheckBox } from 'react-native';




// import Login from './src/pages/Login'
// import NewTicket from './src/pages/NewTicket'
// import Confirmed from './src/pages/Confirmed'
// import Map from './src/pages/Map'
// import ProviderEvaluation from './src/pages/ProviderEvaluation'
// import Product from './src/pages/Product'
import ListServices from './src/pages/ListServices'

// import Routes from './src/routes';

export default function App() {
  return (
    // <Routes />
    // <ProviderEvaluation/>
    <ListServices />
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
