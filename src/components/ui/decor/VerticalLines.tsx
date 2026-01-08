import { motion } from 'framer-motion'

type HideBelow = 'md' | 'lg'

interface LineConfig {
    id: string,
    position: string,
    gradient: string,
    hideBelow: HideBelow
}

const linesConfig: LineConfig[] = [
    {
        id: 'left-line',
        position: 'left-[7.5%]',
        gradient:
            'linear-gradient(to bottom, #333 0%, #333 76%, var(--icon-cl) 79%, var(--icon-cl) 89%, #333 92%, #333 100%)',
        hideBelow: 'md',
    },
    {
        id: 'center-line',
        position: 'left-1/2',
        gradient:
            'linear-gradient(to bottom, #333 0%, #333 55%, var(--icon-cl) 58%, var(--icon-cl) 89%, #333 92%, #333 100%)',
        hideBelow: 'md',
    },
    {
        id: 'right-line',
        position: 'right-[14.5%]',
        gradient:
            'linear-gradient(to bottom, #333 0%, #333 18%, var(--icon-cl) 21%, var(--icon-cl) 47%, #333 50%, #333 100%)',
        hideBelow: 'lg'
    },
]

const VericalLines = () => {
    const HIDE_BELOW_CLASS: Record<'md' | 'lg', string> = {
      md: 'max-md:hidden',
      lg: 'max-lg:hidden',
    }

    return linesConfig.map((line) => (
        <div key={line.id} className={`absolute top-0 w-px z-1 ${line.position} ${HIDE_BELOW_CLASS[line.hideBelow]}`}>
            <motion.div
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 2, ease: 'circOut' }}
                style={{
                    originY: 0,
                    height: '110vh',
                    width: '100%',
                    background: line.gradient,
                }}
            />
        </div>
    ))
}

export default VericalLines
