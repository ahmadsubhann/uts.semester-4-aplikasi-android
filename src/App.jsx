import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Profil from './screen/Profil';
import Home from './screen/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Template from './screen/Template';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name='Home' component={Home} options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
      
      }} />
      <Tab.Screen name='Profil' component={Profil} options={{
          tabBarLabel: 'Profil',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
      
      }} />

     <Tab.Screen name='Template' component={Template} options={{
          tabBarLabel: 'Template',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="lightning-bolt" color={color} size={26} />
          ),
      
      }} />

    </Tab.Navigator>
   </NavigationContainer>
  );
};
  

export default App

const styles = StyleSheet.create({});