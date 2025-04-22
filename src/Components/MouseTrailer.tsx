import { useEffect, useRef, useState, useCallback } from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

const MouseTrailer = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [isOverCard, setIsOverCard] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const trailRef = useRef<HTMLDivElement>(null);
    const rafRef = useRef<number | null>(null);

    // Check if device is mobile or tablet
    useEffect(() => {
        const checkDevice = () => {
            setIsMobile(window.innerWidth <= 1024);
        };

        checkDevice();
        window.addEventListener('resize', checkDevice);

        return () => {
            window.removeEventListener('resize', checkDevice);
        };
    }, []);

    // Optimized spring config for better performance
    const springConfig = {
        stiffness: 150,  // Reduced for better performance
        damping: 7,     // Adjusted for smoother movement
        mass: 0.2        // Reduced for lighter feel
    };
    const x = useSpring(0, springConfig);
    const y = useSpring(0, springConfig);

    // Memoized transform to prevent unnecessary recalculations
    const trailX = useTransform(x, (latest) => `${latest - 8}px`);
    const trailY = useTransform(y, (latest) => `${latest - 8}px`);

    // Optimized mouse move handler with RAF
    const handleMouseMove = useCallback((e: MouseEvent) => {
        if (rafRef.current) {
            cancelAnimationFrame(rafRef.current);
        }

        rafRef.current = requestAnimationFrame(() => {
            const { clientX, clientY } = e;
            setMousePosition({ x: clientX, y: clientY });

            // Check if mouse is over a card
            const target = e.target as HTMLElement;
            const isCard = target.closest('.card-component') !== null;
            setIsOverCard(isCard);
        });
    }, []);

    useEffect(() => {
        const handleMouseEnter = () => setIsHovering(true);
        const handleMouseLeave = () => setIsHovering(false);

        window.addEventListener('mousemove', handleMouseMove, { passive: true });
        document.addEventListener('mouseenter', handleMouseEnter);
        document.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseenter', handleMouseEnter);
            document.removeEventListener('mouseleave', handleMouseLeave);
            if (rafRef.current) {
                cancelAnimationFrame(rafRef.current);
            }
        };
    }, [handleMouseMove]);

    useEffect(() => {
        x.set(mousePosition.x);
        y.set(mousePosition.y);
    }, [mousePosition, x, y]);

    // Don't render on mobile or tablet
    if (isMobile) {
        return null;
    }

    return (
        <>
            {/* Main cursor - Simplified animations */}
            <motion.div
                ref={trailRef}
                className="fixed top-0 left-0 w-4 h-4 pointer-events-none z-99 mix-blend-difference"
                style={{
                    x: trailX,
                    y: trailY,
                }}
            >
                <motion.div
                    className="w-full h-full bg-white rounded-full flex items-center justify-center"
                    animate={{
                        scale: isOverCard ? 3 : (isHovering ? 1.5 : 1),
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 20,
                    }}
                >
                    {isOverCard && (
                        <motion.div
                            initial={{ opacity: 0, rotate: 180 }}
                            animate={{ opacity: 1, rotate: -45 }}
                            transition={{
                                duration: 0.2,
                                ease: "easeOut"
                            }}
                        >
                            <FaArrowRight size={12} className='text-black' />
                        </motion.div>
                    )}
                </motion.div>
            </motion.div>

            {/* Simplified trailing effect */}
            {/* <motion.div
                className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-40"
                style={{
                    x: trailX,
                    y: trailY,
                }}
            >
            </motion.div> */}
        </>
    );
};

export default MouseTrailer; 