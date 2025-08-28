import { MY_EDUCATION } from '@/lib/data';
import AnimatedListSection from './AnimatedListSection';

const Education = () => (
    <AnimatedListSection
        id="my-education"
        title="My Education"
        items={MY_EDUCATION}
    />
);

export default Education;
