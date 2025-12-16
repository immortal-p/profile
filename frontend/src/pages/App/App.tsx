import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardFooter,
    CardTitle,
} from "@/components/ui/card"

const App = () => {
    return (
        <div className="h-screen flex items-center justify-center">
            <Card className="min-w-sm bg-zinc-700 *:text-blue-200">
                <CardHeader>
                    <CardTitle>Card title</CardTitle>
                    <CardDescription>description</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>Content</p>
                </CardContent>
                <CardFooter>
                    <p>Foother Content</p>
                </CardFooter>
            </Card>
        </div>
    )
}

export default App