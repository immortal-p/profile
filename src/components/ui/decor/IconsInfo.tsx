import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaGithub, FaTelegram } from 'react-icons/fa'
import { IoLogoFigma } from 'react-icons/io5'

const LinesContacts = () => {
    const Lines = (
        <div className="w-px block">
            <motion.div
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 2, ease: 'circOut' }}
                style={{
                    originY: 0,
                    height: '25vh',
                    width: '100%',
                    background: 'var(--text-cl)',
                }}
            ></motion.div>
        </div>
    )
    return Lines
}

const IconInfo = () => {
    return (
        <div className="absolute top-0 w-px left-[3%]">
            <LinesContacts />
            <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1.5, ease: 'circOut' }}
                viewport={{ once: true }}
                className="
                    ml-[-13.5px]
                    [&>a]:*:mt-2
                    [&>a]:*:text-(--text-cl)
                    [&>a]:*:hover:text-white
                    [&>a]:*:transition
                    [&>a]:*:duration-300
                    [&>a]:*:cursor-pointer"
            >
                <Link to={'https://github.com/immortal-p'}>
                    <FaGithub size={28} />
                </Link>
                <Link to={'https://web.telegram.org/k/#@Spru71k'}>
                    <FaTelegram size={28} />
                </Link>
                <Link to="">
                    <IoLogoFigma size={28} />
                </Link>
            </motion.div>
        </div>
    )
}

export default IconInfo
