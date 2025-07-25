
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';;
import MyTabs from './share/myTap';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ScanResult from './component/scanerResult';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
    <NavigationContainer >
       <Stack.Navigator initialRouteName="Tabs">
        <Stack.Screen 
          name="Tabs" 
          component={MyTabs} 
          options={{ headerShown: false }} 
        />
        {/* หน้า ScanResult */}
        <Stack.Screen 
          name="ScanResult" 
          component={ScanResult} 
        />
        </Stack.Navigator>
      </NavigationContainer>
      </SafeAreaProvider>
      
  
   
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
function createBottomTabNavigator(arg0: { screens: { Home: any; Profile: any; }; }) {
  throw new Error('Function not implemented.');
}

