'use client';
import { MY_EXPERIENCE } from '@/lib/data';
import AnimatedListSection from './AnimatedListSection';

const Experiences = () => {
    return (
        <AnimatedListSection
            id="my-experience"
            title="My Experience"
            items={MY_EXPERIENCE}
        />
    );
};

export default Experiences;
