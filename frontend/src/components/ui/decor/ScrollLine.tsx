import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";

const ScrollLine = () => {
    // 1. Создаем ссылку на контейнер (чтобы линия знала, относительно чего считаем скролл)
    // Если нужно, чтобы заполнялось по всей странице, ref можно не использовать
    const containerRef = useRef(null);

    // 2. Получаем значение прокрутки (от 0 до 1)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"] // Начать когда низ экрана коснется верха блока, закончить когда верх блока уйдет
    });

    // 3. Делаем движение плавным (spring)
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <div ref={containerRef} className="w-full">
            <motion.div
                style={{
                    scaleX: scaleX,
                    originX: 0,
                    height: "1px",
                    width: "90%",
                    background: "var(--icon-cl)",
                    position: "relative"
                }}
            />
        </div>
    );
};

export default ScrollLine