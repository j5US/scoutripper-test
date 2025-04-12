import { motion } from 'framer-motion';

const MotionElement = ({ children, delay = 0.4, component: Component = 'h1', duration= 1, className }) => {
    const MotionComponent = motion[Component]; // Access the correct motion component dynamically
    return (
        <MotionComponent
            className={`${className}`}
            initial={{ opacity: 0, transform: 'translate3d(0, 40px, 0)', pointerEvents: 'none' }}
            animate={{ opacity: 1, transform: 'translate3d(0, 0, 0)', pointerEvents: 'auto' }}
            transition={{
                opacity: {
                    duration: duration,
                    ease: [0.215, 0.61, 0.355, 1],
                    delay: delay, // Delay passed as a prop
                },
                transform: {
                    duration: duration,
                    ease: [0.215, 0.61, 0.355, 1],
                    delay: delay, // Delay passed as a prop
                },
            }}
        >
            {children}
        </MotionComponent>
    );
};

export default MotionElement;
