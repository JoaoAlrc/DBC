import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber/native';
import { Mesh } from 'three';

const TorusKnotSpinner: React.FC<{ color?: string }> = (props) => {
    const meshRef = useRef<Mesh>(null);

    useFrame(() => {
        if (meshRef.current) {
            meshRef.current.rotation.x += 0.05;
            meshRef.current.rotation.y += 0.05;
        }
    });

    return (
        <mesh ref={meshRef}>
            <torusKnotGeometry args={[0.4, 0.1, 100, 16]} />
            <meshNormalMaterial />
        </mesh>
    );
};

const Loading: React.FC = () => {
    return (
        <TorusKnotSpinner color="teal" />
    );
};

export default Loading;
