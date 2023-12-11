import { Container } from '../../../../components/styles';

import { Suspense, memo } from 'react';
import { Canvas } from '@react-three/fiber';
import rick from '../../../../assets/rick.glb';
import { Gltf, Sky, Sparkles } from '@react-three/drei/native';
import useControls from 'r3f-native-orbitcontrols';
import Loading from '../../../../components/Loading';
import colors from '../../../../utils/colors';

function RickScene() {
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
        <Sparkles count={300} size={1} opacity={100} speed={3} scale={50} position={[0, 1, 0]} color={colors.light} />
        <Suspense fallback={
          <Loading />
        }>
          <group>
            <Sparkles count={1} size={100} opacity={35} speed={1} position={[0, 1, -2]} scale={2} color={colors.darkGreen} />
            <Sparkles count={10} size={20} opacity={.3} speed={9} scale={2.4} position={[0, 1, -1]} color={colors.light} />
            <Sparkles count={100} size={5} opacity={.6} speed={3} scale={2.4} position={[0, 1, -1]} color={colors.light} />
          </group>
          <group>
            <OrbitControls />
            <directionalLight position={[1, 0, 0]} color={colors.light} />
            <directionalLight position={[-1, 0, 0]} color={colors.light} />
            <directionalLight position={[0, 1, 0]} color={colors.light} />
            <directionalLight position={[0, -1, 0]} color={colors.light} />
            <directionalLight position={[0, 0, 1]} color={colors.green} />
            <directionalLight position={[0, 0, -1]} color={colors.green} />
            <Gltf src={rick} position={[0, -2, 1]} scale={1.9} />
          </group>
        </Suspense>
      </Canvas>
    </Container>
  );
}

export default memo(RickScene);
