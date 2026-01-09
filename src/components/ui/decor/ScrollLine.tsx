import { motion, useScroll, useSpring } from 'framer-motion'
import { useRef } from 'react'

const ScrollLine = ({ width }: any) => {
    const containerRef = useRef(null)

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end start'],
    })

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    })

    return (
        <div ref={containerRef} className="w-full max-sm:hidden">
            <motion.div
                style={{
                    scaleX: scaleX,
                    originX: 0,
                    height: '1px',
                    width: width,
                    background: 'var(--icon-cl)',
                    position: 'relative',
                }}
            />
        </div>
    )
}

export default ScrollLine
