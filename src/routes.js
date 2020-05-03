import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Login from '../src/pages/Login';
import NewTicket from '../src/pages/NewTicket';
import Confirmed from '../src/pages/Confirmed';
import Mapa from '../src/pages/Map';
import ProviderEvaluation from '../src/pages/ProviderEvaluation';
import Product from '../src/pages/Product';
import ListServices from '../src/pages/ListServices';

const Routes = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{headerShown: false }} initialRouteName="Login">
        <AppStack.Screen name="Login" component={Login} />
        <AppStack.Screen name="Novo Chamado" component={NewTicket} />
        <AppStack.Screen name="Confirmacao Chamado" component={Confirmed} />
        <AppStack.Screen name="Mapa" component={Mapa} />
        <AppStack.Screen name="Avaliacao" component={ProviderEvaluation} />
        <AppStack.Screen name="Produto" component={Product} />
        <AppStack.Screen name="Lista de Servicos" component={ListServices} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}

export default Routes