import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Welcome from './pages/Welcome.js';
import Introduction from './pages/Introduction.js';
import Result from './pages/Result.js';
import StartOne from './pages/StartOne.js';
import Subjects from './pages/Subjects.js';
import Tab from './components/NavigatorTab';

const Stack = createStackNavigator();

export const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={{headerShown : false}}
            name="Home"
            component={Welcome}
          />
          <Stack.Screen
            options={{headerShown : false}}
            name="Intro"
            component={Introduction}
          />
          <Stack.Screen
            options={{headerShown : false}}
            name="StartOne"
            component={StartOne}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="Res"
            component={Result}
          />
          {/* <Stack.Screen
            options={{ headerShown: false }}
            name="Subjects"
            component={Tab}
          /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;