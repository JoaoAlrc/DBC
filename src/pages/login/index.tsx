import { useState } from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useTranslation } from 'react-i18next';

import { useUserContext } from '../../store/userContext'; 
import { Button, Container, Input, Text } from '../../components/styles';
import RickScene from '../../components/RickScene';
import { ButtonContainer, InputContainer, Scene } from './styles';

export default function LoginScreen() {
  const { t } = useTranslation();

  const [username, setUsername] = useState<string>("")
  const { saveUsername } = useUserContext();

  const handleLogin = async () => {
    try {
      await AsyncStorage.setItem('username', username);
      saveUsername(username);
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
          <Input placeholder={t('login.username')} value={username} onChangeText={setUsername} />
        </InputContainer>
        <ButtonContainer>
          <Button disabled={!username.length} onPress={handleLogin}>
            <Text>{t('login.login')}</Text>
          </Button>
        </ButtonContainer>
      </Container>
    </KeyboardAvoidingView>
  );
}
