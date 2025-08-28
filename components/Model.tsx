'use client';

import { useFrame } from '@react-three/fiber';
import { useGLTF, Center } from '@react-three/drei';
import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';

export default function Model({
    ref: containerRef,
}: {
    ref: React.RefObject<THREE.Group<THREE.Object3DEventMap>>;
}) {
    const ref = useRef<THREE.Group>(null);
    const { scene } = useGLTF('/model/cute_cyber_robot_character.glb'); // or your robot.glb
    const [mouse, setMouse] = useState({ x: 0, y: 0 });

    // Update rotation based on cursor
    useFrame(() => {
        if (ref.current) {
            const targetRotationX = (mouse.y - 0.6) * 0.8; // up/down tilt
            const targetRotationY = (mouse.x - 1) * 1.2; // left/right turn

            // Smooth easing
            ref.current.rotation.x +=
                (targetRotationX - ref.current.rotation.x) * 0.1;
            ref.current.rotation.y +=
                (targetRotationY - ref.current.rotation.y) * 0.1;
        }
    });

    // Track mouse position relative to canvas
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMouse({
                x: e.clientX / window.innerWidth,
                y: e.clientY / window.innerHeight,
            });
        };

        containerRef.current.addEventListener('mousemove', handleMouseMove);
        return () =>
            containerRef.current.removeEventListener(
                'mousemove',
                handleMouseMove,
            );
    }, []);

    return (
        <Center>
            <primitive ref={ref} object={scene} scale={1.5} />
        </Center>
    );
}
