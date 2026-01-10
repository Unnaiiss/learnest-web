import { Variants } from "framer-motion";

export const fadeIn: Variants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
    exit: { opacity: 0, transition: { duration: 0.5, ease: "easeIn" } },
};

export const slideUp: Variants = {
    initial: { y: 40, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
};

export const staggerContainer: Variants = {
    animate: {
        transition: {
            staggerChildren: 0.15,
        },
    },
};

export const scaleOnHover: Variants = {
    initial: { scale: 1 },
    hover: { scale: 1.05, transition: { duration: 0.4, ease: "easeOut" } },
};

export const glowOnHover: Variants = {
    initial: { textShadow: "0px 0px 0px rgba(212,175,55,0)" },
    hover: { textShadow: "0px 0px 12px rgba(212,175,55,0.6)", transition: { duration: 0.4 } },
};

export const logoVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 1, ease: "easeInOut" }
    },
};

export const pageTransition: Variants = {
    initial: { opacity: 0, filter: "blur(10px)", y: 20 },
    animate: { opacity: 1, filter: "blur(0px)", y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    exit: { opacity: 0, filter: "blur(10px)", y: -20, transition: { duration: 0.4, ease: "easeIn" } },
};

export const shimmer: Variants = {
    initial: { backgroundPosition: "-200%" },
    animate: {
        backgroundPosition: "200%",
        transition: { repeat: Infinity, duration: 3, ease: "linear" }
    },
};

export const scrollReveal: Variants = {
    hidden: { opacity: 0, y: 50, filter: "blur(5px)" },
    visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: { duration: 0.9, ease: "easeOut" }
    },
};
