import React from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { DrawerContentComponentProps } from '@react-navigation/drawer';
import { Button, Text } from '../components/styles';
import colors from '../utils/colors';
import PickleScene from '../components/PickleScene';
import { useUserContext } from '../store/userContext';
import { Container, Scene } from './styles';

export interface DrawerItemInterface {
  label: string;
  routeName?: string;
}

export interface DrawerCategory {
  category: string;
  items: DrawerItemInterface[];
}

const DrawerContent: React.FC<DrawerContentComponentProps> = () => {
  const { t } = useTranslation();
  const { username, logout } = useUserContext()

  const styles = StyleSheet.create({
    content: {
      marginTop: 16,
      marginHorizontal: 8
    }
  });

  return (
    <Container>
      <StatusBar barStyle='dark-content' />
      <DrawerContentScrollView>
        <Scene>
          <PickleScene />
        </Scene>
        <Text color={colors.black} style={styles.content}>
          {t('drawer.hopeYouHadFun')}{", "}{username}
        </Text>
        <Button onPress={logout} style={styles.content}>
          <Text color={colors.light}>
            {t('drawer.logout')}
          </Text>
        </Button>
      </DrawerContentScrollView>
    </Container>
  );
};

export default DrawerContent;
