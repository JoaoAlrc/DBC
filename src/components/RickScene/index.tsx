import { Container } from '../styles';

import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import rick from '../../assets/rick.glb';
import { Gltf, Sky, Sparkles } from '@react-three/drei/native';
import useControls from 'r3f-native-orbitcontrols';
import Loading from '../Loading';

export default function RickScene() {
  const [OrbitControls, events] = useControls()
  return (
    <Container {...events}>
      <Canvas>
        <ambientLight color="#555555" />
        <Sky
          distance={100000}
          sunPosition={[0, 0, 1]}
          inclination={0}
          azimuth={0.25}
          rayleigh={10}
          turbidity={1}
          mieCoefficient={1}
          mieDirectionalG={0} />
        <Sparkles count={300} size={1} opacity={100} speed={3} scale={50} position={[0, 1, 0]} color={'#F0F2EB'} />
        <Suspense fallback={
          <Loading />
        }>
          <group>
            <Sparkles count={1} size={100} opacity={35} speed={1} position={[0, 1, -2]} scale={2} color={'#208D45'} />
            <Sparkles count={10} size={20} opacity={.3} speed={9} scale={2.4} position={[0, 1, -1]} color={'#F0F2EB'} />
            <Sparkles count={100} size={5} opacity={.6} speed={3} scale={2.4} position={[0, 1, -1]} color={'#F0F2EB'} />
          </group>
          <group>
            <OrbitControls />
            <directionalLight position={[1, 0, 0]} color={'#F0F2EB'} />
            <directionalLight position={[-1, 0, 0]} color={'#F0F2EB'} />
            <directionalLight position={[0, 1, 0]} color={'#F0F2EB'} />
            <directionalLight position={[0, -1, 0]} color={'#F0F2EB'} />
            <directionalLight position={[0, 0, 1]} color={'#5CAD4A'} />
            <directionalLight position={[0, 0, -1]} color={'#5CAD4A'} />
            <Gltf src={rick} position={[0, -2, 1]} scale={1.9} />
          </group>
        </Suspense>
      </Canvas>
    </Container>
  );
}