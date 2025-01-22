import { Button } from "@/components/ui/button"

export default function CTA() {
    return (
        <section className="py-20 bg-primary">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold text-white mb-4">Ready to Streamline Your Workflow?</h2>
                <p className="text-xl text-white mb-8">
                    Join thousands of satisfied customers and take your productivity to the next level.
                </p>
                <Button size="lg" variant="secondary">
                    Start Your Free Trial
                </Button>
            </div>
        </section>
    )
}