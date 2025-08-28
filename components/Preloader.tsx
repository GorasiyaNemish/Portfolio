'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef, useEffect, useState } from 'react';

gsap.registerPlugin(useGSAP);

const Preloader = () => {
    const preloaderRef = useRef<HTMLDivElement>(null);
    const gridRef = useRef<HTMLDivElement>(null);
    const [dimensions, setDimensions] = useState<{
        dotSize: number;
        gapSize: number;
    } | null>(null);
    const [isReady, setIsReady] = useState(false);

    // Calculate responsive dimensions
    useEffect(() => {
        const calculateDimensions = () => {
            const screenWidth = window.innerWidth;
            const screenHeight = window.innerHeight;

            // Base dimensions for large screens
            let dotSize = 10;
            let gapSize = 10;

            // Adjust for different screen sizes
            if (screenWidth < 480) {
                // Extra small devices
                dotSize = 4;
                gapSize = 4;
            } else if (screenWidth < 640) {
                // Small devices
                dotSize = 6;
                gapSize = 6;
            } else if (screenWidth < 768) {
                // Medium small devices
                dotSize = 8;
                gapSize = 8;
            }

            // Also consider height for very short screens
            if (screenHeight < 500) {
                dotSize = Math.min(dotSize, 6);
                gapSize = Math.min(gapSize, 6);
            }

            setDimensions({ dotSize, gapSize });
            setIsReady(true);
        };

        calculateDimensions();
        window.addEventListener('resize', calculateDimensions);

        return () => window.removeEventListener('resize', calculateDimensions);
    }, []);

    useGSAP(
        () => {
            if (!isReady) return;

            const tl = gsap.timeline({ defaults: { ease: 'power1.inOut' } });
            tl.fromTo(
                '.dot.active',
                {},
                {
                    backgroundColor: '#3b82f6',
                    scale: 1.5,
                    stagger: 0.02,
                    duration: 0.3,
                },
            );
        },
        { scope: preloaderRef, dependencies: [dimensions, isReady] },
    );

    useEffect(() => {
        const timer = setTimeout(() => {
            gsap.to(gridRef.current, {
                scale: 20,
                opacity: 0,
                duration: 1.5,
                ease: 'power2.inOut',
                onComplete: () => {
                    if (preloaderRef.current) {
                        preloaderRef.current.style.display = 'none';
                    }
                },
            });
        }, 4000);
        return () => clearTimeout(timer);
    }, []);

    const { dotSize, gapSize } = dimensions || { dotSize: 10, gapSize: 10 };
    const rows = 7;
    const gapCols = 2;

    // Don't render anything until dimensions are ready
    if (!isReady || !dimensions) {
        return (
            <div className="fixed inset-0 z-[6] flex items-center justify-center bg-black">
                {/* Empty div to maintain the black background while measuring */}
            </div>
        );
    }

    const letterPatterns: { [key: string]: [number, number][] } = {
        N: [
            [0, 0],
            [1, 0],
            [2, 0],
            [3, 0],
            [4, 0],
            [5, 0],
            [6, 0],
            [1, 1],
            [2, 2],
            [3, 3],
            [4, 4],
            [5, 5],
            [0, 6],
            [1, 6],
            [2, 6],
            [3, 6],
            [4, 6],
            [5, 6],
            [6, 6],
        ],
        E: [
            [0, 0],
            [1, 0],
            [2, 0],
            [3, 0],
            [4, 0],
            [5, 0],
            [6, 0],
            [0, 1],
            [0, 2],
            [0, 3],
            [0, 4],
            [3, 1],
            [3, 2],
            [3, 3],
            [3, 4],
            [6, 1],
            [6, 2],
            [6, 3],
            [6, 4],
        ],
        M: [
            [0, 0],
            [1, 0],
            [2, 0],
            [3, 0],
            [4, 0],
            [5, 0],
            [6, 0],
            [0, 6],
            [1, 6],
            [2, 6],
            [3, 6],
            [4, 6],
            [5, 6],
            [6, 6],
            [1, 1],
            [2, 2],
            [3, 3],
            [2, 4],
            [1, 5],
        ],
        I: [
            [0, 0],
            [0, 1],
            [0, 2],
            [0, 3],
            [0, 4],
            [1, 2],
            [2, 2],
            [3, 2],
            [4, 2],
            [5, 2],
            [6, 0],
            [6, 1],
            [6, 2],
            [6, 3],
            [6, 4],
        ],
        S: [
            [0, 0],
            [0, 1],
            [0, 2],
            [0, 3],
            [0, 4],
            [1, 0],
            [2, 0],
            [3, 0],
            [3, 1],
            [3, 2],
            [3, 3],
            [3, 4],
            [4, 4],
            [5, 4],
            [6, 4],
            [6, 0],
            [6, 1],
            [6, 2],
            [6, 3],
        ],
        H: [
            [0, 0],
            [1, 0],
            [2, 0],
            [3, 0],
            [4, 0],
            [5, 0],
            [6, 0],
            [3, 1],
            [3, 2],
            [3, 3],
            [0, 4],
            [1, 4],
            [2, 4],
            [3, 4],
            [4, 4],
            [5, 4],
            [6, 4],
        ],
    };

    const letterOrder = ['N', 'E', 'M', 'I', 'S', 'H'];
    const letterWidths = [6, 4, 6, 4, 4, 5];
    const totalCols =
        letterWidths.reduce((sum, w) => sum + w, 0) +
        gapCols * (letterOrder.length - 1);

    const activeDots = new Set<number>();
    let colOffset = 0;

    letterOrder.forEach((letter, idx) => {
        const positions = letterPatterns[letter];
        positions.forEach(([row, col]) => {
            const gridIdx = row * totalCols + (col + colOffset);
            activeDots.add(gridIdx);
        });
        colOffset += letterWidths[idx] + gapCols;
    });

    // Calculate active dot size relative to base dot size
    const activeDotSize = Math.max(dotSize * 0.5, 3); // Ensure minimum size

    return (
        <div
            className="fixed inset-0 z-[6] flex items-center justify-center bg-black px-4 py-8"
            ref={preloaderRef}
        >
            <div
                ref={gridRef}
                className="grid max-w-full max-h-full"
                style={{
                    gridTemplateColumns: `repeat(${totalCols}, ${dotSize}px)`,
                    gridTemplateRows: `repeat(${rows}, ${dotSize}px)`,
                    gap: `${gapSize}px`,
                }}
            >
                {Array.from({ length: rows * totalCols }).map((_, idx) => {
                    const isActive = activeDots.has(idx);
                    return (
                        <div
                            key={idx}
                            className={`dot rounded-full transition-all duration-300 ${
                                isActive
                                    ? 'bg-neutral-800 active'
                                    : 'bg-neutral-800'
                            }`}
                            style={{
                                width: `${activeDotSize}px`,
                                height: `${activeDotSize}px`,
                            }}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default Preloader;
