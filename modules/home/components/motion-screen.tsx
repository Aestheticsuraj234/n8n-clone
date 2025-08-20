"use client"
import { motion, useScroll, useTransform } from "motion/react"
import { useRef } from "react"
import Image from "next/image"

// High-quality image component
const HighQualityImage = ({ src, alt }: { src: string; alt: string }) => {
  return (
    <div className="relative w-full h-full">
      <Image
        src={src || "/placeholder.svg"}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1400px"
        className="object-cover object-left-top rounded-[25px]"
        quality={100}
        priority
        draggable={false}
        loading="eager"
      />
    </div>
  )
}

const MotionScreenSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center start"],
  });

  // Subtle 3D transforms (less dramatic at the top)
  const rotateX = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [-15, -8, 3, 0]);
  const rotateY = useTransform(scrollYProgress, [0, 0.4, 0.8, 1], [10, 5, -2, 0]);
  const translateZ = useTransform(scrollYProgress, [0, 0.5, 1], [-120, -40, 0]);
  const translateY = useTransform(scrollYProgress, [0, 0.4, 0.8, 1], [40, -10, -5, 0]); // was 100px
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 0.9, 0.97, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.6, 1], [0.4, 0.7, 0.95, 1]);
  const brightness = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 0.95, 1]);

  return (
    <div
      ref={containerRef}
      className="w-full flex justify-center items-center perspective-[2000px] overflow-hidden"
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          translateZ,
          translateY,
          scale,
          opacity,
          transformStyle: "preserve-3d",
          filter: `brightness(${brightness})`,
        }}
        className="max-w-6xl mx-auto h-[35rem] md:h-[45rem] w-full border-4 border-white/10 dark:border-white/10 p-3 md:p-4 bg-white/5 dark:bg-black/20 rounded-[35px] shadow-2xl relative"
        initial={{
          rotateX: -15,
          rotateY: 10,
          translateZ: -120,
          translateY: 40, // was 100, reduced to keep closer
          scale: 0.8,
          opacity: 0.4,
        }}
      >
        {/* Your existing inner content remains unchanged */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 dark:from-white/3 to-transparent rounded-[35px] pointer-events-none" />
        <div className="absolute -inset-4 bg-gradient-to-br from-black/5 via-transparent to-black/10 dark:from-white/3 dark:via-transparent dark:to-black/20 rounded-[40px] blur-xl pointer-events-none" />
        <div className="h-full w-full overflow-hidden rounded-[25px] bg-transparent relative">
          <HighQualityImage src="/Hero2.svg" alt="Dashboard interface showing coding problem" />
        </div>
      </motion.div>
    </div>
  );
};


export default MotionScreenSection