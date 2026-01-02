import { motion } from "framer-motion"

interface GlowSetting {
    top?: string;
    left?: string;
    right?: string;
    bottom?: string;
    size?: string;
}

const Glow = ({ top, left, right, bottom, size = "400px" }: GlowSetting ) => (
        <motion.div
            initial={{ opacity:0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
            viewport={{ once: true, amount: 0.5 }}
            className="absolute z-10 pointer-events-none"
            style={{ top, left, right, bottom }}
        >
            <div
                style={{ width: size, height: size }}
                className="rounded-full bg-(--icon-cl) opacity-15 blur-[120px]" />
        </motion.div>
)

export default Glow