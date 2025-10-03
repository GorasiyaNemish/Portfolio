'use client';
// import Button from '@/components/Button';
import HeroModel from '@/components/HeroModel';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React from 'react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Banner = () => {
    const containerRef = React.useRef<HTMLDivElement>(null);

    // move the content a little up on scroll
    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'bottom 70%',
                    end: 'bottom 10%',
                    scrub: 1,
                },
            });

            tl.fromTo(
                '.slide-up-and-fade',
                { y: 0 },
                { y: -150, opacity: 0, stagger: 0.02 },
            );
        },
        { scope: containerRef },
    );

    const joiningDate = new Date('2024-01-01');
    const today = new Date();

    const diffInMonths =
        (today.getFullYear() - joiningDate.getFullYear()) * 12 +
        (today.getMonth() - joiningDate.getMonth());

    const years = Math.floor(diffInMonths / 12);
    const months = diffInMonths % 12;

    return (
        <section
            ref={containerRef}
            className="relative overflow-hidden"
            id="banner"
        >
            <div className="container h-[100svh] min-h-[530px] flex justify-between items-center max-md:flex-col max-md:pt-10 max-md:pb-10">
                <div className="w-1/2 max-md:w-full max-md:mb-10 flex flex-col justify-center items-start max-w-[544px]">
                    <h1 className="banner-title slide-up-and-fade leading-[.95] text-6xl sm:text-[80px] font-anton">
                        <span className="text-primary">FULL STACK</span>
                        <br /> <span className="ml-4">DEVELOPER</span>
                    </h1>
                    <p className="banner-description slide-up-and-fade mt-6 text-lg text-muted-foreground">
                        <span className="font-caveat-brush">
                            Hi! I&apos;m{' '}
                            <span className="font-medium text-foreground">
                                Nemish
                            </span>
                        </span>
                        . A creative Fullstack Developer specialized in frontend
                        with{' '}
                        {`${years} year${years > 1 ? 's' : ''} ${months} month${
                            months > 1 ? 's' : ''
                        }`}{' '}
                        of experience in building high-performance, scalable,
                        and responsive web solutions.
                    </p>
                    {/* <a
                        href="/pdf/Nemish Gorasiya Resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-9 banner-button slide-up-and-fade"
                        style={{ display: 'inline-block' }}
                    >
                        <Button as="button" variant="primary">
                            Resume
                        </Button>
                    </a> */}
                </div>

                <div className="w-1/2 max-md:w-full h-full flex items-center justify-center">
                    <HeroModel ref={containerRef} />
                </div>
            </div>
        </section>
    );
};

export default Banner;
