import { Button } from "@/components/ui/button"

export default function Hero() {
    return (
        <section className="py-20 bg-gradient-to-r from-primary to-primary-foreground">
            <div className="container mx-auto text-center">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Streamline Your Workflow</h1>
                <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
                    Boost productivity and simplify collaboration with our all-in-one project management solution.
                </p>
                <Button size="lg" variant="secondary">
                    Start Your Free Trial
                </Button>
            </div>
        </section>
    )
}

