import { motion } from "framer-motion"

interface SideElementProps {
    children: any;
    side?: "left" | "right";
    top?: string | number;
    left?: string;
    right?: string
}

const SideElement = ({
    children,
    side = "right",
    top = 0,
    left,
    right,
}: SideElementProps ) => {
    return (
        <motion.div
                initial={{ opacity:0, x: side === 'right' ? 100 : -100 }}
                whileInView={{ opacity: 1, x: side === 'right' ? 55 : -55 }}
                transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
                viewport={{ once: true, amount: .01 }}
                className={`absolute z-10 ${side}-0 bottom-30`}
                style={{
                    height: "100px",
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