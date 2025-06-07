import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import Scanner from '../component/scanner';
import Generator from '../component/genarater';




const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: '#00B894',
        tabBarInactiveTintColor: '#aaa',
        tabBarStyle: {
          backgroundColor: '#fff',
          paddingVertical: 5,
          height: 60,
        },
        tabBarIcon: ({ color, size }) => {
          let iconName: string = '';

          if (route.name === 'Scan') iconName = 'qr-code-outline';
          else if (route.name === 'Generate') iconName = 'create-outline';

          return <Ionicons name={iconName as any} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Scan" component={Scanner} options={{ tabBarLabel: 'Scan' }} />
      <Tab.Screen name="Generate" component={Generator} options={{ tabBarLabel: 'Create QR' }} />
   
    </Tab.Navigator>
  );
};

export default MyTabs;
