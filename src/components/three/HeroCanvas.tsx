import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useGLTF, Float, Preload } from '@react-three/drei';
import * as THREE from 'three';

// A simple 3D object that will react to mouse movement
const ParticleField = ({ count = 2000 }) => {
  const { viewport, mouse } = useThree();
  const mesh = useRef<THREE.Points>(null);
  const particlesRef = useRef<Float32Array | null>(null);
  const colorRef = useRef<Float32Array | null>(null);
  
  useEffect(() => {
    if (!particlesRef.current) {
      particlesRef.current = new Float32Array(count * 3);
      colorRef.current = new Float32Array(count * 3);
      
      for (let i = 0; i < count; i++) {
        // Position
        particlesRef.current[i * 3] = (Math.random() - 0.5) * 10; // x
        particlesRef.current[i * 3 + 1] = (Math.random() - 0.5) * 10; // y
        particlesRef.current[i * 3 + 2] = (Math.random() - 0.5) * 10; // z
        
        // Color - gradient from primary to accent
        const mixFactor = Math.random();
        colorRef.current[i * 3] = 0.23 * (1 - mixFactor) + 0.53 * mixFactor; // r
        colorRef.current[i * 3 + 1] = 0.51 * (1 - mixFactor) + 0.16 * mixFactor; // g
        colorRef.current[i * 3 + 2] = 0.87 * (1 - mixFactor) + 0.87 * mixFactor; // b
      }
    }
  }, [count]);

  useFrame((state, delta) => {
    if (mesh.current && particlesRef.current) {
      // Rotate the entire particle field slowly
      mesh.current.rotation.x = THREE.MathUtils.damp(
        mesh.current.rotation.x,
        mouse.y * 0.2,
        0.1, 
        delta
      );
      mesh.current.rotation.y = THREE.MathUtils.damp(
        mesh.current.rotation.y,
        mouse.x * 0.2,
        0.1, 
        delta
      );
      
      // Update geometry
      const positions = mesh.current.geometry.attributes.position.array as Float32Array;
      
      for (let i = 0; i < count; i++) {
        const i3 = i * 3;
        
        // Small oscillation effect
        positions[i3 + 1] += Math.sin(state.clock.elapsedTime * 0.2 + i * 0.1) * 0.003;
      }
      
      mesh.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return particlesRef.current && colorRef.current ? (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={particlesRef.current}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={count}
          array={colorRef.current}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        vertexColors
        transparent
        alphaTest={0.5}
        depthWrite={false}
      />
    </points>
  ) : null;
};

const HeroCanvas: React.FC = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 75 }}
      style={{
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
      }}
      gl={{ 
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance',
      }}
      dpr={[1, 2]} // Optimize for performance and quality
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={0.5} />
      
      <Float
        speed={2} // Animation speed
        rotationIntensity={0.2} // XYZ rotation intensity
        floatIntensity={0.5} // Up/down float intensity
      >
        <ParticleField count={3000} />
      </Float>
      
      <Preload all />
    </Canvas>
  );
};

export default HeroCanvas;