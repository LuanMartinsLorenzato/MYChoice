import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Maf from './pages/MoviesAndFood/Maf';
import Entrance from './pages/entrance/Entrance.js';
import Person from './pages/chosenPerson/Person'
import PChoice from './pages/Person\'sChoice/PChoice';
import Streaming from './pages/Streaming/Streaming'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator 
          initialRouteName="Entrance"
          screenOptions={{
            headerShown: false
          }}
          >
          <Stack.Screen name="Entrance" component={Entrance} />
          <Stack.Screen name="Person" component={Person} />
          <Stack.Screen name="PChoice" component={PChoice} />
          <Stack.Screen name="Streaming" component={Streaming} />
          <Stack.Screen name="Maf" component={Maf} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="light" />
    </>
    
  );
}
