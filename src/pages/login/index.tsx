import { Text, TextInput, View } from 'react-native';
import { Container } from '../../components/styles';

import GunModel from '../../components/RickModel';
import { Suspense } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import dd from '../../assets/gun.glb'
import { Gltf, Text3D } from '@react-three/drei/native';
import RickModel from '../../components/RickModel';

export default function LoginScreen() {
  return (
    <Container>
      <View style={{ height: '50%' }}>
        <RickModel />
      </View>
      <TextInput placeholder="Username" />
    </Container>
  );
}
