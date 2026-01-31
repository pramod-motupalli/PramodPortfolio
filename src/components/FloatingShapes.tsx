import { Canvas } from '@react-three/fiber';
import { Float, MeshDistortMaterial } from '@react-three/drei';
import { Suspense } from 'react';

interface FloatingShapeProps {
  position: [number, number, number];
  color: string;
  scale: number;
}

const FloatingShape = ({ position, color, scale }: FloatingShapeProps) => {
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh position={position} scale={scale}>
        <icosahedronGeometry args={[1, 1]} />
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>
    </Float>
  );
};

import { useTheme } from 'next-themes';

export const FloatingShapes = () => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';
  const scaleMultiplier = isDark ? 1.5 : 0.3; // Larger in dark mode, smaller in light mode

  try {
    return (
      <div className="absolute inset-0 -z-10 opacity-30">
        <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
          <Suspense fallback={null}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <pointLight position={[-10, -10, -5]} intensity={0.5} color="#8b5cf6" />
            
            <FloatingShape position={[-3, 2, 0]} color="#3b82f6" scale={1.2 * scaleMultiplier} />
            <FloatingShape position={[3, -2, -2]} color="#8b5cf6" scale={0.8 * scaleMultiplier} />
            <FloatingShape position={[0, 0, -3]} color="#ec4899" scale={1 * scaleMultiplier} />
            <FloatingShape position={[-2, -1, 1]} color="#10b981" scale={0.6 * scaleMultiplier} />
            <FloatingShape position={[2, 1, -1]} color="#06b6d4" scale={0.9 * scaleMultiplier} />
          </Suspense>
        </Canvas>
      </div>
    );
  } catch (error) {
    // Fallback if Three.js fails to load
    console.warn('FloatingShapes failed to render:', error);
    return null;
  }
};
