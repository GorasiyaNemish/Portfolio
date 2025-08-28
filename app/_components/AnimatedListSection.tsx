'use client';
import SectionTitle from '@/components/SectionTitle';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useRef } from 'react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

type InfoItem = {
    title: string;
    subtitle: string;
    duration: string;
    location?: string;
    description?: string[];
};

type Props = {
    id: string;
    title: string;
    items: InfoItem[];
};

const AnimatedListSection = ({ id, title, items }: Props) => {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 60%',
                    end: 'bottom 50%',
                    toggleActions: 'restart none none reverse',
                    scrub: 1,
                },
            }).from('.animated-item', {
                y: 50,
                opacity: 0,
                stagger: 0.3,
            });
        },
        { scope: containerRef },
    );

    useGSAP(
        () => {
            gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'bottom 50%',
                    end: 'bottom 20%',
                    scrub: 1,
                },
            }).to(containerRef.current, {
                y: -150,
                opacity: 0,
            });
        },
        { scope: containerRef },
    );

    return (
        <section className="py-section" id={id}>
            <div className="container" ref={containerRef}>
                <SectionTitle title={title} />
                <div className="grid gap-14">
                    {items.map((item, index) => (
                        <div
                            key={`${item.title}-${index}`}
                            className="animated-item"
                        >
                            <p className="text-xl text-muted-foreground">
                                {item.subtitle}
                            </p>
                            <p className="text-5xl font-anton leading-none mt-3.5 mb-2.5">
                                {item.title}
                            </p>
                            <p className="text-lg text-muted-foreground">
                                {item.duration}
                            </p>
                            {item.location && (
                                <p className="text-md text-muted-foreground">
                                    {item.location}
                                </p>
                            )}
                            {item.description &&
                                item.description?.length > 0 && (
                                    <ul className="mt-2 list-disc list-inside text-muted-foreground text-sm">
                                        {item.description.map((desc, i) => (
                                            <li key={i}>{desc}</li>
                                        ))}
                                    </ul>
                                )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AnimatedListSection;
