'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { useMemo, useRef } from 'react'
import * as THREE from 'three'

function PointsCloud() {
  const points = useRef<THREE.Points>(null)
  const count = 800

  const positions = useMemo(() => {
    const array = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const i3 = i * 3
      array[i3] = (Math.random() - 0.5) * 14
      array[i3 + 1] = (Math.random() - 0.5) * 10
      array[i3 + 2] = (Math.random() - 0.5) * 10
    }
    return array
  }, [])

  useFrame(({ clock }) => {
    if (!points.current) return
    points.current.rotation.y = clock.getElapsedTime() * 0.04
    points.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.2) * 0.08
  })

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial color="#DC0000" size={0.02} sizeAttenuation transparent opacity={0.55} />
    </points>
  )
}

export function CyberBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 opacity-50">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.3} />
        <PointsCloud />
      </Canvas>
    </div>
  )
}
