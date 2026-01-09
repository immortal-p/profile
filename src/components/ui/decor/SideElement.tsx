import { motion, useReducedMotion } from 'framer-motion'
import { useResponsiveVisibility } from '@/shared/hooks/useResponsiveVisibility'
import type { BreakpointKey } from '@/shared/config/breakpoints'

interface SideElementProps {
    children: React.ReactNode
    side?: 'left' | 'right'
    top?: string | number
    left?: string
    right?: string
    hideBelow?: BreakpointKey
}

const SideElement = ({
    children,
    side = 'right',
    top = 0,
    left,
    right,
    hideBelow,
}: SideElementProps) => {
    const isHidden = useResponsiveVisibility(hideBelow)
    const prefersReducedMotion = useReducedMotion()

    if (isHidden) return null

    return (
        <motion.div
            initial={
                prefersReducedMotion ? false : { opacity: 0, x: side === 'right' ? 100 : -100 }
            }
            whileInView={
                prefersReducedMotion ? undefined : { opacity: 1, x: side === 'right' ? 55 : -55 }
            }
            transition={{
                duration: prefersReducedMotion ? 0 : 1.5,
                ease: 'easeOut',
                delay: prefersReducedMotion ? 0 : 0.5,
            }}
            viewport={{ once: true, amount: 0.01 }}
            className={`absolute z-10 ${side}-0 bottom-30`}
            style={{
                height: '100px',
                top: top,
                left: left,
                right: right,
            }}
        >
            {children}
        </motion.div>
    )
}

export default SideElement
