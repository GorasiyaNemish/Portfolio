'use client';

import { Canvas } from '@react-three/fiber';
import { Environment, Bounds } from '@react-three/drei';
import React, { Suspense } from 'react';
import Model from './Model';

export default function HeroModel({
    ref,
}: {
    ref: React.RefObject<HTMLDivElement>;
}) {
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
                        <Model ref={ref} />
                    </Bounds>
                </Suspense>
                <Environment preset="city" />
            </Canvas>
        </div>
    );
}
