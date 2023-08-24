import React from 'react';
import {Button, Text, TouchableHighlight, View} from 'react-native';
import Home from './Home';
import Profile from './Details';
import Login from './Login';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useAuth0, Auth0Provider} from 'react-native-auth0';
import Info from './Info';
import BookMark from './BookMark';

import {Provider} from 'react-redux';
import Store from './Store';
import TabNav from './Tab';
import Details from './Details';

// import LogScreen from "./LogScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export function HomeStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen name="Login" component={Login}  />
        <Stack.Screen name="TabNav" component={TabNav} options={{headerShown:false}}/>

        <Stack.Screen 
          name="Home"
          component={Home}
          options={{title: 'Shop Here!!!',headerShown:true}}
        />

        <Stack.Screen name="Details" component={Details} options={{headerShown:true}}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}

// export function BookMark(){

// return(

// );

// }
function App({navigation}: {navigation: any}) {
  return (
    <Provider store={Store}>
      <Auth0Provider
        domain={'dev-hjd531ep7vvja6qm.au.auth0.com'}
        clientId={'3EQMfCD22AM57skY6ytEzCIgXhDz1L01'}>
        <HomeStack />
      </Auth0Provider>
    </Provider>
  );
}

export default App;

// function App(){
// return(

//   <NavigationContainer>
//   <Stack.Navigator>
//     <Stack.Screen
//      name="Home"
//      component={Home}
//      options={{ title: "Shop Here!!!" }}
//    />

// <Stack.Screen name="Profile" component={Profile} />

//       </Stack.Navigator>
//     </NavigationContainer>

// )
// }
// export default App;
