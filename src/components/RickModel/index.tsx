import { Text, TextInput } from 'react-native';
import { Container } from '../styles';

import GunModel from '.';
import { Suspense } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import rick from '../../assets/rick.glb'
import { Gltf, Sky, Text3D } from '@react-three/drei/native';
import useControls from 'r3f-native-orbitcontrols';
import Loading from '../Loading';

export default function RickModel() {
  const [OrbitControls, events] = useControls()
  return (
    <Container {...events}>
      <Canvas>
        <OrbitControls />
        <Sky />
        <directionalLight position={[1, 0, 0]} />
        <directionalLight position={[-1, 0, 0]} />
        <directionalLight position={[0, 1, 0]} />
        <directionalLight position={[0, -1, 0]} />
        <directionalLight position={[0, 0, 1]} />
        <directionalLight position={[0, 0, -1]} />
        <Suspense fallback={
          <Loading />
        }>
          <Gltf src={rick} />
        </Suspense>
      </Canvas>
    </Container>
  );
}
