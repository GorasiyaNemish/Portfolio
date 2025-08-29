'use client';

import { useFrame } from '@react-three/fiber';
import { useGLTF, Center } from '@react-three/drei';
import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';

export default function Model({
    ref: containerRef,
    rotation,
}: {
    ref: React.RefObject<HTMLDivElement>;
    rotation?: [number, number, number];
}) {
    const ref = useRef<THREE.Group>(null);
    const { scene } = useGLTF('/model/cute_cyber_robot_character.glb'); // or your robot.glb
    const [mouse, setMouse] = useState({ x: 0, y: 0 });

    useFrame(() => {
        if (ref.current) {
            if (rotation) {
                ref.current.rotation.x = rotation[0];
                ref.current.rotation.y = rotation[1];
                ref.current.rotation.z = rotation[2];
            } else {
                const targetRotationX = (mouse.y - 0.6) * 0.8;
                const targetRotationY = (mouse.x - 1) * 1.2;

                ref.current.rotation.x +=
                    (targetRotationX - ref.current.rotation.x) * 0.1;
                ref.current.rotation.y +=
                    (targetRotationY - ref.current.rotation.y) * 0.1;
            }
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

        if (containerRef.current) {
            containerRef.current.addEventListener('mousemove', handleMouseMove);
        }
        return () => {
            if (containerRef.current) {
                containerRef.current.removeEventListener(
                    'mousemove',
                    handleMouseMove,
                );
            }
        };
    }, []);

    return (
        <Center>
            <primitive ref={ref} object={scene} scale={1.5} />
        </Center>
    );
}
