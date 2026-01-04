import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../assets/styles/global.css'
import App from './App'
import { Providers } from './providers/theme-provider'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Providers>
            <App />
        </Providers>
    </StrictMode>,
)
