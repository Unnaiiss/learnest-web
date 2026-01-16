"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { frames } from "./frames";

export const HeroCanvas = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [loadProgress, setLoadProgress] = useState(0);

    // Scroll progress from 0 to 1
    // We bind it to the parent container which we expect to be long (e.g., 500vh)
    const { scrollYProgress } = useScroll();

    // Preload Images
    useEffect(() => {
        let loadedCount = 0;
        const totalFrames = frames.length;
        const loadedImages: HTMLImageElement[] = [];

        // Ensure we preserve order - pre-allocate array
        loadedImages.length = totalFrames;

        frames.forEach((src, index) => {
            const img = new Image();
            img.src = `/sequences/${src}`;
            img.onload = () => {
                loadedImages[index] = img;
                loadedCount++;
                setLoadProgress(Math.round((loadedCount / totalFrames) * 100));

                if (loadedCount === totalFrames) {
                    setImages(loadedImages);
                    setIsLoaded(true);
                }
            };
            // Handle error minimally just to not break loop
            img.onerror = () => {
                console.error(`Failed to load frame: ${src}`);
                loadedCount++; // Increment anyway to allow completion
                if (loadedCount === totalFrames) {
                    setImages(loadedImages);
                    setIsLoaded(true);
                }
            }
        });
    }, []);

    // Render Logic
    const renderFrame = (index: number) => {
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext("2d");
        const img = images[index];

        if (!canvas || !ctx || !img) return;

        // Reset canvas to screen matching dimensions
        // Note: For performance, usually we set canvas width/height once or on resize, 
        // but here we ensure it matches the container rect.
        // We'll trust the resize observer below for width/height updates.

        const canvasWidth = canvas.width;
        const canvasHeight = canvas.height;

        // Object Fit: Cover Logic
        // We want the image to cover the canvas while maintaining aspect ratio
        const imgRatio = img.width / img.height;
        const canvasRatio = canvasWidth / canvasHeight;

        let drawWidth, drawHeight, offsetX, offsetY;

        if (canvasRatio > imgRatio) {
            // Canvas is wider than image -> fit to width
            drawWidth = canvasWidth;
            drawHeight = canvasWidth / imgRatio;
            offsetX = 0;
            offsetY = (canvasHeight - drawHeight) / 2;
        } else {
            // Canvas is taller than image -> fit to height
            drawHeight = canvasHeight;
            drawWidth = canvasHeight * imgRatio;
            offsetX = (canvasWidth - drawWidth) / 2;
            offsetY = 0;
        }

        ctx.clearRect(0, 0, canvasWidth, canvasHeight);
        ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    };

    // React to Scroll
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        if (!isLoaded || images.length === 0) return;

        // Map 0-1 to frame index.
        // We might want to clamp strictly.
        let frameIndex = Math.floor(latest * (images.length - 1));
        if (frameIndex < 0) frameIndex = 0;
        if (frameIndex >= images.length) frameIndex = images.length - 1;

        requestAnimationFrame(() => renderFrame(frameIndex));
    });

    // Initial Paint & Resize handling
    useEffect(() => {
        const handleResize = () => {
            if (canvasRef.current) {
                // Set actual canvas logical resolution to match display size (device pixel ratio support could be added here for retina)
                canvasRef.current.width = window.innerWidth;
                canvasRef.current.height = window.innerHeight;

                // Re-render current frame if loaded
                if (isLoaded) {
                    const currentScroll = scrollYProgress.get();
                    let frameIndex = Math.floor(currentScroll * (images.length - 1));
                    renderFrame(frameIndex);
                }
            }
        };

        window.addEventListener("resize", handleResize);
        handleResize(); // Initial sizing

        return () => window.removeEventListener("resize", handleResize);
    }, [isLoaded, scrollYProgress, images]); // Re-bind if loaded state changes to ensure initial paint

    // Trigger initial render once loaded
    useEffect(() => {
        if (isLoaded) {
            // Force a render of frame 0
            renderFrame(0);
        }
    }, [isLoaded]);

    return (
        <div className="absolute inset-0 w-full h-full bg-brand-black">
            {/* Loading State */}
            {!isLoaded && (
                <div className="absolute inset-0 flex items-center justify-center z-50 bg-brand-black text-brand-gold">
                    <div className="w-64 h-1 bg-white/10 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-brand-gold transition-all duration-200 ease-out"
                            style={{ width: `${loadProgress}%` }}
                        />
                    </div>
                    <span className="ml-4 text-xs font-mono">{loadProgress}%</span>
                </div>
            )}

            <canvas
                ref={canvasRef}
                className="block w-full h-full object-cover"
            />
        </div>
    );
};
