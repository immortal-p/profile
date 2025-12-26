import { motion } from "framer-motion"

const linesConfig = [
    {
        id: 'left-line',
        position: 'left-[7.5%]',
        gradient: "linear-gradient(to bottom, #333 0%, #333 76%, var(--icon-cl) 79%, var(--icon-cl) 89%, #333 92%, #333 100%)",
    },
    {
        id: 'center-line',
        position: 'left-1/2',
        gradient: "linear-gradient(to bottom, #333 0%, #333 55%, var(--icon-cl) 58%, var(--icon-cl) 89%, #333 92%, #333 100%)",
    },
    {
        id: 'right-line',
        position: 'right-[14.5%]',
        gradient: "linear-gradient(to bottom, #333 0%, #333 18%, var(--icon-cl) 21%, var(--icon-cl) 47%, #333 50%, #333 100%)",
    }
]

const VericalLines = () => {
    return (linesConfig.map((line) => (
            <div
                key={line.id}
                className={`absolute top-0 w-px ${line.position} z-1`}
            >
                <motion.div
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{ duration: 2, ease: "circOut" }}
                    style={{
                        originY: 0,
                        height: "110vh",
                        width: "100%",
                        background: line.gradient,
                    }}
                >

                </motion.div>
            </div>
        ))
    )
}

export default VericalLines