import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { Construction, Coffee, ArrowLeft } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export default function NotFoundPage() {
    const { t } = useTranslation()

    return (
        <div className="flex flex-col items-center justify-center min-h-[80vh] px-4 text-center *:text-(--white-cl)">
            <div className="bg-muted p-4 rounded-full mb-6 animate-bounce">
                <Construction className="w-12 h-12 text-yellow-500" />
            </div>

            <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-2">
                {t('notFound.title')}
            </h1>

            <p className="text-xl text-muted-foreground max-w-180 my-8 whitespace-pre-line">
                {t('notFound.description')}
                <span className="text-amber-400">{t('notFound.highlight')}</span>. <br></br>
                {t('notFound.subtext')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
                <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="group border-(--white-cl) cursor-pointer transition-all duration-300 hover:bg-(--white-cl)"
                >
                    <Link to="/" className="flex items-center gap-2">
                        <ArrowLeft className="w-4 h-4 transition-colors duration-300 group-hover:text-(--background)" />
                        <p className="transition-colors duration-300 group-hover:text-(--background)">
                            {t('notFound.backButton')}
                        </p>
                    </Link>
                </Button>

                <Button
                    variant="outline"
                    size="lg"
                    className="group border-(--white-cl) cursor-pointer transition-all duration-300 hover:bg-(--white-cl)"
                    onClick={() => window.location.reload()}
                >
                    <Coffee className="w-4 h-4 mr-2 transition-colors duration-300 group-hover:text-(--background)" />
                    <p className="transition-colors duration-300 group-hover:text-(--background)">
                        {t('notFound.retryButton')}
                    </p>
                </Button>
            </div>
        </div>
    )
}
