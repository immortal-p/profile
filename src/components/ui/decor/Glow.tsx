import { motion, useReducedMotion } from 'framer-motion'
import { useResponsiveVisibility } from '@/shared/hooks/useResponsiveVisibility'
import type { BreakpointKey } from '@/shared/config/breakpoints'

interface GlowSetting {
    top?: string
    left?: string
    right?: string
    bottom?: string
    size?: string
    hideBelow?: BreakpointKey
}

const Glow = ({ top, left, right, bottom, size = '400px', hideBelow }: GlowSetting) => {
    const isHidden = useResponsiveVisibility(hideBelow)
    const prefersReducedMotion = useReducedMotion()

    if (isHidden) return null

    return (
        <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0 }}
            whileInView={prefersReducedMotion ? undefined : { opacity: 1 }}
            transition={{
                duration: prefersReducedMotion ? 0 : 1.5,
                ease: 'easeOut',
                delay: prefersReducedMotion ? 0 : 0.5,
            }}
            viewport={{ once: true, amount: 0.5 }}
            className="absolute z-10 pointer-events-none"
            style={{ top, left, right, bottom }}
        >
            <div
                style={{ width: size, height: size }}
                className="rounded-full bg-(--icon-cl) opacity-15 blur-[120px]"
            />
        </motion.div>
    )
}

export default Glow
