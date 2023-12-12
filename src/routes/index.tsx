import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './stack';
import { useUserContext } from '../store/userContext';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerContent from './drawer';
import LoginScreen from '../pages/login';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './types';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator<RootStackParamList>();

function Routes() {
    const { username } = useUserContext();

    return (
        <NavigationContainer>
            {Boolean(username?.length) ? (
                <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
                    <Drawer.Screen
                        options={{ headerShown: false }}
                        name="Tabs"
                        component={StackNavigator}
                    />
                </Drawer.Navigator>
            ) : (
                <Stack.Navigator screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="Login" component={LoginScreen} />
                </Stack.Navigator>
            )}
        </NavigationContainer>
    );
}

export default Routes;
