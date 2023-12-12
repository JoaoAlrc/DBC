

import { Suspense, memo } from 'react';
import { Canvas } from '@react-three/fiber';
import rick from '../../assets/rick2.glb';
import { Gltf } from '@react-three/drei/native';
import useControls from 'r3f-native-orbitcontrols';
import { Container } from '../styles';
import Loading from '../Loading';
import colors from '../../utils/colors';

function PickleScene() {
  const [OrbitControls, events] = useControls()
  return (
    <Container {...events}>
      <Canvas>
        <ambientLight color={colors.light} />
        <Suspense fallback={
          <Loading />
        }>
          <group>
            <OrbitControls />
            <directionalLight position={[1, 0, 0]} color={colors.light} />
            <directionalLight position={[-1, 0, 0]} color={colors.light} />
            <directionalLight position={[0, 1, 0]} color={colors.light} />
            <directionalLight position={[0, -1, 0]} color={colors.light} />
            <directionalLight position={[0, 0, 1]} color={colors.green} />
            <directionalLight position={[0, 0, -1]} color={colors.green} />
            <Gltf src={rick} position={[0, -2.5, 1]} rotation={[0.2, 0, 0]} scale={1.1} />
          </group>
        </Suspense>
      </Canvas>
    </Container>
  );
}

export default memo(PickleScene);
