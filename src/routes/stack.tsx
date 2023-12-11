import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../pages/login';
import HomeScreen from '../pages/home';
import { RootStackParamList } from './types';
import colors from '../utils/colors';
import DetailsScreen from '../pages/details';
import { useTranslation } from 'react-i18next';

const Stack = createNativeStackNavigator<RootStackParamList>();

function StackNavigator() {
  const { t } = useTranslation()
  return (
    <Stack.Navigator screenOptions={{
      headerStyle: { backgroundColor: colors.green },
      headerTintColor: colors.light,
      headerBackTitleVisible: false,
    }}>
      <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerTitle: t('home.charactersList') }} />
      <Stack.Screen name="Details" component={DetailsScreen} options={{ headerTitle: t('details.character') }} />
    </Stack.Navigator>
  );
}

export default StackNavigator;
