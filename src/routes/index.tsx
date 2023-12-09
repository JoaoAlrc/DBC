import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './stack';

function Routes() {
    return (
        <NavigationContainer>
            <StackNavigator />
        </NavigationContainer>
    );
}

export default Routes;