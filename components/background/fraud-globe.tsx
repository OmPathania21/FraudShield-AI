'use client'

import { OrbitControls, Sphere } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import * as THREE from 'three'

function RotatingSphere() {
  const ref = useRef<THREE.Mesh>(null)

  useFrame((_state, delta) => {
    if (!ref.current) return
    ref.current.rotation.y += delta * 0.4
    ref.current.rotation.x += delta * 0.12
  })

  return (
    <Sphere ref={ref} args={[1, 48, 48]}>
      <meshStandardMaterial color="#1d4ed8" wireframe emissive="#a78bfa" emissiveIntensity={0.5} />
    </Sphere>
  )
}

export function FraudGlobe() {
  return (
    <div className="glass h-56 rounded-2xl">
      <Canvas camera={{ position: [0, 0, 3.4], fov: 46 }}>
        <ambientLight intensity={0.6} />
        <pointLight position={[3, 3, 2]} color="#38bdf8" />
        <RotatingSphere />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.45} />
      </Canvas>
    </div>
  )
}
