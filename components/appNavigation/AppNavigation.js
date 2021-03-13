import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from '../screens/SplashScreen';
import RestApiScreen from '../screens/RestApiScreen';
import WebsocketScreen from '../screens/WebsocketScreen';

const Stack = createStackNavigator();


export default function AppNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Splash">
                <Stack.Screen name="Splash" component={SplashScreen} />
                <Stack.Screen name="RestApi" component={RestApiScreen} />
                <Stack.Screen name="Websocket" component={WebsocketScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

