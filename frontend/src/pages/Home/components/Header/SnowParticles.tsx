import { useEffect, useState } from 'react'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'
import type { Engine, ISourceOptions } from '@tsparticles/engine'

const SnowParticles = () => {
    const [init, setInit] = useState(false)

    useEffect(() => {
        initParticlesEngine(async (engine: Engine) => {
            await loadSlim(engine)
        }).then(() => {
            setInit(true)
        })
    }, [])

    const options: ISourceOptions = {
        fullScreen: { enable: false }, // Работаем внутри контейнера
        fpsLimit: 90,
        particles: {
            number: { value: 60, density: { enable: true } },
            color: { value: '#ffffff' },
            shape: { type: 'circle' },
            opacity: {
                value: { min: 0.1, max: 0.5 },
            },
            size: {
                value: { min: 1, max: 3 },
            },
            move: {
                enable: true,
                direction: 'bottom',
                speed: { min: 0.5, max: 1.5 },
                straight: false,
                outModes: { default: 'out' },
            },
            wobble: { enable: true, distance: 5, speed: 5 },
        },
        detectRetina: true,
    }

    if (!init) return null

    return (
        <div
            className="absolute top-0 left-0 w-full pointer-events-none"
            style={{
                height: '400px',
                WebkitMaskImage:
                    'linear-gradient(to bottom, black 0%, black 70%, transparent 100%)',
                maskImage: 'linear-gradient(to bottom, black 0%, black 70%, transparent 100%)',
            }}
        >
            <Particles id="header-snow" className="h-full w-full" options={options} />
        </div>
    )
}

export default SnowParticles
