import { KeyboardAvoidingView, Platform } from 'react-native';
import { Button, Container, Input, Text } from '../../components/styles';

import RickScene from '../../components/RickScene';
import { ButtonContainer, InputContainer, Scene } from './styles';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useUserContext } from '../../store/userContext';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../routes/types';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Login'>;

export default function LoginScreen() {
  const navigation = useNavigation<NavigationProp>();
  const [username, setUsername] = useState<string>("")
  const { saveUsername } = useUserContext();

  useEffect(() => {
    const loadUserData = async () => {
      const storedUsername = await AsyncStorage.getItem('username');

      if (storedUsername) {
        navigation.navigate('Home')
      }
    };

    loadUserData();
  }, []);

  const handleLogin = async () => {
    try {
      await AsyncStorage.setItem('username', username);
      saveUsername(username);
      navigation.navigate('Home')
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <Container>
        <Scene>
          <RickScene />
        </Scene>
        <InputContainer>
          <Input placeholder="Username" value={username} onChangeText={setUsername} />
        </InputContainer>
        <ButtonContainer>
          <Button disabled={!username.length} onPress={handleLogin}>
            <Text>Login</Text>
          </Button>
        </ButtonContainer>
      </Container>
    </KeyboardAvoidingView>
  );
}
