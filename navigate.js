import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Main from './components/pages/Main';
import Single from './components/pages/Single';
import AddNews from './components/pages/AddNews';

const Stack = createNativeStackNavigator();

export default Navigate = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen
          name="Main"
          component={Main}
          options={{
            headerStyle: {backgroundColor: 'black'},
          }}
        />
        <Stack.Screen
          name="Single"
          component={Single}
          options={{
            headerStyle: {backgroundColor: 'black'},
          }}
        />
        <Stack.Screen
          name="AddNews"
          component={AddNews}
          options={{
            headerStyle: {backgroundColor: 'black'},
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
