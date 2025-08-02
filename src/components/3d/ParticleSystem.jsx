import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

// Individual particle system component
function Particles({ count = 1000 }) {
  const mesh = useRef();
  const light = useRef();

  // Generate random particle positions
  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      // Random positions in a sphere
      const radius = Math.random() * 10 + 5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;
      
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
      
      // Random colors with blue/cyan theme
      const color = new THREE.Color();
      color.setHSL(0.6 + Math.random() * 0.2, 0.8, 0.5 + Math.random() * 0.3);
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }
    
    return [positions, colors];
  }, [count]);

  // Animation loop
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    if (mesh.current) {
      // Rotate the entire particle system
      mesh.current.rotation.x = time * 0.1;
      mesh.current.rotation.y = time * 0.05;
      
      // Update particle positions for floating effect
      const positions = mesh.current.geometry.attributes.position.array;
      for (let i = 0; i < count; i++) {
        const i3 = i * 3;
        positions[i3 + 1] += Math.sin(time + i * 0.1) * 0.01;
      }
      mesh.current.geometry.attributes.position.needsUpdate = true;
    }
    
    if (light.current) {
      light.current.position.x = Math.sin(time) * 5;
      light.current.position.z = Math.cos(time) * 5;
    }
  });

  return (
    <group>
      <Points ref={mesh} positions={positions} colors={colors}>
        <PointMaterial
          size={0.05}
          vertexColors
          transparent
          opacity={0.8}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
      <pointLight ref={light} intensity={0.5} color="#4fc3f7" />
    </group>
  );
}

// Floating geometric shapes
function FloatingShapes() {
  const shapes = useRef([]);
  
  const geometries = useMemo(() => [
    new THREE.BoxGeometry(0.5, 0.5, 0.5),
    new THREE.SphereGeometry(0.3, 16, 16),
    new THREE.ConeGeometry(0.3, 0.6, 8),
    new THREE.OctahedronGeometry(0.4),
  ], []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    shapes.current.forEach((shape, index) => {
      if (shape) {
        shape.rotation.x = time * (0.5 + index * 0.1);
        shape.rotation.y = time * (0.3 + index * 0.05);
        shape.position.y = Math.sin(time + index) * 0.5;
      }
    });
  });

  return (
    <group>
      {geometries.map((geometry, index) => (
        <mesh
          key={index}
          ref={(el) => (shapes.current[index] = el)}
          geometry={geometry}
          position={[
            (index - 1.5) * 3,
            0,
            -2 - index * 0.5
          ]}
        >
          <meshStandardMaterial
            color="#4fc3f7"
            transparent
            opacity={0.6}
            wireframe={index % 2 === 0}
          />
        </mesh>
      ))}
    </group>
  );
}

// Main particle system component
export default function ParticleSystem({ className = "", performance = "high" }) {
  const particleCount = performance === "high" ? 1000 : performance === "medium" ? 500 : 250;
  
  return (
    <div className={`particle-system ${className}`} style={{ 
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: -1,
      pointerEvents: 'none'
    }}>
      <Canvas
        camera={{ position: [0, 0, 10], fov: 60 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={0.5} />
        <Particles count={particleCount} />
        <FloatingShapes />
      </Canvas>
    </div>
  );
}