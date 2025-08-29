'use client';

import { Canvas } from '@react-three/fiber';
import { Environment, Bounds } from '@react-three/drei';
import React, { Suspense, useEffect } from 'react';
import Model from './Model';

export default function HeroModel({
    ref,
}: {
    ref: React.RefObject<HTMLDivElement>;
}) {
    const isTouchDevice =
        typeof window !== 'undefined' && 'ontouchstart' in window;

    const [rotation, setRotation] = React.useState(0);
    useEffect(() => {
        if (!isTouchDevice) return;
        const interval = setInterval(() => {
            setRotation((r) => r + 0.01);
        }, 16);
        return () => clearInterval(interval);
    }, [isTouchDevice]);

    return (
        <div className="w-full h-full max-h-[500px] max-md:h-[300px] flex items-center justify-center">
            <Canvas
                camera={{ position: [0, 0, 4], fov: 50 }}
                style={{ width: '100%', height: '100%' }}
            >
                <ambientLight intensity={0.6} />
                <directionalLight position={[2, 2, 2]} />
                <Suspense fallback={null}>
                    <Bounds fit clip observe margin={1.2}>
                        <Model
                            ref={ref}
                            rotation={
                                isTouchDevice ? [0, rotation, 0] : undefined
                            }
                        />
                    </Bounds>
                </Suspense>
                <Environment preset="city" />
            </Canvas>
        </div>
    );
}
