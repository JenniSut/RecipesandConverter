import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Recipes from './components/Recipes';
import Converter from './components/Converter';
import { Ionicons } from '@expo/vector-icons';


export default function App() {

  const Tab = createBottomTabNavigator();

  return (
    
      <NavigationContainer>
        <Tab.Navigator
          screenOptions = {({route}) => ({
            tabBarIcon: ({ focused, color, size}) => {
              let iconName;

              if (route.name === 'Recipes') {
                iconName = 'book-outline';
              } else if (route.name === 'Converter') {
                iconName = 'cash-outline'
              }

              return <Ionicons name= { iconName } size = { size } color = { color } />
            }
          })}>
          
          <Tab.Screen name="Recipes" component={Recipes} />
          <Tab.Screen name="Converter" component={Converter} />
        </Tab.Navigator>
      </NavigationContainer>
    
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
