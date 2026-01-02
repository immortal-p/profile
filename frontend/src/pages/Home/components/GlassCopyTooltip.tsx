import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const GlassCopyTooltip = ({ text, children }: { text: string; children: React.ReactNode}) => {
    const [isCopied, setIsCopied] = useState(false)

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(text)
            setIsCopied(true)
            setTimeout(() => setIsCopied(false), 2000)
        }
        catch (err) {
            console.error("Failed to copy!", err)
        }
    }

    return (
        <div className="relative flex items-center group cursor-pointer" onClick={handleCopy}>
            <AnimatePresence>
                {isCopied && (
                    <motion.div
                        initial={{ opacity: 0, y: 0, scale: .5 }}
                        animate={{ opacity: 1, y: -34, scale: 1 }}
                        exit={{ opacity: 0, y: 0, scale: .5 }}
                        className="absolute full -translate-x-1/2 px-3 py-1 rounded-md
                        bg-(--background) border border-white/20
                        shadow-[0_4px_15px_rgba(0,0,0,0.3)] z-30 whitespace-nowrap left-10"
                    >
                        <span className="text-(--white-cl) text-xs font-medium tracking-wide">
                          Copied!
                        </span>

                        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 
                            bg-(--background)/10 backdrop-blur-2 border-r border-b border-white/20 
                            rotate-45" />
                    </motion.div>
                )}
            </AnimatePresence>
            {children}
        </div>
    )
}

export default GlassCopyTooltip